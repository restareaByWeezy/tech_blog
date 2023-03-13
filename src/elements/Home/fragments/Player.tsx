import SpotifyPlayer from 'react-spotify-web-playback';

const Player = () => {
  return (
    <SpotifyPlayer
      token="BQBeLpGqarWTXN5bMp6pNZ0HIs0YrGR3aYQ4BEgYbS1U5L08-_sTVPFQnHk7XJpPL_fJtmS43yHdKem03bgS3pndbe1Sk3uQcy2bObEL45dYM1xQN8kGtlr3tzygGJ0H56XR26ORVot9w-yohFPg20Iut5z-mRiu-xsSbfOuNkSJAUxhD5D78SKK1fQ-jgbi7lL-JeYHXt88k78oWsETFhmRhZXePfKQrw"
      uris={['spotify:artist:6HQYnRM4OzToCYPpVBInuU']}
    />
  );
};

export default Player;
