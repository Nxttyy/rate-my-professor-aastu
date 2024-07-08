import Link from "next/link";

export default function CallForAction() {
    return (
        <div>
            <p>call for action</p>
            <Link href="/browse"><button>browse</button></Link> 
            <Link href={`/addEditProf/new`} ><button>add</button></Link>
            {/* <button>browse</button> */}

        </div>)
}