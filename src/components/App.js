import React, {Component} from 'react';
import UserCreate from "./UserCreate";
import {LanguageStore} from "../constexts/LanguageContext";
import ColorContext from "../constexts/ColorContext";
import LanguageSelector from "./LanguageSelector";

class App extends Component {
    render() {

        return (
            <div className={"ui container"}>
                <LanguageStore>
                    <LanguageSelector/>
                    <ColorContext.Provider value={"yellow"}>
                        <UserCreate/>
                    </ColorContext.Provider>
                </LanguageStore>
            </div>
        );
    }
}

export default App;
