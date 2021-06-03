import React from 'react'
// import { Card } from '../assets/Cards'
import styled from "@emotion/styled";

const Card = styled.div`
        background: white;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        width: 271px;
        height: 289px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding: 22px 19px;
        font-family:Roboto;
        margin: 12px;
`

export const CardsInfo = ({ category }) => {

    const {id, icon, title, text } = category
    return (
        <Card>
            <img src={icon} alt={title}  />
            <h2 id={id}>{title}</h2>
            <p>{text}</p>
        </Card>
    )
}
