import styled from "@emotion/styled";
import Image from 'next/image'

export const CardLink = styled.div`
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        div{
            margin-left: 20px;
            margin-right: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
`

export const CardLinkTitle = styled.p`
    width: 430px;
    height: 150px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 64px;
    b{
        color:#3C6BB2 ;
    }
`
export const CardLinkText = styled.p`
width: 445px;
height: 46px;
left: 93px;
top: 362px;

font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 23px;

color: #757575;

`
export const ImageLogo = styled(Image)`
       position: none;
       border-radius: 10px;
`