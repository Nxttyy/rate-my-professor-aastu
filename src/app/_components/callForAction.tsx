import Link from "next/link";

export default function CallForAction() {
    return (
        <div>
            <Link href="/browse"><button>browse</button></Link> 
            <Link href={`/addEditProf/new`} ><button>add</button></Link>

        </div>)
}
