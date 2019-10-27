import React from "react"
import { Dialog, DialogTitle, DialogContent, DialogActions, Select, Grid, 
         FormControl, Input, InputLabel, MenuItem, Button, Checkbox } from '@material-ui/core';
import PeopleIcon from '@material-ui/icons/People';
import ReCAPTCHA from "react-google-recaptcha";
import "./../../styles/register.css"
import axios from 'axios'
import PersonIcon from '@material-ui/icons/Person';
import validator from 'validator';

class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            team_name: "",
            team_error: "",
            institution: "",
            institution_error: "",
            country: "",
            country_error: "",

            // ### 1 ###
            //First Contestant Info
            first_name_1: "",
            last_name_1: "",
            gender_1: "",    
            student_number_1: "",
            email_1: "",

            //First Contestant errors
            first_name_1_error: "",
            last_name_1_error: "",
            gender_1_error: "",
            student_number_1_error: "",
            email_1_error: "",

            // ### 2 ###
            //Second Contestant Info
            first_name_2: "",
            last_name_2: "",
            gender_2: "",    
            student_number_2: "",
            email_2: "",

            //Second Contestant errors
            first_name_2_error: "",
            last_name_2_error: "",
            gender_2_error: "",
            student_number_2_error: "",
            email_2_error: "",

            // ### 3 ###
            //Third Contestant Info
            first_name_3: "",
            last_name_3: "",
            gender_3: "",    
            student_number_3: "",
            email_3: "",

            //Third Contestant errors
            first_name_3_error: "",
            last_name_3_error: "",
            gender_3_error: "",
            student_number_3_error: "",
            email_3_error: "",

            recaptcha: "",
        }
        this.field_alert= "0"
        this.duplication_error_string= ""
        this.duplication_error_string_alert="0"
        this.handleChange = this.handleChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    onChange(value) {
        this.setState({
            recaptcha: value
        })
    }

    handleChange(event) {
        this.setState({
            [event.target.name] : event.target.value,
            team_error: "",
            institution_error: "",
            country_error: "",

            first_name_1_error: "",
            last_name_1_error: "",
            gender_1_error: "",
            student_number_1_error: "",
            email_1_error: "",

            first_name_2_error: "",
            last_name_2_error: "",
            gender_2_error: "",
            student_number_2_error: "",
            email_2_error: "",

            first_name_3_error: "",
            last_name_3_error: "",
            gender_3_error: "",
            student_number_3_error: "",
            email_3_error: "",
        })
        this.field_alert = "0"
        this.duplication_error_string = ""
        this.duplication_error_string_alert = "0"
    }

    onSubmit(event) {
        event.preventDefault();
        if(!validator.isEmail(this.state.email_1)) {
            this.duplication_error_string = "Contestant #1 email is invalid!"
            this.duplication_error_string_alert = "1"
        }
        if(!validator.isEmail(this.state.email_2)) {
            this.duplication_error_string += "\nContestant #2 email is invalid!"
            this.duplication_error_string_alert = "1"
        }
        if(!validator.isEmail(this.state.email_3)) {
            this.duplication_error_string += "\nContestant #3 email is invalid!"
            this.duplication_error_string_alert = "1"
        }

        if(this.state.email_1 == this.state.email_2 || 
            this.state.email_1 == this.state.email_3 || 
            this.state.email_3 == this.state.email_2) {
            this.duplication_error_string += "You have entered duplicate Email!"
            this.duplication_error_string_alert = "1"
        }

        if(this.state.student_number_1 == this.state.student_number_2 || 
            this.state.student_number_1 == this.state.student_number_3 || 
            this.state.student_number_2 == this.state.student_number_3) {
                this.duplication_error_string += "\nYou have entered duplicate Student Number!"
                this.duplication_error_string_alert = "1"
        }

        if(this.state.country == "") {
            this.setState({
                country_error: "error",
            })
            this.field_alert = "1"
        }
        if(this.state.team_name == "") {
            this.setState({
                team_error: "error",
            })
            this.field_alert = "1"
        }
        if(this.state.institution == "") {
            this.setState({
                institution_error: "error",
            })
            this.field_alert = "1"
        }


        if(this.state.first_name_1 == "") {
            this.setState({
                first_name_1_error: "error",
            })
            this.field_alert = "1"
        }
        if(this.state.last_name_1 == "") {
            this.setState({
                last_name_1_error: "error",
            })
            this.field_alert = "1"
        }
        if(this.state.gender_1 == "") {
            this.setState({
                gender_1_error: "error",
            })
            this.field_alert = "1"
        }
        if(this.state.student_number_1 == "") {
            this.setState({
                student_number_1_error: "error",
            })
            this.field_alert = "1"
        }
        if(this.state.email_1 == "") {
            this.setState({
                email_1_error: "error",
            })
            this.field_alert = "1"
        }


        if(this.state.first_name_2 == "") {
            this.setState({
                first_name_2_error: "error",
            })
            this.field_alert = "1"
        }
        if(this.state.last_name_2 == "") {
            this.setState({
                last_name_2_error: "error",
            })
            this.field_alert = "1"
        }
        if(this.state.gender_2 == "") {
            this.setState({
                gender_2_error: "error",
            })
            this.field_alert = "1"
        }
        if(this.state.student_number_2 == "") {
            this.setState({
                student_number_2_error: "error",
            })
            this.field_alert = "1"
        }
        if(this.state.email_2 == "") {
            this.setState({
                email_2_error: "error",
            })
            this.field_alert = "1"
        }


        if(this.state.first_name_3 == "") {
            this.setState({
                first_name_3_error: "error",
            })
            this.field_alert = "1"
        }
        if(this.state.last_name_3 == "") {
            this.setState({
                last_name_3_error: "error",
            })
            this.field_alert = "1"
        }
        if(this.state.gender_3 == "") {
            this.setState({
                gender_3_error: "error",
            })
            this.field_alert = "1"
        }
        if(this.state.student_number_3 == "") {
            this.setState({
                student_number_3_error: "error",
            })
            this.field_alert = "1"
        }
        if(this.state.email_3 == "") {
            this.setState({
                email_3_error: "error",
            })
            this.field_alert = "1"
        }


        if(this.field_alert == "1") {
            alert("Please fill empty fields!")
        }
        else if(this.duplication_error_string_alert == "1") {
            alert(this.duplication_error_string)
        }
        
        else {
            const cont1 = {
                first_name: this.state.first_name_1,
                last_name: this.state.last_name_1,
                gender: this.state.gender_1,    
                student_number: this.state.student_number_1,
                email: this.state.email_1,
            }
            const cont2 = {
                first_name: this.state.first_name_2,
                last_name: this.state.last_name_2,
                gender: this.state.gender_2,    
                student_number: this.state.student_number_2,
                email: this.state.email_2,
            }
            const cont3 = {
                first_name: this.state.first_name_3,
                last_name: this.state.last_name_3,
                gender: this.state.gender_3,    
                student_number: this.state.student_number_3,
                email: this.state.email_3,
            }
            const reqBody = {
                name: this.state.team_name,
                institution: this.state.institution,
                country: this.state.country,
                recaptcha: this.state.recaptcha,
                contestants : [
                    cont1, cont2, cont3
                ]
            }

            axios({
                url : process.env.REACT_APP_URL+"/api/register/team/online",
                method : 'POST',
                data : reqBody,
                headers : {
                    'Content-Type' : 'application/json'
                }
            }).then(res => {
                console.log("successful");
                window.location.replace('/successfulRegistration2')                   
            }).catch(error => {
                if(error.response) {
                    console.log(error.response);
                }
            })
        }
    }

    render() {
        return(
            <form className="register_container" 
                    onSubmit={this.onSubmit}
            >                
                <h1 className="register_page_header">Online Contest Registration</h1>
                <h3 className="register_page_second_header">19th Amirkabir International Collegiate Programming Contest - 8th of November 2019</h3>
                <div className="register_page_p">
                    <p>
                        In case you don't receive a verification email 24 hours after your registration, please inform us by:<br/>
                        Email: <a href="mailto:ceit.ssc94@gmail.com">ceit.ssc94@gmail.com</a><br/>
                        Telegram: <a href="https://t.me/ceitssc">@ceitssc</a> <br/>
                    </p>
                </div>
                <div className="team_box">
                    <div className="team_header_box">
                        <PeopleIcon />
                        <h2 className="team_header">Team Information</h2>
                    </div>
                    <div>
                        <FormControl required>
                            <InputLabel htmlFor="team_name">Team Name</InputLabel>
                            <Input
                                error={this.state.team_error}
                                className="text_box"
                                name="team_name"
                                type="text"
                                onChange={this.handleChange}
                                inputProps = {{ maxLength: "25" }}
                            />
                        </FormControl>                    
                        <FormControl required>
                            <InputLabel htmlFor="institution">Institution</InputLabel>
                            <Input
                                error={this.state.institution_error}
                                className="text_box"
                                name="institution"
                                type="text"
                                placeholder="Amirkabir University of Technology"
                                onChange={this.handleChange}
                                inputProps = {{ maxLength: "50" }}
                            />
                        </FormControl>
                        <FormControl required>
                            <InputLabel htmlFor="country">Country</InputLabel>
                            <Select
                                error={this.state.country_error}
                                className="text_box"
                                value={this.state.country}
                                name="country"
                                onChange={this.handleChange}
                            >
                                {this.props.data.map(item => (
                                        <MenuItem value={item.name}>
                                            {item.name}
                                        </MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>
                    </div>
                </div>
                <br/>

                <div className="contestant_header_box">
                    <PersonIcon />
                    <h2 className="contestant_header">Contestant #1</h2>
                </div>
                <div className="contestant_box">
                    <FormControl margin="normal" required>
                        <InputLabel htmlFor="first_name">First Name</InputLabel>
                        <Input
                            error={this.state.first_name_1_error}
                            className="text_box"
                            name="first_name_1"
                            type="text"
                            onChange={this.handleChange}
                            inputProps = {{ maxLength: "30" }}
                        />
                    </FormControl>
                    <FormControl margin="normal" required >
                        <InputLabel htmlFor="last_name">Last Name</InputLabel>
                        <Input
                            error={this.state.last_name_1_error}
                            className="text_box"
                            name="last_name_1"
                            type="text"
                            onChange={this.handleChange}
                            inputProps = {{ maxLength: "30" }}
                        />
                    </FormControl>
                    <FormControl margin="normal" required>
                        <InputLabel htmlFor="gender">Gender</InputLabel>
                        <Select 
                            error={this.state.gender_1_error}
                            className="text_box"
                            value={this.state.gender_1}
                            onChange={this.handleChange}
                            name="gender_1"
                        >
                            <MenuItem value={"M"}>Male</MenuItem>
                            <MenuItem value={"F"}>Female</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl margin="normal" required >
                        <InputLabel htmlFor="student_number">Student Number</InputLabel>
                        <Input
                            error={this.state.student_number_1_error}
                            className="text_box"
                            type="number"
                            name="student_number_1"
                            onChange={this.handleChange}
                        />
                    </FormControl>

                    <FormControl margin="normal" required >
                        <InputLabel htmlFor="email">Email</InputLabel>
                        <Input
                            error={this.state.email_1_error}
                            className="text_box"
                            name="email_1"
                            onChange={this.handleChange}
                            inputProps = {{ maxLength: "100" }}
                            type="email"
                        />
                    </FormControl>
                </div>

                <div className="contestant_header_box">
                    <PersonIcon />
                    <h2 className="contestant_header">Contestant #2</h2>
                </div>
                <div className="contestant_box">
                    <FormControl margin="normal" required>
                        <InputLabel htmlFor="first_name">First Name</InputLabel>
                        <Input
                            error={this.state.first_name_2_error}
                            className="text_box"
                            name="first_name_2"
                            type="text"
                            onChange={this.handleChange}
                            inputProps = {{ maxLength: "30" }}
                        />
                    </FormControl>
                    <FormControl margin="normal" required >
                        <InputLabel htmlFor="last_name">Last Name</InputLabel>
                        <Input
                            error={this.state.last_name_2_error}
                            className="text_box"
                            name="last_name_2"
                            type="text"
                            onChange={this.handleChange}
                            inputProps = {{ maxLength: "30" }}
                        />
                    </FormControl>
                    <FormControl margin="normal" required>
                        <InputLabel htmlFor="gender">Gender</InputLabel>
                        <Select 
                            error={this.state.gender_2_error}
                            className="text_box"
                            value={this.state.gender_2}
                            onChange={this.handleChange}
                            name="gender_2"
                        >
                            <MenuItem value={"M"}>Male</MenuItem>
                            <MenuItem value={"F"}>Female</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl margin="normal" required >
                        <InputLabel htmlFor="student_number">Student Number</InputLabel>
                        <Input
                            error={this.state.student_number_2_error}
                            className="text_box"
                            type="number"
                            name="student_number_2"
                            onChange={this.handleChange}
                        />
                    </FormControl>

                    <FormControl margin="normal" required >
                        <InputLabel htmlFor="email">Email</InputLabel>
                        <Input
                            error={this.state.email_2_error}
                            className="text_box"
                            name="email_2"
                            onChange={this.handleChange}
                            inputProps = {{ maxLength: "100" }}
                            type="email"
                        />
                    </FormControl>
                </div>

                <div className="contestant_header_box">
                    <PersonIcon />
                    <h2 className="contestant_header">Contestant #3</h2>
                </div>
                <div className="contestant_box">
                    <FormControl margin="normal" required>
                        <InputLabel htmlFor="first_name">First Name</InputLabel>
                        <Input
                            error={this.state.first_name_3_error}
                            className="text_box"
                            name="first_name_3"
                            type="text"
                            onChange={this.handleChange}
                            inputProps = {{ maxLength: "30" }}
                        />
                    </FormControl>
                    <FormControl margin="normal" required >
                        <InputLabel htmlFor="last_name">Last Name</InputLabel>
                        <Input
                            error={this.state.last_name_3_error}
                            className="text_box"
                            name="last_name_3"
                            type="text"
                            onChange={this.handleChange}
                            inputProps = {{ maxLength: "30" }}
                        />
                    </FormControl>
                    <FormControl margin="normal" required>
                        <InputLabel htmlFor="gender">Gender</InputLabel>
                        <Select 
                            error={this.state.gender_3_error}
                            className="text_box"
                            value={this.state.gender_3}
                            onChange={this.handleChange}
                            name="gender_3"
                        >
                            <MenuItem value={"M"}>Male</MenuItem>
                            <MenuItem value={"F"}>Female</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl margin="normal" required >
                        <InputLabel htmlFor="student_number">Student Number</InputLabel>
                        <Input
                            error={this.state.student_number_3_error}
                            className="text_box"
                            type="number"
                            name="student_number_3"
                            onChange={this.handleChange}
                        />
                    </FormControl>

                    <FormControl margin="normal" required >
                        <InputLabel htmlFor="email">Email</InputLabel>
                        <Input
                            error={this.state.email_3_error}
                            className="text_box"
                            name="email_3"
                            onChange={this.handleChange}
                            inputProps = {{ maxLength: "100" }}
                            type="email"
                        />
                    </FormControl>
                </div>

                <Grid align="center">
                    <ReCAPTCHA
                        className="recaptcha"
                        sitekey="6LfEJgkUAAAAAOVMfzDA_6E2Mw4jMtjYadVy5upA"
                        onChange={this.onChange}
                    />
                    <Button 
                        style={{fontFamily: "inherit", marginTop: "20px"}} 
                        color="primary" 
                        variant="contained" 
                        className="submit_button"
                        type="submit"
                        onClick={this.onSubmit}
                    >
                        Submit
                    </Button>
                </Grid>
            </form>
        )
    }
}

export default Register