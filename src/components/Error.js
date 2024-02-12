import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
    const error = useRouteError();
  return (
    <div>
        <h1>Oopps!!</h1>
    <h2> Something went wrong.</h2>
    <h3> { error?.data} </h3>
    </div>
    
  )
}

export default Error