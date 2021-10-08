import './Footer.css'
import GitHubIcon from '@material-ui/icons/GitHub'
import { footer } from '../../portfolio'


const Footer = () => {
    const { cleanfolio } = footer
    return (
        <footer className='footer'>
            <div>Moin* is commonly used in Germany/Hamburg to greet someone</div>
            <div>
                <a
                    href={cleanfolio}
                    aria-label='github'
                >
                    <span className='link'>Heavily inspired by Cleanfolio</span>
                    <GitHubIcon/>
                </a>
            </div>
        </footer>
    )
}
export default Footer
