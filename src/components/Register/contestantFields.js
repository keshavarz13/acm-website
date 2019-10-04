import React from "react"
import { Dialog, DialogTitle, DialogContent, 
         DialogActions, Select, MenuItem, Button, Typography, 
         Checkbox, FormControl, 
         Input, InputLabel, OutlinedInput } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import LocalRules from "./LocalRules"
import RegionalRules from "./RegionalRules"

class contestantFields extends React.Component {
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
            rules: "",
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
            [event.target.name]: event.target.checked
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
                    <FormControl margin="normal" required>
                        <InputLabel htmlFor="shirt_size">Shirt</InputLabel>
                        <Select 
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
                            <RegionalRules/>
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
                            <LocalRules/>
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