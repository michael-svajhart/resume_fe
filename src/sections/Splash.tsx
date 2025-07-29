// import chevronleft from '../../imgs/chevron-left-solid.svg';
// import chevronright from '../../imgs/chevron-right-solid.svg';

const Splash: React.FC = () => {
    return(
        <section id="home" className="splash">
            <div className="splash-card">
                <div className="splash-border">
                    {/* <img src={chevronleft} height={100} width={50} alt="<"/> */}
                    <div className="splash-text">
                        <h1>Michael Svajhart</h1>
                        <h2>Fullstack Software Engineer</h2>
                    </div>
                    {/* <img src={chevronright} height={100} width={50} alt=">"/> */}
                </div>
            </div>
        </section>
    );
}

export default Splash;