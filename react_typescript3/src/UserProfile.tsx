import { User } from "./types/users"
import { FC } from "react"

type Props = {
    user: User;
}

export const UserProfile: FC<Props> = ({ user }) => {

    return (
        <dl>
            <dt>名前</dt>
            <dd>{user.name}</dd>
            <dt>趣味</dt>
            <dd>{user.hobbies?.join(" / ")}</dd>
        </dl>
    )
}
