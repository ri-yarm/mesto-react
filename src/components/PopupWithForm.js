const PopupWithForm = (props) => {
  return (
    <>
      <div className={`popup popup_type_${props.name}`}>
        <div className="popup__container">
          <button type="button" className="button popup__exit-button" aria-label=" Закрыть попап."></button>
          <h2 className="popup__title">{props.title}</h2>
          <form action="#" className="form" name={`${props.name}`} autoComplete="on" >
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
      <div className={`popup popup_type_${props.name}`}>
        <div className="popup__container">
          <button type="button" className="button popup__exit-button" aria-label=" Закрыть попап."></button>
          <h2 className="popup__title">{props.title}</h2>
          <form action="#" className="form" name={`${props.name}`} autoComplete="on" >
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
      
      <div className={`popup popup_type_${props.name}`}>
        <div className="popup__container">
          <button type="button" className="button popup__exit-button" aria-label=" Закрыть попап."></button>
          <h2 className="popup__title">{props.title}</h2>
          <form action="#" className="form" name={`${props.name}`} >
            <button type="submit" className="button form__submit-button">Да</button>
          </form>
        </div>
      </div>
      <div className={`popup popup_type_${props.name}`}>
        <div className="popup__container">
          <button type="button" className="button popup__exit-button" aria-label=" Закрыть попап."></button>
          <h2 className="popup__title">{props.title}</h2>
          <form action="#" className="form" name={`${props.name}`} >
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
    </>
  );
}



// TODO Если нужна будет валидация верни noValidate формам
export default PopupWithForm;