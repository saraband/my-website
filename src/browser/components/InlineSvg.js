import React from 'react'

// Insert the class inside the inline svg tag
const insertClassName = (src, className) => {
  if(className === undefined)
    return src

  return src.slice(0, 4) + ` class='${className}' ` + src.slice(4)
}

export default ({src, className, ...props}) => (
  <div dangerouslySetInnerHTML={{__html: insertClassName(src, className)}} {...props} ></div>
)