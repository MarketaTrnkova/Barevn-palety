import React from 'react';
export const SchemeColor = ({barva}) =>{
  return (
    <div className='scheme-color' style={{backgroundColor: barva }} >{barva}</div> // inline styly se zapisuju jako JSX, css vlastnosti camelCase, nerozumim tem {{zavorkam}}
    // neni mozne zapsat style={`backgroundColor: ${barva} `} 
  )
}