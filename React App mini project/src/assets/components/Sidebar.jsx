import '/src/style/sideBar.css';
import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <nav className='sideBar'>
            <ul>
                <li>
                    <a href='#'>Home Page</a>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Sidebar;
