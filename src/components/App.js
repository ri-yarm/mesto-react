import Header from './Header';
import Main from './Main';
import Footer from './Footer';


function App() {
  return (
    <div className="App">
      <div className="page">
        <div className="page__container">
          <Header />
          <Main />
          <Footer />
          <div className="popup popupProfile">
            <div className="popup__container">
              <button type="button" className="button popup__exit-button" aria-label=" Закрыть попап."></button>
              <h2 className="popup__title">Редактировать профиль</h2>
              <form action="#" className="form" name="profile" autoComplete="on" noValidate>
                <label className="form__label">
                  <input id="name-input" name="name" type="text" className="form__input form__input_type_name"
                    placeholder="Введите ваше имя" required minLength="2" maxLength="40" />
                  <span className="name-input-error form__input-error"></span>
                </label>
                <label className="form__label">
                  <input id="job-input" name="about" type="text" className="form__input form__input_type_job"
                    placeholder="Введите описание" required minLength="2" maxLength="200" />
                  <span className="job-input-error form__input-error"></span>
                </label>
                <button type="submit" className="form__submit-button button">
                  Сохранить
                </button>
              </form>
            </div>
          </div>
          <div className="popup popupCard">
            <div className="popup__container">
              <button type="button" className="button popup__exit-button" aria-label=" Закрыть попап."></button>
              <h2 className="popup__title">Новое Место</h2>
              <form action="#" className="form" name="formCreateCard" autoComplete="on" noValidate>
                <label className="form__label">
                  <input id="mesto-input" name="name" type="text" className="form__input form__input_type_name"
                    placeholder="Название" required minLength="2" maxLength="30" />
                  <span className="mesto-input-error form__input-error"></span>
                </label>
                <label className="form__label">
                  <input id="url-input" name="link" type="url" className="form__input form__input_type_link"
                    placeholder="Ссылка на картинку" required />
                  <span className="url-input-error form__input-error"></span>
                </label>
                <button type="submit" className="form__submit-button button">
                  Сохранить
                </button>
              </form>
            </div>
          </div>
          <div className="popup popup_type_zoom" id="popupZoom">
            <figure className="popup__figure">
              <button type="button" className="button popup__exit-button" aria-label=" Закрыть попап."></button>
              <img src="#" alt="" className="popup__image" />
              <figcaption className="popup__caption"></figcaption>
            </figure>
          </div>
          <div className="popup popupDeleteCard">
            <div className="popup__container">
              <button type="button" className="button popup__exit-button" aria-label=" Закрыть попап."></button>
              <h2 className="popup__title">Вы уверены?</h2>
              <form action="#" className="form" name="formDeleteCard" noValidate>
                <button type="submit" className="button form__submit-button">Да</button>
              </form>
            </div>
          </div>
          <div className="popup popupUpdataAvatar">
            <div className="popup__container">
              <button type="button" className="button popup__exit-button" aria-label=" Закрыть попап."></button>
              <h2 className="popup__title">Обновить аватар</h2>
              <form action="#" className="form" name="formUpdataAvatar" noValidate>
                <label htmlFor="form__label">
                  <input id="url-Avatarinput" name="avatar" type="url" className="form__input form__input_type_link"
                    placeholder="Ссылка на картинку" required />
                  <span className="url-Avatarinput-error form__input-error"></span>
                </label>
                <button type="submit" className="button form__submit-button">
                  Сохранить
                </button>
              </form>
            </div>
          </div>
          <template id="template-cards">
            <article className="card">
              <button className="card__delete-btn button" aria-label=" Удалить карточку."></button>
              <img className="card__image" src="#" alt="" />
              <div className="card__ctrl-wrapper">
                <h2 className="card__title"></h2>
                <div className="card__likes-wrapper">
                  <button type="button" className="card__like-btn button" aria-label=" Поставить лайк."></button>
                  <span className="card__count-likes">0</span>
                </div>
              </div>
            </article>
          </template>
        </div>
      </div>
    </div>
  );
}

export default App;
