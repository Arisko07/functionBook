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
    number:"",
    randomArray:"",
    randomResult:[],
    uniqueArray:"",
    uniqueResult:[]
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
  randomizeArray = (e) =>{
    var array = e.target.value;
    this.setState({randomArray:array})
    array = array.split(",");
    
    for (var i = array.length - 1; i > 0; i--) {
      var seed = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[seed];
      array[seed] = temp;      
    }
    
    this.setState({randomResult: array})        
  }
  removeDuplicate = (e) =>{
    var array = e.target.value;
    this.setState({uniqueArray:array})
    array = array.split(",");
    var uniqueArray = Array.from(new Set(array))
    this.setState({uniqueResult: uniqueArray})
  }
  render() {
    
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Function Collection
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
        <div className="bottom-panel">
          <h1>Randomized Array:[{(this.state.randomResult).map((element) => (<span className="user">{element}<span className="limiter">,</span></span>))}]</h1>
          <TextField
                required
                id="outlined-required"
                label="Target Array (1,2,3)"              
                value={this.state.randomArray}
                onChange={this.randomizeArray}
              />
        </div>
        <div className="bottom-panel">
          <h1>Unique Array:[{(this.state.uniqueResult).map((element) => (<span className="user">{element}<span className="limiter">,</span></span>))}]</h1>
          <TextField
                  required
                  id="outlined-required"
                  label="Target Array (1,2,3)"              
                  value={this.state.uniqueArray}
                  onChange={this.removeDuplicate}
                />
        </div>
      </div>

    )
  }
}

export default App;
