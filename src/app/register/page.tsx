'use client';
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import '../pages.css';
import { sendEmail } from "../actions/email";

export default function Register() {
  const [formData, setFormData] = useState({ Mat: "", fullname: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
       await sendEmail(
          formData.email,
          'Fahimni',
          '<p>Bienvenue sur <b>Fahimni</b> a study groupe online platform</p>'
        );
        router.push("/login");
      } else {
        const data = await res.json();
        setError(data?.error || "An error occurred during registration.");
      }
    } catch (err) {
      setError("Server connection error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h1>Registration</h1>
          <p>Create your account to join online study groups.</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="mat">Matricule</label>
            <input
              id="mat"
              type="text"
              value={formData.Mat}
              onChange={(e) => setFormData({ ...formData, Mat: e.target.value })}
              placeholder="Enter your registration number"
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="prenom">Full Name</label>
            <input
              id="prenom"
              type="text"
              value={formData.fullname}
              onChange={(e) => setFormData({ ...formData, fullname: e.target.value })}
              placeholder="Enter your full name"
              required
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              placeholder="••••••••"
              required
              className="form-input"
            />
          </div>

          {error && <div className="error-message">{error}</div>}

          <button type="submit" className="login-button" disabled={loading}>
            {loading ? "Registering..." : "Register"}
          </button>

          <div className="register-link">
            <Link href="/login">Already have an account? Sign in</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
