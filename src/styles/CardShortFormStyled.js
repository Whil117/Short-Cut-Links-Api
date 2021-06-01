import styled from '@emotion/styled';

export const CardShortForm = styled.form`
        font-family: roboto;
        margin: 10px;
        label{
            display: flex;
            align-items: center;
            p{
                font-size: larger;
                
            }
        }

`
export const CardInput = styled.input`
            box-sizing: border-box;
            border-radius: 10px;
            padding: 10px 6px;
            height: 38px;
            font-family: Roboto;
            font-style: normal;
            font-weight: 300;
            font-size: 18px;
            width: ${({three}) => three ? '764px' : 'none'};
            border: ${({second}) => second ? '1px solid #565656' : 'none'};
            background: ${({primary}) => primary ? '#FFFFFF' : '#E2E2E2'};
`
export const CardShortButton = styled.button`
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        width: 42px;
        height: 43px;
        border-radius: 10px;
        transition:  0.3s;
   :active{
    transition:  0.3s;
        background: ${({ primary }) => primary ? '#3C6BB2' : 'red'}
   }
        background: ${({ primary }) => primary ? '#C1C1C1' : '#C1C1C1'}
`
