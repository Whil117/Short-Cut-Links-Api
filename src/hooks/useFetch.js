import { useEffect, useState } from "react"

const getLinks = async (link) => {
    const url = `https://api.shrtco.de/v2/shorten?url=${link}`;
    const settings = {
        method: 'POST',
        mode: 'cors',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(link),
    };
    const res = await fetch(url, settings);
    const data = await res.json();
    const { original_link, short_link } = data.result;

    return { original_link, short_link };
};

export const useFetch = (link) => {
    const [state, setstate] = useState({})

    useEffect(() => {
        getLinks(link)
            .then(ismgs => {
                setstate({
                    data: imgs,
                    loading: false
                })
            })
    }, [link])

    return state
}