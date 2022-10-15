import { ClipboardText } from "phosphor-react";
import { FormEvent, useState } from "react";
import styles from './Post.module.css'

/*interface Content {
    content: string;
}

interface PropContents {
    content: Content[];
}

export function Post(){
    
    const [content, setContent] = useState(['Comer Macarrão'])
    const [newCommentText, setNewCommentText] = useState('')

    function handleCreateNewComment(event : FormEvent){
        event.preventDefault()

        setContent([...content, newCommentText]);
        setNewCommentText('')
    }
    
    
    return (
        <div className={styles.vazio}>
            <ClipboardText size={80}/>
            <div className={styles.pcor}>
            <p><strong>Você ainda não tem tarefas cadastradas</strong></p>
            <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          </div>
    )
    const [comments, setComments] = useState([''])

    const [newCommentText, setNewCommentText] = useState('')

    function handleCreateNewComment(event : FormEvent){
        event.preventDefault()

        setComments([...comments, newCommentText]);
        setNewCommentText('')
    }

    function deleteComment(commentToDelete : string){
        const commentsWithoutDeleteOne = comments.filter(comment => {
            return comment !== commentToDelete;
        })
        setComments(commentsWithoutDeleteOne);
    }


    return (
        <article>
            <div>
                {
                    content.map(line => <p key={line.content}>{line.content}</p>)
                }
            </div>
        </article>
    )

}*/


