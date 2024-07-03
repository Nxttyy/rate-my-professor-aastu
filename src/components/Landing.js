import '../App.css';

let suggestions = ["Mr. Prof And","Mr. Prof And","Mr. Prof And","Mr. Prof And","Mr. Prof And"]

function Landing(){
    return (
        <div className='p-5 m-3 my-landing rounded'>
            <p className="lexend-header">Search For Your Professor here!</p>
            <input type="text" placeholder="Professor name..." className='p-1 my-search rounded'/>
            {suggestions.map((element, index) => (

                <div className='search-suggestion my-2 p-1 rounded'><p className='lexend-mini'>{element}</p></div>
                // <p>{element}</p>
            ))}
        </div>
    )
}

export default Landing;