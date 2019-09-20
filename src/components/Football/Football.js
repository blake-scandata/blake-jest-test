import React from 'react';

//api url: https://api.collegefootballdata.com/games?year=1962&seasonType=postseason&team=Texas

class Football extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            submitted: false, 
            team: "",
            year: "",
            bowl: {},
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
            submitted: false,
        });
    }

    handleSubmit(event) {
        this.apiRequest(this.state.year, this.state.team);

        this.setState({
            submitted: true,
        });
        if(event !== undefined) {
            event.preventDefault();
        }
    }

    async apiRequest(year, team) {

        try {
            const https = require('https');

            console.log("Requesting "+team+" bowl game for year "+year+"...");
        
            https.get('https://api.collegefootballdata.com/games?year='+year+'&seasonType=postseason&team='+team, (resp) => {
                    let data = '';
        
                    // A chunk of data has been recieved.
                    resp.on('data', (chunk) => {
                        data += chunk;
                    });
        
                    // The whole response has been received. Print out and return the result.
                    resp.on('end', () => {
                        console.log(JSON.parse(data));
                        let temp = JSON.parse(data);
                        this.setState({
                            bowl: temp,
                        });
                    });
        
                }).on("error", (err) => {
                    console.log("Error: " + err.message);
            });
        } catch (err) {
            console.log("Error requesting data.");
        }
    }

    render() { 
        return (
            <React.Fragment> 
                <h2>NCAA Bowl Game API</h2>
                <p>Select a team and enter a year. If it exists, bowl game data will be displayed.</p>
                <form onSubmit={this.handleSubmit}>
                    <h3>Team:</h3>
                    <select name="team" value={this.state.team} onChange={this.handleChange}>
                        <option>Select...</option>
                        <option>Texas</option>
                        <option>Texas A{"\&"}M</option>
                    </select>
                    <h3>Year:</h3>
                    <input type="number" name="year" value={this.state.year} onChange={this.handleChange}/>
                    <br />
                    <br />
                    <button type="submit" onClick={this.handleSubmit}>Submit</button>
                </form>
                {this.state.submitted ? 
                    <div id="testData">
                        {console.log(this.state.bowl)}
                        <h3>Year: {this.state.year}</h3>
                        <h3>Team: {this.state.team}</h3>
                        <h3>Data: {this.state.bowl}</h3>
                    </div> 
                    : null
                }
            </React.Fragment>
         );
    }
}
 
export default Football;