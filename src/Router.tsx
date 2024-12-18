import { BrowserRouter, Routes, Route } from "react-router-dom"
import Start from "./pages/start"
import Login from "./pages/login"
import Signup from "./pages/signup/signup"
import Inform from "./pages/signup/inform"

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Start />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/inform" element={<Inform />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
