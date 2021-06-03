import React, { useState, useEffect } from 'react'
import { ShortDiv } from '../components/ShortForm';
import { CardLinks } from '../components/CardLinks';
import { CardShortLinkMenu } from '../components/CardShortLinkMenu';
import { CardLinkLogo } from '../components/CardLinkLogo';
import { CardMessage, CardLinkMain } from '../components/ShortFormLinks';
import { Card } from '../assets/Cards';
import { CardsInfo } from '../components/CardsInfo';
import { CardDiv } from '../styles/CardInfoStyled';
import { CardFoot } from '../styles/CardFooter';
import { UrlCopied } from '../styles/CardMainStyled';



const index = () => {

    const [inputLink, setInputLink] = useState('');
    const [displayLink, setDisplayLink] = useState(null);
    const [closeCopied, setcloseCopied] = useState(false);
    const [putLink, setPutLink] = useState({
        original_link: '',
        shortLi: ''
    })
    const [localLink, setLocalLink] = useState({
        original_link: '',
        shortLi: ''
    });

    useEffect(() => {
        if (localStorage.getItem('link')) {
            const oldLink = JSON.parse(localStorage.getItem('link'))
            setLocalLink(oldLink)
            setDisplayLink(1)
        }
    }, []);

    const myShortFetch = async (link) => {
        await fetch(`https://api.shrtco.de/v2/shorten?url=${link}`, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(link),
        })
            .then((response) => response.json())
            .then((data) => {
                const { result } = data
                const { short_link, original_link } = result

                const isValidResult = result ? (
                    setDisplayLink(true),
                    setPutLink({
                        original_link: original_link,
                        shortLi: short_link,
                    }),
                    localStorage.setItem('link', JSON.stringify({
                        original_link: original_link,
                        shortLi: short_link,
                    }))
                ) : null
                return isValidResult
            });
    }

    const change = (event) => {
        setInputLink(event.target.value)
    }

    const submit = (event) => {
        event.preventDefault()
        const isValidLink = inputLink.trim().length > 4 ? (
            myShortFetch(inputLink), setDisplayLink(3)
        ) : (
            setDisplayLink(4)
        )
        return isValidLink
    }
    const copyText = () => {
        const textCopy = document.getElementById('ancla1')
        textCopy.select()
        textCopy.setSelectionRange(0, 999)
        document.execCommand("copy")
        setcloseCopied(true)
        setTimeout(() => {
            setcloseCopied(false)
        }, 5000);
    }
    const deleteText = () => {
        const url = document.getElementById('url')
        url.select()
        url.setSelectionRange(0, 9999)
        document.execCommand("Delete")
    }
    return (
        <div>
            {closeCopied  &&
                <UrlCopied>
                    <p><b>Url Copied</b></p>
                    {/* <button></button></button> */}
                </UrlCopied>
            }
            <CardShortLinkMenu />
            <CardLinkLogo />
            <CardLinkMain>
                <ShortDiv
                    hasLinks={displayLink} submit={submit} change={change}
                    deleteText={deleteText} hasLinks={displayLink} />
                {displayLink === 4 && <CardMessage alertMessage="true"><b>Hey, Enter a url</b></CardMessage>}
                {displayLink === 3 && <CardMessage><b>Shortening url...</b></CardMessage>}
                {displayLink  === true && <CardLinks originalink={putLink.original_link} shortLink={putLink.shortLi} copyText={copyText} />}
                {displayLink && <CardLinks originalink={localLink.original_link} shortLink={localLink.shortLi} copyText={copyText} />}
            </CardLinkMain>
            <CardDiv>
                {Card.map((item) => <CardsInfo key={item.id.toString()} category={item} />)}
            </CardDiv>
            <CardFoot>
                <p>Whil Company 2021</p>
            </CardFoot>
        </div>
    )
}
export default index

