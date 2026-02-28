import "./App.css"
import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ReactLenis } from 'lenis/react'
import LandingPage from "./pages/LandingPage/LandingPage"
export default function App() {
  return (
    <>
      <ReactLenis root>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </BrowserRouter>
      </ReactLenis>
    </>
  )
}