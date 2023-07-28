import { LinkButton } from './Button';
import {ReactComponent as DishIcon} from './../img/dish_icon.svg';
import NextSection from './NextSection';

const specialsList = [//would most likely be some kind of JS array based on database/api call
    {   id:'greek_salad',
        title:'Greek Salad',
        price:'12.99',
        description:'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
        thumbnail:require('./../img/greek_salad_sm.jpg')
    },{
        id:'bruchetta',
        title:'Bruchetta',
        price:'5.99',
        description:'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
        thumbnail:require('./../img/brushetta_sm.jpg')
    },{
        id:'lemon_dessert',
        title:'Lemon Dessert',
        price:'5.00',
        description:'This comes straight from Grandma’s recipe book. Every last ingredient has been sourced and is as authentic as can be imagined.',
        thumbnail:require('./../img/lemon_dessert.png')
    },{
        id:'grilled_fish',
        title:'Grilled Fish',
        price:'14.99',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sollicitudin lorem eu maximus aliquet. Nullam mollis augue.',
        thumbnail:require('./../img/fish_sm.jpg')
    },{
        id:'pasta',
        title:'Pasta',
        price:'12.99',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sollicitudin lorem eu maximus aliquet. Nullam mollis augue.',
        thumbnail:require('./../img/pasta_sm.jpg')
    }
];

const Card = ({card}) => {
    return (
        <article className='card bg-lightgrey'>
            <div className='image-holder'>
                <img src={card.thumbnail} alt={'Picture of ' + card.title}/>
            </div>
            <div className='flex card-heading'>
                <h3 className="font-card-title">{card.title}</h3>
                <h4 className="font-card-title bold">$ {card.price}</h4>
            </div>
            <p className="font-paragraph color-darkgrey card-description">{card.description}</p>
            <a className='font-card-title card-link' href={`/order?dish=${card.id}`}>Order for Delivery <DishIcon/></a>
        </article>
    )
};

const Carousel = ({type, children, ...props}) => {
    const className =  type === 'horizontal' ? 'horizontal': 'vertical';
    // const carouselPosition = useState(0);
    //TODO: make carousel work, or import an external component
    return (
        <div className='carousel container'>
            <div {...props} className={'slider ' + className}>
                {children}
            </div>
            <div className='chevron next-slide'></div>
            <div className='chevron prev-slide'></div>
        </div>
    )
};

const Highlights = () => {
    return (
        <section id="highlights-section" className="highlights primary-section">
            <div className='flex container section-heading'>
                <h2 className="font-subtitle">This Weeks Specials!</h2>
                <LinkButton destination="menu">Online Menu</LinkButton>
            </div>
            <Carousel type="horizontal">
                {specialsList.map((c) => {
                    return <Card key={c.id} card={c} />})}
            </Carousel>
            <NextSection className="bg-yellow" uniqueID="testimonials-section"/>
        </section>
    )
};

export default Highlights;