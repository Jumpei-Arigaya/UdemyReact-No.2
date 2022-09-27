import { Header } from "../organisms/layout/Header"
import { memo } from "react"

type Props = {
    children?: React.ReactNode;
}

export const HeaderLayout = memo(({ children }: Props) => {
    return (
        <>
            <Header />
            {children}
        </>
    )
})
