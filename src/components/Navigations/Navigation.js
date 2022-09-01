import './Navigation.scss';

import { Link } from "react-router-dom";

const Navigation = () => {
    return ( 
        <div className="nav">
            {/* Link to login and sigup page */}
            <Link className="option" to='/login'>
                Login
            </Link>

            <Link className="option" to='/signup'>
                Signup
            </Link>
        </div>
     );
}
 
export default Navigation;