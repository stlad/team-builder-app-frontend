import { BrowserRouter, Routes, Route} from 'react-router-dom';
import BelbinTestMainPage from '../belbin/BelbinTestMainPage';
import BelbinTHeader from '../belbin/BelbinHeader';
import BelbinTestHolder from '../belbin/BelbinTestHolder';

const AppRoutes  = (props) =>{
    
    return (
    <BrowserRouter>
        <Routes>
            {/* <Route 
                path='/'
                element = {
                    <div >
                        <BelbinTHeader />
                        <BelbinTestMainPage  />
                    </div>
            }
            /> */}

            <Route path='/' 
                element={
                    <div>
                        <BelbinTHeader />
                        <BelbinTestHolder />
                    </div>
                }/>

        </Routes>
    </BrowserRouter>
)

}

export default AppRoutes