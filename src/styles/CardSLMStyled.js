import styled from '@emotion/styled';

export const CardNavLink = styled.nav`
      padding-left:10px;
      padding-top: 10px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
`
export const CardNavLinkTitle = styled.h1`
       font-family: Red Hat Text;
       font-size: 36px;
       color: ${({color})=> color  ? '#3C6BB2' : 'black'};
`
export const CardNavLinksContainer = styled.div`
        margin-left: 50px;
        width: 300px;
        display: flex;
        justify-content: space-between;
`
export const CardNavLiks = styled.a`
font-size: 18px;
        font-family: Roboto;
       color:black ;
       text-decoration: none;
       :hover{
           text-decoration: underline;
       }
`