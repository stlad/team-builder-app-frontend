import { BrowserRouter, Routes, Route} from 'react-router-dom';
import BelbinTestMainPage from '../belbin/BelbinTestMainPage';
import BelbinTHeader from '../belbin/BelbinHeader';

const AppRoutes  = (props) =>{
    
    return (
    <BrowserRouter>
        <Routes>
            <Route 
                path='/'
                element = {
                    <div >
                        <BelbinTHeader />
                        <BelbinTestMainPage  />
                    </div>
            }
            />
        </Routes>
    </BrowserRouter>
)

}

export default AppRoutes