import React, { useEffect } from 'react'
import { useState } from 'react';

export const useFetch = (value) => {

    const [linksData, setLinksData] = useState([])

    useEffect(() => {
        const shrLink = async (value) => {
            const url = `https://api.shrtco.de/v2/shorten?url=${value}`
            const res = await fetch(url)
            const { result } = await res.json()
            setLinksData(result)
        }

        const hasLinks = value ? shrLink(value) : null
        return hasLinks

    }, [value]);

    return linksData
}

