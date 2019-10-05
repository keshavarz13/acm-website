import React from "react"
import { Dialog, DialogTitle, DialogContent, DialogActions, Select, Grid, 
         FormControl, Input, InputLabel, MenuItem, Button, Checkbox, } from '@material-ui/core';
import OnlinecontestantFields from "./OnlinecontestantFields"
import PeopleIcon from '@material-ui/icons/People';
import ReCAPTCHA from "react-google-recaptcha";
import "./../styles/register.css"
import axios from 'axios'
import LocalRules from "./LocalRules"
import RegionalRules from "./RegionalRules"

class OnlineRegister extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            team_name: "",
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
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this)
        this.OpenLocalRules = this.OpenLocalRules.bind(this)
        this.CloseLocalRules = this.CloseLocalRules.bind(this)
        this.OpenRegionalRules = this.OpenRegionalRules.bind(this)
        this.CloseRegionalRules = this.CloseRegionalRules.bind(this)
    }

    onChange(value) {
        console.log("Captcha value:", value);
    }

    handleChange(event) {
        this.setState({
            [event.target.name] : event.target.value
        })
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
    handleCheckboxChange(event) {
        this.setState({
            rules: event.target.checked
        })
    }

    contestantChange(contestantNumber, contestant) {
        if (contestantNumber === '1') {
            this.setState({
                contestant1: contestant
            })
        }
        else if(contestantNumber === '2') {
            this.setState({
                contestant2: contestant
            })
        }
        else if(contestantNumber === '3') {
            this.setState({
                contestant3: contestant
            })
        }
    }

    onSubmit = (event) => {
        event.preventDefault();
        if (typeof this.state.contestant1.rules === 'undefined') {
            alert("Please check Rules!")
        }
        else if (typeof this.state.contestant2.rules === 'undefined') {
            alert("Please check Rules!")
        }
        else if (typeof this.state.contestant3.rules === 'undefined') {
            alert("Please check Rules!")
        }
        else if (!this.state.contestant1.rules === true &&  !this.state.contestant2.rules === true && !this.state.contestant3.rules === true) {
            const teamName = this.state.team_name;
            const [cont1, cont2, cont3] = [this.state.contestant1, this.state.contestant2, this.state.contestant3];
            const reqBody = {
                name: teamName,
                institution: this.state.institution,
                contestants : [
                    cont1, cont2, cont3
                ]
            }
            axios.post(process.env.REACT_APP_URL+'/api/register/team/online', reqBody).then(res => {
                if (res.status >= 400 && res.status < 500) {
                    console.log("Haji :_");
                }
                else if (res.status >= 200 && res.status < 300)
                {
                    console.log("successful");
                }
            })
        }
        else {
            alert("New Error!")
        }
    }

    render() {
        console.log(this.props.data)
        return(
            <form className="register_container" onSubmit={this.onSubmit}>                
                <h1 className="register_page_header">OnLine Contest Registration</h1>
                <h3 className="register_page_second_header">19th Amirkabir International Collegiate Programming Contest - 8th of November 2019</h3>
                <div className="register_page_p">
                    <p> 
                        If your team name was not in the registerd teams list 24 hours after regitration, please inform us by:<br/>
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
                                className="text_box"
                                name="team_name"
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
                            <Select
                                className="text_box"
                                value={this.state.country}
                                name="country"
                                onChange={this.handleChange}
                            >
                                {this.props.data.map(item => (
                                        <MenuItem value={item}>
                                            {item.name}
                                        </MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>
                    </div>
                </div>
                <br/>
                <OnlinecontestantFields
                    memberNumber="1"
                    contestant={this.contestantChange}
                />
                <br/>
                <OnlinecontestantFields
                    memberNumber="2"
                    contestant={this.contestantChange}
                />
                <br/>
                <OnlinecontestantFields
                    memberNumber="3"
                    contestant={this.contestantChange}
                />
                <Grid align="center">
                    <div className="contestant_rule_box">
                        <div className="contestant_rule_checkbox">
                            <Checkbox
                                name="rules"
                                color="default"
                                onChange={this.handleCheckboxChange}
                            />     
                        </div>       
                        <h4>
                            We have read and accept&nbsp;
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
                    <ReCAPTCHA
                        className="recaptcha"
                        sitekey="telegram group :)"
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
                        submit
                    </Button>
                </Grid>
            </form>
        )
    }
}

export default OnlineRegister