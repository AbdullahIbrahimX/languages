import React, {Component} from 'react';
import LanguageContext from "../constexts/LanguageContext";

class Button extends Component {
    static contextType = LanguageContext;
    render() {
        const text = this.context === "arabic" ? "تسحيل":"Submit"
        return <button>{text}</button>
    }
}

export default Button;