import React, {useEffect, useState} from "react"
import axios from "axios";
import { Button } from "react-bootstrap";

interface TSortFormData {
    data: number[];
    sortType: "bubbleSort" | "insertionSort" | "heapSort"  | "mergeSort"; //allowed sorty types
}

interface TSortResponse {
    data: number[];
}


const ProjectSort: React.FC = () => {

    const [formData, setFormData] = useState<TSortFormData>({
        data: [3,1,5,2],
        sortType: "bubbleSort"
    })

    const [resultsData, setResultsData] = useState<number[]>([])

    useEffect(()=>{
        setResultsData([])
    }, [formData])

    const handleSort = async () => {

        try {
            const response = await axios.post("https://322059ov62.execute-api.us-east-1.amazonaws.com/prod/sort", formData, {
                headers: {
                'Content-Type': 'application/json', // Specify content type
                },
                timeout: 5000, // Set a timeout for the request (in milliseconds)
            });
            let newArr: TSortResponse = response.data
            console.log( typeof(newArr.data));
            setResultsData(newArr.data);
        } catch (error) {
            console.error('Error:', error);
        }
    }

     const handleAddEle = (count:number) => {

        let newNumbers: number[] = []

        for(var i = 0; i < count; i++){
            newNumbers.push(Math.floor(Math.random() * 10000))
        }

        setFormData({
            ...formData,
            data:[...formData.data, ...newNumbers]
        });
    }

    const handleShuffle = (): void => {
        console.log("shuffle")
        let array = formData.data;
        let currentIndex = array.length, randomIndex;

        // While there remain elements to shuffle.
        while (currentIndex !== 0) {
            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }

        setFormData({
            ...formData,
            data: array
        })

    }

    const handleDelete = (index: number) => {
        let tempArr = formData.data;
        tempArr.splice(index, 1);
        setFormData({
            ...formData,
            data: tempArr
        })
    }

    return (
        <>
            <section className="section" id="projectsort">
                <div className="container">
                    <h1 className="title">Project Sort</h1>
                    <div className="mb-2">
                        <h5 className="subtitle">Sort Types</h5>
                        <Button className="me-1 active" onClick={()=>{setFormData({
                            ...formData,
                            sortType: "bubbleSort"
                        })}}>Bubble Sort</Button>
                        <Button className="me-1" onClick={()=>{setFormData({
                            ...formData,
                            sortType: "insertionSort"
                        })}}>Insertion Sort</Button>
                        <Button className="me-1" onClick={()=>{setFormData({
                            ...formData,
                            sortType: "heapSort"
                        })}}>Heap Sort</Button>
                        <Button className="me-1" onClick={()=>{setFormData({
                            ...formData,
                            sortType: "mergeSort"
                        })}}>Merge Sort</Button>
                    </div>
                    <div className="mb-1">
                        <h5 className="subtitle">Add elements to the array to be sorted</h5>
                        <Button className="me-1" onClick={()=>handleAddEle(1)}>Add a random number</Button>
                        <Button className="me-1" onClick={()=>handleAddEle(10)}>add 10 random numbers</Button>
                        <Button className="me-1" onClick={()=>handleAddEle(100)}>add 100 random numbers</Button>
                        <Button className="me-1" onClick={handleShuffle}>Shuffle</Button>
                    </div>
                    <div>
                        <h5 className="subtitle">Elements in array</h5>
                        <div className="mt-2 mb-1">
                            {formData.data.map((ele,index) => <BubbleElement ele={ele} index={index} onClick={()=>handleDelete(index)}/>)}
                        </div>
                        <div>
                            <Button onClick={handleSort}>Trigger Sort</Button>
                        </div>
                    </div>
                    {
                        resultsData.length > 0 &&
                        <div>
                            <h5 className="subtitle">Sorted Array</h5>
                            {resultsData.map((ele, index) => <BubbleElement ele={ele} index={index}/>)}
                        </div>
                    }
                </div>
            </section>
           
        </>
    )
};

interface TBubbleElementProps {
    ele: number,
    index: number,
    onClick?: ((index: number) => void);
}
const BubbleElement: React.FC<TBubbleElementProps> = ({ele, index, onClick}) => {

    const handleClick = () =>{
        if(!onClick) return;

        onClick(index);
    }
    return(
        <div className="border border-secondary rounded d-flex d-inline-flex bg-light  p-2 me-1 mb-1" key={index} onClick={handleClick} >
            <div className="justify-content-center">{ele}</div>
        </div>
    )
}


export default ProjectSort;