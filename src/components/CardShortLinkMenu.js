import React from 'react'
import { CardNavLiks, CardNavLink, CardNavLinksContainer, CardNavLinkTitle } from '../styles/CardSLMStyled'

export const CardShortLinkMenu = () => {
    return (
        <CardNavLink>
            <CardNavLinkTitle color = "true">ShortCut</CardNavLinkTitle>
            <CardNavLinksContainer>
                <CardNavLiks href="">Features</CardNavLiks>
                <CardNavLiks href="">Pricing</CardNavLiks>
                <CardNavLiks href="">Resources</CardNavLiks>
            </CardNavLinksContainer>
        </CardNavLink>
    )
}
