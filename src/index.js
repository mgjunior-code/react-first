import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FirstComponent from "./components/basics/FirstComponent";
import ComponentsWithParams from "./components/basics/ComponentsWithParams";


ReactDOM.render(
    <div>
        <FirstComponent></FirstComponent>
        <ComponentsWithParams
            title="first param"
            subtitle="second param"/>
    </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
