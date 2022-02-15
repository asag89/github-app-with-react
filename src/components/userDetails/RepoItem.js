
import { HiLink } from "react-icons/hi"

const RepoItem = ({ repo }) => {

    const {
        name,
        visibility,
        watchers,
        language,
        forks,
        stargazers_count,
        html_url,
        description
    } = repo

    return (
        <div className="user-repoItem">
            <a className="user-repo-header" href={html_url}><HiLink className="user-icons" target="_blank" />{name}</a>
            <div className="user-repo-header">{description ? description : "..."}</div>
            <div className="user-repo-card-field">
                <div className="user-repo-card card-w">
                    <div className="user-marker marker-w">Watchers</div>
                    <div className="marker-w">{watchers}</div>
                </div>
                <div className="user-repo-card card-f">
                    <div className="user-marker marker-f">Forks</div>
                    <div className="marker-f">{forks}</div>
                </div>
                <div className="user-repo-card card-s">
                    <div className="user-marker marker-s">Star</div>
                    <div className="marker-s">{stargazers_count}</div>
                </div>
                <div className="user-repo-card card-v">
                    <div className="user-marker marker-v">Visibility</div>
                    <div className="marker-v">{visibility}</div>
                </div>
                <div className="user-repo-card card-l">
                    <div className="user-marker marker-l">Language</div>
                    <div className="marker-l">{language ? language : "..."}</div>
                </div>
            </div>
        </div>
    )
}

export default RepoItem