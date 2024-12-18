import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import Main from './main/Main';
import Login from '../Pages/Login';
import { Schools } from './Schools';
import Classes from './Classes';
import Student from './Student';
import Section from './Section';
import Payments from './Payments';
import SchoolForm from './SchoolForm';
import ClassForm from './ClassForm';
import StudentForm from './StudentForm';
import SectionForm from './SectionForm';
import PublicRoutes from '../utils/publicRoutes';
import PrivateRoutes from '../utils/privateRoutes';

const ProtectedRoutes = () => {
  return (
    <Routes>
       <Route element={<PrivateRoutes />}>
      <Route element={<Layout />}>
        <Route path="/" element={<Main />} />
        <Route path="/schools" element={<Schools />} />
        <Route path="/add-school" element={<SchoolForm />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/add-class" element={<ClassForm  />} /> 
        <Route path="/student" element={<Student />} />
        <Route path="/add-student" element={<StudentForm  />} />
        <Route path="/section" element={<Section />} />
        <Route path="/add-section" element={<SectionForm addSection={(data) => console.log(data)} />} />
        <Route path="/payments" element={<Payments />} />
      </Route>
      </Route>
    <Route element={<PublicRoutes />}>
      <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
};

export default ProtectedRoutes;
