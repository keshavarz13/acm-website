import React from "react"
import { Select, MenuItem, FormControl, Input, InputLabel } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';

class contestantFields extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            first_name: "",
            first_name_error: "",
            last_name: "",
            last_name_error: "",
            gender: "",    
            gender_error: "",
            shirt_size: "",     
            shirt_size_error: "",
            edu_level: "",
            edu_level_error: "",
            student_number: "",
            student_number_error: "",
            email: "",
            email_error: "",
            phone_number: "",
            phone_number_error: "",
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleContestantChange = this.handleContestantChange.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name] : event.target.value
        }, () => {
            this.handleContestantChange()
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
                            error={this.state.first_name_error}
                            className="text_box"
                            name="first_name"
                            type="text"
                            onChange={this.handleChange}
                        />
                    </FormControl>
                    <FormControl margin="normal" required >
                        <InputLabel htmlFor="last_name">Last Name</InputLabel>
                        <Input
                            error={this.state.last_name_error}
                            className="text_box"
                            name="last_name"
                            type="text"
                            onChange={this.handleChange}
                        />
                    </FormControl>
                    <FormControl margin="normal" required>
                        <InputLabel htmlFor="gender">Gender</InputLabel>
                        <Select 
                            error={this.state.gender_error}
                            className="text_box"
                            value={this.state.gender}
                            onChange={this.handleChange}
                            name="gender"
                        >
                            <MenuItem value={"M"}>Male</MenuItem>
                            <MenuItem value={"F"}>Female</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl margin="normal" required>
                        <InputLabel htmlFor="shirt_size">Shirt</InputLabel>
                        <Select 
                            error={this.state.shirt_size_error}
                            className="text_box"
                            value={this.state.shirt_size}
                            onChange={this.handleChange}
                            name="shirt_size"
                        >
                            <MenuItem value={"3XL"}>3X-Large</MenuItem>
                            <MenuItem value={"2XL"}>2X-Large</MenuItem>
                            <MenuItem value={"XL"}>X-Large</MenuItem>
                            <MenuItem value={"L"}>Large</MenuItem>
                            <MenuItem value={"M"}>Medium</MenuItem>
                            <MenuItem value={"S"}>Small</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl margin="normal" required >
                        <InputLabel htmlFor="student_number">Student Number</InputLabel>
                        <Input
                            error={this.state.student_number_error}
                            className="text_box"
                            type="number"
                            name="student_number"
                            onChange={this.handleChange}
                        />
                    </FormControl>
                    <FormControl margin="normal" required>
                        <InputLabel htmlFor="edu_level">Current Educational Level</InputLabel>
                        <Select 
                            error={this.state.edu_level_error}
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
                            error={this.state.email_error}
                            className="text_box"
                            name="email"
                            onChange={this.handleChange}
                            type="email"
                        />
                    </FormControl>
                    <FormControl margin="normal" required >
                        <InputLabel htmlFor="phone_number">Phone Number</InputLabel>
                        <Input
                            error={this.state.phone_number_error}
                            className="text_box"
                            name="phone_number"
                            type="number"
                            placeholder="09121111111"
                            onChange={this.handleChange}
                        />
                    </FormControl>
                </div>
            </div>
        )
    }
}

export default contestantFields