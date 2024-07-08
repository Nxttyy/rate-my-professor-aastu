import { useState, useEffect } from 'react';

const fetchSuggestions = async (query) => {

    // console.log('http://127.0.0.1:8000/profView/?'+ new URLSearchParams({
    //     search: query,
    // }).toString())

    const res = await fetch('http://127.0.0.1:8000/profView/?'+ new URLSearchParams({
        search: query,
    }).toString() );

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    console.log(2)
    console.log(res.json)
    return res.json();
};

export default function Landing() {
    const [suggestions, setSuggestions] = useState([]);
    const [query, setQuery] = useState('');

    useEffect(() => {
        if (query.length === 0) {
            setSuggestions([]);
            return;
        }
        console.log(1)


        fetchSuggestions(query)
            .then(data => {
                // client-side filtering
                // const filteredSuggestions = data.filter(prof =>
                //   prof.toLowerCase().includes(query.toLowerCase())
                // );
                console.log(4)
                console.log(data);
                setSuggestions(data);
            })
            .catch(error => console.error(error));


    }, [query]);

    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    return (
        <>
            <p>Search for your professor!</p>
            <input type="text" placeholder="professor name" onChange={handleChange} />


      {suggestions.map((prof, index) => (
        <div key={index} className='bg-info mx-3'>
          <p>{prof['first_name']}</p>
        </div>
      ))}
    </>
  );
}
