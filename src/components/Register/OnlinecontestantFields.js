import React from "react"
import { Select, MenuItem, FormControl, Input, InputLabel } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';

class OnlinecontestantFields extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            first_name: "",
            last_name: "",
            gender: "",    
            shirt_size: "",     
            edu_level: "",
            student_number: "",
            email: "",
            phone_number: "",
            local_rules: false,
            regional_rules: false,
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
                <div className="contestant_header_box">
                    <PersonIcon />
                    <h2 className="contestant_header">Contestant #{this.props.memberNumber}</h2>
                </div>
                <div>
                    <FormControl margin="normal" required>
                        <InputLabel htmlFor="first_name">First Name</InputLabel>
                        <Input
                            className="text_box"
                            name="first_name"
                            type="text"
                            onChange={this.handleChange}
                        />
                    </FormControl>
                    <FormControl margin="normal" required >
                        <InputLabel htmlFor="last_name">Last Name</InputLabel>
                        <Input
                            className="text_box"
                            name="last_name"
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
                            <MenuItem value={"M"}>Male</MenuItem>
                            <MenuItem value={"F"}>Female</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl margin="normal" required >
                        <InputLabel htmlFor="student_number">Student Number</InputLabel>
                        <Input
                            className="text_box"
                            type="number"
                            name="student_number"
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
                            <MenuItem value={"BSC"}>Undergraduate(BSc.)</MenuItem>
                            <MenuItem value={"MSC"}>Graduate(MSc.)</MenuItem>
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
                        <InputLabel htmlFor="phone_number">Phone Number</InputLabel>
                        <Input
                            className="text_box"
                            name="phone_number"
                            type="number"
                            placeholder="989121111111"
                            onChange={this.handleChange}
                        />
                    </FormControl>
                </div>
            </div>
        )
    }
}

export default OnlinecontestantFields