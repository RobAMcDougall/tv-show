import { Link } from 'react-router-dom';

const linkStyles = {
    color: '#5743A6'
}
const HomePage = () => {
  return (
    <>
    <h1>Top Tv</h1>
    <em>All about the smaller silver screen</em>
    <ul>
        <li>
            <Link to="shows" style={linkStyles}>Explore Shows</Link>
        </li>
        <li>
            <Link to="search" style={linkStyles}>Explore Shows</Link>
        </li>
    </ul>
    </>
  )
}

export default HomePage