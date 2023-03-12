const PopupWithForm = ({name, title, buttonText, isOpen, onClose, children}) => {
  return (
    <div className={`popup popup_type_${name} ${isOpen ? "popup_opened" : ''}`}>
      <div className="popup__container">
        <button onClick={onClose} type="button" className="button popup__exit-button"></button>
        <h2 className="popup__title">{title}</h2>
        <form action="#" className="form" name={name} >
          {children}
          <button type="submit" className="button form__submit-button">{buttonText}</button>
        </form>
      </div>
    </div>
  );
}



// TODO Если нужна будет валидация верни noValidate формам
export default PopupWithForm;
