
import BookingForm from './BookingForm';
import Tables from './Tables';
import FindTable from  './FindTable';

const BookingPage = (props) => {

    return (
        <>
            <FindTable {...props}/>
            <Tables {...props} />
            <BookingForm {...props} />
        </>
    )
}

export default BookingPage;