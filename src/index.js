import React from "react"
import ReactDOM from "react-dom/client"
import "./style/index.css"
import App from "./App"
import AnimationReducer from "./context/animation/animationReducer"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <AnimationReducer>
        <App/>
    </AnimationReducer>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
