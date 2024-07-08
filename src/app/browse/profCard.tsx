import Image from "next/image";

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
    return (
        <div className="bg-info mx-3">
            <Image src={"next.svg"} alt="professor card image" width="50" height="50" />
            <p>{prompts.first_name}</p>
            <p>{prompts.last_name}</p>
            <p>{prompts.stars}</p>
            <p>21 reviews</p>
        </div>
    );
}
