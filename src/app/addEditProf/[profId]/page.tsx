'use client';

import { useParams } from 'next/navigation';

export default function addEditProf() {
    const { profId } = useParams();
    if (profId == "new") {

        return (
            <div>

                <p>create</p>
                <form>
                    <input type="text" placeholder="firstname" />
                    <input type="text" placeholder="lastname" />
                    <input type="text" placeholder="dept. and courses" />
                    <input type="submit" />
                </form>
            </div>
        )

    } else {

        return (
            <div>
                <p>{profId}</p>
                <p>edit</p>
                <form>
                    <input type="text" placeholder="firstname" />
                    <input type="text" placeholder="lastname" />
                    <input type="text" placeholder="dept. and courses" />
                    <input type="submit" />
                </form>
            </div>
        )
    }


}

