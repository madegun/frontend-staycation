import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';


export default function Button(props) {
  const className = [props.className];
  if(props.isPrimary) className.push("button-primary");
  if(props.isBlock) className.push("btn-block");
  if(props.isLarge) className.push("btn-lg");
  if(props.isSmall) className.push("btn-sm");
  if(props.hasShadow) className.push("shadow");

  const onClick = () =>{
    if(props.onClick) props.onClick();
  }

  if(props.isDisable || props.isLoading){
    if(props.isDisable) className.push("disabled")
    return (
    <span className={className.join(" ")} 
    style={props.style}>    
      {
        props.isLoading ? 
          <>
            <span className="spinner-border spinner-border-sm mx-5"></span>
            <span className="sr-only">Loading...</span>
          </>: props.children
      }
    </span>
    );
  }

 if(props.type === "link"){
   if(props.isExternal){
    return(
      <a 
      href={props.href} 
      className={className.join(" ")} 
      style={props.style}        
      target={props.target === "_blank" ? "_blank" : undefined}
      rel={props.target === "blank" ? "noopener noreferrer" : undefined}  >

    {props.children}
      </a>
    );
   }else{
     return(
      <Link 
      to={props.href} 
      className={className.join(" ")} 
      style={props.style} 
      onClick={onClick}>
        {props.children}
      </Link>
     );
     
   }
 }

  return (
   <button
   className={className.join(" ")} 
   style={props.style} 
   onClick={onClick}>
   
  {props.children}
   </button>
  )
}

Button.propTypes = {
  type: propTypes.oneOf(["button", "link"]),
  onClick: propTypes.func,
  target: propTypes.string,
  href: propTypes.string,
  className: propTypes.string,
  isLoading: propTypes.bool,
  isDisable: propTypes.bool,
  isExternal: propTypes.bool,
  isSmall: propTypes.bool,
  isLarge: propTypes.bool,
  isBlock: propTypes.bool,
  hasShadow: propTypes.bool,
}
