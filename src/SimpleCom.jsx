import React, { children, value } from 'react'

function SimpleCom({value, children}) {
  return (
    <div>SimpleCom
        <h1>{value}</h1>
        {children}
    </div>
  )
}

export default SimpleCom