import {ReactComponent as LargeTableIcon} from './../img/table_large.svg';
import {ReactComponent as BarTableIcon} from './../img/table_small.svg';

const Table = ({time,small,setTime}) => {

    return (
        <article className='tableOption 3u bg-lightgrey color-darkgrey font-section-title'
            onClick={setTime(time)}>
            <span>{time}</span>
            {small ? <BarTableIcon/> : <LargeTableIcon/>}
        </article>
    )
}
//BookingSlot
const Tables = ({availableTimes, people, setTime}) => {
    const showTables = availableTimes.length > 0;
    return (
        <section id="table-options" className="primary-section" style={{paddingTop: "0px"}}>
            <section className='container grid tight-gutter'>
                { showTables ? <h2 className='12u font-subtitle color-darkgrey' style={{textAlign:"center"}}>Choose Your Table</h2> 
                : <h2 className='12u font-subtitle color-darkgrey' style={{textAlign:"center"}}>No Available Tables</h2>}

                { showTables && availableTimes.map(t => {
                    let smallTableOK = false;
                    switch(people){
                        case "1":
                        case "2":
                            smallTableOK = (Math.floor(Math.random() * 3)) > 0 //expect 0,1,2 : mostly small table
                        break;
                        case "3":
                            smallTableOK = (Math.floor(Math.random() * 2)) == 0 //expect 0,1 : 50/50
                        break;
                        default:
                    }
                return <Table time={t} key={t} small={smallTableOK} setTime={setTime}/>
                })}
            </section>
        </section>
    )
}

export default Tables;