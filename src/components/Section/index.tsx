import React from 'react';
import Button from '../Button';
import styles from './styles.module.css';

interface SectionProps {
    title: string;
    paragraph: string;
    textBtn: string;
    hasIcon: boolean;
    children?: React.ReactNode;
    hasImg: boolean;
    bgDark?: boolean;
    flexDirection?: 'reverse' | 'normal';
}

export default function Section({title, paragraph, textBtn, hasIcon, children, hasImg, bgDark = false, flexDirection = 'normal'}: SectionProps) {

    var containerClass = '';

    // Para background dark e direção reverse
    if(flexDirection === 'reverse' && bgDark === true) {
        containerClass = `${styles.reverse} ${styles.containerDark}`
    }
   
    // Para background normal e direção reverse
    if(flexDirection === 'reverse' && bgDark === false) {
            containerClass = `${styles.reverse} ${styles.container}`
        }

    // Para background dark e direção normal
    if(flexDirection === 'normal' && bgDark === true) {
        containerClass = `${styles.containerDark}`
    }

    //Para background normal e direção normal
    if(flexDirection === 'normal' && bgDark === false) {
        containerClass = `${styles.container}`
    }

    
    return(
        <section className={containerClass}>
            <div className={styles.ctaContainer}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.text}>{paragraph}</p>
                <Button icon={hasIcon} text={textBtn}/>
            </div>

            {hasImg? <div className={styles.figureContainer}>{children}</div> : <div className={styles.rectangleContainer}></div>}
        </section>
    )
}