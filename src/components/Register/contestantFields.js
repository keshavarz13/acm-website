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
    }

    render() {
        return(
            <div>
                <h2>Contestant #{this.props.memberNumber}</h2>
                <div>
                    <FormControl margin="normal" required >
                    <InputLabel htmlFor="firstname">First Name</InputLabel>
                    <Input
                        className="text_box"
                        onChange={event => this.setState({
                            firstname: event.target.value})
                        }
                    />
                    </FormControl>
                    <FormControl margin="normal" required >
                    <InputLabel htmlFor="lastname">Last Name</InputLabel>
                    <Input
                        className="text_box"
                        onChange={event => this.setState({
                            lastname: event.target.value})
                        }
                    />
                    </FormControl>
                    <FormControl margin="normal" required>
                        <InputLabel htmlFor="gender">Gender</InputLabel>
                        <Select 
                            className="text_box"
                            value={this.state.gender}
                            onChange={event => this.setState({ 
                                gender: event.target.value
                                }) 
                            }
                            inputProps={{
                                name: "gender",
                            }}
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
                        onChange={event => this.setState({
                            studentnumber: event.target.value})
                        }
                    />
                    </FormControl>
                    <FormControl margin="normal" required>
                        <InputLabel htmlFor="edu_level">Current Educational Level</InputLabel>
                        <Select 
                            className="text_box"
                            value={this.state.edu_level}
                            onChange={event => this.setState({ 
                                edu_level: event.target.value
                                }) 
                            }
                            inputProps={{
                                name: "edu_level",
                            }}
                        >
                            <MenuItem value={"Undergraduate"}>Undergraduate(BSc.)</MenuItem>
                            <MenuItem value={"Graduate"}>Graduate(MSc.)</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl margin="normal" required >
                    <InputLabel htmlFor="email">Email</InputLabel>
                    <Input
                        className="text_box"
                        onChange={event => this.setState({
                            email: event.target.value})
                        }
                    />
                    </FormControl>
                    <FormControl margin="normal" required >
                    <InputLabel htmlFor="phone">Phone Number</InputLabel>
                    <Input
                        className="text_box"
                        onChange={event => this.setState({
                            phone: event.target.value})
                        }
                    />
                    </FormControl>
                </div>
            </div>

        )
    }
}

export default contestantFields