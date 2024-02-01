import { BrowserRouter, Routes, Route} from 'react-router-dom';
import BelbinTHeader from '../belbin/BelbinHeader';
import BelbinTestHolder from '../belbin/BelbinTestHolder';
import BelbinResults from '../belbin/BelbinResults';
import BelbinFooter from '../belbin/BelbinFooter';

const AppRoutes  = (props) =>{
    
    return (
    <BrowserRouter>
        <Routes>
            <Route path='/' 
                element={
                    <div>
                        <BelbinTHeader />
                        <BelbinTestHolder />
                        <BelbinFooter />
                    </div>
                }/>
            <Route path='/belbin/results' 
                element={
                    <div>
                        <BelbinTHeader />
                        <BelbinResults />
                        <BelbinFooter />
                    </div>
                }/>
        </Routes>
    </BrowserRouter>
)

}

export default AppRoutes