import { getPool } from '../../utils/db';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Yalnızca POST metodu destekleniyor' });
  }

  const { email, password } = req.body;

  // Form validation
  if (!email || !password) {
    return res.status(400).json({ message: 'Email ve şifre gereklidir' });
  }

  const pool = getPool();
  const client = await pool.connect();

  try {
    // Email kontrolü
    const userQuery = 'SELECT * FROM users WHERE email = $1';
    const result = await client.query(userQuery, [email]);

    if (result.rows.length === 0) {
      return res.status(401).json({ message: 'Geçersiz email veya şifre' });
    }

    const user = result.rows[0];

    // Şifre doğrulaması
    const isPasswordValid = await bcrypt.compare(password, user.password_hash);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Geçersiz email veya şifre' });
    }

    // JWT token'ı oluşturuyoruz
    const token = jwt.sign(
      { id: user.id, name: user.name, surname: user.surname, role: user.role },
      process.env.JWT_SECRET, // .env dosyasından alınan secret key
      { expiresIn: '1h' } // Token'ın geçerlilik süresi
    );

    // Giriş başarılı, token'ı döndürüyoruz
    res.status(200).json({
      message: 'Giriş başarılı',
      token, // Token'ı dönüyoruz
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
    console.error('Login hatası:', error);
    res.status(500).json({
      message: 'Giriş işlemi sırasında bir hata oluştu',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  } finally {
    client.release();
  }
}
