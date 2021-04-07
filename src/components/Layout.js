import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setListExpensives } from '../actions';
import Footer from './Footer';
import Header from './Header';
import Detail from './expenses/Lists';

const Layout = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setListExpensives(), [dispatch]);
    },[]);

    return (
        <>
            <Header />
            <Detail />
            <Footer />
        </>
    );
}

export default Layout;