import React from 'react';

import styled from 'styled-components';
import Header from '../../components/Header/Header';
import Weather from '../../components/Weather/Weather';

const Container = styled.div`
    width: 50%auto;

`

const Home = () => {
    return (
        <>
        <Container>
        <Header/>
        <Weather/>
        </Container>
        </>
    )
}

export default Home;