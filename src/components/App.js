import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  // хуки состояния попапов(по умолчанию не видно)
  const [isEditProfile, setEditProfile] = React.useState(false);
  const [isAddPlace, setAddPlace] = React.useState(false);
  const [isEditAvatar, setEditAvatar] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({})

  /** Эти функции меняют значения стейта попапов */
  const isEditProfilePopupOpen = () => setEditProfile(true)
  const isAddPlacePopupOpen = () => setAddPlace(true)
  const isEditAvatarPopupOpen = () => setEditAvatar(true)

  const closeAllPopups = () => {
    setEditProfile(false)
    setAddPlace(false)
    setEditAvatar(false)
    setSelectedCard({})
  }

  return (
    <div className="App">
      <div className="page__container">
        <Header />

        <Main
          onEditProfile={isEditProfilePopupOpen}
          onAddPlace={isAddPlacePopupOpen}
          onEditAvatar={isEditAvatarPopupOpen}
          onCardClick = {setSelectedCard}
        />

        <Footer />

        {/* Попап Профиля */}
        <PopupWithForm
          name="profile"
          title="Редактировать профиль"
          buttonText="Сохранить"
          isOpen={isEditProfile}
          onClose={closeAllPopups}
        >
          <label className="form__label">
            <input
              id="name-input"
              name="name"
              type="text"
              className="form__input form__input_type_name"
              placeholder="Введите ваше имя"
              required
              minLength="2"
              maxLength="40"
            />
            <span className="name-input-error form__input-error"></span>
          </label>
          <label className="form__label">
            <input
              id="job-input"
              name="about"
              type="text"
              className="form__input form__input_type_job"
              placeholder="Введите описание"
              required
              minLength="2"
              maxLength="200"
            />
            <span className="job-input-error form__input-error"></span>
          </label>
        </PopupWithForm>

        {/* попап Добавления карточки */}
        <PopupWithForm
          name="card"
          title="Новое Место"
          buttonText="Сохранить"
          isOpen={isAddPlace}
          onClose={closeAllPopups}
        >
          <label className="form__label">
            <input
              id="mesto-input"
              name="name"
              type="text"
              className="form__input form__input_type_name"
              placeholder="Название"
              required
              minLength="2"
              maxLength="30"
            />
            <span className="mesto-input-error form__input-error"></span>
          </label>
          <label className="form__label">
            <input
              id="url-input"
              name="link"
              type="url"
              className="form__input form__input_type_link"
              placeholder="Ссылка на картинку"
              required
            />
            <span className="url-input-error form__input-error"></span>
          </label>
        </PopupWithForm>

        {/* попап Аватара */}
        <PopupWithForm
          name="avatar"
          title="Обновить аватар"
          buttonText="Сохранить"
          isOpen={isEditAvatar}
          onClose={closeAllPopups}
        >
          <label className="form__label">
            <input
              id="mesto-input"
              name="name"
              type="text"
              className="form__input form__input_type_name"
              placeholder="Название"
              required
              minLength="2"
              maxLength="30"
            />
            <span className="mesto-input-error form__input-error"></span>
          </label>
          <label className="form__label">
            <input
              id="url-input"
              name="link"
              type="url"
              className="form__input form__input_type_link"
              placeholder="Ссылка на картинку"
              required
            />
            <span className="url-input-error form__input-error"></span>
          </label>
        </PopupWithForm>

        <ImagePopup 
          card={selectedCard}
          onClose={closeAllPopups}
        />
      </div>
    </div>
  );
}

export default App;
