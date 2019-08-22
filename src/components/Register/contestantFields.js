import React from "react"
import { Button, Paper, Typography, Checkbox, FormControlLabel, FormControl, Input, InputLabel } from '@material-ui/core';


class contestantFields extends React.Component {
    render() {
        return(
            <div>
                <h2>Contestant #{this.props.memberNumber}</h2>
                <div>
                    <FormControl margin="normal" required >
                    <InputLabel htmlFor="fistname">First Name</InputLabel>
                    <Input
                        id="fistname"
                        className="text_box"
                        // onChange={event => setFirstname(event.target.value)}
                    />
                    </FormControl>
                    <FormControl margin="normal" required >
                    <InputLabel htmlFor="lastname">Last Name</InputLabel>
                    <Input
                        id="lastname"
                        className="text_box"
                    />
                    </FormControl>

                    <FormControl margin="normal" required >
                    <InputLabel htmlFor="username">Gender</InputLabel>
                    <Input
                        id="username"
                        className="text_box"
                    />
                    </FormControl>
                </div>

                <div>
                    <FormControl margin="normal" required >
                    <InputLabel htmlFor="studentnumber">Student Number</InputLabel>
                    <Input
                        id="studentnumber"
                        className="text_box"
                    />
                    </FormControl>

                    <FormControl margin="normal" required >
                    <InputLabel htmlFor="username">Current Educational Level</InputLabel>
                    <Input
                        id="username"
                        className="text_box"
                    />
                    </FormControl>

                    <FormControl margin="normal" required >
                    <InputLabel htmlFor="email">Email</InputLabel>
                    <Input
                        id="email"
                        className="text_box"
                    />
                    </FormControl>
                    <FormControl margin="normal" required >
                    <InputLabel htmlFor="phonenumber">Phone Number</InputLabel>
                    <Input
                        id="phonenumber"
                        className="text_box"
                    />
                    </FormControl>
                </div>
            </div>

        )
    }
}

export default contestantFields