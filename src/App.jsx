import React from 'react'
import './App.css'
import FirstComponent from "./components/basics/FirstComponent";
import RandomNumber from "./components/basics/RandomNumber";
import ComponentsWithParams from "./components/basics/ComponentsWithParams";
import Card from "./components/layout/Card";
import Family from "./components/basics/Family";
import FamilyMember from "./components/basics/FamilyMember";
import StudentList from "./components/repeticao/StudentList";
import ProductsTable from "./components/repeticao/ProductsTable";
import IsEven from "./components/condition/IsEven";


const App = () => (
    <div className="App">
        <div className="Cards">
            <Card title='Table' color="#051e3e">
                <IsEven number={20}/>
            </Card>
            <Card title='Table' color="#851e3e">
                <ProductsTable/>
            </Card>
            <Card title='Repetition' color="#051e3e">
                <StudentList/>
            </Card>
            <Card title='Child Components' color="#251e3e">
                <Family>
                    <FamilyMember name="Teste"/>
                </Family>
            </Card>
            <Card title='RandomNumber' color="#451e3e">
                <RandomNumber
                    min={1}
                    max={99}
                />
            </Card>
            <Card title='ComponentsWithParams' color="#651e3e">
                <ComponentsWithParams
                    title="first param"
                    subtitle="second param"/>
            </Card>
            <Card title='FirstComponent' color="#851e3e">
                <FirstComponent/>
            </Card>
        </div>
    </div>
)

export default App;

