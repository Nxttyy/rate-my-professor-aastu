'use client';

import { useEffect, useState } from "react";
import styles from "./page.module.css"; // Import your CSS file
import { CSSProperties } from 'react';

interface Telegram {
  WebApp: any;
}

declare global {
  interface Window {
    Telegram?: Telegram;
  }
}


// Extend CSSProperties to include custom properties
interface CustomCSSProperties extends CSSProperties {
  [key: `--${string}`]: string | number;
}

export default function Home() {
  const [_themeParams, setThemeParams] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (typeof window !== 'undefined' && window.Telegram) {
      console.log('script loaded correctly, window.Telegram has been populated');
      setThemeParams(window.Telegram.WebApp.themeParams);

    }
  }, []);

  const themeStyle: CustomCSSProperties = Object.keys(_themeParams).reduce((style, key) => {
    (style as CustomCSSProperties)[`--${key}`] = _themeParams[key];
    return style;
  }, {} as CustomCSSProperties);

  return (
    <div style={themeStyle} className={styles.container}>
      <h1>rate my prof next</h1>
      {Object.keys(_themeParams).map((key) => (
        <p key={key}>{`${key}: ${_themeParams[key]}`}</p>
      ))}
    </div>
  );
}
