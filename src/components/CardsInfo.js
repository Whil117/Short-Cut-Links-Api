import React from 'react'
// import { Card } from '../assets/Cards'
import styled from "@emotion/styled";

const Card = styled.div`
        background: #F4F4F4;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        width: 271px;
        height: 289px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 22px 19px;
        font-family:Roboto;
        margin: 10px;
`

export const CardsInfo = ({category}) => {

    const  {icon,title,text } = category
    return (
        <Card>
            <img src={icon} alt={title}  />
            <h2>{title}</h2>
            <p>{text}</p>
        </Card>
    )
}