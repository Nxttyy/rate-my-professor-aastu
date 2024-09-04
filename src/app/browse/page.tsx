'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import ProfCard from "./profCard";

 //const url = 'http://127.0.0.1:8000/profView/'
let url = 'https://ceres.pythonanywhere.com/profView/';

const fetchProfs = async () => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};

export default function Browse() {
  const [profs, setProfs] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    fetchProfs()
      .then(data => {
        setProfs(data);
        setIsLoading(false)
      })
      .catch(error => console.error(error));
  }, []); // Empty dependency array means this effect runs only once when the component mounts

return (
  <>
    {isLoading ? (
        <>
          <div className="shapes position-absolute top-30 start-50 translate-middle mt-5"></div>
        </>
    ) : (
      <div className="mt-5">
        {profs.map((prof) => (
          <Link key={prof['id']} href={`/detail/${prof['id']}`}>
            <ProfCard
              prompts={{
                id: prof['id'],
                first_name: prof['first_name'],
                last_name: prof['last_name'],
                stars: prof['stars'],
              }}
            />
          </Link>
        ))}
      </div>
    )}
  </>
);
}
