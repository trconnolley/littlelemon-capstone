import {useState} from 'react';
import Button from './Button';
import NextSection from './NextSection'

const BookingForm = ({getAvailableTimes}) => {
    let d = new Date();
    let m = d.getMonth() + 1;

    let today = `${d.getFullYear()}-${(m < 10) ? '0' + m : m}-${(d.getDate() < 10) ? '0' + d.getDate(): d.getDate()}`;
    const [date, setDate] = useState(today);
    const [time, setTime] = useState("18:00");
    const [people, setPeople] = useState("2");
    const [occasion, setOccasion] = useState("2");

    return (
        <section id="reservations-section" className="reservations primary-section first-section fit-section bg-darkgrey">
            <div className="container grid">
                <h1 className="font-title color-lightgrey 12u" style={{textAlign:'left'}}>Find a Reservation</h1>
                <form className="12u flex reservation-form">
                    <div className='inputSection 6u'>
                        <label htmlFor="res-date">Choose date</label>
                        <input value={date} onChange={e => {
                            setDate(e.target.value)
                            getAvailableTimes({
                                type: 'update',
                                date: e.target.valueAsDate
                            })
                            }} type="date" id="res-date" />
                    </div>
                    <div className='inputSection'>
                        <label htmlFor="res-time">Choose time</label>
                        <select value={time} onChange={e => setTime(e.target.value)} id="res-time" name="res-time">
                            <option value="16:00">16:00</option>
                            <option value="16:30">16:30</option>
                            <option value="17:00">17:00</option>
                            <option value="17:30">17:30</option>
                            <option value="18:00">18:00</option>
                            <option value="18:30">18:30</option>
                            <option value="19:00">19:00</option>
                            <option value="19:30">19:30</option>
                            <option value="20:00">20:00</option>
                            <option value="20:30">20:30</option>
                            <option value="21:00">21:00</option>
                            <option value="21:30">21:30</option>
                            <option value="22:00">22:00</option>
                        </select>
                    </div>
                    <div className='inputSection'>
                        <label htmlFor="guests">Number of guests</label>
                        <select value={people} onChange={e => setPeople(e.target.value)} id="guests" name="guests">
                            <option value="1">1 guest</option>
                            <option value="2">2 guests</option>
                            <option value="3">3 guests</option>
                            <option value="4">4 guests</option>
                            <option value="5">5 guests</option>
                            <option value="6">6 guests</option>
                            <option value="7">7 guests</option>
                            <option value="8">8 guests</option>
                            <option value="9">9 guests</option>
                            <option value="10">10 guests</option>
                            <option value="0">Larger Group</option>
                        </select>
                    </div>
                    <div className='inputSection'>
                        <label htmlFor="occasion">Number of guests</label>
                        <select value={occasion} onChange={e => setOccasion(e.target.value)} id="occasion" name="occasion">
                            <option value="Birthday">Birthday</option>
                            <option value="Anniversary">Anniversary</option>
                        </select>
                    </div>
                    <div className='inputSection' style={{marginTop:"1em"}}>
                        <Button>Search Available Tables</Button>
                    </div>
                </form>
                <div className="callUs 12u color-lightgrey">
                    <p>or</p>
                    <p>Call <a href="tel:+12223334567" className="blend color-lightgrey">(222) 333-4567</a> to schedule a reservation.</p>
                </div>
                <NextSection className="bg-yellow" uniqueID="placeholder-section"/>
            </div>
        </section>
    )
}

export default BookingForm;