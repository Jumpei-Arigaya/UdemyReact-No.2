import { Routes, Route } from "react-router-dom"
import { Home } from "../conponents/pages/Home"
import { Login } from "../conponents/pages/Login"
import { Page404 } from "../conponents/pages/Page404"
import { Setting } from "../conponents/pages/Setting"
import { UserManagement } from "../conponents/pages/UserManagement"
import { LoginUserProvider } from "../providers/LoginUserProvider"

export const Router = () => {
    return (
        <LoginUserProvider>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/home/setting" element={<Setting />} />
                <Route path="/home/usermanagement" element={<UserManagement />} />
                <Route path="*" element={<Page404 />} />
            </Routes>
        </LoginUserProvider>
    )
}
