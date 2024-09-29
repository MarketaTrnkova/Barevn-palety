import React from 'react';
import { SchemeColor} from '../SchemeColor';

export const Palette = ({name, image, attribution, colors, direction, description}) =>{
  return <>
    <div className='palette'>
      <div className={`palette-scheme palette-scheme--${direction}`}>
        <img className="scheme-image" src={image} alt={`${name}, author: ${attribution.name}`}/>
        <div className="scheme-colors">
        {
          colors.map((barva) => {
            return <SchemeColor  barva={barva} key={barva}/>;
          })
        }
        </div>
      </div>
      <div className="palette-info">
        <h2>{name}</h2>
        <p>{description}</p>
        <p>Photo by <a href={attribution.url} target="_blank">{attribution.name}</a>.</p>
      </div>
    </div>
  </>
}