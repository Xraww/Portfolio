import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Landing from "./pages/Landing/Landing.jsx"
import Error from "./pages/Error/Error.jsx";
import "./index.scss"

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Router>
        <Routes>
            <Route path="/" element={<Landing/>}/>
            <Route path="/error" element={<Error/>}/>
            <Route path="*" element={<Navigate to="/error"/>}/>
        </Routes>
    </Router>
    </StrictMode>,
)