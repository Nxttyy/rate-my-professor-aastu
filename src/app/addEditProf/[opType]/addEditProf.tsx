'use client';

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useUser } from '@/app/context/userContext';
interface Prompts {
    id: number;
    first_name: string;
    last_name: string;
    stars: number;
}

interface ProfCardProps {
    prompts: Prompts;
}

export default function AddEditProf({ prompts }: ProfCardProps) {
    let pageTitle = '';
    const { user } = useUser();

    let method = 'POST';
    // let url = 'http://127.0.0.1:8000/profView/';
    let url = 'https://ceres.pythonanywhere.com/profView/';

    const [formData, setFormData] = useState({
        id: NaN,
        first_name: '',
        last_name: '',
        // stars: 0,
        // user: NaN
    });

    const { opType } = useParams();

    useEffect(() => {
        if (opType !== "new" && prompts) {
            setFormData({
                id: prompts.id,
                first_name: prompts.first_name,
                last_name: prompts.last_name,
                // stars: prompts.stars,
                // user: NaN
            });
        }
    }, [opType, prompts]);

    if (opType === "new") {
        pageTitle = "Create New Professor";
    } else {
        pageTitle = "Edit Professor";
        method = 'PATCH';
        url += prompts.id.toString() + '/';
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
    
        try {
            let body;
    
            if (method === 'POST') {
                console.log({first_name: formData.first_name,
                    last_name: formData.last_name,
                    user: user?.id,})
                body = JSON.stringify({
                    first_name: formData.first_name,
                    last_name: formData.last_name,
                    user: user?.id,
                });
            } else {
                body = JSON.stringify({
                    id: formData.id,
                    first_name: formData.first_name,
                    last_name: formData.last_name,
                    // user: user?.id,
                });
            }
    
            const response = await fetch(url, {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: body,
            });
    
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
    
            const result = await response.json();
            console.log('Success:', result);
        } catch (error) {
            console.error('Error:', error);
        }
    };
    

return (
    <div className="mt-5 container">
        <p>{pageTitle}</p>
        <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
            <input
                type="text"
                name="first_name"
                placeholder="First Name"
                value={formData.first_name}
                onChange={handleChange}
            />
            <input
                type="text"
                name="last_name"
                placeholder="Last Name"
                value={formData.last_name}
                onChange={handleChange}
            />
            <input type="submit" />
        </form>
    </div>
);
}
