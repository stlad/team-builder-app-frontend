import { BrowserRouter, Routes, Route} from 'react-router-dom';
import BelbinTHeader from '../belbin/BelbinHeader';
import BelbinTestHolder from '../belbin/BelbinTestHolder';
import BelbinResults from '../belbin/BelbinResults';

const AppRoutes  = (props) =>{
    
    return (
    <BrowserRouter>
        <Routes>
            <Route path='/' 
                element={
                    <div>
                        <BelbinTHeader />
                        <BelbinTestHolder />
                    </div>
                }/>
            <Route path='/belbin/results' 
                element={
                    <div>
                        <BelbinTHeader />
                        <BelbinResults />
                    </div>
                }/>
        </Routes>
    </BrowserRouter>
)

}

export default AppRoutes