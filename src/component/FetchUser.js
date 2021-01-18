import React, { useEffect, useState } from 'react';

export const useFetchUser = () => {
    const [data, setData] = useState({});
    const [loading, isLoading] = useState(true);
    const [error, setError] = useState(null)

    const FetchData = async () => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
            const json = await response.json();
            setData(json)
        } catch (e) {
            setError(e)
        }
        isLoading(false);
    }
    useEffect(() => {
        FetchData()
    }, [])
    return { data, error, loading }
}

