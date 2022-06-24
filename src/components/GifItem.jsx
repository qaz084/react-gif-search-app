import React from 'react'

export const GifItem = ({title,id,url}) => {
  return (
    <div className='card'>
        <img src={url} alt={title} />
        <p>{title}</p>
    </div>
  )
}
