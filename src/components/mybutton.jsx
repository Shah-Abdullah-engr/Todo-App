import React from 'react'

const Mybutton = ({title,type="button",onClick}) => {
  return (
    <button
    type={type}
    onClick={onClick}
    className='reuseable-btn'
    >
        {title}
    </button>
  )
}

export default Mybutton