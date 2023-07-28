import {useState} from 'react';
import Button from './Button';
import NextSection from './NextSection'

const FindTable = ({getAvailableTimes}) => {

    let d = new Date();
    let m = d.getMonth() + 1;

    let today = `${d.getFullYear()}-${(m < 10) ? '0' + m : m}-${(d.getDate() < 10) ? '0' + d.getDate(): d.getDate()}`;
    const [date, setDate] = useState(today);

    return (
        <section id="search-section" className="search primary-section first-section fit-section bg-darkgrey">
            <div className="container grid">
                <h1 className="font-title color-lightgrey 7u" style={{textAlign:'left'}}>Find a Reservation</h1>
                <section className="5u flex search-form">
                    <section className='incognito-field 12u'>
                        <input value={date} onChange={e => {
                            setDate(e.target.value)
                            getAvailableTimes({
                                type: 'update',
                                date: e.target.valueAsDate
                            })
                            }} type="date" id="date-search" min={today} className='font-title' />
                        <label htmlFor="date-search">Choose date</label>
                    </section>
                </section>
                <div className="callUs 12u color-lightgrey">
                    <p>or</p>
                    <p>Call <a href="tel:+12223334567" className="blend color-lightgrey">(222) 333-4567</a> to schedule a reservation.</p>
                </div>
                <NextSection className="bg-yellow" uniqueID="placeholder-section"/>
            </div>
        </section>
    )
}

export default FindTable;