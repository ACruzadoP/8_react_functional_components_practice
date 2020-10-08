import React from "react"
import ReactDOM from "react-dom"

function MyInfo() {
    return (
      <div>
        <h1>Alberto</h1>
        <p>This is a paragraph about me</p>
        <ul>
            <li>Chile</li>
            <li>Greece</li>
            <li>Thailand</li>
        </ul>
      </div>
    )
  }


  ReactDOM.render(
    <MyInfo />,
    document.getElementById("root")
  )