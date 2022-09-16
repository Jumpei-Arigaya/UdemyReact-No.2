import { UserProfile } from "../types/userProfile"
import { FC } from 'react';


type Props = {
    user: UserProfile
}

const style = {
    border: "solid 1px #ccc",
    borderRadius: "8px",
    padding: "0 16px",
    margin: "8px"
}

export const UserCard: FC<Props> = ({ user }) => {
    return (
        <div style={style}>
            <dl>名前</dl>
            <dd>{user.name}</dd>
            <dl>メール</dl>
            <dd>{user.email}</dd>
            <dl>住所</dl>
            <dd>{user.address}</dd>
        </div>
    )
}
