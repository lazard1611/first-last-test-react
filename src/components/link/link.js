import './link.scss';

const Link = ({url, label}) => {
    return <a href={url} className="header_nav_link">{label}</a>
};

export default Link;
