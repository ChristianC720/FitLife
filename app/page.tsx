"use client"

import { BrowserRouter } from "react-router-dom"
import App from "../src/App"
import "../src/index.css"
import "../src/pages-styles.css"
import "../src/App.css"

export default function Page() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}
