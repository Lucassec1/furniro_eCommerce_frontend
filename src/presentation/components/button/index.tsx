import React from 'react';
import { ButtonAction } from './styles';

export interface IButtonProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
  variant: 'outlined' | 'contained';
}

const Button: React.FC<IButtonProps> = (props: IButtonProps) => {
  return <ButtonAction variant={props.variant}>{props.label}</ButtonAction>;
};

export default Button;
