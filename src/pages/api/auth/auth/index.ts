import type { NextApiRequest, NextApiResponse } from 'next';

const authorizationUrl = `https://accounts.spotify.com/authorize?`;
const clidentId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
const redirectUri = 'http://localhost:3000/api/spotify/auth/callback';
const scope = 'user-read-private user-read-email playlist-read-private';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    res
      .status(307)
      .redirect(
        `${authorizationUrl}client_id=${clidentId}&response_type=code&scope=${scope}&redirect_uri=${redirectUri}`,
      );
  } catch (error) {
    res.status(400).json({ code: 'ERROR', error: error });
  }
};

export default handler;
