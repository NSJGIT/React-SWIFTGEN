import altSplice from "./altSplice";
import {Component} from "react";
class Reconciler extends Component {
    state= { one: 1,
            two: 1,
            three: 1,
            four: 1,
            five: 1,
            six: 1,
            one1: 1,
            two1: 1,
            three1: 1,
            four1: 1,
            five1: 1,
            six1: 1,
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
        arr1=Array.from(arr1); //splice doesn't work on sets, so you need to convert to an array
        let arr2 = arr0.slice(6);
        arr2=Array.from(arr2);
        //console.log(arr1[5][0][1]); //verifying array is split in 2
        //console.log(arr2[5][0]);
        //console.log('test'); //checking that on click submit is working
        let arrRec=[];
        let arrDiff=[];
        //let arrDiffTest=arr1[5][0][1]-arr2[5][0][1];//test for one array operation
        //arrDiffTest=Array.from(arrDiffTest);
        //arrDiffTest=altSplice(arrDiffTest);
        //console.log(arrDiffTest);
        console.log(altSplice(arr1,3));
        //todo: outermost loop should end when no more pairs can be pulled from the two arrays, end condition is abstract...
        for (let j=0; j<100;j++){
        let exit_loops=false;
        let arrLength=arr1.length;//arrLength=arr1.length, when array length is zero it works? it's obviously a looping problem
        //if (arrLength===2) {break;}
        //console.log(j);
        //(let i=0; i<arrLength; i++)
        for (let i=arrLength; i>0; i--) {
            
            for (let n=arrLength; n>0; n--) {
                arrDiff=arr1[i][0][1]-arr2[n][0][1];
                arrDiff=Array.from(arrDiff); //let arrDiff=arr1[i][0][1]-arr2[n][0][1];
                if (arrDiff<0.1) {
                    arrRec=Array.from(arrRec);
                    arrRec.push(arr1[n][0][1]); //arrRec.push(arr1[i][0][1])
                    arr1=altSplice(arr1,i); //splice doesn't work, need to use custom function
                    arr2=altSplice(arr2,n);
                    exit_loops = true;
                    break;
                }
                if (exit_loops===true) {break;}
            }}}
            
            //console.log('reconciled:'+arrRec);
            console.log('breaks1:'+arr1);
            console.log('breaks2:'+arr2);
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