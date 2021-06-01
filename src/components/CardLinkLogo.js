import React from 'react'
import { CardLink, CardLinkText, CardLinkTitle, ImageLogo } from '../styles/CardLinkLogoStyled'

export const CardLinkLogo = () => {
    return (
        <CardLink>
            <div>
                <CardLinkTitle>More than just shoter <b>links</b> </CardLinkTitle>
                <CardLinkText>build your brand s recognition and get  detailed insights on how  your links  are performing</CardLinkText>
            </div>
            <div>
                <img
                    src="/images/one.png"
                    alt="Picture of the author"

                />
            </div>
        </CardLink>
    )
}
