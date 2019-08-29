import React from "react"
import { Dialog, DialogTitle, DialogContentText, DialogContent, 
         DialogActions, Select, MenuItem, Button, Typography, 
         Checkbox, FormControl, 
         Input, InputLabel, OutlinedInput } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';

class contestantFields extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstname: "",
            lastname: "",
            gender: "",    
            shirt: "",     
            firstname: "",   
            edu_level: "",
            studentnumber: "",
            email: "",
            phone: "",
            rules: "false",
            local_rules: false,
            regional_rules: false,
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this)
        this.OpenLocalRules = this.OpenLocalRules.bind(this)
        this.CloseLocalRules = this.CloseLocalRules.bind(this)
        this.OpenRegionalRules = this.OpenRegionalRules.bind(this)
        this.CloseRegionalRules = this.CloseRegionalRules.bind(this)
        this.handleContestantChange = this.handleContestantChange.bind(this)
    }

    OpenLocalRules() {
        this.setState({
            local_rules: true
        })
    }
    CloseLocalRules() {
        this.setState({
            local_rules: false
        })
    }

    OpenRegionalRules() {
        this.setState({
            regional_rules: true
        })
    }
    CloseRegionalRules() {
        this.setState({
            regional_rules: false
        })
    }

    handleChange(event) {
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    handleCheckboxChange(event) {
        this.setState({
            rules: event.target.checked
        })
    }

    handleContestantChange() {
        this.props.contestant(this.props.memberNumber, this.state)
    }

    render() {
        return(
            <div onChange={this.handleContestantChange} className="contestant_box">
                <div className="contestant_header_box">
                    <PersonIcon />
                    <h2 className="contestant_header">Contestant #{this.props.memberNumber}</h2>
                </div>
                <div>
                    <FormControl margin="normal" required>
                        <InputLabel htmlFor="firstname">First Name</InputLabel>
                        <Input
                            className="text_box"
                            name="firstname"
                            type="text"
                            onChange={this.handleChange}
                        />
                    </FormControl>
                    <FormControl margin="normal" required >
                        <InputLabel htmlFor="lastname">Last Name</InputLabel>
                        <Input
                            className="text_box"
                            name="lastname"
                            type="text"
                            onChange={this.handleChange}
                        />
                    </FormControl>
                    <FormControl margin="normal" required>
                        <InputLabel htmlFor="gender">Gender</InputLabel>
                        <Select 
                            className="text_box"
                            value={this.state.gender}
                            onChange={this.handleChange}
                            name="gender"
                        >
                            <MenuItem value={"Male"}>Male</MenuItem>
                            <MenuItem value={"Female"}>Female</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl margin="normal" required>
                        <InputLabel htmlFor="shirt">Shirt</InputLabel>
                        <Select 
                            className="text_box"
                            value={this.state.shirt}
                            onChange={this.handleChange}
                            name="shirt"
                        >
                            <MenuItem value={"3X-Large"}>3X-Large</MenuItem>
                            <MenuItem value={"2X-Large"}>2X-Large</MenuItem>
                            <MenuItem value={"X-Large"}>X-Large</MenuItem>
                            <MenuItem value={"Large"}>Large</MenuItem>
                            <MenuItem value={"Medium"}>Medium</MenuItem>
                            <MenuItem value={"Small"}>Small</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div>
                    <FormControl margin="normal" required >
                        <InputLabel htmlFor="studentnumber">Student Number</InputLabel>
                        <Input
                            className="text_box"
                            type="number"
                            name="studentnumber"
                            onChange={this.handleChange}
                        />
                    </FormControl>
                    <FormControl margin="normal" required>
                        <InputLabel htmlFor="edu_level">Current Educational Level</InputLabel>
                        <Select 
                            className="text_box"
                            value={this.state.edu_level}
                            onChange={this.handleChange}
                            name="edu_level"
                        >
                            <MenuItem value={"Undergraduate"}>Undergraduate(BSc.)</MenuItem>
                            <MenuItem value={"Graduate"}>Graduate(MSc.)</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl margin="normal" required >
                        <InputLabel htmlFor="email">Email</InputLabel>
                        <Input
                            className="text_box"
                            name="email"
                            onChange={this.handleChange}
                            type="email"
                        />
                    </FormControl>
                    <FormControl margin="normal" required >
                        <InputLabel htmlFor="phone">Phone Number</InputLabel>
                        <Input
                            className="text_box"
                            name="phone"
                            type="number"
                            placeholder="989121111111"
                            onChange={this.handleChange}
                        />
                    </FormControl>
                </div>
                <div className="contestant_rule_box">
                    <div className="contestant_rule_checkbox">
                        <Checkbox
                            name="rules"
                            color="default"
                            onChange={this.handleCheckboxChange}
                        />     
                    </div>       
                    <h4>
                        I have read and accept&nbsp;
                        <a href="#" style={{fontFamily: "inherit", color: "#00b0ff"}} onClick={this.OpenRegionalRules}>Regional Rules </a> 
                        and&nbsp;
                        <a href="#" style={{fontFamily: "inherit", color: "#00b0ff"}} onClick={this.OpenLocalRules}>Local Rules</a>.
                    </h4>
                    <Dialog
                        open={this.state.regional_rules}
                        onClose={this.CloseRegionalRules}
                    >
                        <DialogTitle>
                            {"Regional Rules"}
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                <h3>Mission</h3>
                                <p>
                                    The ACM International Collegiate Programming Contest (ICPC) provides college 
                                    students with opportunities to interact with students from other universities 
                                    and to sharpen and demonstrate their problem-solving, programming, and teamwork skills. 
                                    The contest provides a platform for ACM, industry, and academia to encourage and 
                                    focus public attention on the next generation of computing professionals as they pursue excellence.
                                </p>

                                <h3>Introduction</h3>
                                <p>
                                    The contest is a two-tiered competition among teams of students representing 
                                    institutions of higher education. Teams first compete in regional contests 
                                    held around the world from September to November each year. 
                                    The winning team from each regional contest qualifies to advance to 
                                    the ACM International Collegiate Programming Contest World Finals, 
                                    typically held the following March to mid-April. 
                                    Additional high-ranking teams may be invited to the World Finals as wild card teams.
                                </p>

                                <h3>Organization</h3>
                                <p>
                                    The ICPC International Steering Committee is responsible 
                                    for establishing contest rules, policy and guidelines. 
                                    They oversee the conducting of regional contests, resolve regional appeals, 
                                    rule on international issues, recommend ways to make the contest 
                                    accessible and attractive to international participants and review 
                                    variances in regional rules. There are two standing subcommittees, 
                                    the Appeals Committee and the Eligibility Committee.
                                </p>
                                <p>
                                    The ICPC is organized according to the <a href="http://icpc.baylor.edu/icpc/Info/ppgs.pdf">ICPC Policies and Procedures</a>. 
                                    For each regional contest, the Regional Contest Director (RCD) 
                                    is charged with executing a regional contest in accordance with the 
                                    regional rules and ICPC policies, procedures, and guidelines. 
                                    Regional rules may vary to accommodate differences in educational 
                                    systems and host computing facilities. Additional rules, exceptions, 
                                    and other information pertaining to a specific regional contest can 
                                    be found at the <a href="http://cm2prod.baylor.edu/ICPCWiki/Wiki.jsp?page=Regionals">Regionals</a> Contest Website. 
                                    Those rules do not supersede these rules or the World Finals rules.
                                </p>

                                <h3>Localization</h3>
                                The language of the Contest is English. 
                                All written contest materials will be in English. 
                                Additional languages may be used in regional contests. 
                                Terms which have undefined or different meanings outside 
                                the United States must be defined or redefined appropriately in 
                                that region's Region-Specific Rules. Rules may vary at the 
                                regional level to accommodate these differences.

                                <h3>Team Composition</h3>
                                A representative of the sponsoring institution of higher education, 
                                typically a faculty member, must serve as or designate the team coach. 
                                The coach certifies the eligibility of contestants and serves as the 
                                official point-of-contact with the team prior to and during 
                                contest activities. A team may only have one coach.<br/>
                                The coach must fully register teams in the <a href="http://icpc.baylor.edu/">ICPC Registration 
                                System</a> within the time set by the regional rules which, for all 
                                Regional Contests, is no later than the earlier date of 7 days 
                                before the contest and November 8. A team is not eligible to compete 
                                in the regional contest until the regional contest director has accepted 
                                the team in the web registration system. Teams failing to comply with any 
                                of these requirements will be ruled ineligible to compete. Only registered 
                                reserves may be substituted for contestants. Such substitutions must be 
                                entered in the ICPC Registration System by the regional contest director before the contest begins.<br/>
                                Each team consists of three contestants who are eligible to 
                                compete in the ICPC World Finals as described under <a href="http://cm2prod.baylor.edu/ICPCWiki/Wiki.jsp?page=Regional%20Rules#section-Regional+Rules-AdvancingToTheWorldFinals">
                                Advancing to the World Finals</a>. 
                                The team's contestants must satisfy the following eligibility rules.

                                <h3>Contestant Eligibility Rules</h3>
                                Please refer to the Eligibility Decision Tree to more easily determine eligibility

                                <h3>Basic Requirements</h3>
                                A student must be willing and able to compete in the World Finals.<br/>
                                A student must be enrolled in a degree program at the sponsoring institution with 
                                    at least a half-time load. This rule is not to be construed as disqualifying co-op students, 
                                    exchange students, or students serving internships.<br/>
                                A student may compete for only one institution during a contest year.<br/>
                                A student who has competed in two World Finals is NOT eligible to compete.<br/>
                                A student who has competed in five Regional Contests is NOT eligible to compete.<br/>

                                <h3>Period of Eligibility</h3>
                                A student who meets the Basic Requirements and FIRST 
                                    began post-secondary studies in 2006 or later is eligible to compete.<br/>
                                A student who meets the Basic Requirements and was born in 1987 or later is eligible to compete.

                                <h3>Extending the Period of Eligibility</h3>
                                A coach may petition the ICPC Eligibility Committee to extend the Period of 
                                    Eligibility for a student whose full-time studies have been interrupted or extended. 
                                    This includes military or civilian service, illness, work/studies, or personal reasons.<br/>
                                The coach must demonstrate that such an extension would not provide an unfair advantage to the team.
                                A petition will be approved routinely if the student meets the Basic Requirements and has not completed more than the equivalent of eight semesters of full-time study as of the date of the regional contest.
                                To make such a request, the coach must petition the ICPC Eligibility Committee at 
                                least three weeks before the regional contest. The ICPC Eligibility Committee will render a decision within five business days.

                                <h3>Where to Compete</h3>
                                Each team is expected to compete only within its defined region. However, 
                                a team with a valid reason (e.g. driving distance) may request to compete 
                                in a different region for a given year. The team coach must submit such a 
                                request to the Director of Regional Contests (DRC), who will approve the 
                                request only if the decision is unanimous among all affected Directors.<br/>
                                An institution may send contestants to only one regional contest in a given year.

                                <h3>Regional Contest Attendance</h3>
                                All team members must attend all contest activities as 
                                specified by the regional contest director for that region. 
                                The coach is expected to attend or be available by phone during contest activities. 
                                Failure to attend any of the designated contest events will result in automatic 
                                disqualification and forfeiture of any scholarships and prizes.

                                <h3>Conduct of a Regional Contest</h3>
                                <p>
                                    Solutions to problems submitted for judging are called runs. 
                                    Each run is judged as accepted or rejected by a judge, 
                                    and the team is notified of the results.
                                </p>
                                <p>
                                    Notification of accepted runs may be suspended at 
                                    an appropriate time to keep the final results secret. 
                                    A general announcement to that effect will be made during the contest. 
                                    Notification of rejected runs will continue until the end of the contest.
                                </p>
                                <p>
                                    A contestant may submit a claim of ambiguity or error in a problem 
                                    statement by submitting a clarification request to a judge. 
                                    If the judges agree that an ambiguity or error exists, 
                                    a clarification will be issued to all contestants.
                                </p>
                                <p>
                                    Contestants are not to converse with anyone except members of 
                                    their team and personnel designated by the regional contest director. 
                                    Systems support staff may advise contestants on system-related 
                                    problems such as explaining system error messages.
                                </p>
                                <p>
                                    While the contest is scheduled for a particular time length (typically five hours), 
                                    the regional contest director has the authority to alter the length of the contest in 
                                    the event of unforeseen difficulties. Should the contest duration be altered, 
                                    every attempt will be made to notify contestants in a timely and uniform manner.
                                </p>
                                <p>
                                    A team may be disqualified by the regional contest director for any 
                                    activity that jeopardizes the contest such as dislodging extension cords, 
                                    unauthorized modification of contest materials, or distracting behavior.
                                </p>
                                <p>
                                    At least six problems will be posed. So far as possible, problems 
                                    will avoid dependence on detailed knowledge of a particular 
                                    applications area or particular contest language.
                                </p>

                                <h3>Scoring of a Regional Contest</h3>
                                <p>
                                    A problem is solved when it is accepted by the judges. 
                                    The judges are solely responsible for accepting or rejecting submitted runs. 
                                    In consultation with the judges, the Regional Contest Director determines the winners of the regional contest. 
                                    The regional contest director and judges are empowered to adjust for or 
                                    adjudicate unforeseen events and conditions. Their decisions are final.
                                </p>
                                <p>
                                    Teams are ranked according to the most problems solved. 
                                    For the purposes of awards, or in determining qualifier(s) 
                                    for the World Finals, teams who solve the same number of problems 
                                    are ranked by least total time. The total time is the sum of the 
                                    time consumed for each problem solved. The time consumed for a 
                                    solved problem is the time elapsed from the beginning of the contest 
                                    to the submittal of the accepted run plus 20 penalty minutes for every 
                                    rejected run for that problem regardless of submittal time. 
                                    There is no time consumed for a problem that is not solved. 
                                </p>
                                <p>
                                    It is the responsibility of the Regional Contest Director to 
                                    specify any additional tie-breakers. Tie-breaker policies 
                                    must be announced to contestants before the contest begins.
                                </p>

                                <h3>Regional Contest Computing Environment</h3>
                                <p>
                                    The programming languages of the regional contest will include C/C++. 
                                    Additional programming languages may be used. The programming languages 
                                    of the World Finals are Java and C/C++. Prior to the World Finals, 
                                    the judges will have solved all problems in Java and C/C++.
                                </p>
                                <p>
                                    Each team will use a single workstation. 
                                    The regional contest director is responsible for 
                                    determining that teams have reasonably equivalent computing resources.
                                </p>
                                <p>
                                    Each Regional Contest Director determines whether contestants 
                                    may bring materials for use during the contest. Please see the specific 
                                    regional rules at the ICPC Regional Contest Web Site - regionals. 
                                    At the World Finals, no printed materials or electronic devices may 
                                    be brought into the contest area. On-line reference materials will 
                                    be made available as described at the ICPC World Finals Reference Materials Site. 
                                    Each team will be permitted to provide a PDF of up to 25 pages of notes 
                                    within the limits described during Team Certification. Three copies will 
                                    be printed and placed at the team's workstation for use during the World Finals.
                                </p>

                                <h3>Complaints, Appeals, and Remedies</h3>
                                <p>
                                    If irregularities or misconduct are observed during the contest, 
                                    team members or coaches should bring them to the attention of 
                                    the contest officials so that action may be taken as soon as possible. 
                                    After the conclusion of the contest and the results have been made public, 
                                    coaches may file complaints or appeals as follows:
                                </p>
                                Within 2 business days
    
                                The coach may file a complaint by sending an email containing a text message with no enclosures to the Contest Manager. The Contest Manager will forward the complaint to the Regional Contest Director, Super Regional Director, and Director of Regional Contests, copying the coach.
                                Within 3 more business days
                                The RCD shall respond to the complaint.
                                Within 1 more business day
                                The coach may file an appeal by sending email to the Contest Manager who will forward the appeal to the Appeals Committee copying the coach and RCD.
                                Within 4 more business day
                                he Appeals Committee will investigate the circumstances of the appeal and notify the coach and RCD of their decision.
                                This process is governed as follows:

                                The results of the regional contest are not final until the complaints and appeals process has run its course.
                                Only coaches may file complaints and appeals.
                                An appeal must be based on one or more of the following circumstances: violations of the Rules, misconduct by teams, or gross misconduct by contest officials with the intent to do harm.
                                The decisions of the judges are final. Specifically, a decision on a problem submission MAY NOT be appealed.
                                The Appeals Committee overturns decisions only under extraordinary circumstances.
                                The decision of the Appeals Committee is final.
                                No additional finals invitations will be given to remedy to a complaint.
                                All complaints will be acknowledged.
                                The appeal will be automatically rejected if the above procedure is not followed.

                                <h3>Advancing to the World Finals</h3>

                                Teams qualify to advance to the World Finals through Regional Contests 
                                and by satisfying all rules posted in The Rules of the ACM-ICPC World Finals. Specifically:
                                
                                Only one team from a given institution may advance to the World Finals. 
                                Team members will be provided free one-year memberships in ACM at On-Site Registration. 
                                No team member on the qualifying team may have competed as 
                                a contestant in two previous World Finals.
                                
                                The coach of a qualifying team is the point-of-contact prior to 
                                and during World Finals activities. The coach must complete certification 
                                at the Team Certification Web Site within five (5) business days of notification. 
                                Qualifying teams will be issued an invitation by email and postal mail 
                                within one business day of completing certification.
                                
                                Qualifying teams requiring visas must initiate the process of 
                                applying for visas within 10 business days of being issued an invitation. 
                                Teams failing to comply with any of these requirements will be ruled 
                                ineligible to compete in the World Finals. Upon completion of these requirements, 
                                a qualifying team will be advanced to the World Finals.
                                
                                A team advancing to the World Finals will be comprised of the same 
                                three members as when it qualified. In the event that a team member 
                                is unwilling, unable or unfit to compete in the World Finals, the coach 
                                must notify the ICPC Manager in a timely manner. A team member who is 
                                unwilling or unfit to compete in the World Finals will be disqualified 
                                from further ICPC competitions. The team member may appeal disqualification to the Appeals Committee.
                                
                                At on-site registration, participants must provide picture ID 
                                (passport, drivers license, etc). Contestants must show proof of 
                                enrollment at the university during the term of the regional contest 
                                at which they qualified. A letter on university stationary with the 
                                signature of a university official accompanied by an English translation is sufficient.

                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.CloseRegionalRules} color="default" autoFocus>
                                OK
                            </Button>
                        </DialogActions>
                    </Dialog>

                    <Dialog
                        open={this.state.local_rules}
                        onClose={this.CloseLocalRules}
                    >
                        <DialogTitle>
                            {"Amirkabir Local Contest Information and Rules"}
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                <h3>Rules</h3>
                                <ul>
                                    <ui>1. Every team should consist of 3 members.<br/></ui>
                                    <ui>2. Number of problems would be between 8 to 12.<br/></ui>
                                    <ui>3. Problems are in English.<br/></ui>
                                    <ui>4. Contest duration is 5 hours.<br/></ui>
                                    <ui>5. Bringing every electronical device to the contest location is forbidden.<br/></ui>
                                    <ui>6. Each team can bring as much papers and printed materials as it likes.<br/></ui>
                                    <ui>7. Only one computer is given to each team.<br/></ui>
                                    <ui>8. Ranking system: The team with more solved problems is ranked higher. 
                                        Tied teams are ranked related to their times.(A team with less time is considered to be better) 
                                        The time for each team is the sumation of the times of problems solved 
                                        (time elapsed from the beginning of contest) plus 20 minutes penalty 
                                        for each not accepted submission of solved problems.<br/></ui>
                                    <ui>9. Participation of at least one of the members of each team in the coordinations session the day before the contest day is mandatory.<br/></ui>
                                    <ui>10. At least 3 teams will be qualified for the Asia region - Tehran site. for more details please read Farsi rules.<br/></ui>
                                    <ui>11. Further explanations in coordination session.<br/></ui>
                                </ul>

                                <h3>Computing Environment</h3>
                                <ul>
                                    <ui>
                                        <h4>Compilers:</h4>
                                            Javac (JDK version 1.8)<br/>
                                            g++ 5.4<br/>
                                            gcc 5.4<br/>
                                            python 2.7.12<br/>
                                            python 3.5.2<br/>
                                            Development Tools<br/>
                                            CodeBlocks 16.01<br/>
                                            Eclipse Oxygen 4.7.0<br/>
                                            pycharm 2017.2<br/>
                                            netbeans 8.1<br/>
                                            intellij idea community 2017.3<br/>
                                    </ui>

                                    <ui>
                                        <h4>Reference Materials:</h4>
                                    </ui>

                                    <ui>
                                        <h4>Editors:</h4>
                                            vim 7.14.1689<br/>
                                            visual studio code 1.18.1<br/>
                                            sublime text build 3126<br/>
                                            kdevelop 4.7.3<br/>
                                            kate 15.12.3<br/>
                                            gvim 7.14.1689<br/>
                                            Geany 1.2.7<br/>
                                            gedit 3.18.3<br/>
                                            emacs 24.5.1<br/>
                                    </ui>

                                    <ui>
                                        <h4>Contest Environment:</h4>
                                            DOMJudge 5.2(<a href="http://www.domjudge.org/docs/team-manual.pdf">DOMJudge Team Guide</a>)
                                    </ui>
                                </ul>

                                <h3>Problem Selection</h3>
                                    The scientific committee is responsible for preparing 
                                    the contest problems which are selected from those proposed by its members.<br/>
                                    So far as possible, the problems will avoid dependence on 
                                    detailed knowledge of a particular application area or programming language.
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.CloseLocalRules} color="default" autoFocus>
                                OK
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>
            </div>

        )
    }
}

export default contestantFields