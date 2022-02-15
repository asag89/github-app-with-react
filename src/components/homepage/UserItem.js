
import { Link } from "react-router-dom"

const UserItem = ({ user }) => {
    return (
        <div className="userItem">
            <img src={user.avatar_url} alt={user.login} className="userItem-img" />
            <div className="useItem-info">
                <div className="userItem-link">{user.login}</div>
                <Link to={`/users/${user.login}`}>See more...</Link>
            </div>
        </div>
    )
}

export default UserItem