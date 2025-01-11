import { getPool } from '../../utils/db';
import bcrypt from 'bcryptjs';

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
    const userQuery = 'SELECT * FROM users WHERE user_email = $1';
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

    // Giriş başarılı
    res.status(200).json({
      message: 'Giriş başarılı',
      user: {
        id: user.id,
        username: user.user_name,
        email: user.user_email,
        portfolioSize: user.portfolio_size,
        role: user.role,
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
