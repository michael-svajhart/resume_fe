import React, {useState} from "react"
import axios from "axios";

interface TSortFormData {
    array: number[];
    sortType: "bubbleSort" | "insertionSort" | "heapSort"  | "mergeSort"; //allowed sorty types
}


const ProjectSort: React.FC = () => {

    const [formData, setFormData] = useState<TSortFormData>({
        array: [3,1,5,2],
        sortType: "bubbleSort"
    })


    const handleSort = () => {

    }

    return (
        <>
            <section className="section" id="projectb">
                <div className="container">
                    <h1 className="title">Project B</h1>
                    <div>

                    </div>
                </div>
            </section>
           
        </>
    )
};


export default ProjectSort;