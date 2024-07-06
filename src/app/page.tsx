
import Image from "next/image";
import styles from "./page.module.css";

import Script from 'next/script';
import { parseInitData } from '@telegram-apps/sdk';

// Let's imagine, we have init data in a raw format like this. Telegram application is
// sending it in the exact same format.
// const initDataString =
//   'query_id=AAHdF6IQAAAAAN0XohDhrOrc' +
//   '&user=%7B%22id%22%3A279058397%2C%22first_name%22%3A%22Vladislav%22%2C%22last_name%22%3A%22Kibenko%22%2C%22username%22%3A%22vdkfrost%22%2C%22language_code%22%3A%22ru%22%2C%22is_premium%22%3Atrue%7D' +
//   '&auth_date=1662771648' +
//   '&hash=c501b71e775f74ce10e377dea85a7ea24ecd640b223ea86dfe453e0eaed2e2b2';

// // Extract init data.
// console.log(parseInitData(initDataString));

export default function Home() {
 
  return (
    <div>


      <h1>rate my prof next</h1>
      {/* <p>  {window.Telegram.WebApp}
      </p> */}
     
    </div>
  );
}
