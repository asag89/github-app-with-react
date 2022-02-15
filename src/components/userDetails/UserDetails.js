
import { useContext, useEffect } from "react"
import { useParams, Link } from "react-router-dom"

import { UserContext } from "../../context/UserContext"

import RepoList from "./RepoList"

import { RiGitRepositoryFill } from "react-icons/ri"
import { FaUsers } from "react-icons/fa"
import { GiStack } from "react-icons/gi"

const UserDetails = () => {

    const params = useParams()
    const { getUser, user, getRepos, repos } = useContext(UserContext)
    const urlMaps = process.env.REACT_APP_GOOGLE_MAPS_URL
    const urlGithub = process.env.REACT_APP_GITHUB_URL

    const {
        avatar_url,
        bio,
        followers,
        following,
        html_url,
        location,
        login,
        name,
        public_gists,
        public_repos,
        type
    } = user

    useEffect(() => {
        getUser(params.login)
        getRepos(params.login)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <div className="user-details-container">
                <div className="user-details-l">
                    <img className="user-details-img" src={avatar_url} alt={login} />
                    <button className="user-github-profile">
                        <a className="user-github-profile-link" href={html_url} target="_blank" rel="noreferrer">Visit Github Profile</a>
                    </button>
                    <button className="user-back-homepage">
                        <Link to={"/"}>Back Homepage</Link>
                    </button>
                </div>

                <div className="user-details-r">
                    <div>
                        <h2>{name}</h2>
                    </div>
                    <div>{login}<span className="user-details-type">{type}</span></div>
                    <p className="user-bio">{bio}</p>
                    {location !== null &&
                        <div className="user-details-card">
                            <div className="user-marker">Location</div>
                            <a href={`${urlMaps}/${location}`} target="_blank" rel="noreferrer">{location}</a>
                        </div>}
                    <div className="user-details-card-field">
                        <div className="user-details-card">
                            <div className="user-marker">Followers</div>
                            <a href={`${urlGithub}/${login}?tab=followers`} target="_blank" rel="noreferrer">{followers} <FaUsers className="user-icons" /></a>
                        </div>
                        <div className="user-details-card">
                            <div className="user-marker">Following</div>
                            <div></div>
                            <a href={`${urlGithub}/${login}?tab=following`} target="_blank" rel="noreferrer">{following} <FaUsers className="user-icons" /></a>
                        </div>
                    </div>

                    <div className="user-details-card-field">
                        <div className="user-details-card">
                            <div className="user-marker">Repository</div>
                            <a href={`${urlGithub}/${login}?tab=repositories`} target="_blank" rel="noreferrer">{public_repos} <RiGitRepositoryFill className="user-icons" /></a>
                        </div>
                        <div className="user-details-card">
                            <div className="user-marker">Gists</div>
                            <div>{public_gists} <GiStack className="user-icons" /></div>
                        </div>
                    </div>
                </div>
            </div>
            <RepoList repos={repos} />
        </>
    )
}

export default UserDetails