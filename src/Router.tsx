import { BrowserRouter, Routes, Route } from "react-router-dom"
import Start from "./pages/start"
import Login from "./pages/login"
import Signup from "./pages/signup"
import Main from "./pages/main"
import Mypage from "./pages/mypage"
import Todo from "./pages/todo"
import Grade from "./pages/grade"

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Start />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/main" element={<Main />} />
                <Route path="/mypage" element={<Mypage />} />
                <Route path="/todo" element={<Todo />} />
                <Route path="/grade" element={<Grade />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
