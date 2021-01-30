import React, {Component} from 'react';
import LanguageContext from "../constexts/LanguageContext";

class Field extends Component {
    static contextType = LanguageContext;
    render() {
        console.log(this.state)
        console.log(this.props)
        console.log(this.context)
        const text = this.context === "arabic" ? "الإسم":"Name"
        return (
            <div className={"ui field"}>
                <label className={"label"}>{text}</label>
                <input/>
            </div>
        );
    }
}


export default Field;