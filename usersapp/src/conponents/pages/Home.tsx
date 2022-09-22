import { useAuth } from "../../hooks/useAuth"
import { HeaderLayout } from "../templates/HeaderLayout"

export const Home = () => {
    const { error } = useAuth();
    return (
        <>
            { }
            <HeaderLayout />
            <p>HOME画面です</p>
        </>
    )
}
