import React from 'react';
import { Routes, Route } from 'react-router';
import Form from './Form';
import Users from './Users';

const Routers = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Users />}>
                    Users
                </Route>
                <Route path='/users/:id' element={<Form />}>
                    Patch Data
                </Route>
            </Routes>
        </div>
    );
};
export default Routers;
