import React from "react"
import { Select, MenuItem, Button, Paper, Typography, Checkbox, FormControlLabel, FormControl, Input, InputLabel } from '@material-ui/core';


class contestantFields extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstname: "",
            lastname: "",
            gender: "",         
            firstname: "",   
            edu_level: "",
            studentnumber: "",
            email: "",
            phone: "",
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleContestantChange = this.handleContestantChange.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleContestantChange() {
        this.props.contestant(this.props.memberNumber, this.state)
    }

    render() {
        return(
            <div onChange={this.handleContestantChange} className="contestant_box">
                <h2 className="contestant_header">Contestant #{this.props.memberNumber}</h2>
                <div>
                    <FormControl margin="normal" required >
                    <InputLabel htmlFor="firstname">First Name</InputLabel>
                    <Input
                        className="text_box"
                        name="firstname"
                        onChange={this.handleChange}
                    />
                    </FormControl>
                    <FormControl margin="normal" required >
                    <InputLabel htmlFor="lastname">Last Name</InputLabel>
                    <Input
                        className="text_box"
                        name="lastname"
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
                </div>

                <div>
                    <FormControl margin="normal" required >
                    <InputLabel htmlFor="studentnumber">Student Number</InputLabel>
                    <Input
                        className="text_box"
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
                    />
                    </FormControl>
                    <FormControl margin="normal" required >
                    <InputLabel htmlFor="phone">Phone Number</InputLabel>
                    <Input
                        className="text_box"
                        name="phone"
                        onChange={this.handleChange}
                    />
                    </FormControl>
                </div>
            </div>

        )
    }
}

export default contestantFields