import { Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { v4 as uuidv4 } from 'uuid';

interface CommentProps {
    content: string;
    onDeleteComment:(comment : string) => void;
    key: string;
}

export function Comment({key, content, onDeleteComment} : CommentProps){

    function handleDeleteComment(){
        onDeleteComment(content);
    }

    return (
        <div className={styles.caixa}>
            <div className={styles.radio}>
                <input type="radio" size={20}/>
            </div>
            <div className={styles.conteudo}>
                {content}
            </div>
            <button onClick={handleDeleteComment} className={styles.deletar}>
                <Trash size={20}/>
            </button>
        </div>
    )
}