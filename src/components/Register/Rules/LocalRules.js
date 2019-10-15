import React from "react"
import { DialogContentText } from '@material-ui/core';

function LocalRules() {
    return(
        <DialogContentText>
            <h3>Rules</h3>
            <p>
                Every team should consist of 3 members.<br/>
                Number of problems would be between 8 to 12.<br/>
                Problems are in English.<br/>
                Contest duration is about 5 hours.<br/>
                Bringing every electronic device to the contest location is forbidden.<br/>
                Each team can bring as many papers and printed materials as it likes.<br/>
                Only one computer is given to each team.<br/>
                Ranking system: The team with more solved problems is ranked higher. 
                    Tied teams are ranked related to their times. (A team with less time is considered to be better) 
                    The time for each team is the summation of the times of problems solved 
                    (time elapsed from the beginning of contest) plus 20 minutes penalty 
                    for each not accepted submission of solved problems.<br/>
                Participation of at least one of the members of each team in the coordinations session the day before the contest day is mandatory.<br/>
                At least 3 teams will be qualified for the Asia region - Tehran site.<br/>
                Further explanations in coordination session.<br/>
            </p>

            <h3>Computing Environment</h3>
            <p>
                <h4>Compilers:</h4>
                    Javac (JDK version 1.8)<br/>
                    g++ 5.4<br/>
                    gcc 5.4<br/>
                    python 2.7<br/>
                    python 3.5<br/>

                <h4>Development Tools:</h4>
                    CodeBlocks 13<br/>
                    Intellij idea Community 2017 (with Python Extension)<br/>

                <h4>Editors:</h4>
                    vim 7.4<br/>
                    Visual Studio Code 1.18.1<br/>
                    sublime text <br/>
                    kate 15.12<br/>
                    gvim 7.4<br/>
                    gedit 3.18<br/>
                    emacs 24.5<br/>

                <h4>Contest Environment:</h4>
                    DOMJudge 5.2(<a href="http://www.domjudge.org/docs/team-manual.pdf">DOMJudge Team Guide</a>)
            </p>

            <h3>Problem Selection</h3>
            <p>
                The scientific committee is responsible for preparing 
                the contest problems which are selected from those proposed by its members.<br/>
                So far as possible, the problems will avoid dependence on 
                detailed knowledge of a particular application area or programming language.
            </p>
        </DialogContentText>
    )
}

export default LocalRules