import React, {Component} from 'react';
import LanguageContext from "../constexts/LanguageContext";

class Field extends Component {
    static contextType = LanguageContext;
    render() {
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
