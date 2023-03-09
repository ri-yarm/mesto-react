import React, { useEffect } from "react";
import avatar from '../images/profile__avatar.jpg'
import api from '../utils/Api'
import Card from "./Card";

function Main({ onEditProfile, onAddPlace, onEditAvatar }) {

  // хуки состояний пользователя 
  const [userName, setUserName] = React.useState('Гигачад')
  const [userDescription, setUserDescription] = React.useState('Enjoyer')
  const [userAvatar, setUserAvatar] = React.useState(avatar)

  // хук карточек
  const [cards, setCards] = React.useState([])

  // хук useEffect для использования императивного кода
  useEffect(() => {
    api.getUserInfo()
      .then(data => {
        setUserName(data.name)
        setUserDescription(data.about)
        setUserAvatar(data.avatar)
      })
      .catch(err => console.log(err))

    api.getDefaultCard()
      .then(data => {
        setCards(data.map(card => ({
          keys: card._id,
          name: card.name,
          link: card.link,
          likes: card.likes
        })))
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <main className="content">
      <section className="profile">
        <a href="#" className="profile__link" onClick={() => onEditAvatar(true)}>
          <img className="profile__avatar" src={userAvatar} alt=" Ваш аватар." />
        </a>
        <div className="profile__info">
          <div className="profile__nickname">
            <h1 className="profile__title">{userName}</h1>
            <button onClick={() => onEditProfile(true)} type="button" className="profile__edit-button button" aria-label=" Изменить профиль."></button>
          </div>
          <p className="profile__subtitle">{userDescription}</p>
        </div>
        <button onClick={() => onAddPlace(true)} type="button" className="profile__add-button button" aria-label=" Добавить пост."></button>
      </section>
      <section className="places">
        {cards.map((card) => (
          <Card 
            key= {card.keys}
            name= {card.name}
            link = {card.link}
            likes = {card.likes}
          />
        ))}
      </section>
    </main>
  )
}

export default Main