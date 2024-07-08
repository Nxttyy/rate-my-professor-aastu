// app/detail/[id]/page.tsx
'use client';

import { useParams } from 'next/navigation';
import ProfDetailCard from './profDetaiCard';

export default function Detail() {
    const { profId } = useParams();

  return (
    <div>
      <p>prof {profId} detail</p>
      <ProfDetailCard />
    </div>
  );
}
