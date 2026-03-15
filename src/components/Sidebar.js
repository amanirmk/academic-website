import {
  Link,
  useParams,
} from "react-router-dom";
import { name } from '../content/profile_info.js';

const toPagename = (page) => {
  switch (page) {
    case "publications":
      return "Publications";
    case "presentations":
      return "Presentations";
    case "news":
      return "News";
    default:
      return "Whoops!";
  };
}

const Sidebar = () => {
  const {page} = useParams();
  document.title = (page ? toPagename(page) + " — " : "") + name;
  return (
    <>
      <div id="hidden-name"><h1>{name}</h1></div>
      <div id="menu-div">
          <h1>{name}</h1>
          <Link to="/" className={page === undefined ? "active-page" : ""}>about</Link>
          <Link to="/publications" className={page === "publications" ? "active-page" : ""}>publications</Link>
          <Link to="/presentations" className={page === "presentations" ? "active-page" : ""}>presentations</Link>
          <Link to="/news" className={page === "news" ? "active-page" : ""}>news</Link>
      </div>
    </>
  );
}

export default Sidebar;