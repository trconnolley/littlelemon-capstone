import MonoLogo from './../img/mono_logo.png';
import Nav from './Nav';
import {Link} from 'react-router-dom';

 const Footer = () => {
    return (
        <footer className="bg-green font-section-categories primary-section">
            <div className="container grid">
                <div className="3u">
                    <Link to="/" className="nav-link">
                        <img src={MonoLogo} alt="Little Lemon Logo - Monochrome"/>
                    </Link>
                </div>
                <div className="3u">
                    <h3 className='font-section-title'>Navigation</h3>
                    <Nav/>
                </div>
                <div className="3u">
                    <h3 className='font-section-title'>Contact</h3>
                    <address>
                        <h4>Email</h4>
                        <a href="mailto:staff@littlelemon.com">staff@littlelemon.com</a>
                        <h4>Phone</h4>
                        <a href="tel:+12223334567">(222) 333-4567</a>
                        <br></br>
                        <h4>Location</h4>
                        <p>123 Tasty St.<br/>
                            Chicago, IL 60118
                        </p>
                    </address>
                </div>
                <div className="3u">
                    <h3 className='font-section-title'>Social Media</h3>
                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><img src={require('./../img/icon_footer_fb.png')} alt='Facebook'/></a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><img src={require('./../img/icon_footer_instagram.png')} alt='Instagram'/></a>
                    <a href="https://www.twitter.com/" target="_blank" rel="noreferrer"><img src={require('./../img/icon_footer_twitter.png')} alt='Twitter'/></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;