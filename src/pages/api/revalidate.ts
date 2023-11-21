import { NextApiRequest, NextApiResponse } from 'next';

export const config = {
  runtime: 'edge',
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  // Check for secret to confirm this is a valid request
  if (req.query.secret !== 'fasika') {
    return res.status(401).json({ message: 'Invalid token' });
  }

  try {
    console.log('revalidating ---------> ');

    await res.revalidate('/');
    // await res.revalidate('/contact');
    console.log(' 😉 revalidated ---------> ');

    return res.status(200).json({ revalidated: true });
  } catch (err: any) {
    console.log('error revalidating : ', err?.message);
    return res.status(500).send('Error revalidating');
  }
}
