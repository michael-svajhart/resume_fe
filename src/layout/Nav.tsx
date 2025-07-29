const Nav: React.FC = () => {
    return(
        <nav>
            <a href="/#home" className="Nav-Link">Home</a>
            <a href="/#education" className="Nav-Link">Education</a>
            <a href="/#experience" className="Nav-Link">Experience</a>
            <a href="/#skills" className="Nav-Link">Skills</a>
            <a href="/#projects" className="Nav-Link">Projects</a>
        </nav>
    );
}

export default Nav;