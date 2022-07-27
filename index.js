import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Doctors from './doctors';
import CovidStats from './covidpage';
import LabTests from './labtest';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

const routing = (
    <BrowserRouter>
        
        <Routes>
            <Route path="/" element={<App/>}> </Route>
            <Route path="App" element={<App/>}> </Route>
            <Route path="doctors" element={<Doctors/>}> </Route>
            <Route path="covidpage" element={<CovidStats/>}> </Route>
            <Route path="labtest" element={<LabTests/>}> </Route>
        
        </Routes>
    </BrowserRouter>
)

ReactDOM.render (routing,document.getElementById('root'));
reportWebVitals();

