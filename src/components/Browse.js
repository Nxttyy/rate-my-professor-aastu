import { Link } from "react-router-dom";
import ProfCard from "./Browse/ProfCard";
function Browse() {
    return (
        <div className="w-100">
            <h1>browse</h1>
            <ProfCard />
            <Link to="/">Home</Link>

        </div>
    )
}

export default Browse;