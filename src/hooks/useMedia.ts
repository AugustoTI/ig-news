import { useEffect, useState } from 'react';

export const useMedia = (media: string) => {
  const [match, setMatch] = useState<boolean | null>(null);

  useEffect(() => {
    const changeMatch = () => {
      const { matches } = matchMedia(media);
      setMatch(matches);
    };
    changeMatch();
    window.addEventListener('resize', changeMatch);

    return () => {
      window.removeEventListener('resize', changeMatch);
    };
  }, [media]);

  return match;
};
