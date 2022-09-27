import React, { createContext, Dispatch, SetStateAction, useState } from "react";
import { User } from "../types/api/user";

export type LoginUserContextType = {
    loginUser: User & { isAdmin: boolean } | null;
    setLoginUser: Dispatch<SetStateAction<LoginUser | null>>;
}

type Props = {
    children: React.ReactNode;
}

type LoginUser = User & { isAdmin: boolean }

export const LoginUserContext = createContext<LoginUserContextType>({} as LoginUserContextType);

export const LoginUserProvider = ({ children }: Props) => {
    const [loginUser, setLoginUser] = useState<LoginUser | null>(null);
    return (
        <LoginUserContext.Provider value={{ loginUser, setLoginUser }} >
            {children}
        </LoginUserContext.Provider >
    )
}