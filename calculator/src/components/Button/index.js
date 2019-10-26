import React from 'react';
import { Btn, Label } from './styles';

export default function Button({title}) {
  return (
    <Btn>
      <Label>{title}</Label>
    </Btn>
  );
}
