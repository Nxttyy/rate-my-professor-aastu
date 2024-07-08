import Image from "next/image"
export default function ProfCard (){
    return (
        <div>
            <Image src={"next.svg"} alt="professor card image" width="50" height="50"></Image>
            <p>firstname lastname</p>
            <p>physical fitness and education</p>
            <p>21 reviews</p>
        </div>
    )
}