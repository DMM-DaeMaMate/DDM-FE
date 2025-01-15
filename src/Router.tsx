import { BrowserRouter, Routes, Route } from "react-router-dom"
import Start from "./pages/start"
import Login from "./pages/login"
import Signup from "./pages/signup/signup"
import Inform from "./pages/signup/inform"
import Main from "./pages/main"
import Mypage from "./pages/mypage"
import Todo from "./pages/todo"

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Start />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/inform" element={<Inform />} />
                <Route path="/main" element={<Main />} />
                <Route path="/mypage" element={<Mypage />} />
                <Route path="/todo" element={<Todo />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
