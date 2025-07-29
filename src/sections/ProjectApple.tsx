import React from "react"

interface TCords {
    x: number;
    y:number;
}

const ProjectApple: React.FC = () => {
    const [coordinates, setcoordinates] = React.useState<TCords>({x:50, y:50});
    const boundsMax = 95;
    const boundsMin = 5;

    const getNewPosition = () => {
        return (Math.floor(Math.random() * (boundsMax - boundsMin)) + boundsMin);
    }

    const moveApple = () => {
        let tempX = getNewPosition();
        let tempY =  getNewPosition();

        setcoordinates({x: tempX, y:tempY})
    }

    return (
        <>
            <section className="section">
                <div className="container">
                    <h1 className="title">Project Apple</h1>
                    <h6 className="description">Simply click the apple.</h6>
                    <div className="fence">
                        <Apple positionX={coordinates.x} positionY={coordinates.y} onClick={moveApple}/>
                    </div>
                    
                </div>
            </section>
           
        </>
    )
};

interface TApple {
    positionX: number;
    positionY: number;
    onClick: any;
}
const Apple: React.FC<TApple> = ({positionX = 50, positionY = 50, onClick}) => {
    return (
        <div className="apple" style={{left: positionX + "%", top:positionY + "%"}} onMouseEnter={onClick}>
            <div className="leaf"></div>
            <div className="flesh"></div>
        </div>
    )
}


export default ProjectApple;