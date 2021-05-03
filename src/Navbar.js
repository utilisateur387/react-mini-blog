import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Miebi's blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">New Post</Link>

      </div>
    </nav>
  );
}

export default Navbar;
