
// pages/api/auth.js
import { getPool } from '../../utils/db';
import bcrypt from 'bcryptjs';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Yalnızca POST metodu destekleniyor' });
  }

  const { username, email, password, role } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: 'Tüm alanları doldurun' });
  }

  const pool = getPool();
  const client = await pool.connect();

  try {
    await client.query('BEGIN');

    // Email kontrolü
    const emailCheck = await client.query(
      'SELECT * FROM users WHERE user_email = $1',
      [email]
    );

    if (emailCheck.rows.length > 0) {
      await client.query('ROLLBACK');
      return res.status(400).json({ message: 'Bu email adresi zaten kullanımda' });
    }

    // Şifreyi hashleme
    const hashedPassword = await bcrypt.hash(password, 10);

    // Kullanıcı verilerini veritabanına ekle
    const query = `
      INSERT INTO users (user_name, user_email, password_hash, role)
      VALUES ($1, $2, $3, $4)
      RETURNING id, user_name, user_email, role
    `;
    const values = [username, email, hashedPassword, role || 'user'];
    
    const result = await client.query(query, values);
    await client.query('COMMIT');

    res.status(200).json({
      message: 'Kayıt başarılı',
      user: result.rows[0]
    });
  } catch (error) {
    await client.query('ROLLBACK');
    console.error('Kayıt hatası:', error);
    res.status(500).json({
      message: 'Kayıt işlemi sırasında bir hata oluştu',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  } finally {
    client.release();
  }
}