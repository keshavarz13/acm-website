import React from "react"
import { Button, Paper, Typography, Checkbox, FormControlLabel, FormControl, Input, InputLabel } from '@material-ui/core';
import ContestantFields from "./contestantFields"
import "./../styles/register.css"


class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            teamname: "",
            institution: "",
            country: "",
            contestant1: {

            },
            contestant2: {

            },
            contestant3: {

            },
        }
        this.contestantChange = this.contestantChange.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name] : event.target.value
        })
        {console.log(this.state)}
    }

    contestantChange(contestantNumber, contestant) {
        if (contestantNumber === '1') {
            this.state.contestant1 = contestant;
        }
        else if(contestantNumber === '2') {
            this.state.contestant2 = contestant;
        }
        else if(contestantNumber === '3') {
            this.state.contestant3 = contestant;
        }
    }

    render() {
        return(
            <div className="register_container">                
                <h1 className="register_page_header">Contest Registration</h1>
                <h3 className="register_page_second_header">19th Amirkabir International Collegiate Programming Contest - 8th of November 2019</h3>
                <div className="team_box">
                    <h2 className="team_header">Team Information</h2>
                    <FormControl required>
                        <InputLabel htmlFor="teamname">Team Name</InputLabel>
                        <Input
                            className="text_box"
                            name="teamname"
                            onChange={this.handleChange}
                        />
                    </FormControl>                    
                    <FormControl required>
                        <InputLabel htmlFor="institution">Institution</InputLabel>
                        <Input
                            className="text_box"
                            name="institution"
                            onChange={this.handleChange}
                        />
                    </FormControl>
                    <FormControl required>
                        <InputLabel htmlFor="country">Country</InputLabel>
                        <Input
                            className="text_box"
                            name="country"
                            onChange={this.handleChange}
                        />
                    </FormControl>
                </div>
                <hr/>
                <ContestantFields
                    memberNumber="1"
                    contestant={this.contestantChange}
                />
                <hr/>
                <ContestantFields
                    memberNumber="2"
                    contestant={this.contestantChange}
                />
                <hr/>
                <ContestantFields
                    memberNumber="3"
                    contestant={this.contestantChange}
                />
            </div>

        )
    }
}

export default Register