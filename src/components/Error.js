import React from 'react'
import { useRouteError } from 'react-router'

const Error = () => {
    console.log(useRouteError(), "useRouteError")
  return (
    <>
    <h1>{useRouteError().error?.message}</h1>
    <h2>Oops!!! </h2>
    <h3>page not found</h3>

    </>
  )
}

export default Error