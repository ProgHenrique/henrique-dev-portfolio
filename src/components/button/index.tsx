import { AppProps } from "next/app";
import { ButtonComponent, ButtonComponentLink } from "./styles";

interface ButtonProps {
  children: string;
  color: 'orange' | 'gray' | 'uncolor';
  isLink?: boolean;
  link?: string;
  onClick?: ()=> void;
  submit?: boolean;
  disabled?: boolean;

}

export default function Button ({children, color, isLink = false, link = '', onClick, submit = false, disabled = false}: ButtonProps) {
  return (
    <>
      {isLink ? <ButtonComponentLink href={link} target="_blank" color={color}>{children}</ButtonComponentLink> :
        <ButtonComponent disabled={disabled} type={submit ? 'submit' : 'button'} onClick={onClick} color={color}>{children}</ButtonComponent>
      }
    </>
    
  )
}