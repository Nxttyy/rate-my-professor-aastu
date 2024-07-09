'use client';

import { useParams, useSearchParams } from 'next/navigation';
import AddEditProf from './addEditProf';

export default function EditProfessorPage() {
    const params = useParams();
    const searchParams = useSearchParams();

    const prompts = {
        id: Number(searchParams.get('id')) || 100000000,
        first_name: searchParams.get('first_name') || '',
        last_name: searchParams.get('last_name') || '',
        stars: Number(searchParams.get('stars')) || 0
    };

    return <AddEditProf prompts={prompts} />;
}
