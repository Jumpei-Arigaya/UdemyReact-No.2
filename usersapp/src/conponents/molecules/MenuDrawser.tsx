import { Link } from "react-router-dom"

export const MenuDrawser = () => {
    return (
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/home/userManagement" className="nav-link active" aria-current="page">ユーザー一覧</Link>
                </li>
                <li className="nav-item">
                    <Link to="/home/setting" className="nav-link active" aria-current="page">設定</Link>
                </li>
            </ul>
        </div>

    )
}
