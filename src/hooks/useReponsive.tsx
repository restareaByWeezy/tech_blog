import { useCallback, useEffect, useState } from 'react';

interface ResponsiveConfig {
  [key: string]: number;
}
interface ResponsiveInfo {
  [key: string]: boolean;
}

let responsiveConfig: ResponsiveConfig = {
  mobile: 0,
  tablet: 768,
  desktop: 1040,
};

let info: ResponsiveInfo = {
  mobile: false,
  tablet: false,
  desktop: false,
};

export function useResponsive() {
  const [state, setState] = useState<ResponsiveInfo>(info);

  const calculate = useCallback(() => {
    const width = window.innerWidth;
    const oldInfo = state;
    const newInfo = {} as ResponsiveInfo;
    let shouldUpdate = false;
    for (const key of Object.keys(responsiveConfig)) {
      newInfo[key] = width >= responsiveConfig[key];
      if (newInfo[key] !== oldInfo[key]) {
        shouldUpdate = true;
      }
    }
    if (shouldUpdate) {
      return newInfo;
    }
    return oldInfo;
  }, [state]);

  useEffect(() => {
    if (JSON.stringify(state) === JSON.stringify(info)) {
      setState(calculate());
    }

    const handleResize = () => {
      const newInfo = calculate();
      if (JSON.stringify(state) === JSON.stringify(newInfo)) return;
      setState(newInfo);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [calculate, state]);

  return state;
}

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  const size = useResponsive();

  useEffect(() => {
    setIsMobile(!size.tablet);
  }, [size.tablet]);

  return { isMobile };
}
