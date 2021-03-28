import React from 'react'
import FirstComponent from "./components/basics/FirstComponent";
import ComponentsWithParams from "./components/basics/ComponentsWithParams";


export default () => (
    <div id="app">
        <FirstComponent></FirstComponent>
        <ComponentsWithParams
            title="first param"
            subtitle="second param"/>
    </div>
)

