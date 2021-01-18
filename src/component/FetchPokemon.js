import React from 'react';

export const UsePokemon = () => {
    const [data, setData] = React.useState([]);
    const [datawithImage,setDataWithImage]= React.useState([]);
    const [isLoading, setLoading] = React.useState(null);
    const [error, setError] = React.useState(null);

    const FetchPokemon = async () => {
        let dum =[]
        let dumResponse=""
        let dumJson = ""
        setLoading(true);
        try {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1000');
            const json = await response.json();
            const result = json.results
            // result.forEach(element => {
            //     //console.log("element",element)
            //     dumResponse =  fetch(element.url)
            //     dumJson =  dumResponse.json();
            //     console.log("dumJoson",dumResponse)
            // });
            setData(result);
        } catch (e) {
            setError(e);
        }
        //console.log("dum",dum)
        setLoading(false);

    }
    React.useEffect(() => {
        FetchPokemon();
    }, [])
    return { data, isLoading, error }
}
