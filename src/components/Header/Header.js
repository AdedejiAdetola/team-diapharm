import { ReactComponent as Logo} from '../../images/diapharm-logo.svg';
import './Header.scss';
const Header = () => {
    return (
            <div className="header">
                <div className="main-header">
                    <Logo className="logo"/>
                    <p className="glucodrop">GlucoDrop</p>
                </div>
                <div className="sub-header">
                    <p className="sub-text">Let’s control that sugar!</p>
                </div>
            </div>
        
     );
}
 
export default Header;