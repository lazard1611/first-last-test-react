import './link.scss';
import { Link } from 'react-router-dom';

const NavLink = ({url, label}) => {
    return (
        <Link to={url} className="header_nav_link">{label}</Link>
    )
};

export default NavLink;
