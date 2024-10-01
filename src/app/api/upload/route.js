import multer from 'multer';
import { createRouter } from 'next-connect';
import prisma from "../../libs/prisma"

// Konfigurasi multer untuk mengatur penyimpanan file
const upload = multer({
    storage: multer.diskStorage({
        destination: './public/uploads',
        filename: (req, file, cb) => {
            cb(null, file.originalname);
        },
    }),
});

// Buat handler menggunakan nextConnect
const handler = createRouter();

// Middleware untuk menangani file upload
handler.use(upload.single('profileImage'));

// Ekspor fungsi untuk metode POST
export const POST = async (req, res) => {
    const { userId } = req.body;

    // Pastikan file diupload
    if (!req.file) {
        return res.status(400).json({ error: 'File not found' });
    }

    const imageUrl = `/uploads/${req.file.filename}`;

    // Update database dengan URL gambar
    await prisma.user.update({
        where: { id: userId },
        data: { image: imageUrl },
    });

    return res.status(200).json({ message: 'Image uploaded successfully', imageUrl });
};
