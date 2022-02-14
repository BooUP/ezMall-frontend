import type { NextPage } from 'next'
import styled from 'styled-components';

const Home: NextPage = () => {
  return (
    <Title>EZ-Mall</Title>
  )
}

const Title = styled.h1`
  font-size: 40px;
  text-align: center;
  color: palevioletred;
`;

export default Home;
