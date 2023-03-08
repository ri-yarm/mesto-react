import React, { useEffect } from "react";
import avatar from '../images/profile__avatar.jpg'
import api from '../utils/Api'

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
          name: card.name,
          link: card.link
        })))
      })
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
        {cards.map(card => {
          return (
            <article className="card">
              <button
                className="card__delete-btn button"
                aria-label=" Удалить карточку."
              ></button>
              <img className="card__image" src={card.link} alt="" />
              <div className="card__ctrl-wrapper">
                <h2 className="card__title">{card.name}</h2>
                <div className="card__likes-wrapper">
                  <button
                    type="button"
                    className="card__like-btn button"
                    aria-label=" Поставить лайк."
                  ></button>
                  <span className="card__count-likes">0</span>
                </div>
              </div>
            </article>
          )
        })}
      </section>
    </main>
  )
}

export default Main