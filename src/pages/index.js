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
import { CardNavLiks, CardNavLinkPhone } from '../styles/CardSLMStyled';
import { Loading } from '../components/Loading';

const index = () => {

    const [inputLink, setInputLink] = useState('');
    const [displayLink, setDisplayLink] = useState(null);
    const [button, setButton] = useState(0);
    const [links, setLinks] = useState({})

    useEffect(() => {
        const linkLocal = JSON.parse(localStorage.getItem('link'))
        console.log('linkLocal se esta disparando')
        const isValidOldLink = linkLocal ? (setLinks(linkLocal), setDisplayLink(true)) : null
        return isValidOldLink
    }, []);

    const useFetch = async (link) => {
        await fetch(`https://api.shrtco.de/v2/shorten?url=${link}`, {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(link),
        })
            .then((response) => response.json())
            .then((data) => {
                const { original_link, short_link } = data.result

                setLinks({
                    original_link: original_link,
                    short_link: short_link,
                })
                setDisplayLink(true)
                localStorage.setItem('link', JSON.stringify({
                    original_link: original_link,
                    short_link: short_link,
                }))
            })
            .catch(setButton(3))
    }

    const change = (event) => {
        setInputLink(event.target.value)
    }

    const submitLink = () => {
        const prefix = 'https://'
        const isValidLink = inputLink.substr(0, prefix.length) !== prefix ? setDisplayLink(4) : (
            useFetch(inputLink),
            setDisplayLink(3),
            setButton(2),
            setTimeout(() => {
                setButton(0)
            }, 3000)
        )
        return isValidLink
    }
    const copyLink = () => {
        const link = document.getElementById('link')
        link.select()
        link.setSelectionRange(0, 999)
        document.execCommand("copy")
        setButton(1)
        setTimeout(() => {
            setButton(0)
        }, 3000);
    }
    const deleteUrl = () => {
        const url = document.getElementById('url')
        url.select()
        url.setSelectionRange(0, 9999)
        document.execCommand("Delete")
    }
    return (
        <>


            <div>
                {button === 1 &&
                    <UrlCopied>
                        <p><b>Url Copied</b></p>
                    </UrlCopied>
                }
                {button === 2 &&
                    <UrlCopied send="true">
                        <p><b>Petición Enviada</b></p>
                    </UrlCopied>
                }
                {button === 3 &&
                    <UrlCopied error="false">
                        <p><b>Error Petición</b></p>
                    </UrlCopied>
                }
                <CardShortLinkMenu button={button} setButton={setButton} />
                {button === 4 &&
                    <CardNavLinkPhone>
                        <CardNavLiks href="#one"><b>Features</b></CardNavLiks>
                        <CardNavLiks href="#two"><b>Pricing</b></CardNavLiks>
                        <CardNavLiks href="#three"><b>Resources</b></CardNavLiks>
                    </CardNavLinkPhone>
                }
                <CardLinkLogo />
                <CardLinkMain>
                    <ShortDiv hasLinks={displayLink} submit={submitLink} change={change} deleteText={deleteUrl} hasLinks={displayLink} />
                    {displayLink === 4 && <CardMessage alertMessage="true"><b>Hey, Enter a url</b></CardMessage>}
                    {displayLink === 3 && 
                                <Loading />
                    }
                    {displayLink === true && <CardLinks originalink={links.original_link} shortLink={links.short_link} copyText={copyLink} />}
                </CardLinkMain>
                <CardDiv>
                    {Card.map((item) => <CardsInfo key={item.id.toString()} category={item} />)}
                </CardDiv>
                <CardFoot>
                    <p>Whil Company 2021</p>
                </CardFoot>
            </div>
        </>
    )
}
export default index

