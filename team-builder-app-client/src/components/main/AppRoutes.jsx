import { BrowserRouter, Routes, Route} from 'react-router-dom';
import BelbinTHeader from '../belbin/BelbinHeader';
import BelbinTestHolder from '../belbin/BelbinTestHolder';
import BelbinResults from '../belbin/BelbinResults';
import BelbinFooter from '../belbin/BelbinFooter';
import HardSkillsPage from '../hardskills/HardSkillsPage';
import MainPage from './MainPage';
import LoginHeader from './LoginHeader';
import HardSkillsFooter from '../hardskills/HardSkillsFooter';
import UserProfile from '../profile/UserProfile';
import UserRegForm from '../registration/UserRegForm';
import AllStudentsPage from '../students/all_students_page/AllStudentsPage';
import MainFooter from './MainFooter';

const AppRoutes  = (props) =>{
    
    return (
    <BrowserRouter>
        <Routes>
        <Route path='/'
                element={
                    <div>
                        <LoginHeader />
                        <MainPage />
                    </div>
                }/>

            <Route path='/belbin' 
                element={
                    <div>
                        <LoginHeader />
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
            <Route path='/hardskills'
                element={
                    <div>
                        <LoginHeader />
                        <HardSkillsPage />
                        <HardSkillsFooter />
                    </div>
                }/>
            <Route path='/profile'
                element={
                    <div>
                        <LoginHeader />
                        <UserProfile />
                    </div>
                }/>
            
            <Route path='/register'
                element={
                    <div>
                        <UserRegForm />
                        
                    </div>
                }/>


                
            <Route path='/students/all'
                element={
                    <div>
                        <LoginHeader />
                        <AllStudentsPage />
                        <MainFooter />
                    </div>
                }/>
        </Routes>
    </BrowserRouter>
)

}

export default AppRoutes