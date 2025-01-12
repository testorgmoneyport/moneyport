import { getPool } from '../../../utils/db';

export default async function handler(req, res) {
  const { slug } = req.query;

  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const pool = getPool();

  try {
    const result = await pool.query(
      'SELECT * FROM news WHERE slug = $1 AND is_active = true',
      [slug]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Haber bulunamadı' });
    }

    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error('Error fetching news detail:', error);
    res.status(500).json({ error: 'Failed to fetch news detail' });
  }
}
