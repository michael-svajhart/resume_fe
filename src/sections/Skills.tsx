import React from "react";
const Skills: React.FC = () => {
    return(
        <section className="skills" id="skills">
            <h1 className="skills_title">Skills</h1>
            <div className="skills_container">
                <div className="skills_list">
                    <h3 className="skills_list_title">Languages</h3>
                    <Skill 
                        Title="Javascript"
                        Start={"2016-06-01"}
                    />
                     <Skill 
                        Title="TypeScript"
                        Start={"2022-06-01"}
                    />
                    <Skill 
                        Title="C#"
                        Start={"2017-06-01"}
                        End={"2022-08-01"}
                    />
                    <Skill 
                        Title="GoLang"
                        Start={"2022-04-01"}
                    />
                    <Skill 
                        Title="Java"
                        Start={"2013-06-01"}
                        End={"2016-06-01"}
                    />
                    
                </div>
                <div className="skills_list">
                    <h3 className="skills_list_title">Frameworks</h3>
                    <Skill 
                        Title=".NET"
                        Start={"2017-06-01"}
                        End={"2022-08-01"}
                    />
                    <Skill 
                        Title="ReactJS"
                        Start={"2018-06-01"}
                    />
                    <Skill 
                        Title="ReactNative"
                        Start={"2019-06-01"}
                        End={"2022-08-01"}
                    />
                </div>
                <div className="skills_list">
                    <h3 className="skills_list_title">Utility</h3>
                    <Skill 
                        Title="CSS3"
                        Start={"2016-06-01"}
                    />
                    <Skill 
                        Title="HTML"
                        Start={"2016-06-01"}
                    />
                    <Skill 
                        Title="Git"
                        Start={"2018-06-01"}
                    />
                    <Skill 
                        Title="JQuery"
                        Start={"2016-06-01"}
                        End={"2018-06-01"}
                    />
                    <Skill 
                        Title="SQL"
                        Start={"2016-06-01"}
                    />
                    <Skill 
                        Title="AWS"
                        Start={"2021-11-01"}
                    />
                
                </div>
            
            </div>
        </section>
    );
}

interface TSkill {
    Title: string;
    Start: string;
    End?: string;
}

const Skill: React.FC<TSkill> = ({Title, Start, End}) => {
    console.log(End)
    const calcTime = () => {
        let start = new Date(Start);
        let end = End === undefined ? new Date() : new Date(End);
        var diff = end.getTime() - start.getTime();
        var yeardiff = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));  
        var monthdiff = Math.floor(diff / (1000 * 60 * 60 * 24 * 365 / 12) - (yeardiff * 12));  
        return yeardiff + " Years, " + monthdiff + " Months";
    }

    return (
        <div className="skill_block">
            <span className="skill_block_title">{Title}</span>
            <span className="skill_block_experience">{calcTime()}</span>
        </div>
    )
}

export default Skills;