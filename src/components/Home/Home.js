import React from 'react';
import Header from '../Header/Header';
import Weather from '../Weather/Weather';
import styled from 'styled-components';

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