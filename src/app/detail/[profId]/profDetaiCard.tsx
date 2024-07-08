import Image from "next/image"
import Link from "next/link"
export default function ProfDetailCard (){
    return (
        <div>
            <Image src={"../next.svg"} alt="professor card image" width="50" height="50"></Image>
            <p>firstname lastname</p>
            <p>physical fitness and education</p>
            <p>21 reviews</p>
            <Link href={`/addEditProf/${1}`} ><button>edit</button></Link>
        </div>
    )
}