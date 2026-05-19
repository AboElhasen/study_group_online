// app/reset-password/page.tsx
'use client';
import { useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import '../pages.css';

function ResetPasswordContent() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const searchParams = useSearchParams();
  const router = useRouter();
  const token = searchParams.get('token');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      setError("Les mots de passe ne correspondent pas");
      return;
    }
    
    if (password.length < 6) {
      setError("Le mot de passe doit contenir au moins 6 caractères");
      return;
    }
    
    setLoading(true);
    setError('');
    setMessage('');
    
    try {
      const res = await fetch("/api/reset-password/confirm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, newPassword: password }),
      });
      
      const data = await res.json();
      
      if (res.ok) {
        setMessage("Mot de passe réinitialisé avec succès !");
        setTimeout(() => {
          router.push("/login");
        }, 3000);
      } else {
        setError(data.error || "Une erreur est survenue");
      }
    } catch (error) {
      setError("Erreur de connexion au serveur");
    } finally {
      setLoading(false);
    }
  };

  if (!token) {
    return (
      <div className="reset-container">
        <div className="reset-card">
          <div className="error-message">Token invalide ou manquant</div>
          <a href="/login" className="back-link">Retour à la connexion</a>
        </div>
      </div>
    );
  }

  return (
    <div className="reset-container">
      <div className="reset-card">
        <div className="reset-header">
          <h1>🔐 Nouveau mot de passe</h1>
          <p>Entrez votre nouveau mot de passe</p>
        </div>

        <form onSubmit={handleSubmit} className="reset-form">
          <div className="form-group">
            <label htmlFor="password">Nouveau mot de passe</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirmer le mot de passe</label>
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="form-input"
            />
          </div>

          {error && <div className="error-message">{error}</div>}
          {message && <div className="success-message">{message}</div>}

          <button type="submit" className="reset-button" disabled={loading}>
            {loading ? "Réinitialisation..." : "Réinitialiser le mot de passe"}
          </button>

          <a href="/login" className="back-link">← Retour à la connexion</a>
        </form>
      </div>
    </div>
  );
}

export default function ResetPassword() {
  return (
    <Suspense fallback={<div className="p-4 text-center">Chargement...</div>}>
      <ResetPasswordContent />
    </Suspense>
  );
}