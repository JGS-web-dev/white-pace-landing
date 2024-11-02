import styles from './styles.module.css';
import { ReactComponent as Logo} from '../../icons/Logo.svg';
import { ReactComponent as HamburgerMenu} from '../../icons/hamburger.svg';

export default function Header() {
    return (
        <header className={styles.header}>
            <Logo width="134px"/>
            <HamburgerMenu width="42px"/>
        </header>
    )
}