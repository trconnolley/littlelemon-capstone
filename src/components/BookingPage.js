
import {useState} from 'react';

import BookingForm from './BookingForm';
import Tables from './Tables';
import FindTable from  './FindTable';

const BookingPage = (props) => {
    let d = new Date();
    let m = d.getMonth() + 1;

    let today = `${d.getFullYear()}-${(m < 10) ? '0' + m : m}-${(d.getDate() < 10) ? '0' + d.getDate(): d.getDate()}`;
    const [date, setDate] = useState(today);
    const [time, setTime] = useState("18:00");
    const [people, setPeople] = useState("2");
    const [occasion, setOccasion] = useState("2");

    return (
        <>
            <FindTable {...props} 
                date={date}
                setDate={setDate}
                people={people}
                setPeople={setPeople}
                today={today}
            />
            <Tables {...props} people={people} setTime={setTime} />
            <BookingForm {...props}
                date={date}
                setDate={setDate}
                time={time}
                setTime={setTime}
                people={people}
                setPeople={setPeople}
                occasion={occasion}
                setOccasion={setOccasion}
            />
        </>
    )
}

export default BookingPage;