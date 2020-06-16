import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'

export default function BsJumbotron({ children }) {
  return <Jumbotron className="bg-secondary">
    <div className="d-flex flex-column align-items-center w-100">
      <h1>Redux Counter</h1>
      <p>這是用 redux 與 react 製作的簡易 counter</p>
    </div>
    {children}
  </Jumbotron>
}