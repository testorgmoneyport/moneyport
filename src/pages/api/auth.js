import { getPool } from '../../utils/db';
import bcrypt from 'bcryptjs';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Yalnızca POST metodu destekleniyor' });
  }

  const { username, email, password, confirmPassword, portfolioSize } = req.body;

  // Form validation
  if (!username || !email || !password || !confirmPassword || !portfolioSize) {
    return res.status(400).json({ message: 'Tüm alanları doldurun' });
  }

  // Password validation
  if (password !== confirmPassword) {
    return res.status(400).json({ message: 'Şifreler eşleşmiyor' });
  }

  // Email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Geçerli bir email adresi girin' });
  }

  // Password strength validation
  if (password.length < 8) {
    return res.status(400).json({ message: 'Şifre en az 8 karakter olmalıdır' });
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
      INSERT INTO users (
        user_name, 
        user_email, 
        password_hash, 
        portfolio_size,
        role,
        created_at
      )
      VALUES ($1, $2, $3, $4, $5, NOW())
      RETURNING id, user_name, user_email, portfolio_size, role, created_at
    `;
    
    const values = [
      username, 
      email, 
      hashedPassword, 
      portfolioSize,
      'user' // default role
    ];
    
    const result = await client.query(query, values);
    await client.query('COMMIT');

    // Hassas bilgileri çıkartarak kullanıcı verisini döndür
    const user = result.rows[0];
    delete user.password_hash;

    res.status(200).json({
      message: 'Kayıt başarılı',
      user
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