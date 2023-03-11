const ImagePopup = ({card, onClose}) => {

  return ( 
    <div className={`popup popup_type_zoom ${card.link ? 'popup_opened' : null}`} id="popupZoom">
      <figure className="popup__figure">
        <button onClick={onClose} type="button" className="button popup__exit-button" aria-label=" Закрыть попап."></button>
        <img src={card.link} alt={` ${card.name}.`} className="popup__image" />
        <figcaption className="popup__caption">{card.name}</figcaption>
      </figure>
    </div>
   );
}
 
export default ImagePopup;