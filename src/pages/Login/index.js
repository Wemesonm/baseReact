import React from 'react';

import { Container } from '../../styles/GlobalStyles';
import { Title, Para } from './styled';

export default function Login() {
  return (
    <Container>
      <Title>
        Login
        <small>Oie</small>
      </Title>
      <Para>Lorem ipsus dolar sit.</Para>
      <button type="button">Enter</button>
    </Container>
  );
}
