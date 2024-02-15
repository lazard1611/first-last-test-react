import './link.scss';
import { Link } from 'react-router-dom';

const NavLink = ({url, label, onClick}) => {
    const handleClick = () => {
        onClick();
    };

    return (
        <Link to={url} onClick={handleClick} className="header_nav_link">{label}</Link>
        // <a href={url} className="header_nav_link">{label}</a>
    )
};

export default NavLink;
