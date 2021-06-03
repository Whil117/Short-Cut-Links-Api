import styled from "@emotion/styled";

export const CardLinkMain = styled.div`
       display:flex;
       flex-direction: column;
       align-items: center;
       height: 155px;
       justify-content: space-around;
       font-family: Roboto;
`
export const CardMessage = styled.p`
       color: ${({ alertMessage }) => alertMessage ? 'red' : '#3C6BB2'};
       font-weight:500;
`