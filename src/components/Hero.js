import { LinkButton } from './Button';
import NextSection from './NextSection';

 export default function Hero() {
    return (
        <>
            <section className="hero primary-section bg-green first-section">
                <div className="container grid">
                    <div className="6u">
                        <h1 className="font-title color-yellow">Little Lemon</h1>
                        <h2 className="font-subtitle color-lightgrey row">Chicago</h2>
                        <p className="font-lead color-lightgrey row">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                        <LinkButton destination="reservations">Reserve A Table</LinkButton>
                    </div>
                    <div className="6u section-image-container" style={{position:'relative'}}>
                        <img className='wide' src={require('./../img/restaurantfood.jpg')}
                            style={{objectFit:'cover'}}
                            alt="Delicious Food Available at Little Lemon - Chicago"/>
                    </div>
                </div>
                <NextSection className="bg-yellow" uniqueID="highlights-section"/>
            </section>
        </>
    )
};