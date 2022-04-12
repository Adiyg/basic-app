import React from 'react'
import {Router,Routes,Route} from 'react-router-dom';
import ClassComponent from '../ClassComponent';
import Home from '../Home';
import Table from '../Table';
import ContactUs from './ContactUs';
import ListsAndKeys from './ListAndKeys';
import Pagination from './Pagination';
import TodoAppUseEffect from './TodoAppUseEffect';
import UseEffectPagination from './UseEffectPagination';
import User from './User';
import UseStateHook from './UseStateHook';

function RoutesComp() {
  return (
    <div>
        <Routes>
            <Route path='/homeComp' element={<Home />} />
            <Route path='/classComp' element={<ClassComponent />} />
            <Route path='/listkeys' element={<ListsAndKeys />} />
            <Route path='/contactus' element={<ContactUs />} />
            <Route path='/classlifecycle' element={<User />} />
            <Route path='/table' element={<Table />} />
            <Route path='/pagination' element={<Pagination />} />
            <Route path='/usestate' element={<UseStateHook />} />
            <Route path='/useeffect' element={<TodoAppUseEffect />} />
            <Route path='/useeffectpagination' element={<UseEffectPagination />} />
        </Routes>
    </div>
  )
}

export default RoutesComp