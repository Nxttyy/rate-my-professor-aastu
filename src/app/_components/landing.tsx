export default function Landing() {
    const suggestions = ["Prof. One", "Prof. Two", "Prof. Three", "Prof. Four"];
    return (
        <>
            <p>search for your professor!</p>
            <input type="text" placeholder="professor name" />

            {/* {suggestions.map((prof) => (
                <div>
                    <p key={prof}>{prof}</p>
                </div>

            ))} */}
        </>
    );
}
