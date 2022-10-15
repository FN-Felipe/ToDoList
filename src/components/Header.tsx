import styles from './Header.module.css'
import { Rocket } from 'phosphor-react'
export function Header(){
    return (
        <header className={styles.header}>
                <Rocket className={styles.Rocket} size={60}/>
                <strong className={styles.strong}><span className={styles.to}>to</span><span className={styles.do}>do</span></strong>
        </header>
    )
}