import { BrowserRouter, Routes, Route } from "react-router-dom"
import Start from "./pages/start"

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Start />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
