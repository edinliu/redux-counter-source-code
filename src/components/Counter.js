import React from 'react'
import Button from 'react-bootstrap/Button'

export default function Counter({ value = 0, increseMethod, decreseMethod }) {
  return <div className="d-flex flex-column align-items-center">
    <h1>{value}</h1>
    <div className="d-flex">
      <Button className="m-1" onClick={increseMethod}>+</Button>
      <Button className="m-1" onClick={decreseMethod}>-</Button>
    </div>
  </div>
}