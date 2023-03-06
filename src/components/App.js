import Header from './Header';
import Main from './Main';
import Footer from './Footer';
// import PopupWithForm from './PopupWithForm';


function App() {
  return (
    <div className="App">
        <div className="page__container">
          <Header />
          <Main />
          <Footer />
          
          {/* <div className= id="popupZoom">
            <figure className="popup__figure">
              <button type="button" className="button popup__exit-button" aria-label=" Закрыть попап."></button>
              <img src="#" alt="" className="popup__image" />
              <figcaption className="popup__caption"></figcaption>
            </figure>
          </div> */}
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
  );
}

export default App;
