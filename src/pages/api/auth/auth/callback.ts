/* eslint-disable @typescript-eslint/naming-convention */
import { NextApiRequest, NextApiResponse } from 'next';
import SpotifyWebApi from 'spotify-web-api-node';

const credentials = {
  clientId: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID,
  clientSecret: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET,
  redirectUri: 'http://localhost:3000/api/spotify/auth/callback',
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  var code = req.query.code as string;

  const spotifyApi = new SpotifyWebApi(credentials);

  spotifyApi.authorizationCodeGrant(code).then(data => {
    const accessToken = data.body.access_token;
    res
      .status(302)
      .redirect(`http://localhost:3000?access_token=${accessToken}`);
  });
};

export default handler;
