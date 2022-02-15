
import RepoItem from "./RepoItem"

const RepoList = ({ repos }) => {
    return (
        <div className="user-repoList">
            <h2 className="user-details-repos-title">{repos.length > 0 && "Some Repositories"}</h2>
            {
                repos.map(repo => (
                    <RepoItem key={repo.id} repo={repo} />
                ))
            }
        </div>
    )
}
export default RepoList