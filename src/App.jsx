import React from 'react'
import FirstComponent from "./components/basics/FirstComponent";
import RandomNumber from "./components/basics/RandomNumber";
import ComponentsWithParams from "./components/basics/ComponentsWithParams";


export default () => (
    <div id="app">
        <RandomNumber
            min={1}
            max={99}
        />
        <FirstComponent></FirstComponent>
        <ComponentsWithParams
            title="first param"
            subtitle="second param"/>
    </div>
)

