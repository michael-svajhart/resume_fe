import React from "react";

const Experience: React.FC = () => {

    return(
        <section className="experience" id="experience">
            <h1 className="experience_title">Work Experience</h1>
            
            <Job 
                Side="left"
                Position="Web and Mobile Application Manager"
                Company="Musco Sports Lighting"
                Location="Richmond Hill, GA"
                Start="Febuary 2024"
                End="Present"
                Description="Lead the department’s culture, processes, and development efforts. My role is split between leadership and hands-on contributions, including stakeholder engagement, requirement gathering, backlog creation, prioritization, and team development."
                Skills={"ReactJS, ReactNative, AWS, TypeScript,  CSS, HTML, Git, Azure Boards, Scrum Master"}
                DetialsTitle="Operation Details:"
                Details={[
                    "Manager, Leading development of the Facility Management Dashboard through to launch.",
                    "Designed wireframes for new internal applications, including Facility Viewer.",
                    "Advocated for and transitioned Control-Link authentication to the team; designed and validated the new authentication architecture.",
                    "Fostered a productive, collaborative culture among engineers."
                ] }
                />
            <div className="job_padding">
                <div className="job_line"/>
            </div>
            <Job 
                Side="right"
                Position="Web Developer/Designer"
                Company="Copperhead Creations"
                Location="Westminster, CO"
                Start="August 2019"
                End="Present"
                Description="Copperhead Creations is my hobby freelancing company that I started in 2019. Copperhead Creations gave me the
                opportunity to continue my education in the full stack web development field in my free time."
                Skills={"ReactJS, React Native, AWS(cognito, dynamoDB, AWS Amplify, API Gateway, Lambda(nodejs)), .Net Core, mySQL"}
                DetialsTitle="Operation Details:"
                Details={[
                    "Lawyer Website - I utilized AWS Lightsail,that run Linux Ubuntu, which runs Nginx as my webserver. Webserver runs .NET Linux runtime, Data stored in mySQL DB",
                    "TulsaGo - I utilize API gateway pairs with Nodejs lambdas to provide API's for a Admin website used to update data on my DynamoDB, AWS Amplify to provide Authentication to app and API. Second API for public read only access to data for ReactNative app.",
                    "BabySvajhart.com - Website I built for the introduction of my daughter, used base ReactJS application, hosted on AWS",
                    "LittleIntro - This is an app I am currently building stemming from BabySvajhart project, hosted on AWS Amplify, has user authorization, GoLang API, Next.js Server Side Rendering(SSR) for custom dynamic SEO per page"
                ]}
                />
            <div className="job_padding">
                <div className="job_line"/>
            </div>
            <Job 
                Side="left"
                Position="Software Engineer III"
                Company="Bank of America"
                Location="Denver, CO"
                Start="August 2022"
                End="Febuary 2024"
                Description="Lead Frontend Engineer, I am responsible for developing and maintaining Global Information Security aplication Cyber Health Monitoring."
                Skills="ReactJS, HTML5, CSS"
                DetialsTitle="Key Contributions:"
                Details={[
                    "Develop new features requested by in house stakeholders.",
                    "Refactor old code to be more in line with industry standard coding techniques.",
                    "Advise stakeholders on the best UI/UX for new features."
                ] }
                />
            <div className="job_padding">
                <div className="job_line"/>
            </div>
            <Job 
                Side="right"
                Position="Web Application Developer"
                Company="Musco Sports Lighting"
                Location="Denver, CO"
                Start="June 2018"
                End="August 2022"
                Description="Lead website developer, I am responsible for developing and maintaining both in house and client-facing applications."
                Skills="ReactJS, React Native, AWS, .Net Core, HTML5, CSS"
                DetialsTitle="Key Contributions:"
                Details={[
                    "Musco ControlLink Mobile, ReactJS client-facing app used for scheduling lights and field video.",
                    "Scoreboard Online, In house app .NET Core app used for distributing Power BI reports.",
                    "Musco Help, in house app .NET Core app that I designed and maintained to help employees get in contact with an IT representative to fix an issue or help the user find documentation to walk them through the problem themselves.",
                    "ShowLight touchscreens, this project was a client-facing app that compiled a view from a JSON config file to allow the user to interface with the fields programmed light shows.",
                    "Scoreboard Express App, inhouse ReactNative app (ported from Xamarin) used for salesmen to upload and download images and files to a specific facility",
                    "MuscoVision, ReactJS client facing app used to view broadcasts captured at a field."
                ] }
                />
            <div className="job_padding">
                <div className="job_line"/>
            </div>
            <Job 
                Side="left"
                Position="Web Applications Developer"
                Company="Spherexx"
                Location="Tulsa, OK"
                Start="June 2016"
                End="June 2018"
                Description="Responsible for developing, maintaining and supporting websites and web applications for the multi-family industry. I was also responsible for developing, maintaining, and supporting in house applications."
                Skills="ASP .NET VBScript, C#, ASP.NET, HTML5, CSS, JavaScript, jQuery, SQL Server"
                DetialsTitle="Key Contributions:"
                Details={[
                    "Developed the front-end portion of websites using PSD's given by the graphics design team, but in some cases, the project would require me to do some UI design myself.",
                    "I used Classic ASP to connect the websites to a back-end Content Management System",
                    "Created an in house landing page system using Classic ASP, created both the front end and back end portions.",
                    "Apartment website site-plans, these site-plans allowed for a user to click through three levels of content; the building/buildings view (depending on the community), the floor level, and the unit level. Each level giving more information to the client about what is current availability and floorplan information.",
                ]}
                />
        </section>
    );
};

interface TJob {
    Side: string;
    Position: string;
    Company: string;
    Location: string;
    Start: string;
    End: string;
    Description: string;
    Skills: string;
    DetialsTitle: string;
    Details: string[];
}

const Job: React.FC<TJob> = ({Side, Position, Company, Location, Start, End, Description, Skills, DetialsTitle, Details}) => {
    return(
            <div className={`job_block_${Side}`}> 
                <div>
                    <div className="job_block_row">
                        <h2 className="job_block_position">{Position}</h2>
                    </div>
                    <div className="job_block_row">
                        <span className="job_block_company">{Company}</span> - <span className="job_block_location">{Location}</span>
                    </div>
                    <div className="job_block_row">
                        <span className="job_block_timespan">{Start} - {End}</span>
                    </div>
                    <div className="job_block_row">
                        <p className="job_block_description">{Description}</p>
                    </div>
                    {
                        Skills != null &&
                        <div className="job_block_row">
                            <h3>Skills Used</h3>
                            <p className="job_block_skills">{Skills}</p>
                        </div>
                    }
                    {
                        Details.length &&
                            <div className="job_block_row">
                                <h3 className="job_block_details_title">{DetialsTitle}</h3>
                                <ul className="job_block_details_list">
                                    {
                                        Details.map((item, key) =>
                                            <li key={key} className="job_block_details_list_item">{item}</li>
                                        )
                                    }
                                </ul>
                            </div>
                    }
                </div>
            </div>
    )
};


export default Experience;