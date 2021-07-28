import React from 'react';
import Button from '../Button/Button';
import { Head } from './styles.js'
import { Icon } from './styles.js'

const Header = () => {
    return (
        <Head>
            <h2>localWeather</h2>
            <Icon src="clima.png" alt="icone"></Icon>
            <Button/>
        </Head>
    )
}

export default Header;