import styled from '@emotion/styled';

export const UrlCopied = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 11px 55px;
    top: 65px;
    right: 10px;
    position: fixed;
    width: 216px;
    height: 32px;
    background-color: ${({send}) => send ? '#2C5694' : '#31D655' };
    background-color: ${({error}) => error ? 'D32A2A' : ''};
    border-radius: 10px;
    font-family:Roboto;
    color: white;
    font-size:larger;
    transition: 0.4s;
`