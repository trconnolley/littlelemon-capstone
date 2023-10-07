import Button from './Button';
import NextSection from './NextSection'

const FindTable = ({getAvailableTimes, date, setDate, people, setPeople, today}) => {

    return (
        <section id="search-section" className="search primary-section first-section fit-section bg-darkgrey">
            <div className="container grid tight-gutter">
                <h1 className="font-title color-lightgrey 7u" style={{textAlign:'left'}}>Find a Reservation</h1>
                <section className="5u flex search-form">
                    <section className='incognito-field 12u'>
                        <input value={date}
                            className='font-title dateSelector'
                            onChange={e => {
                            setDate(e.target.value)
                            getAvailableTimes({
                                type: 'update',
                                date: e.target.valueAsDate
                            })
                            }} type="date" id="date-search" min={today} />
                        <label htmlFor="date-search">Choose date</label>
                    </section>
                </section>
                <div className='inputSection 12u'>
                        <label htmlFor="guests">Number of guests</label>
                        <select value={people} 
                            onChange={e => {
                                setPeople(e.target.value)
                                getAvailableTimes({
                                    type: 'update',
                                    date: date
                                })}} 
                                id="guests" name="guests">
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