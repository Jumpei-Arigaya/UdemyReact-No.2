import { TodoType } from "./types/todo"
import { FC } from 'react';


export const Todo: FC<Omit<TodoType, "id">> = ({ title, userId, completed = false }) => {
    const completeMark = completed ? "[完]" : "[未]"
    return (
        <p>{`${completeMark}${title}(ユーザー:${userId})`}</p>
    )
}
