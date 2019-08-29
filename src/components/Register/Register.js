import React from "react"
import { Button, Paper, Typography, Checkbox, Grid, FormControl, Input, InputLabel } from '@material-ui/core';
import ContestantFields from "./contestantFields"
import PeopleIcon from '@material-ui/icons/People';
import ReCAPTCHA from "react-google-recaptcha";
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

    onChange(value) {
        console.log("Captcha value:", value);
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
            <form className="register_container" onSubmit={console.log("dd")}>                
                <h1 className="register_page_header">Contest Registration</h1>
                <h3 className="register_page_second_header">19th Amirkabir International Collegiate Programming Contest - 8th of November 2019</h3>
                <div className="register_page_p">
                    <p>
                        Please fill all of the following fields carefully and then press the&nbsp;
                        <strong>Submit</strong> button to make your team registered.<br/>
                        If you are willing to just register in online contest, follow this <a href="#">link</a>.<br/>
                    </p>
                    <p>
                        Registration fee for Iranian teams are as follows:<br/>
                        150,000 Tomans for non-AUT teams.<br/>
                        100,000 Tomans for teams from Amirkabir University of Technology.
                    </p>
                    <p> 
                        If your team name was not in registerd team list 24 hours after regitration, please inform us by:<br/>
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
                            <InputLabel htmlFor="teamname">Team Name</InputLabel>
                            <Input
                                className="text_box"
                                name="teamname"
                                type="text"
                                onChange={this.handleChange}
                            />
                        </FormControl>                    
                        <FormControl required>
                            <InputLabel htmlFor="institution">Institution</InputLabel>
                            <Input
                                className="text_box"
                                name="institution"
                                type="text"
                                placeholder="Amirkabir University of Technology"
                                onChange={this.handleChange}
                            />
                        </FormControl>
                        <FormControl required>
                            <InputLabel htmlFor="country">Country</InputLabel>
                            <Input
                                className="text_box"
                                type="text"
                                name="country"
                                onChange={this.handleChange}
                            />
                        </FormControl>
                    </div>
                </div>
                <br/>
                <ContestantFields
                    memberNumber="1"
                    contestant={this.contestantChange}
                />
                <br/>
                <ContestantFields
                    memberNumber="2"
                    contestant={this.contestantChange}
                />
                <br/>
                <ContestantFields
                    memberNumber="3"
                    contestant={this.contestantChange}
                />
                <Grid align="center">
                    <ReCAPTCHA
                        className="recaptcha"
                        sitekey="Your client site key"
                        onChange={this.onChange}
                    />
                </Grid>
                <Grid align="center">
                    <Button 
                        style={{fontFamily: "inherit", marginTop: "20px"}} 
                        color="primary" 
                        variant="contained" 
                        className="submit_button"
                        type="submit"
                    >
                        submit
                    </Button>
                </Grid>
            </form>

        )
    }
}

export default Register