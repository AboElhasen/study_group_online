'use client';
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import '../pages.css';

interface Profile {
  id: number;
  studentId: number;
  bio: string;
  image: string;
  student: {
    Mat: number;
    name: string;
    group: number;
  };
}

export default function ProfilePage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
      return;
    }

    if (status === "authenticated") {
      fetchProfile();
    }
  }, [status, router]);

  const fetchProfile = async () => {
    try {
      const response = await fetch(`/api/profile?Mat=${session?.user?.id}`);
      if (response.ok) {
        const data = await response.json();
        setProfile(data);
      } else if (response.status === 404) {
        router.push("/makeProfile");
      } else {
        setError("Failed to load profile");
      }
    } catch (err) {
      setError("Server error");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="login-container">
        <div className="login-card">
          <div className="text-center">Loading...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="login-container">
        <div className="login-card">
          <div className="error-message">{error}</div>
        </div>
      </div>
    );
  }

  if (!profile) {
    return null;
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h1> Profile</h1>
          <p>Your personal information</p>
        </div>

        <div className="profile-content" style={{ textAlign: 'center' }}>
          <div className="profile-image" style={{ marginBottom: '20px' }}>
            <img
              src={profile.image || "/imageSystem/noPhoto.jfif"}
              alt="Profile"
              style={{
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '4px solid var(--primary)',
                margin: '0 auto',
                display: 'block'
              }}
            />
          </div>

          <div className="profile-info" style={{ marginBottom: '20px' }}>
            <h2 style={{ color: 'var(--text-primary)', marginBottom: '10px' }}>
              {profile.student.name}
            </h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '5px' }}>
             {profile.student.Mat}<br/>
             <b> Matricule</b>
            </p>
          </div>

          <div className="profile-bio" style={{ marginBottom: '30px' }}>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '5px'}}>
              {profile.bio || "No bio available"}<br/>
             <b> Bio</b>
            </p>
          </div>

          <button
            onClick={() => router.push("/makeProfile")}
            className="login-button"
            style={{ width: '100%' }}
          >
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
}
