import React, {Component} from 'react';
import LanguageContext from "../constexts/LanguageContext";
import ColorContext from "../constexts/ColorContext";

class Button extends Component {

    render() {
        // const text = this.context === "arabic" ? "تسحيل":"Submit"
        return (
            <ColorContext.Consumer>
                {color =>
                    <button className={`ui button ${color}`}>
                        <LanguageContext.Consumer>
                            {value => value === "arabic"?"تسحيل":"Submit"}
                        </LanguageContext.Consumer>
                    </button>
                }
            </ColorContext.Consumer>


        )
    }
}

export default Button;
