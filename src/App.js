

import { useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Error404 } from './404/Error404';
import './App.css';
import { ContextApp } from './context/contextApp';
import { Login } from './login/Login';
import { RegistroTrabajosLibres } from './RegistroTrabajosLibres/RegistroTrabajosLibres';
import {RouterProtected} from './RouterProtected/RouterProtected'


function App() {
    const {user} = useContext(ContextApp)


    return (
        <BrowserRouter>
          <Routes>
            <Route path='/' element={ <Login /> }/>
            <Route path='/registro-trabajos-libres' element={<RegistroTrabajosLibres/>}/>
            <Route path='/administracion' element={<RouterProtected user={user}><h1>Registro de trabajos libres</h1></RouterProtected>}/>
            <Route path='*' element={<Error404/>} />
          </Routes>
        </BrowserRouter>
    );
}

export default App;
