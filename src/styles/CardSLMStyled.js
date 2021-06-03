import styled from '@emotion/styled';

export const CardNavLink = styled.nav`
top: 0px;
position: sticky;
padding: 10px;
      padding-left:10px;
      padding-top: 10px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      background-color: white;
      @media (max-width:497px){
              padding-left: 20px;
              padding-right: 20px;
              justify-content: space-between;
      }
`
export const CardNavLinkTitle = styled.a`
       font-family: Red Hat Text;
       font-size: 34px;
       text-decoration: none;
       color: ${({ color }) => color ? '#3C6BB2' : 'black'};
`
export const CardNavLinksContainer = styled.div`
        margin-left: 50px;
        width: 300px;
        display: flex;
        justify-content: space-between;
        @media (max-width:497px){
                display: none;
        }
`
export const CardBurgerButton = styled.button`
        border: none;
        display: none;
        @media (max-width:497px){
                display: block;
                fill: red;
                button::active{
                  background-color: red;
                }
                
        }

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
export const CardNavLinkPhone = styled.div`
display: none;
        @media (max-width:497px){

      display: flex;
      flex-direction: column;
      align-items: center;
      a{
        display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 49px;
      border-bottom: 1px solid black;
      }
        }

`