import React, { useCallback } from 'react';
import { Refresh } from './styles.js'

const Button = () => {

    const refreshPage = useCallback(
        () => {
            window.location.reload();
        }, [],
    );

    return (
        <Refresh type="button" onClick={ refreshPage }> <img src="refresh.png" alt="Recarregar página"></img></Refresh> 

    )
}

export default Button