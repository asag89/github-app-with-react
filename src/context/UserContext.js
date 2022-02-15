
import { createContext, useState } from "react";
import axios from "axios";

export const UserContext = createContext()

const UserContextProvider = ({ children }) => {

    const url = process.env.REACT_APP_GITHUB_API_URL
    const [users, setUsers] = useState([])              // for multiple users
    const [user, setUser] = useState({})                // for single user
    const [repos, setRepos] = useState([])              // for user repos

    // search multiple users
    const searchUsers = async (users) => {
        const response = await axios(`${url}/search/users?q=${users}`)
        setUsers(response.data.items)
    }

    const clearUserList = () => {
        setUsers([])
    }

    // get single user
    const getUser = async (user) => {
        const response = await axios(`${url}/users/${user}`)
        setUser(response.data)
        setUsers([])
    }

    // get user repos
    const getRepos = async (user) => {
        const response = await axios(`${url}/users/${user}/repos`)
        setRepos(response.data)
    }

    return (
        <UserContext.Provider value={{ users, clearUserList, searchUsers, getUser, user, getRepos, repos }}>
            {children}
        </UserContext.Provider>
    )
}
export default UserContextProvider