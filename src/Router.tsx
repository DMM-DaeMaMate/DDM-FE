import { BrowserRouter, Routes, Route } from "react-router-dom"
import Start from "./pages/start"
import Login from "./pages/login"

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Start />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
