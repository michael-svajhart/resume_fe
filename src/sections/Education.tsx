const Education: React.FC = () => {
    return(
        <section className="education" id="education">
            <h1 className="education_title">Education</h1>
            <University 
                Degree="Bachelor of Science in Computer Science"
                School="Oklahoma State University"
                Location="Stillwater, OK"
                Time="August 2012 - May 2017"
            />
        </section>
    );

}

interface TUniversity {
    Degree: string;
    School: string;
    Location: string; 
    Time: string;
}

const University: React.FC<TUniversity>  = ({Degree, School, Location, Time}) => {
    return(
        <div className="university_block">
            <h2 className="university_degree">{Degree}</h2>
            <div className="university_school">
                <span>{School}</span> - <span>{Location}</span>
            </div>
            <div className="university_time">
                <span>{Time}</span>
            </div>
        </div>
    )
}

export default Education;