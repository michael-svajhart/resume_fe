import React, { useEffect } from "react"
import { Button } from "react-bootstrap";


const ProjectApple: React.FC = () => {
    const [apples, setApples] = React.useState<number[]>([1]);
    

    return (
        <>
            <section className="section" id="projectapple">
                <div className="container">
                    <h1 className="title">Project Apple</h1>
                    <h6 className="description">Simply click the apple.</h6>
                    <Button onClick={()=>{setApples([...apples, apples.length])}}>Add Apple</Button>
                    <div className="fence">
                        {apples.map( (a) => {
                            return (
                                <Apple key={a} />
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
    
    const [apple, setApple] = React.useState<TApple>({x:50, y:50, hidden:true});
    
    const [message, setMessage] = React.useState<TAppleMessage>({x:50, y:50, hidden:true});

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
        setMessage({
            ...a,
            hidden: false
        })
        setTimeout(()=>{
            setMessage({
            ...a,
            hidden: true
        })
        }, 300)
    }
    
    if(apple.hidden) return null;

    return (
        <>
        {
            !message.hidden && <div className="apple" style={{left: message.x + "%", top:message.y + "%"}} >
                <span>*dodge*</span>
            </div> 
        }
        
        <div className="apple" style={{left: apple.x + "%", top:apple.y + "%"}} onMouseEnter={moveApple} key={key}>
            <div className="leaf"></div>
            <div className="flesh"></div>
        </div>
        </>
    )
}


export default ProjectApple;