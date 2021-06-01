import React, { useState } from 'react'
import styled from '@emotion/styled';

const index = () => {

    const [link, setLink] = useState('');
    const [linksData, setLinksData] = useState([])
    const [hasLinks, setHasLinks] = useState(null);

    const shrLink = async (link) => {
        const url = `https://api.shrtco.de/v2/shorten?url=${link}`
        const res = await fetch(url)
        const { result } = await res.json()
        console.log(result)
        setLinksData(result)
        const isValidResult = result ? setHasLinks(false) : null
        return isValidResult
    }

    const change = (event) => {
        setLink(event.target.value)
    }
    const submit = (event) => {
        event.preventDefault()

        const isValidLink = link.trim().length > 10 ? (
            shrLink(link),
            setHasLinks(true)
        ) : (
            console.log('ingresa una url mas larga'),
            setHasLinks(1)
        )
        return isValidLink
    }
    const copyText = () => {
        const textCopy = document.getElementById('ancla1')
        textCopy.select()
        textCopy.setSelectionRange(0, 999)
        document.execCommand("copy")
    }

    return (
        <>
            <div>
                <form action="" onSubmit={submit}>
                    <label>
                        <p>Url</p>
                        <input type="url" required onChange={change} />
                    </label>
                    <button type="submit">Submit</button>
                    {hasLinks === 1 &&
                    <p>Oye la url es muy corta</p>
                }
                </form>
            </div>
            {hasLinks === true &&
                <h1>Cargando...</h1>
            }
            {hasLinks === false &&
                <div>
                    <input type="text" id="ancla1" defaultValue={linksData.short_link} />
                    <button onClick={copyText}>Copy text</button>
                </div>
            }

        </>
    )
}
export default index

