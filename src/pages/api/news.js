// // pages/api/news.js
// import { getPool } from '../../utils/db';

// export default async function handler(req, res) {
//   const pool = getPool();

//   switch (req.method) {
//     case 'GET':
//       try {
//         const result = await pool.query(
//           'SELECT * FROM news WHERE is_active = true ORDER BY created_at DESC'
//         );
//         res.status(200).json(result.rows);
//       } catch (error) {
//         console.error('Error fetching news:', error);
//         res.status(500).json({ error: 'Failed to fetch news' });
//       }
//       break;

//     case 'POST':
//       const { title, description, image_url, adminPassword } = req.body;
      
//       // Admin password check (you should use a more secure method)
//       if (adminPassword !== process.env.ADMIN_PASSWORD) {
//         return res.status(403).json({ error: 'Unauthorized' });
//       }

//       try {
//         const query = `
//           INSERT INTO news (title, description, image_url, created_at, updated_at, is_active)
//           VALUES ($1, $2, $3, NOW(), NOW(), TRUE)
//           RETURNING *
//         `;
//         const values = [title, description, image_url];
//         const result = await pool.query(query, values);
        
//         res.status(201).json(result.rows[0]);
//       } catch (error) {
//         console.error('Error creating news:', error);
//         res.status(500).json({ error: 'Failed to create news' });
//       }
//       break;

//     case 'DELETE':
//       const { id } = req.query;
//       const { adminPassword: password } = req.body;

//       if (password !== process.env.ADMIN_PASSWORD) {
//         return res.status(403).json({ error: 'Unauthorized' });
//       }

//       try {
//         const result = await pool.query(
//           'DELETE FROM news WHERE id = $1 RETURNING *',
//           [id]
//         );

//         if (result.rowCount === 0) {
//           return res.status(404).json({ error: 'News not found' });
//         }

//         res.status(200).json(result.rows[0]);
//       } catch (error) {
//         console.error('Error deleting news:', error);
//         res.status(500).json({ error: 'Failed to delete news' });
//       }
//       break;

//     default:
//       res.setHeader('Allow', ['GET', 'POST', 'DELETE']);
//       res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }


// pages/api/news.js
import { getPool } from '../../utils/db';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const pool = getPool();

  try {
    const result = await pool.query(
      'SELECT * FROM news WHERE is_active = true ORDER BY created_at DESC'
    );
    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Error fetching news:', error);
    res.status(500).json({ error: 'Failed to fetch news' });
  }
}