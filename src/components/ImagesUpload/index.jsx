// /app/components/ImageUpload.js

'use client';

import { useState } from 'react';

const ImageUpload = ({ userId }) => {
  const [image, setImage] = useState(null);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    setImage(URL.createObjectURL(file));

    const formData = new FormData();
    formData.append('profileImage', file);
    formData.append('userId', userId);

    const res = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });

    if (res.ok) {
      alert('Upload berhasil');
    } else {
      alert('Upload gagal');
    }
  };

  return (
    <div className="p-4">
      <input type="file" onChange={handleImageUpload} accept="image/*" />
      {image && <img src={image} alt="Preview" className="mt-2 w-32 h-32 rounded-full" />}
    </div>
  );
};

export default ImageUpload;
