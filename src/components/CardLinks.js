import React from 'react'
import { Cardsli } from '../styles/CardLinksStyled'
import { CardInput, CardShortButton } from '../styles/CardShortFormStyled'

export const CardLinks = ({ shortLink, copyText }) => {
    return (
        <Cardsli>
            <CardInput type="text" id="ancla1" defaultValue={shortLink} />
            <CardShortButton primary onClick={copyText}>
                <svg width="38" height="43" viewBox="0 0 38 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.75 25V8H24.7925L30 12.6563V25H18.75Z" stroke="white" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M28.75 32.5V36.5C28.75 37.5609 28.2891 38.5783 27.4686 39.3284C26.6481 40.0786 25.5353 40.5 24.375 40.5H6.875C5.71468 40.5 4.60188 40.0786 3.78141 39.3284C2.96094 38.5783 2.5 37.5609 2.5 36.5V14.5C2.5 13.4391 2.96094 12.4217 3.78141 11.6716C4.60188 10.9214 5.71468 10.5 6.875 10.5H11.25" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </CardShortButton>
        </Cardsli>
    )
}
