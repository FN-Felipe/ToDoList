import { Header } from './components/Header'
import './global.css'
import styles from './App.module.css'
import {PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'
import { Comment } from './components/Comment'
import { v4 as uuidv4 } from 'uuid'
import { Vazio } from './components/Vazio'

export function App() {
  
  const [comments, setComments] = useState([''])
  const [newCommentText, setNewCommentText] = useState('')

    function handleCreateNewComment(event : FormEvent){
        event.preventDefault()

        setComments([...comments, newCommentText]);
        setNewCommentText('')
        uuidv4()
    }

    function handleNewCommentChange(event : ChangeEvent<HTMLTextAreaElement>){
      event.target.setCustomValidity('')
      setNewCommentText(event.target.value);
    }

    function handleNewCommentInvaled(event : InvalidEvent<HTMLTextAreaElement>){
      event.target.setCustomValidity('Esse campo é obrigatório!')
    }

    function deleteComment(commentToDelete : string){
        const commentsWithoutDeleteOne = comments.filter(comment => {
            return comment !== commentToDelete;
        })
        setComments(commentsWithoutDeleteOne);
    }

    const isNewCommentEmpty = newCommentText.length === 0
    
  return (
    <div>
      <Header/>
      <div className={styles.altura}>
        <form className={styles.commentForm}>
          <textarea 
            className={styles.textarea}
            value={newCommentText}
            placeholder='Digite sua tarefa'
            onChange={handleNewCommentChange}
            onInvalid={handleNewCommentInvaled}
            required
          />
          <button onClick={handleCreateNewComment} disabled={isNewCommentEmpty}>
            Criar
            <PlusCircle 
              size={20} 
              style={{marginLeft: "5px"}}
            />
          </button>
        </form>
      </div>
      <div className={styles.wrapper}>
        <main>
          <div className={styles.espaco}>
            <strong className={styles.tarefas}>Tarefas criadas</strong>
            <div className={styles.contador}><p>0</p></div>
            <strong className={styles.concluida}>Concluídas</strong>
            <div className={styles.contador}><p>0</p></div>
          </div>
          <div className={styles.divisao}></div>

          {comments.map(comment => {
            return (
              <Comment 
                key={uuidv4()}
                content={comment}
                onDeleteComment={deleteComment}
              />
            )
          })}
          
          
        </main>
      </div>
    </div>
  )
}


