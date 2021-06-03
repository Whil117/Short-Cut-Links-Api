import React from 'react'
import { CardBurgerButton, CardNavLiks, CardNavLink, CardNavLinksContainer, CardNavLinkTitle } from '../styles/CardSLMStyled'

export const CardShortLinkMenu = ({ button, setButton }) => {

    const handleDisplayOptions = () => {
        const isValidButton = button === 0 ? setButton(4) : setButton(0)
        return isValidButton
    }
    return (
        <CardNavLink>
            <CardNavLinkTitle href="" color="true" >ShortCut</CardNavLinkTitle>
            <CardNavLinksContainer>
                <CardNavLiks href="#one"><b>Features</b></CardNavLiks>
                <CardNavLiks href="#two"><b>Pricing</b></CardNavLiks>
                <CardNavLiks href="#three"><b>Resources</b></CardNavLiks>
            </CardNavLinksContainer>
            <CardBurgerButton onClick={handleDisplayOptions}>
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.18796 2H24" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M2.1835 12.9589H23.9901" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M2.18796 23.9177H23.9909" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </CardBurgerButton>
        </CardNavLink>
    )
}
