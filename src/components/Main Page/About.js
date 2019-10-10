import React from "react"
import "./../styles/about.css"

class About extends React.Component { 
    render() {
        return(
            <div className = "about-container">
                <h4>About the ICPC</h4>
                <div>
                    <p>
                        The ACM (Association for Computing Machinery) International Collegiate Programming Contest (ICPC) traces
                        its roots to a competition held at Texas A&M in 1970 hosted by the Alpha Chapter of the UPE Computer
                        Science Honor Society. The idea quickly gained popularity within the United States and Canada as an
                        innovative initiative to assist in the development of top students in the emerging field of computer
                        science.
                        <br/>The contest evolved into a multi-tier competition with the first Finals held at the ACM Computer Science
                        Conference in 1977. Headquartered at Baylor University since the 1980s, the contest has expanded into a
                        global network of universities hosting regional competitions that advance teams to the World Finals.
                        <br/>Since IBM began its sponsorship of the ACM-ICPC World Finals in 1997, the contest has increased by a
                        factor of 7.5. Participation has grown to involve several tens of thousands of the finest students and
                        faculty in computing disciplines at 1,756 universities from 82 countries on six continents.
                        <br/>The contest fosters creativity, teamwork, and innovation in building new software programs, and enables
                        students to test their ability to perform under pressure. Quite simply, it is the oldest, largest, and
                        most prestigious programming contest in the world.
                    </p>
                </div>
            </div>
        )
    }
}

export default About 