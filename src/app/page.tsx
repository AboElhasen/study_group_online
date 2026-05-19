'use client'
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  return (
    <div className="home-container">
      <header className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Study Online</h1>
          <p className="hero-description">
           Online study web application for student groups.

Develop your academic skills by collaborating with other students,

share resources, and organize real-time review sessions.
          </p>
          <div className="hero-buttons">
            <a href="/register" className="btn-primary">S'inscrire</a>
          </div>
        </div>
        <div className="hero-image">
          <img src="/imageSystem/features1.jpg" alt="Étudiants collaborant en ligne" width={500} height={400} />
        </div>
      </header>

      <section className="about-section">
        <h2 className="section-title">À Propos</h2>
        <p>
          Study Online est une plateforme dédiée aux étudiants pour faciliter l'apprentissage collaboratif.
          Notre application vous offre les outils nécessaires pour une expérience d'étude enrichissante.
        </p>
      </section>
    </div>
  );
}
