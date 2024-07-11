'use client';

import { use, useEffect, useState } from "react";
import styles from "./page.module.css"; // Import your CSS file
import { CSSProperties } from 'react';
import { parseInitData, InitDataParsed, User } from '@telegram-apps/sdk'; // Ensure User type is imported
import Landing from "./_components/landing";
import CallForAction from "./_components/callForAction";
import { useUser } from "./context/userContext";


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
  // const [user, setUser] = useState<User | null>(null);
  const { user, setUser } = useUser();

  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    if (typeof window !== 'undefined' && window.Telegram) {
      // setThemeParams(window.Telegram.WebApp.themeParams);
      // const initDataString = 'query_id=AAHdF6IQAAAAAN0XohDhrOrc&user=%7B%22id%22%3A279058397%2C%22first_name%22%3A%22Vladislav%22%2C%22last_name%22%3A%22Kibenko%22%2C%22username%22%3A%22vdkfrost%22%2C%22language_code%22%3A%22ru%22%2C%22is_premium%22%3Atrue%7D&auth_date=1662771648&hash=c501b71e775f74ce10e377dea85a7ea24ecd640b223ea86dfe453e0eaed2e2b2';
      const initDataString = window.Telegram.WebApp.initData;
      console.log(initDataString);

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

  const signUser = async (url: any) => {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        first_name: user?.firstName,
        last_name: user?.lastName,
        telegram_id: user?.id,
      }),
    });


    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    return res.json();
  };


  useEffect(() => {
    console.log(user)
    let url = 'https://ceres.pythonanywhere.com/user/signUser/';
    // let url = 'http://127.0.0.1:8000/user/signUser/';

    if (user?.firstName){
      signUser(url)
      .then((res) => {
        console.log(res)
        setUser(res)
        console.log(user)
      })
      .catch((error) => console.error('Error:', error));
    }

  

  }, [user]);

  const themeStyle: CustomCSSProperties = Object.keys(_themeParams).reduce((style, key) => {
    (style as CustomCSSProperties)[`--${key}`] = _themeParams[key];
    return style;
  }, {} as CustomCSSProperties);


  // if (!initData || !user) {
  return (
    <div style={themeStyle} className={styles.container}>
      <Landing />
      <CallForAction />
      <p>{user?.id}</p>
      {/* <p>{user}</p> */}
      {/* <p>Loading...</p> */}
    </div>

  )

}
