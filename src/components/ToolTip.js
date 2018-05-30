import React from 'react'

export default ({text, children}) => (
  <div className='tool-tip'>
    {children}
    <p className='tool-tip-text'>{text}</p>
  </div>
)