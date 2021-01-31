import React, {Component} from 'react';
import LanguageContext from "../constexts/LanguageContext";
import ColorContext from "../constexts/ColorContext";

class Button extends Component {

    renderButton (color) {
        console.log(this.context)
        return(
            <button className={`ui button ${color}`}>
                <LanguageContext.Consumer>
                    {({language}) => language === "arabic"?"تسحيل":"Submit"}
                </LanguageContext.Consumer>
            </button>
        )
    }

    render() {
        // const text = this.context === "arabic" ? "تسحيل":"Submit"
        return (
            <ColorContext.Consumer>
                {color => this.renderButton(color)}
            </ColorContext.Consumer>


        )
    }
}

export default Button;
