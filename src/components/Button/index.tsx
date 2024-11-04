import { ReactComponent as ArrowIcon} from "../../icons/Icon.svg";

import styles from './styles.module.css';

interface ButtonProps {
    text: string
    icon: boolean
}

export default function Button({text, icon}: ButtonProps) {

    return(
        <button className={styles.btn}>
            <p>{text}</p>
            <p>{icon? <ArrowIcon/>: ''}</p>
        </button>
    )
}