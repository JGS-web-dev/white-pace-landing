import Button from '../Button'
import styles from './styles.module.css'

export default function HeroSection() {
    return (
        <section className={styles.hero}>
            <div className={styles.cta}>
            <h2>Get More Done with whitepace</h2>
            <h1>Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks</h1>

            <Button text="Try TasKey Free" icon={true}/>
            </div>

            <div className={styles.imageContainer}>

            </div>
        </section>
    )
}