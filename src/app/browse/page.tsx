'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import ProfCard from "./profCard";

const fetchProfs = async () => {
  const res = await fetch('http://127.0.0.1:8000/profView');

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};

export default function Browse() {
  const [profs, setProfs] = useState([]);

  useEffect(() => {
    fetchProfs()
      .then(data => {
        setProfs(data);
      })
      .catch(error => console.error(error));
  }, []); // Empty dependency array means this effect runs only once when the component mounts

  return (
    <div>
      <p>browse</p>
      {profs.map((prof, index) => (
        <Link key={prof['id']} href={`/detail/${prof['id']}`} >
          <ProfCard key={prof['id']} prompts={{ id: prof['id'], first_name: prof['first_name'], last_name: prof['last_name'], stars: prof['stars'] }} />
        </Link>
        // <div key={index} className='bg-info mx-3'>
        //   <p>{prof['first_name']}</p>
        // </div>
      ))}

      {/* <Link href={`/detail/${1}`} ><ProfCard id={1} first_name="name" last_name="last_name" /></Link> */}
    </div>
  );
}
