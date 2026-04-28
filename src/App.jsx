import {Routes, Route, Link} from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import ProjectDetails from './pages/ProjectDetails';

function App()
{
  return(
      <div className = "app">
          <nav className = "navbar">
              <Link to = "/" className = "nav-logo"> Sergio's Portfolio </Link>
              <div className = "nav-links">
                  <a href = "#about"> About </a>
                  <a href = "#projects"> Projects </a>
                  <a href = "#contact"> Contact </a>
                  <Link to = "/blog"> Blog </Link>
              </div>
          </nav>

          <Routes>
              <Route path = "/" element = {<Home/>}/>
              <Route path = "/blog" element = {<Blog/>}/>
              <Route path = "/project/:id" element={<ProjectDetails />} />
          </Routes>
      </div>
  );
}

export default App;