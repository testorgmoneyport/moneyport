import { getPool } from '../../utils/db';
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Yalnızca GET metodu destekleniyor' });
  }

  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'Token bulunamadı' });
  }

  try {
    // JWT doğrulaması
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.id;

    // Kullanıcı verilerini veritabanından al
    const pool = getPool();
    const client = await pool.connect();

    const userQuery = 'SELECT * FROM users WHERE id = $1';
    const result = await client.query(userQuery, [userId]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Kullanıcı bulunamadı' });
    }

    const user = result.rows[0];
    res.status(200).json({
      user: {
        id: user.id,
        name: user.name,
        surname: user.surname,
        username: user.username,
        email: user.email,
        phone: user.phone,
        portfolioSize: user.portfolio_size,
        role: user.role,
        createdAt: user.created_at,
        updatedAt: user.updated_at,
      },
    });
  } catch (error) {
    console.error('Token doğrulama hatası:', error);
    return res.status(401).json({ message: 'Geçersiz token' });
  }
}
