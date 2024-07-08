import { number } from "@telegram-apps/sdk";
import ProfCard from "./profCard";
import Link from "next/link";

export default function Browse() {
  return (
    <div>
      <p>browse</p>
      <Link href={`/detail/${1}`} ><ProfCard /></Link>
      
    </div>

  )
}