import styles from './style.module.css';
import LogoImg1 from '../../assets/images/logo.svg';
import LogoImg2  from '../../assets/images/logoNoBackground.svg';
import { Link } from'react-router-dom';

export const Logo = (props) => {
    const {children, className} = props;
    const LogoImage = !props.background ? LogoImg2 : LogoImg1;
    return (
        <div className={`${styles.logo} ${className}`}>
            <h1>
                <Link to='/'>
                    <img src={LogoImage} alt = "logo"/>
                </Link>
            </h1>
        </div>
    )
}