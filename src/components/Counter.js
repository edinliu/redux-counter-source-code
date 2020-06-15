import React from 'react'
import Button from 'react-bootstrap/Button'

export default function Counter({ value = 0, increseMethod, decreseMethod }) {
  return <>
    <h1>{value}</h1>
    <Button onClick={increseMethod}>+</Button>
    <Button onClick={decreseMethod}>-</Button>
  </>
}