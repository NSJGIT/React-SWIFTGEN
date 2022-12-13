import {Component} from "react";
class Form extends Component {
    state= { accName: "",
            fBIC: "",
            accNo: "",
            IBIC: "",
            addInfo: "",
            Cash: "",
            subTF: false,
        };
    handleChange=(event)=>{this.setState({
        accName: event.target.value,
    })};
    handleFBIC=(event)=>{this.setState({
        fBIC: event.target.value,
    })};
    handleAccNo=(event)=>{this.setState({
        accNo: event.target.value,
    })};
    handleIBIC=(event)=>{this.setState({
        IBIC: event.target.value,
    })};
    handleAddInfo=(event)=>{this.setState({
        addInfo: event.target.value,
    })};
    handleCash=(event)=>{this.setState({
        Cash: event.target.value,
    })};
    handleSubmit=(event)=>{
        event.preventDefault();
        this.setState({subTF:true});
        let SI={
        accname: this.state.accName,
        fbic: this.state.fBIC,
        accno: this.state.accNo,
        ibic: this.state.IBIC,
        addinfo: this.state.addInfo,
    };

    console.log(SI);
};
    render () {
        return (<div className="form1">
            <h1>SWIFT Generator</h1>
            <h2>Please Enter Your Settlement Instructions</h2>
            <form>
                <p>Account Name of Final Beneficiary:</p>
                <input onChange={this.handleChange} type="text" value={this.state.accName}>
                </input>
                <br></br>
                <p>Account Number of Final Beneficiary:</p>
                <input onChange={this.handleAccNo} type="text" value={this.state.accNo}>
                </input>
                <br></br>               
                <p>BIC of Beneficiary Bank:</p>
                <input onChange={this.handleFBIC} type="text" value={this.state.fBIC}>
                </input>
                <br></br>
                <p>Intermediary/Correspondant BIC:</p>
                <input onChange={this.handleIBIC} type="text" value={this.state.IBIC}>
                </input>
                <br></br>
                <p>Additional Information:</p>
                <input onChange={this.handleAddInfo} type="text" value={this.state.addInfo}>
                </input>
                <br></br>
                <p>Amount to Transfer:</p>
                <input onChange={this.handleCash} type="number" value={this.state.Cash}>
                </input>
                <br></br>
            </form>
            <h2>Your MT103 SWIFT Message</h2>
            <p id="SWIFT1">
                :20:8756249 <br></br>
                :23B:CRED <br></br>
                :32A:221111AUD{this.state.Cash} <br></br>
                :33B:AUD{this.state.Cash} <br></br>
                :50K:/83F75829810 <br></br>
                :52A:UILDTNGIQYT<br></br>
                :53D:/385927502937<br></br>
                :56A:{this.state.IBIC}<br></br>
                :57A://AU{this.state.Cash}<br></br>
                {this.state.fBIC}<br></br>
                :59A:/{this.state.accNo}<br></br>
                :59D:/{this.state.accName}<br></br>
                :70:/{this.state.addInfo}<br></br>
                :71A:/OUR<br></br>
            </p>

        </div>);
    }
};
export default Form;