import React, { useEffect } from "react";
import avatar from "../images/profile__avatar.jpg";
import api from "../utils/Api";
import Card from "./Card";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  // хуки состояний пользователя
  const [userName, setUserName] = React.useState("Гигачад");
  const [userDescription, setUserDescription] = React.useState("Enjoyer");
  const [userAvatar, setUserAvatar] = React.useState(avatar);

  // хук карточек
  const [cards, setCards] = React.useState([]);

  useEffect(() => {
    const userPromise = api.getUserInfo();
    const cardPromise = api.getDefaultCard();

    // сналачала обрабатываем промис пользователя, и если всё норм промис карточек
    Promise.all([userPromise, cardPromise])
      .then((res) => {
        const [userResponse, cardResponse] = res;
        setUserName(userResponse.name);
        setUserDescription(userResponse.about);
        setUserAvatar(userResponse.avatar);

        setCards(cardResponse);
      })
      .catch((err) => console.log(err));
  }, []); // что бы не запускать бесконечный цикл ставим []

  const cardsElements = cards.map(
    (card) => (
      <Card
        key={card._id}
        name={card.name}
        link={card.link}
        likes={card.likes}
        onCardClick={onCardClick} // передаём set карточки
      />
    )
  )

  return (
    <main className="content">
      <section className="profile">
        <a
          href="#"
          className="profile__link"
          onClick={() => onEditAvatar()}
        >
          <img
            className="profile__avatar"
            src={userAvatar}
            alt=" Ваш аватар."
          />
        </a>
        <div className="profile__info">
          <div className="profile__nickname">
            <h1 className="profile__title">{userName}</h1>
            <button
              onClick={() => onEditProfile()}
              type="button"
              className="profile__edit-button button"
              aria-label=" Изменить профиль."
            ></button>
          </div>
          <p className="profile__subtitle">{userDescription}</p>
        </div>
        <button
          onClick={() => onAddPlace()}
          type="button"
          className="profile__add-button button"
          aria-label=" Добавить пост."
        ></button>
      </section>
      <section className="places">
        {cardsElements}
      </section>
    </main>
  );
}

export default Main;
