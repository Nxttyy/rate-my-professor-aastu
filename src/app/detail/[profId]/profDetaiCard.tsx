'use client';
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface Prompts {
    id: number;
    first_name: string;
    last_name: string;
    stars: number;
}

interface ProfCardProps {
    prompts: Prompts;
}

export default function ProfCard({ prompts }: ProfCardProps) {
    const router = useRouter();

    useEffect(() => {
        router.prefetch(`/addEditProf/${prompts.id}`);
    }, [router]);

    console.log("1");
    console.log(prompts.id);
    
    return (
        <div className="bg-info mx-3">
            <Image src={"next.svg"} alt="professor card image" width="50" height="50" />
            <p>{prompts.first_name}</p>
            <p>{prompts.last_name}</p>
            <p>{prompts.stars}</p>
            <p>21 reviews</p>
            <Link href={{
                pathname: `/addEditProf/edit`,
                query: { id: prompts.id, first_name: prompts.first_name, last_name: prompts.last_name, stars: prompts.stars }
            }}><button>edit</button></Link>
        </div>
    );
}
