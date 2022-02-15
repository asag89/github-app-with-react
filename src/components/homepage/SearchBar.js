
import { useContext, useState } from "react"
import { UserContext } from "../../context/UserContext"

const SearchBar = ({ users }) => {

    const { searchUsers, clearUserList } = useContext(UserContext)
    const [message, setMessage] = useState("")
    const [text, setText] = useState("")

    const handleChange = (e) => {
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (text === "") {
            setMessage("Please Enter Something")
            setInterval(() => {
                setMessage("")
            }, 4000)
        }
        else {
            searchUsers(text)
            setText("")
            setMessage("")
        }
    }
    return (
        <section className="section-searchBar">
            <form onSubmit={handleSubmit}>
                <input className="search-input" onChange={handleChange} value={text} type="text" placeholder="Search..." />
                <button className="btn-search" type="submit">Search</button>
                {users.length > 0 && <button onClick={clearUserList} className="btn-clear">Clear</button>}
                <span className="search-message">{message}</span>
            </form>
        </section>
    )
}
export default SearchBar