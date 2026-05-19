import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import prisma from '../../../../../../prisma/client';


export async function POST(req: Request) {
  const session = await getServerSession();
  /*if (!session) {
    return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });
  }*/
  const { value,groupId,permission } = await req.json();
  if (!groupId) {
    return NextResponse.json({ error: 'id requis' }, { status: 400 });
  }
  const res=await prisma.system_group_permission.findUnique({
      where: { groupId: parseInt(groupId) },
    });
    if(!res)return NextResponse.json({error:'group not found'},{status:404});
  try {
switch (permission) {
  case 'maxMember':
   
       await prisma.system_group_permission.update({
      where: { groupId: parseInt(groupId) },
     data:{maxMember: parseInt(value),
     }

    })
    break;
case 'allowFileSharing':
 
   const responseTest= await prisma.system_group_permission.update({
      where: { groupId: parseInt(groupId) },
      data: {
        allowFileSharing:!res.allowFileSharing,
      },
    });

break;
case 'allowPublicVisibility':
      await prisma.system_group_permission.update({
      where: { groupId: parseInt(groupId) },
      data: {
        allowPublicVisibility:!res.allowPublicVisibility,
      },
    });
break;
case 'maxFileSizeMB':
   await prisma.system_group_permission.update({
      where: { groupId: parseInt(groupId) },
     data:{maxFileSizeMB: parseInt(value),
     }
    });
  break;
case 'allowMessages':
 await prisma.system_group_permission.update({
      where: { groupId: parseInt(groupId) },
      data: {
        allowMessages:res.allowMessages?true:false,
      },
    });
  break;
  default:
    break;
}
    

    return NextResponse.json({ message: `permission ${permission} updated successfully` });

  } catch (error) {
    console.error('Erreur mise à jour permission', error);
    return NextResponse.json({ error: 'Impossible de mettre à jour la permission' }, { status: 500 });
  }
}