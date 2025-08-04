import React, { useEffect, useState } from "react"
import { Button } from "react-bootstrap";
import ReactGA from "react-ga4";

const ProjectApple: React.FC = () => {
    const [apples, setApples] = useState<number[]>([1]);
    

    const addApple = () => {
        setApples([...apples, apples.length]);

        ReactGA.event({
            category: "project_apple",
            action: "add_apple",
            value: apples.length, 
        });
    }
   
    return (
        <>
            <section className="section" id="projectapple">
                <div className="container">
                    <h1 className="title">Project Apple</h1>
                    <h6 className="description">Simply click the apple.</h6>
                    <Button onClick={addApple}>Add Apple</Button>
                    <div className="fence">
                        {apples.map( (_, index) => {
                            return (
                                <Apple key={index} />
                            )
                        })}
                    </div>
                    
                </div>
            </section>
           
        </>
    )
};

interface TApple {
    x: number;
    y: number;
    hidden: boolean;
}

interface TAppleMessage {
    x: number;
    y: number;
    hidden: boolean;
}

const Apple: React.FC<{key:number}> = ({key}) => {
    
    const boundsMax = 95;
    const boundsMin = 5;

    useEffect(()=>{
        moveApple();
    },[])
    
    const [apple, setApple] = useState<TApple>({x:50, y:50, hidden:true});
    
    const [message, setMessage] = useState<TAppleMessage>({x:50, y:50, hidden:true});

    const [numberOfMoves, setNumberOfMoves] = useState<number>(0);
    const getNewPosition = () => {
        return (Math.floor(Math.random() * (boundsMax - boundsMin)) + boundsMin);
    }

    const moveApple = () => {
        triggerMessage(apple)
        let tempX = getNewPosition();
        let tempY =  getNewPosition();

        setApple({x: tempX, y:tempY, hidden:false})
        
    }

    const triggerMessage = (a: TApple) => {
        if(a.hidden) return;
        
        ReactGA.event({
            category: "project_apple",
            action: "move_apple",
            value: numberOfMoves, 
        });
        
        setMessage({
            ...a,
            hidden: false
        })

        setNumberOfMoves(numberOfMoves + 1)
        setTimeout(()=>{
            setMessage({
            ...a,
            hidden: true
        })
        }, 300)
    }
    
    if(apple.hidden) return null;

    return (
        <div key={key}>
            {
                !message.hidden && <div className="apple" style={{left: message.x + "%", top:message.y + "%"}} >
                    <span>*dodge*</span>
                </div> 
            }
            
            <div className="apple" style={{left: apple.x + "%", top:apple.y + "%"}} onMouseEnter={moveApple}>
                <div className="leaf"></div>
                <div className="flesh"></div>
            </div>
        </div>
    )
}


export default ProjectApple;