//import ProfilePicture from './ProfilePicture'
import {ReactComponent as Star} from './../img/star.svg'
import {ReactComponent as EmptyStar} from './../img/star-outline.svg'
import NextSection from './NextSection';

 const CommentCard = ({card}) => {
    const rating = [];
    const score = card.rating;

    for (let i = 1; i <= 5; i++) {
        rating.push(i <= card.rating ? true : false);
    }
 return (
    <article className='comment-card bg-lightgrey 3u'>
        <div className="review">
            <div className='rating flex'>
                <div className='stars color-yellow'>
                    {rating.map((r,i) => {
                        return r ? <Star key={`${card.id}_${i}_1`}/> : <EmptyStar key={`${card.id}_${i}_0`}/>
                    })}
                </div>
                <h3 className='color-darkgrey'>{`${card.rating}/5`}</h3>
            </div>
            <p className="font-paragraph color-darkgrey comment-quote"><q>{card.comment}</q></p>
        </div>
        <div className='comment-profile'>
            <img className='profile-picture' src={card.profile} alt={'User: ' + card.user}/>
            <h3 className="font-card-title">{card.user}</h3>
        </div>
     </article>
 )
};

//TODO: Add more testimonials and then add ability to load more (or a reviews page?)
 const Testimonials = () => {
    const comments = [//would most likely be some kind of JS array based on database/api call
    {   id:1,
        user:'Tom T',
        rating:4,
        comment:"Great place, awesome staff.",
        profile:require('./../img/man.jpg'),
    },{
        id:2,
        user:'Jonah J',
        rating:5,
        comment:"Can't get enough of that pasta. It's my go to meal. I get it every week.",
        profile:require('./../img/man2.jpg'),
    },{
        id:3,
        user:'Kathryn K',
        rating:3,
        comment:'Our server was great, but I thought it was a bit pricey',
        profile:require('./../img/woman.jpg'),
    },{
        id:4,
        user:'Lisa L',
        rating:5,
        comment:'Love it. Definitely recommend.',
        profile:require('./../img/woman2.jpg'),
    }
   ];

    return (
        <section id="testimonials-section" className="testimonials primary-section bg-darkgrey">
            <div className="container grid">
                <h2 className='font-subtitle 12u color-lightgrey' style={{textAlign:'center'}}>Testimonials</h2>
                {comments.map((c) => {
                    return <CommentCard key={c.id} card={c}/>
                })}
            </div>
            <NextSection className="bg-yellow" uniqueID="about-section"/>
        </section>
    )
}

export default Testimonials;