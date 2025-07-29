import { ChevronCompactLeft, ChevronCompactRight } from 'react-bootstrap-icons';

const Splash: React.FC = () => {
    return(
        <section id="home" className="splash">
            <div className="splash-card">
                <div className="splash-border">
                    <ChevronCompactLeft color="white" size={100}/>
                    <div className="splash-text">
                        <h1>Michael Svajhart</h1>
                        <h2>Fullstack Software Engineer</h2>
                    </div>
                    <ChevronCompactRight color="white" size={100}/>
                </div>
            </div>
        </section>
    );
}

export default Splash;