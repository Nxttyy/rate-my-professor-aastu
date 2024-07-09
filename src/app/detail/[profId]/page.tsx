// app/detail/[id]/page.tsx
'use client';

import { useParams } from 'next/navigation';
import ProfDetailCard from './profDetaiCard';
import { useEffect, useState } from 'react';

const url ='https://90aea8e68ffeecafa6029b639e0365bb.serveo.net/profView/'

const fetchProfById = async (id:number) => {
  const res = await fetch(`${url}${id}/`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};

// export default function Detail() {
//     const { profId } = useParams();


//   useEffect(() => {
//     fetchProfs(profId)
//       .then(data => {
//         setProfs(data);
//       })
//       .catch(error => console.error(error));
//   }, []); // Empty dependency array means this effect runs only once when the component mounts


//   return (
//     <div>
//       <p>prof {profId} detail</p>
//       <ProfDetailCard prompts={{ id: 1, first_name: prof['first_name'], last_name: prof['last_name'], stars: prof['stars'] }} />
//     </div>
//   );
// }



export default function ProfDetail() {
  const { profId } = useParams<{ profId: string }>();
  const [prof, setProf] = useState();
  // useState<Prompts | null>(null);

  useEffect(() => {
    fetchProfById(parseInt(profId))
      .then(data => setProf(data))
      .catch(error => console.error(error));
  }, [profId]);

  if (!prof) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <p>prof {profId} detail</p>
      <ProfDetailCard prompts={{ id: 1, first_name: prof['first_name'], last_name: prof['last_name'], stars: prof['stars'] }} />
    </div>
  );
}