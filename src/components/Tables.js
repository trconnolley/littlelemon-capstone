
const Table = ({time}) => {
    return (
        <article>
            {time}
        </article>
    )
}
//BookingSlot
const Tables = ({availableTimes}) => {
    const showTables = availableTimes.length > 0;
    return (
        <section>
            { showTables && availableTimes.map(t => <Table time={t} key={t} />)}
            { !showTables && <h2>No Available Tables</h2>}
        </section>
    )
}

export default Tables;