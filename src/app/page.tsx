'use client';

import { useEffect, useState } from "react";
import styles from "./page.module.css"; // Import your CSS file
import { CSSProperties } from 'react';
// import { parseInitData } from '@telegram-apps/sdk';
import { parseInitData, InitDataParsed, User } from '@telegram-apps/sdk'; // Ensure User type is imported


interface Telegram {
  WebApp: any;
}

declare global {
  interface Window {
    Telegram?: Telegram;
  }
}


// Define a type that matches the structure of parsed data
interface ParsedData {
  [key: string | number]: any;
}



// Extend CSSProperties to include custom properties
interface CustomCSSProperties extends CSSProperties {
  [key: `--${string}`]: string | number;
}


export default function Home() {
  const [_themeParams, setThemeParams] = useState<{ [key: string]: string }>({});
  const [initData, setInitData] = useState<ParsedData>({});
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    if (typeof window !== 'undefined' && window.Telegram) {
      console.log('script loaded correctly, window.Telegram has been populated');
      console.log(window.Telegram.WebApp)
      setThemeParams(window.Telegram.WebApp.themeParams);
      // setInitData(window.Telegram.WebApp.initData);

      // Example init data string (replace this with actual init data string)
      // const initDataString = 'query_id=AAHdF6IQAAAAAN0XohDhrOrc&user=%7B%22id%22%3A279058397%2C%22first_name%22%3A%22Vladislav%22%2C%22last_name%22%3A%22Kibenko%22%2C%22username%22%3A%22vdkfrost%22%2C%22language_code%22%3A%22ru%22%2C%22is_premium%22%3Atrue%7D&auth_date=1662771648&hash=c501b71e775f74ce10e377dea85a7ea24ecd640b223ea86dfe453e0eaed2e2b2';
      const initDataString = window.Telegram.WebApp.initData;

      try {
        const parsedData = parseInitData(initDataString);
        console.log(parsedData);
        
        // Check if parsedData has the "user" property
        if (parsedData && parsedData.user) {
          setInitData(parsedData);
          setUser(parsedData.user);
        } else {
          throw new Error('Parsed data does not contain user information');
        }
      } catch (e) {
        console.error(e);
        setError('Failed to parse init data');
      }

    }
  }, []);

  const themeStyle: CustomCSSProperties = Object.keys(_themeParams).reduce((style, key) => {
    (style as CustomCSSProperties)[`--${key}`] = _themeParams[key];
    return style;
  }, {} as CustomCSSProperties);


  if (!initData || !user) {
    return <p>Loading...</p>; // Handle loading state while waiting for initData or user
  }

  return (
    <div style={themeStyle} className={styles.container}>
      <h1>rate my prof next</h1>
      {Object.keys(_themeParams).map((key) => (
        <p key={key}>{`${key}: ${_themeParams[key]}`}</p>
      ))}

      {error ? (
        <p>{error}</p>
      ) : (
        <div>
          <p>User Information:</p>
          <p>{`ID: ${user.id}`}</p>
          <p>{`First Name: ${user.firstName}`}</p>
          <p>{`Last Name: ${user.lastName}`}</p>
          <p>{`Username: ${user.username}`}</p>
          <p>{`Language Code: ${user.languageCode}`}</p>
          <p>{`Is Premium: ${user.isPremium}`}</p>
        </div>
      )}
    </div>
  );
}
