'use client';
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useApp } from "../components/providers";
import '../pages.css';

export const  MakeProfile=()=>{
const {data:session,status,update}=useSession();
     const [loading, setLoading] = useState(false);
    const [studentId, setStudentId] = useState("");
  const [bio, setBio] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);
const [message, setMessage] = useState("");
 const {isMobile, setIsMobile} = useApp();

const router=useRouter();
//---------Image handling
  const processFile = (file: File) => {
    if (file && file.type.startsWith('image/')) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const handleClick = () => {
    const input = document.getElementById('image-input') as HTMLInputElement;
    input?.click();
  };

    const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);

  const formData = new FormData();
  const studentId=session?.user.id.toString();
  formData.append("studentId", studentId!);
  formData.append("bio", bio);
  
  if (imageFile) {
    formData.append("image", imageFile);
  }

  try {
    const response = await fetch("/api/makeProfile", {
      method: "POST",
      body: formData, // نرسل الـ formData مباشرة (لا نحتاج لـ Headers)
    });

    if (response.ok) {
      const data=await response.json(); 
      await update({
        ...session,
        user:{
          ...session?.user,
          image:data.image,
        }
      });
      setMessage("تم الرفع والحفظ بنجاح!");
      if(isMobile)router.push(`/dashboard`);
        router.push(`/dashboard`)
    }

  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};
    return(
    
    <div className="login-container">
      <div className="login-card">
        
        {/* Logo / Titre */}
        <div className="login-header">
          <h1>👤 Create Profile</h1>
          <p>Set up your personal profile</p>
        </div>

        {/* Formulaire */}
        <form onSubmit={handleSubmit} className="login-form">

          <div className="form-group">
            <label>Profile Picture</label>
            <div
              className="image-upload-zone"
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={handleClick}
              style={{
                border: `2px dashed ${isDragOver ? 'var(--primary)' : 'var(--border-color)'}`,
                borderRadius: '12px',
                padding: '20px',
                textAlign: 'center',
                cursor: 'pointer',
                backgroundColor: isDragOver ? 'rgba(37, 99, 235, 0.05)' : 'var(--bg-secondary)',
                transition: 'all var(--transition-fast)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <input
                id="image-input"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: 'none' }}
              />
              
              {image ? (
                <div className="image-preview">
                  <img 
                    src={image} 
                    alt="Profile Preview" 
                    style={{
                      width: '120px',
                      height: '120px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: '4px solid var(--primary)',
                      margin: '0 auto 15px',
                      display: 'block'
                    }} 
                  />
                  <p style={{ 
                    color: 'var(--text-secondary)', 
                    fontSize: '14px',
                    margin: '0'
                  }}>
                    Click to change or drag a new image here
                  </p>
                </div>
              ) : (
                <div className="upload-placeholder">
                  <div style={{
                    fontSize: '48px',
                    color: 'var(--text-muted)',
                    marginBottom: '10px'
                  }}>
                    📷
                  </div>
                  <p style={{ 
                    color: 'var(--text-primary)', 
                    fontSize: '16px',
                    fontWeight: '500',
                    margin: '0 0 5px 0'
                  }}>
                    Upload Profile Picture
                  </p>
                  <p style={{ 
                    color: 'var(--text-secondary)', 
                    fontSize: '14px',
                    margin: '0'
                  }}>
                    Click to browse or drag and drop
                  </p>
                  <p style={{ 
                    color: 'var(--text-muted)', 
                    fontSize: '12px',
                    margin: '5px 0 0 0'
                  }}>
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              )}
              
              {isDragOver && (
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: 'rgba(37, 99, 235, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '10px'
                }}>
                  <div style={{
                    color: 'var(--primary)',
                    fontSize: '18px',
                    fontWeight: '500'
                  }}>
                    Drop your image here
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="bio">Bio</label>
            <textarea
              id="bio"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="form-input"
              rows={4}
              placeholder="Tell us about yourself..."
              style={{ resize: 'vertical', minHeight: '100px' }}
            />
          </div>

          {message && (
            <div className="success-message" style={{ textAlign: 'center' }}>
              {message}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="login-button"
          >
            {loading ? "Saving..." : "Save Profile"}
          </button>
        </form>
      </div>
    </div>
    );
}
export default MakeProfile;