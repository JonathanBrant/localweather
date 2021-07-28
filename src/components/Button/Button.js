import React from 'react';
import styled from 'styled-components';

const Refresh=styled.button `
    border: none;
    background: transparent;
`

const Button = () => {

    function refreshPage(){ 
        window.location.reload(); 
    }
    return (
        <Refresh type="button" onClick={ refreshPage }> <img src="refresh.png" alt="Recarregar página"></img></Refresh> 

    )
}

export default Button