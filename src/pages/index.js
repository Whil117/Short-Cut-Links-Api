import React, { useState,useEffect } from 'react'
import { ShortForm } from '../components/ShortForm';
import { CardLinks } from '../components/CardLinks';
import { CardShortLinkMenu } from '../components/CardShortLinkMenu';
import { CardLinkLogo } from '../components/CardLinkLogo';
import { CardLinkMain } from '../components/ShortFormLinks';

const index = () => {

    const [link, setLink] = useState('');
    const [shortLink, setShortLink] = useState('')
    const [value, setValue] = useState(shortLink);
    const [hasLinks, setHasLinks] = useState(null);

    
    useEffect(() => {
        const hasOldLinkLocal = (value) =>{
            if (value) {
                setShortLink(localStorage.getItem('link')),setHasLinks(false)
            }
        }
        hasOldLinkLocal(value)
    }, [value]);

    const shrLink = async (link) => {
        const url = `https://api.shrtco.de/v2/shorten?url=${link}`
        const res = await fetch(url)
        const { result } = await res.json()
        const { short_link } = result
        const isValidResult = short_link ? (setHasLinks(false), setShortLink(short_link),localStorage.setItem('link',short_link)) : null
        return isValidResult
    }

    const change = (event) => {
        setLink(event.target.value)
    }

    const submit = (event) => {
        event.preventDefault()

        const isValidLink = link.trim().length > 10 ? (shrLink(link), setHasLinks(true)) : (setHasLinks(1))
        return isValidLink
    }
    const copyText = () => {
        const textCopy = document.getElementById('ancla1')
        textCopy.select()
        textCopy.setSelectionRange(0, 999)
        document.execCommand("copy")
    }
    const deleteText = () => {
        const newa = document.getElementById('url')
        newa.select()
        newa.setSelectionRange(0, 9999)
        document.execCommand("Delete")
    }
    return (
        <div>
            <CardShortLinkMenu />
            <CardLinkLogo />
            <CardLinkMain>
                <ShortForm  hasLinks={hasLinks} submit={submit} change={change} deleteText={deleteText} hasLinks={hasLinks} />
                {hasLinks === 1 && <p>Oye la url es muy corta</p>}
                {hasLinks === true && <p>Cargando...</p>}
                {hasLinks === false && <CardLinks shortLink={shortLink} copyText={copyText} />}
            </CardLinkMain>
        </div>
    )
}
export default index

