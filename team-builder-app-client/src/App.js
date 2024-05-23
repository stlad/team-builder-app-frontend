import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import AppRoutes from './components/main/AppRoutes';
import Layout from './pages/Layout';
import MainPage from './components/main/MainPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BelbinPage from './pages/BelbinPage';
import HardskillPage from './pages/HardskillPage';
import UserProfile from './components/profile/UserProfile';
import UserRegForm from './components/registration/UserRegForm';
import AllStudentsPage from './components/students/all_students_page/AllStudentsPage';
import TeamsPage from './components/students/teams/TeamsPage';
import TeamCard from './components/students/teams/TeamCard';
import ProjectsPage from './components/projects/ProjectsPage';
import SignInForm from './components/SignInForm/SignInForm';

function App() {

  //   return(
  //     <div className='App'>
  //       <header></header>
  //       <div>
  //         <AppRoutes />
  //       </div>  

  //       <footer></footer>
  //     </div>  
  //     );
  // }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' index={true} element={<MainPage />} />
          <Route path='/belbin' element={<BelbinPage />} />
          <Route path='/hardskills' element={<HardskillPage />} />
          <Route path='/profile' element={<UserProfile />} />
          <Route path='/register' element={<UserRegForm />} />
          <Route path='/students/all' element={<AllStudentsPage />} />
          <Route path='/teams' element={<TeamsPage />} />
          <Route path='/teams/me' element={<TeamCard teamId={null} />} />
          <Route path='/projects' element={<ProjectsPage />} />
          <Route path='/signin' element={<SignInForm />} />
          {/* 
          <Route path='/belbin/results'
            element={
              <div>
                <BelbinTHeader />
                <BelbinResults />
                <BelbinFooter />
              </div>
            } />


 */}

        </Route>
      </Routes>
    </BrowserRouter>

  );

}

export default App;
