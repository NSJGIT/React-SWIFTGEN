import {Component} from "react";
class Reconciler extends Component {
    state= { one: "",
            two: "",
            three: "",
            four: "",
            five: "",
            six: "",
            one1: "",
            two1: "",
            three1: "",
            four1: "",
            five1: "",
            six1: "",
        };
    handle1=(event)=>{this.setState({
        one: event.target.value,
    })};
    handle2=(event)=>{this.setState({
        two: event.target.value,
    })};
    handle3=(event)=>{this.setState({
        three: event.target.value,
    })};
    handle4=(event)=>{this.setState({
        four: event.target.value,
    })};
    handle5=(event)=>{this.setState({
        five: event.target.value,
    })};
    handle6=(event)=>{this.setState({
        six: event.target.value,
    })};
    //second data set
    handle11=(event)=>{this.setState({
        one1: event.target.value,
    })};
    handle21=(event)=>{this.setState({
        two1: event.target.value,
    })};
    handle31=(event)=>{this.setState({
        three1: event.target.value,
    })};
    handle41=(event)=>{this.setState({
        four1: event.target.value,
    })};
    handle51=(event)=>{this.setState({
        five1: event.target.value,
    })};
    handle61=(event)=>{this.setState({
        six1: event.target.value,
    })};
    //todo: replace autoGen contents with random number gen function
    autoGen=(event)=>{this.setState({
        one: 1,
            two: 2,
            three: 3,
            four: 4,
            five: 5,
            six: 6,
            one1: 1,
            two1: 2,
            three1: 3,
            four1: 4,
            five1: 5,
            six1: 5,
    })};
    handleSubmit=(event)=>{
        event.preventDefault();
        // let arr1 = Object.entries(this.state);
        let arr0=[]
        Object.entries(this.state).forEach(
          function(entry, index)
          {
            arr0[index] = [entry];
          }
        ); 
        //console.log(this.state);
        let arr1 = arr0.slice(0, 6); //split array in 2
        let arr2 = arr0.slice(6);
        //console.log(arr1[5][0][1]); //verifying array is split in 2
        //console.log(arr2[5][0]);
        //console.log('test'); //checking that on click submit is working
        let arrRec=[];
        //todo: outermost loop should end when no more pairs can be pulled from the two arrays, end condition is abstract...
        for (let j=0; j<1000;j++){
        let exit_loops=false;
        let arrLength=arr1.length;
        
        for (let i=0; i<arrLength; i++) {
            for (let n=0; i<arrLength; n++) {
                if ((arr1[i][0][1]-arr2[n][0][1])<0.1) {
                    arrRec.push(arr1[i][0][1]);
                    arr1.splice(i,1);
                    arr2.splice(n,1);
                    exit_loops = true;
                    break;
                }
                if (exit_loops===true) {break;}
            }}}
            
            console.log(arrRec);
    }

    render () {
        return (<div className="Reconciler">
            <h1>Reconciler</h1>
            <h2>Please enter your data sets:</h2>
            <form className="Reconciler">
                <input type="button" value="AutoGenerate" onClick={this.autoGen}></input>
                <p className="Reconciler">1.  1.</p>
                <input onChange={this.handle1} type="number" value={this.state.one}>
                </input>
                <input onChange={this.handle11} type="number" value={this.state.one1}>
                </input>
                
                <p className="Reconciler">2. 2.</p>
                <input onChange={this.handle2} type="number" value={this.state.two}>
                </input>
                <input onChange={this.handle21} type="number" value={this.state.two1}>
                </input>
                          
                <p className="Reconciler">3.  3.</p>
                <input onChange={this.handle3} type="number" value={this.state.three}>
                </input>
                <input onChange={this.handle31} type="number" value={this.state.three1}>
                </input>
                
                <p className="Reconciler">4.  4.</p>
                <input onChange={this.handle4} type="number" value={this.state.four}>
                </input>
                <input onChange={this.handle41} type="number" value={this.state.four1}>
                </input>
                
                <p className="Reconciler">5.  5.</p>
                <input onChange={this.handle5} type="number" value={this.state.five}>
                </input>
                <input onChange={this.handle51} type="number" value={this.state.five1}>
                </input>
                
                <p className="Reconciler">6.   6.</p>
                <input onChange={this.handle6} type="number" value={this.state.six}>
                </input>
                <input onChange={this.handle61} type="number" value={this.state.six1}>
                </input>
                <br></br>
                <input type="submit" value="Reconcile" onClick={this.handleSubmit}></input>
                
            </form>
            <h2>Your Breaks</h2>


        </div>);
    }
};
export default Reconciler;