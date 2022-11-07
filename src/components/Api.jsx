import { useEffect, useState } from "react"
import { Link, useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async';

const Api = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { repoId } = useParams();
  const githubUrl = `https://github.com/wonuola-y?tab=repositories`;
  useEffect(() => {
    const url = `https://api.github.com/users/wonuola-y/repos/${repoId}`;
    const fetchUsers = async () => {
      setIsLoading(true);
      const response = await fetch(url)
      const data = await response.json();
      setItems(data)
      setIsLoading(false)
    };
    fetchUsers();
  }, []);

  let dateObj = new Date(items.created_at);
  let myDate = (dateObj.getUTCFullYear()) + "/" + (dateObj.getMonth() + 1) + "/" + (dateObj.getUTCDate());

  return isLoading ? (<h1>Loading...</h1>) : (
    <div>
      <Helmet>
        <title>Single Repository Page</title>
        <meta
          name="description"
          content="Single Repo page"
        />
          <link rel="canonical" href="/repos/:repoId" />
      </Helmet>

      <div>
        <div className="repo-top">
          <p className="singrepo-language">{items.language} </p>
          <h1 className="singrepo-title"> {items.name} </h1>
          <p className="singrepo-date">{myDate}</p>
        </div>
        <div className="desc-container">
          <div className="repo-desc-head">Descriptions</div>
          <div className="repo-description">{items.description === null || '' ? <div>No descriptions available</div> : items.description} </div>
          <div className="singrepo-links">
            <a className="back-home" href={githubUrl} target="_blank" >Check on Github</a>
            <Link className="back-home" to="/repos">Back to repos</Link>
          </div>
        </div>
      </div>
    </div>)
}

export default Api