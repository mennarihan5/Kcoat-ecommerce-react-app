import styles from './style.module.css';
import LogoImg1 from '../../assets/images/logo.svg';
import LogoImg2  from '../../assets/images/logo.png';

export const Logo = (props) => {
    const {children, className} = props;
    // const LogoImage = !props.background ? LogoImg2 : LogoImg1;
    return (
        <div className={`${styles.logo} ${className}`}>
            <h1>
                <a href="#">
                    <img src={LogoImg2} className={styles['logoImage']} alt = "logo"/>
                </a>
            </h1>
        </div>
    )
}