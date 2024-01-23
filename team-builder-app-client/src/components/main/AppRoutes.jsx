import { BrowserRouter, Routes, Route} from 'react-router-dom';
import BelbinTestMainPage from '../belbin/BelbinTestMainPage';

const AppRoutes  = (props) =>{
    
    return (
    <BrowserRouter>
        <Routes>
            <Route 
                path='/'
                element = {
                    <div >
                        <BelbinTestMainPage  />
                    </div>
            }
            />
        </Routes>
    </BrowserRouter>
)

}

export default AppRoutes