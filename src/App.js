import React from 'react';
import TextField from '@material-ui/core/TextField';
//import TextField from '@material-ui/core/TextField';
import './App.css';

class App extends React.Component {
  state = { 
    factorialResult:"",
    value:"",
    array:"",
    sortedArray:[],
    arrayMessage:"Input Target Array and Number",
    number:""
  };
  handleChange = (e) => {        
    const formatCheck = /^[0-9\b]+$/;
    var n = e.target.value;    
    if (e.target.value === '' || formatCheck.test(e.target.value)) {this.setState({value: e.target.value});}    
    if(n === ""){this.setState({factorialResult: ""});return 1}
    if (n === 0 || !formatCheck.test(n)) return 1;    
    let f = 1;
    for (let i = 1; i < n; i++) {
        f = f * (i + 1);
    }
    this.setState({factorialResult: f});
  }
  handleContain = (e) => {
    if(e.target.value === ""){this.setState({arrayMessage:"Input Target Array and Number"});return 1;}
    var containArray = e.target.value.split(",");   
    containArray.sort(function(a, b) {
      return a - b;
    });    
    console.log(containArray)
    this.setState({array:e.target.value,sortedArray: containArray})
  }
  checkContain = (e) => {
    const formatCheck = /^[0-9\b]+$/;
    var sortedArray = this.state.sortedArray;
    var targetNumber = e.target.value;
    this.setState({number:targetNumber})
    if(targetNumber === "" || !formatCheck.test(targetNumber)){this.setState({arrayMessage:"Input Target Array and Number"});}
    else if(sortedArray.includes(targetNumber)){this.setState({arrayMessage: "This array contains the target number"});}    
    else{this.setState({arrayMessage: "This array does not contain the target number"});}
    
  }
  render() {
    
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hireplicity
        </p>
      </header>
       
        <div className="bottom-panel">
          <h1>Factorial: {this.state.factorialResult}</h1>
          <TextField
                required
                id="outlined-required"
                label="Factorial"              
                value={this.state.value}
                onChange={this.handleChange}
              />          
        </div>
        <div className="bottom-panel">
          <h1>{this.state.arrayMessage}</h1>
          <h3>Sorted Array:[{(this.state.sortedArray).map((element) => (<span className="user">{element}<span className="limiter">,</span></span>))}]</h3>
          <div>
          <TextField
                required
                id="outlined-required"
                label="Target Array (1,2,3)"              
                value={this.state.array}
                onChange={this.handleContain}
              />
            </div>
          <TextField
            required
            id="outlined-required"
            label="Target Number"              
            value={this.state.number}
            onChange={this.checkContain}
          />
        </div>
      </div>
     
    )
  }
}

export default App;
