import { useState, useEffect } from 'react';

let url = 'https://ceres.pythonanywhere.com/profView/';
 //const url = 'http://127.0.0.1:8000/profView/'
const fetchSuggestions = async (query:string) => {


    const res = await fetch(`${url}?`+ new URLSearchParams({
        search: query,
    }).toString() );

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

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

        fetchSuggestions(query)
            .then(data => {
                // client-side filtering
                // const filteredSuggestions = data.filter(prof =>
                //   prof.toLowerCase().includes(query.toLowerCase())
                // );

                setSuggestions(data);
            })
            .catch(error => console.error(error));


    }, [query]);

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    return (
        <div>
            <p>Search for your professor!</p>
            <input type="text" placeholder="professor name" onChange={handleChange} />


      { suggestions.map((prof, index) => (
        <div key={index} className='bg-info mx-3'>
          <p>{prof['first_name']}</p>
        </div>
      ))}
    </div>
  );
}
