// app/detail/[id]/page.tsx
'use client';

import { useParams } from 'next/navigation';
import ProfDetailCard from './profDetaiCard';
import { useEffect, useState } from 'react';
import { useUser } from '@/app/context/userContext';

// const url = 'http://127.0.0.1:8000/profView/'
let url = 'https://ceres.pythonanywhere.com/profView/';


const fetchProfById = async (id:number) => {
  const res = await fetch(`${url}${id}/`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};


export default function ProfDetail() {
  const { profId } = useParams<{ profId: string }>();
  const [prof, setProf] = useState();
  const { user } = useUser();
  // useState<Prompts | null>(null);

  useEffect(() => {
    fetchProfById(parseInt(profId))
      .then(data => setProf(data))
      .catch(error => console.error(error));
  }, [profId]);

  if (!prof) {
    return <p>Loading...</p>;
  }
  console.log("#")
  console.log(user)

  return (
    <div>
      <p>prof {profId} detail</p>
      <p>{user?.firstName}</p>
      <p>ASS</p>
      {/* prof['id] or profId */}
      <ProfDetailCard prompts={{ id: prof['id'], first_name: prof['first_name'], last_name: prof['last_name'], stars: prof['stars'] }} />
    </div>
  );
}