import { ReactComponent as Logo} from '../../images/diapharm-logo.svg';
import './Header.scss';
const Header = () => {
    return ( 
        <div className="header">
            <div class="main-header">
                <Logo class="logo"/>
                <p class="glucodrop">GlucoDrop</p>
            </div>
            <div class="sub-header">
                <p class="sub-text">Let’s control that sugar!</p>
            </div>
        </div>
     );
}
 
export default Header;