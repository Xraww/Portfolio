import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Landing from "./pages/Landing/Landing"
import "./index.scss"

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Router>
        <Routes>
            <Route path="/" element={<Landing/>}/>
        </Routes>
    </Router>
    </StrictMode>,
)