import React, {Component} from 'react';
import UserCreate from "./UserCreate";
import LanguageContext from "../constexts/LanguageContext";

class App extends Component {
    state = { language: "english"};

    onLanguageChange = language =>{
        this.setState({language})
    }
    render() {

        return (
            <div className={"ui container"}>
                Select Language:
                <i className={"flag sa"} onClick={()=> this.onLanguageChange("arabic")}/>
                <i className={"flag us"} onClick={()=> this.onLanguageChange("english")}/>
                <LanguageContext.Provider value={this.state.language}>
                    <UserCreate/>
                </LanguageContext.Provider>
            </div>
        );
    }
}

export default App;