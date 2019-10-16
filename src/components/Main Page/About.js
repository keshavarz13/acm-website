import React from "react"
import "./../styles/about.css"

class About extends React.Component { 
    render() {
        return(
            <div className = "about-container">
                <h4>About the ICPC</h4>
                <div>
                    <p>
                        The ICPC traces its roots to 1970 when the first competition was hosted by pioneers of 
                        the Alpha Chapter of the UPE Computer Science Honor Society. The initiative spread 
                        quickly within the United States and Canada as an innovative program to raise increase 
                        ambition, problem-solving aptitude, and opportunities of the strongest students in the field of computing.<br/>
                        Over time, the contest evolved into a multi-tier competition with the first championship round conducted in 1977. 
                        Since then, the contest has expanded into a worldwide collaborative of universities hosting regional competitions 
                        that advance teams to the annual global championship round, the ICPC World Finals.<br/>
                        The International Collegiate Programming Contest (ICPC) is the premier global programming competition conducted 
                        by and for the world’s universities. The ICPC is affiliated with the ICPC Foundation and is headquartered at Baylor University.<br/>
                        The contest fosters creativity, teamwork, and innovation in building new software programs, 
                        and enables students to test their ability to perform under pressure. The contest has raised 
                        aspirations and performance of generations of the world’s problem solvers in the computing sciences and engineering.
                    </p>
                </div>
            </div>
        )
    }
}

export default About 