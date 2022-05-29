import { Container } from 'react-bootstrap';
import '../style/landingPage.css';
const Footer = () => {
    return (
        <footer className='footer fluid bg-dark text-white'>
         <div>
            <Container>
            <h6>Newsletter subscription</h6>
            <p>Sign up for Tudungpeople updates to receive information about new arrivals and future events.</p>
            </Container>
         </div>
         <div>
             <Container>
                <h6>Account</h6>
                <p>Rewards Programme</p>
                <p>Returns & Exchanges</p>
             </Container>
         </div>
</footer>
    )
}

export default Footer;