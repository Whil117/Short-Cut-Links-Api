import styled from '@emotion/styled';

export const CardShortDiv = styled.div`
        font-family: roboto;
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 623px;
        @media (max-width:630px){
                width:415px;
        }

`
export const CardShortDivChildOne = styled.div`
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 547px;
        @media (max-width:630px){
                width: 359px;
        }
`

export const CardInput = styled.input`
            box-sizing: border-box;
            border-radius: 5px;
            padding: 10px 6px;
            height: 45px;
            font-family: Roboto;
            font-style: normal;
            font-weight: 300;
            font-size: 18px;
            color: ${({ color }) => color ? '#3C6BB2' : 'none'};
            margin-right: ${({ five }) => five ? '10px' : 'none'};
            width: ${({ three, four }) => three ? '500px' : '347px' | four ? '213px' : '347px' };
            border: ${({ second }) => second ? '1px solid #565656' : 'none'};
            background: ${({ primary }) => primary ? '#FFFFFF' : '#E2E2E2'};
                   @media (max-width:630px){
              width: ${({ask}) => ask ? '122px' : 'none'};
       }
`
export const CardShortButton = styled.button`
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        width: 42px;
        height: 43px;
        border-radius: 5px;
        transition:  0.3s;
   :active{
    transition:  0.3s;
        background: ${({ primary }) => primary ? '#2C5694' : 'red'}
   }
        background: ${({ primary }) => primary ? '#3C6BB2' : '#EE6969'}
`
