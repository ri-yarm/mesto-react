const ImagePopup = ({card, onClose}) => {
  return ( 
    <div class="popup popup_type_zoom" id="popupZoom">
      <figure class="popup__figure">
        <button onClick={() => onClose} type="button" class="button popup__exit-button" aria-label=" Закрыть попап."></button>
        <img src="#" alt="" class="popup__image" />
        <figcaption class="popup__caption"></figcaption>
      </figure>
    </div>
   );
}
 
export default ImagePopup;