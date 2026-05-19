'use client';
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import '../pages.css';
import Link from "next/link";
import { useApp } from "../components/providers";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isMobile } = useApp();
  const [error, setError] = useState("");
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [resetMessage, setResetMessage] = useState("");
  const [resetError, setResetError] = useState("");
  const [loading, setLoading] = useState(false);
  
  const router = useRouter();

  // Connexion
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    
    if (result?.error) {
      setError("Incorrect email or password");
      setLoading(false);
    } else {
      try {
        const session = await fetch("/api/auth/session").then(res => res.json());
        if (!session.user.image) {
          router.push('/makeProfile');
        } else {
        
            router.push('/dashboard');
          }
        
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    }
  };

  // Envoi du lien de réinitialisation
  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResetMessage("");
    setResetError("");
    
    try {
      const res = await fetch("/api/reset-password/request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: resetEmail }),
      });
      
      const data = await res.json();
      
      if (res.ok) {
        setResetMessage("A reset link has been sent to your email address");
        setResetEmail("");
        setTimeout(() => {
          setShowForgotPassword(false);
          setResetMessage("");
        }, 5000);
      } else {
        setResetError(data.error || "An error occurred");
      }
    } catch (error) {
      setResetError("Server connection error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        
        {/* Logo / Titre */}
        <div className="login-header">
          <h1>📚 Study Online</h1>
          <p>Online Study Platform</p>
        </div>

        {/* Formulaire de connexion */}
        {!showForgotPassword ? (
          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@university.edu"
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
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

            <div className="form-options">
              <button
                type="button"
                onClick={() => setShowForgotPassword(true)}
                className="forgot-password-link"
              >
                Forgot password?
              </button>
            </div>

            {error && <div className="error-message">{error}</div>}
<button type="submit" className="login-button" disabled={loading}>
              {loading ? "Signing in..." : "Sign in"}
            </button>

            <div className="register-link">
              <Link href="/register">Don't have an account? Sign up</Link>
            </div>
          </form>
        ) : (
          // Formulaire de réinitialisation
          <form onSubmit={handleForgotPassword} className="login-form">
            <div className="form-group">
              <label htmlFor="resetEmail">Email</label>
              <input
                id="resetEmail"
                type="email"
                value={resetEmail}
                onChange={(e) => setResetEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="form-input"
              />
            </div>

            {resetMessage && <div className="success-message">{resetMessage}</div>}
            {resetError && <div className="error-message">{resetError}</div>}

            <button type="submit" className="login-button" disabled={loading}>
              {loading ? "Sending..." : "Send reset link"}
            </button>

            <button
              type="button"
              onClick={() => {
                setShowForgotPassword(false);
                setResetMessage("");
                setResetError("");
              }}
              className="back-to-login">
              ← Back to login
            </button>
          </form>
        )}
      </div>
    </div>
  );
}