// components/CloudinaryUpload.tsx
"use client";

import { CldUploadWidget } from 'next-cloudinary';

interface CloudinaryUploadProps {
  onUpload: (result: { url: string; name: string; size: number; resourceType: string }) => void;
  acceptType: 'image' | 'file';
  children: React.ReactNode;
}

export function CloudinaryUpload({ onUpload, acceptType, children }: CloudinaryUploadProps) {
  const clientAllowedFormats =
    acceptType === 'image'
      ? ['jpg', 'jpeg', 'png', 'webp', 'gif', 'svg']
      : ['jpg', 'jpeg', 'png', 'webp', 'gif', 'pdf', 'doc', 'docx', 'txt'];

  return (
    <CldUploadWidget
      uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
      onSuccess={(result: any) => {
        if (result.info?.secure_url) {
          onUpload({
            url: result.info.secure_url,
            name: result.info.original_filename || result.info.public_id,
            resourceType: result.info.resource_type,
            size: result.info.bytes,
          });
        }
      }}
      options={{
        maxFiles: 1,
        resourceType: acceptType === 'image' ? 'image' : 'auto',
        clientAllowedFormats,
        maxFileSize: 10485760,
      }}
    >
      {({ open }) => (
        <div onClick={() => open()}>
          {children}
        </div>
      )}
    </CldUploadWidget>
  );
}
