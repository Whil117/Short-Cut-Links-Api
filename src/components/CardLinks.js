import React from 'react'
import { Cardsli, CardsLiChildOne } from '../styles/CardLinksStyled'
import { CardInput, CardShortButton } from '../styles/CardShortDivStyled'

export const CardLinks = ({ originalink, shortLink, copyText }) => {
    return (
        <Cardsli>
            {/* <p id="ancla1"> {shortLink}</p> */}
            <CardInput  five disabled type="text" defaultValue={originalink} />
            <CardsLiChildOne>
                <CardInput six ask color="true" four type="text" id="ancla1" defaultValue={shortLink} />
                <CardShortButton primary onClick={copyText}>
                    <svg width="22" height="27" viewBox="0 0 32 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.11111 7.39999V1.85C7.11111 1.35935 7.29841 0.888794 7.63181 0.541852C7.96521 0.19491 8.41739 0 8.88889 0H30.2222C30.6937 0 31.1459 0.19491 31.4793 0.541852C31.8127 0.888794 32 1.35935 32 1.85V27.75C32 28.2406 31.8127 28.7112 31.4793 29.0581C31.1459 29.4051 30.6937 29.6 30.2222 29.6H24.8889V35.15C24.8889 36.1712 24.0889 37 23.0987 37H1.79022C1.55578 37.0014 1.32337 36.9547 1.10635 36.8624C0.889329 36.7701 0.69197 36.6341 0.525615 36.4622C0.35926 36.2903 0.227187 36.0858 0.136985 35.8606C0.0467833 35.6355 0.000229999 35.3939 0 35.15L0.00533337 9.24999C0.00533337 8.22879 0.805334 7.39999 1.79556 7.39999H7.11111ZM3.56089 11.1L3.55556 33.3H21.3333V11.1H3.56089ZM10.6667 7.39999H24.8889V25.9H28.4444V3.7H10.6667V7.39999Z" fill="white" />
                    </svg>
                </CardShortButton>
            </CardsLiChildOne>
        </Cardsli>
    )
}
