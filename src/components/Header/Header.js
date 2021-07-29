import React from 'react';
import Button from '../Button/Button';
import { Head } from './styles.js'
import { Icon } from './styles.js'
import { Div } from './styles.js'

const Header = () => {
    return (
        <Head>
            <Div>
            <Icon src="homeicon.png" alt="icone"></Icon>
            <Button/>
            </Div>
        </Head>
    )
}

export default Header;