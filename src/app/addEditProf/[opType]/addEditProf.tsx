'use client';

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';

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
    let method = 'POST';
    let url = 'http://127.0.0.1:8000/profView/';
    const [formData, setFormData] = useState({
        id: NaN,
        first_name: '',
        last_name: '',
        stars: 0
    });

    const { opType } = useParams();

    useEffect(() => {
        if (opType !== "new" && prompts) {
            setFormData({
                id: prompts.id,
                first_name: prompts.first_name,
                last_name: prompts.last_name,
                stars: prompts.stars
            });
        }
    }, [opType, prompts]);

    if (opType === "new") {
        pageTitle = "Create New Professor";
    } else {
        pageTitle = "Edit Professor";
        method = 'PUT';
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
            const response = await fetch(url, {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
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
        <div>
            <p>{pageTitle}</p>
            <form onSubmit={handleSubmit}>
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
                <input
                    type="number"
                    name="stars"
                    placeholder="Stars"
                    value={formData.stars}
                    onChange={handleChange}
                />
                <input type="submit" />
            </form>
        </div>
    );
}
