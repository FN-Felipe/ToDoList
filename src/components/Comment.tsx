import { Trash } from 'phosphor-react'
import styles from './Comment.module.css'

interface CommentProps {
    content: string;
    onDeleteComment:(comment : string) => void;
    key: string
}

export function Comment({key, content, onDeleteComment} : CommentProps){

    function handleDeleteComment(){
        onDeleteComment(content);
    }

    return (
        <main className={styles.caixa} key={key}>
            <div className={styles.check}>
                <input type="checkbox" size={20} id='checkedbox'/>
            </div>
            <label className={styles.conteudo}>
                {content}
            </label>
            <button onClick={handleDeleteComment} className={styles.deletar}>
                <Trash size={20}/>
            </button>
        </main>
    )
}