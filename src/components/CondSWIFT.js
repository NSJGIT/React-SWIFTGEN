import { useState } from "react";
import Form from "./Form";
export default function CondSWIFT() {

    if(Form.state.subTF===true) {
        return (<h3>This is a conditional component</h3>)
    }
    else {
        return (<h3>Nothing to see here</h3>)
    }

} ;