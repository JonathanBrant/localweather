import React from 'react';
import Button from '../Button/Button';
import styled from 'styled-components';

const Head = styled.header `
    display: flex;
    justify-content: space-between;

    padding-left: 2rem;
    padding-right: 2rem;
    background: lightgrey;

`

const Header = () => {
    return (
        <Head>
            <h2>localWeather</h2>
            <Button/>
        </Head>
    )
}

export default Header;