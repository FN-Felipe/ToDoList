import { ClipboardText } from "phosphor-react";
import styles from './Vazio.module.css';

export function Vazio(){
    return (
        <div className={styles.vazio}>
            <ClipboardText size={80}/>
            <div className={styles.pcor}>
              <p><strong>Você ainda não tem tarefas cadastradas</strong></p>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          </div>
    )
}