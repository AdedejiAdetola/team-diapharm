import { ReactComponent as ImageGirl } from '../../images/person-image.svg';
import { ReactComponent as Ostrich} from '../../images/ostrich.svg'
import Header from "../../components/Header/Header";
import './LandingPage.scss';
import Button from '../../components/Button/Button';


const LandingPage = () => {
    return ( 
        <div>
            <Header />
            <div className="info">
                <div className="container">
                    <p className="title">Living with diabetes never felt so easy</p>
                    <p className="content">The diagnosis of diabetes is not a death sentence. You can still live a healthy, satisfying life, irrespective of the disease.</p>
                    <ImageGirl className="image-girl"/>

                    <div className="discover-btn"><Button value='Discover How' /></div>
                    
                    <p className="lil-title">The Ostrich Mentality</p>
                    <div className="mentality-flex">
                        <p>Ostriches were thought to hide their heads in the sand in the face of danger, believing that it would make them invisible to predators.</p>
                        <Ostrich />
                    </div>

                    <p class="ostrich-p2">You may think you don’t need to worry, since you don’t feel unwell. But ignoring the fact that you are diabetic won’t make it go away. Things could even get worse!</p>

                    <p className="lil-title">Keep the odds in your favour</p>
                </div>
                
                
            </div>
        </div>
     );
}
 
export default LandingPage;