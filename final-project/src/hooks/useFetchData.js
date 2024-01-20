import { useEffect, useState } from "react";

export const useFetchData = (url) => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        const fetchTopics = async () => {
            try {

                setLoading(true);
                const res = await fetch(url);
                const d = await res.json(); 
                setData(d);
                setError(null);
            } catch (e) {
                setError(e);
            } finally {
                setLoading(false);
            }
        }

        fetchTopics();
    }, [url]);


    return {
        data, 
        error, 
        loading
    }
}
