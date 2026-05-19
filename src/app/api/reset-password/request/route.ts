// app/api/reset-password/request/route.ts
import { NextResponse } from 'next/server';
import  prisma  from '../../../../../prisma/client';
import crypto from 'crypto';
import { sendEmail } from '../../../actions/email';


export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "L'email est requis" }, { status: 400 });
    }

    // Vérifier si l'utilisateur existe
    const user = await prisma.student.findUnique({
      where: { email: email },
    });

    if (!user) {
      // Pour des raisons de sécurité, on renvoie un message générique
      return NextResponse.json({ message: "Si cet email existe, un lien a été envoyé" });
    }
   
    // Générer un token unique
    const resetToken = crypto.randomBytes(32).toString('hex');
    const resetTokenExpiry = new Date(Date.now() + 3600000); // 1 heure

    // Sauvegarder le token en base
    await prisma.student.update({
      where: { email: email },
      data: {
        resetToken: resetToken,
        resetTokenExpiry: resetTokenExpiry,
      },
    });
     const resetUrl = `${process.env.NEXTAUTH_URL}/reset-password?token=${resetToken}`;
     const emailTo:string=email;
     //  SMTP_FROM_NAME
 await sendEmail(
    'inventorinof@gmail.com',
       "Réinitialisation de votre mot de passe - Study",
        ` <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">Réinitialisation du mot de passe</h2>
          <p>Bonjour ${user.name},</p>
          <p>Vous avez demandé la réinitialisation de votre mot de passe. Cliquez sur le lien ci-dessous :</p>
          <a href="${resetUrl}" style="display: inline-block; padding: 12px 24px; background-color: #2563eb; color: white; text-decoration: none; border-radius: 8px; margin: 20px 0;">
            Réinitialiser mon mot de passe
          </a>
          <p>Ce lien expirera dans 1 heure.</p>
          <p>Si vous n'êtes pas à l'origine de cette demande, ignorez cet email.</p>
          <hr style="margin: 20px 0;" />
          <p style="color: #666; font-size: 12px;">© 2026 Study - Plateforme d'étude en ligne</p>
        </div>
     ` ,);

    return NextResponse.json({ message: "Email envoyé avec succès" });
  } catch (error) {
    console.error("Erreur:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}