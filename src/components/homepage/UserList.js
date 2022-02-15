
import { useContext } from "react"
import { UserContext } from "../../context/UserContext"

import SearchBar from "./SearchBar"
import UserItem from "./UserItem"

const UserList = () => {

    const {users} = useContext(UserContext)
    return (
        <>
            <SearchBar users={users}/>
            <section className="user-list">
            {users.map((user) => (
                <UserItem key={user.id} user={user}/>
            ))}
            </section>
        </>
    )
}
export default UserList