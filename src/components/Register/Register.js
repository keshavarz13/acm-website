import React from "react"
import { Button, Paper, Typography, Checkbox, FormControlLabel, FormControl, Input, InputLabel } from '@material-ui/core';
import ContestantFields from "./contestantFields"
import "./../styles/register.css"


class Register extends React.Component {
    render() {
        return(
            <div className="register_container">
                <h1 className="register_page_header">Contest Registration</h1>
                <h3 className="register_page_second_header">19th Amirkabir International Collegiate Programming Contest - 8th of November 2019</h3>
                <div>
                    <h2>Team Information</h2>
                    <FormControl required>
                        <InputLabel htmlFor="team">Team Name</InputLabel>
                        <Input
                            id="team"
                            className="text_box"
                            // onChange={event => setTeamname(event.target.value)}
                        />
                    </FormControl>
                    <FormControl required>
                        <InputLabel htmlFor="institution">Institution</InputLabel>
                        <Input
                            id="institution"
                            className="text_box"
                        />
                    </FormControl>
                    <FormControl required>
                        <InputLabel htmlFor="country">Country</InputLabel>
                        <Input
                            id="country"
                            className="text_box"
                        />
                    </FormControl>
                </div>
                <ContestantFields
                    memberNumber="1"

                />
                <ContestantFields
                    memberNumber="2"

                />
                <ContestantFields
                    memberNumber="3"

                />
            </div>

        )
    }
}

export default Register