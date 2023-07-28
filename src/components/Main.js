import Home from './Home'
import AboutPage from './AboutPage'
import Menu from './Menu'
import BookingPage from './BookingPage'
import OrderOnline from './OrderOnline'
import Login from './Login'
import {Routes, Route} from 'react-router-dom';
import {useReducer, useEffect, useState} from 'react';
import {fetchAPI} from './api';

const reducer = (state, action) => {
    switch (action.type) {
        case 'update':
            if (!action.date)
                return state;

            if (!(action.date instanceof Date && !isNaN(action.date)))
                return state;

            return fetchAPI(action.date);
        case 'cear':
            return [];
        default:
    }
    throw Error('Unknown action: ' + action.type);
}

const initializeTimes = (arr) => {
    let d = new Date();
    return fetchAPI(d);
}

const Main = () => {
    const [state, dispatch] = useReducer(reducer, [], initializeTimes);
    const [searchDate, setSearchDate] = useState(new Date())
    const updateTimes = (obj) => {
        setSearchDate(obj.date);
        }

    useEffect(() => {
        dispatch({
            type: 'update',
            date: searchDate
        })
    },[searchDate]);

    return (
        <main>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<AboutPage/>}/>
                <Route path="/menu" element={<Menu/>}/>
                <Route path="/reservations" element={<BookingPage availableTimes={state} getAvailableTimes={updateTimes}/>}/>
                <Route path="/orderonline" element={<OrderOnline/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </main>
    );
}

export default Main;