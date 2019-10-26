import React from 'react';
import { Text } from 'react-native';

import {Container, Line} from './styles';
import Button from './components/Button';

export default function Main() {
  return (
    <Container>
      <Line>
        <Button title='7' />
        <Button title='8' />
        <Button title='9' />
        <Button title='/' />
      </Line>
      <Line>
        <Button title='4' />
        <Button title='5' />
        <Button title='6' />
        <Button title='x' />
      </Line>
      <Line>
        <Button title='1' />
        <Button title='2' />
        <Button title='3' />
        <Button title='-' />
      </Line>
      <Line>
        <Button title='0' />
        <Button title='.' />
        <Button title='=' />
        <Button title='+' />
      </Line>
    </Container>
  );
}
