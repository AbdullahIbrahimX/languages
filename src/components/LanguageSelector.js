import React from 'react';
import LanguageContext from "../constexts/LanguageContext";

class LanguageSelector extends React.Component{
    static contextType = LanguageContext
    render() {
        return (
            <React.Fragment>
                Select Language:
                <i className={"flag sa"} onClick={()=> this.context.onLanguageChange("arabic")}/>
                <i className={"flag us"} onClick={()=> this.context.onLanguageChange("english")}/>
            </React.Fragment>
        );
    }
};

export default LanguageSelector;
