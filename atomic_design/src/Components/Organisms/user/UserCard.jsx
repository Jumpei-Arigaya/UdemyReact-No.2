import { Card } from "../../atoms/card/Card"
import styled from "styled-components"
import { UserIconWithName } from "../../Molecules/user/UserIconWithName"

export const UserCard = ({ user }) => {
    return (
        <Card>

            <UserIconWithName user={user} />
            <SDl>
                <dt>メール</dt>
                <dd>{user.mail}</dd>
                <dt>TEL</dt>
                <dd>{user.tell}</dd>
                <dt>会社</dt>
                <dd>{user.company}</dd>
                <dt>WEB</dt>
                <dd>{user.web}</dd>
            </SDl>
        </Card>
    )
}

const SDl = styled.dl`
    text-align: left;
    margin-bottom: 0px;
    dt {
        float: left;
    }
    dd {
        padding-left: 32px;
        padding-bottom: 8px;
        overflow-wrap: break-word;
    }
`
