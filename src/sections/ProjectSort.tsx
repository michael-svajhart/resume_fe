import React, {useEffect, useState} from "react"
import axios from "axios";

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
        console.log(resultsData)
    }, [resultsData])

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

     const handleAddEle = () => {
        setFormData({
            ...formData,
            data:[...formData.data, Math.floor(Math.random() * 10000)]
        });
    }

    return (
        <>
            <section className="section" id="projectb">
                <div className="container">
                    <h1 className="title">Project B</h1>
                    
                    <button onClick={handleAddEle}>add random number</button>
                    <div>
                        {formData.data.map(ele => <span>{ele},</span>)}
                    </div>
                    <div>
                        <button onClick={handleSort}>Trigger Sort</button>
                    </div>
                    {resultsData.map(ele => <span>{ele},</span>)}

                </div>
            </section>
           
        </>
    )
};


export default ProjectSort;