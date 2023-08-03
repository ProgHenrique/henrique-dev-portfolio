import { FaNodeJs, FaReact } from 'react-icons/fa'
import { SiNextdotjs } from "react-icons/si";

interface TecIconProps {
  tecTitle: string;
  tecColor: string;
}

export default function TecIcon({tecColor,tecTitle}: TecIconProps) {
  return (
    <>
      {tecTitle === 'React' && (<FaReact style={{fontSize: '1.5rem', marginRight: 10, color: tecColor}} />)}
      {tecTitle === 'Node' && (<FaNodeJs style={{fontSize: '1.5rem', marginRight: 10, color: tecColor}} />)}
      {tecTitle === 'Next' && (<SiNextdotjs style={{fontSize: '1.5rem', marginRight: 10, color: tecColor}} />)}
    </>
  )
}