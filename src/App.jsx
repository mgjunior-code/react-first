import React from 'react'
import FirstComponent from "./components/basics/FirstComponent";
import RandomNumber from "./components/basics/RandomNumber";
import ComponentsWithParams from "./components/basics/ComponentsWithParams";
import Card from "./layout/Card";


const App = () => (
    <div id="app">
        <Card title='RandomNumber'>
            <RandomNumber
                min={1}
                max={99}
            />
        </Card>
        <Card title='ComponentsWithParams'>
            <ComponentsWithParams
                title="first param"
                subtitle="second param"/>
        </Card>
        <Card title='FirstComponent'>
            <FirstComponent/>
        </Card>
    </div>
)

export default App;

