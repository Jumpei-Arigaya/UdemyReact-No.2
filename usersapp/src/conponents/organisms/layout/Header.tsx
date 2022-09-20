import { Link } from "react-router-dom"
import { MenuDrawser } from "../../molecules/MenuDrawser"

export const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link to="/home" className="navbar-brand">ユーザー管理アプリ</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <MenuDrawser />
                </div>
            </nav >
        </div >
    )
}
