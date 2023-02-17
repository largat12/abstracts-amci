


import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Error404 } from './Components/404/Error404';
import { Administracion } from './Components/administracion/Administracion';
import './App.css';
import { ContextAppAdministracionProvider } from './context/ContextAppAdministracion';
import { ContextAppInvesitacionesProvider } from './context/ContextAppInvesitaciones';
import { Login } from './Components/login/Login';
import { RegistroTrabajosLibres } from './Components/RegistroTrabajosLibres/RegistroTrabajosLibres';
import { RouterProtected} from './Components/RouterProtected/RouterProtected'


function App() {
    return (
        <BrowserRouter>
          <Routes>
            <Route path='/' element={ <ContextAppAdministracionProvider><Login /></ContextAppAdministracionProvider> }/>
            <Route path='/administracion' element={<ContextAppAdministracionProvider><RouterProtected><Administracion/></RouterProtected></ContextAppAdministracionProvider>}/>
            <Route path='/registro-trabajos-libres' element={<ContextAppInvesitacionesProvider><RegistroTrabajosLibres/></ContextAppInvesitacionesProvider>}/>
            <Route path='*' element={<Error404/>} />
          </Routes>
        </BrowserRouter>
    );
}

export default App;
