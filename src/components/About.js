
const About = () => {
    return (
        <section className="about-section primary-section">
            <div className="container grid">
                <div className="6u">
                    <h1 className="font-title color-green">Little Lemon</h1>
                    <h2 className="font-subtitle row">Chicago</h2>
                    <p className="font-lead color-darkgrey" style={{paddingRight: '2em'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pharetra nibh sed elit rutrum, a convallis ipsum ornare. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras augue urna, pharetra eu arcu sed, sollicitudin venenatis est. In auctor bibendum venenatis. Nullam maximus semper sapien, ut egestas purus viverra quis. Proin at nibh consectetur, aliquet justo in, commodo turpis. Maecenas est est, dictum sit amet finibus vel, lacinia eget est.
                    Etiam vel pharetra ex, sit amet luctus magna. Suspendisse sed cursus leo, non cursus mi.
                    </p>
                </div>
                <div className="6u" style={{position:'relative'}}>
                    <img className="stacked-image one" src={require('./../img/restaurant.jpg')}
                        alt="Spacious and welcoming dining room"/>
                    <img className="stacked-image two" src={require('./../img/Mario_and_Adrian_A.jpg')}
                        alt="Mario and Adrian serve up some of the best food in town."/>
                </div>
            </div>
        </section>
    )
};

export default About;