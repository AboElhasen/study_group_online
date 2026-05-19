'use client';

import '../../pages.css';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import toast, { Toaster } from 'react-hot-toast';

const GROUP_TYPES = [
  { value: 'module', label: 'Module' },
  { value: 'projet', label: 'Projet' },
  { value: 'revision', label: 'Révision' },
] as const;

export default function CreateGroupPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState<GroupType>('module');
  const [visibility, setVisibility] = useState<'public' | 'private'>('public');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!name.trim() || !description.trim()) {
      toast.error('Veuillez renseigner le nom et la description du groupe.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/groups', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          description: description.trim(),
          type,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error?.error || 'Impossible de créer le groupe.');
      }

      toast.success('Groupe créé avec succès !');
      setName('');
      setDescription('');
      setType('module');
      setVisibility('public');
      router.push('/chat');
    } catch (error) {
      console.error(error);
      toast.error((error as Error).message || 'Erreur réseau.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="create-group-page">
      <Toaster position="top-right" />
      <div className="group-form-card">
        <div className="group-form-header">
          <h1>Création d'un groupe</h1>
          <p>Remplissez les détails ci-dessous pour créer votre nouveau groupe d'étude.</p>
        </div>

        <form className="group-create-form" onSubmit={handleSubmit}>
          <label className="field-label">
            Nom du groupe
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Ex: Algèbre Linéaire"
              className="field-input"
            />
          </label>

          <label className="field-label">
            Description du groupe
            <textarea
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              placeholder="Entrez une description détaillée du groupe."
              className="field-textarea"
              rows={5}
            />
          </label>

          <div className="form-grid">
            <label className="field-label">
              Type de groupe
              <select
                value={type}
                onChange={(event) => setType(event.target.value as GroupType)}
                className="field-select"
              >
                {GROUP_TYPES.map((option) => (
                  <option value={option.value} key={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>

            <div className="visibility-block">
              <span className="field-label">Visibilité</span>
              <div className="visibility-options">
                <button
                  type="button"
                  className={visibility === 'public' ? 'visibility-option active' : 'visibility-option'}
                  onClick={() => setVisibility('public')}
                >
                  Public
                </button>
                <button
                  type="button"
                  className={visibility === 'private' ? 'visibility-option active' : 'visibility-option'}
                  onClick={() => setVisibility('private')}
                >
                  Privé
                </button>
              </div>
            </div>
          </div>

          <button type="submit" className="submit-button" disabled={isSubmitting}>
            {isSubmitting ? 'Création en cours...' : 'Créer le groupe'}
          </button>

          <button type="button" className="cancel-button" onClick={() => router.push('/chat')}>
            Retour au chat
          </button>
        </form>
      </div>
    </div>
  );
}

type GroupType = 'module' | 'projet' | 'revision';
