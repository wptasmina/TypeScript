
import { Children } from 'react';
import Post from './Post';

type ButtonProps = {
    children: React.ReactNode;
}

const Button = (props:ButtonProps) =>{
  return (
    <>
    <button>{props.children}</button>
    <Post />
    </>
  )
}

export default Button