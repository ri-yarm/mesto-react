import avatar from '../images/profile__avatar.jpg'

function Main() {

  function handleAvatarClick(evt) {
    evt.preventDefault();
    document.querySelector('.popupUpdataAvatar').classList.add("popup_opened");
  }

  function handleProfileClick() {
    document.querySelector('.popupProfile').classList.add("popup_opened");
  }

  function handleAddPlaceClick() {
    document.querySelector('.popupCard').classList.add("popup_opened");
  }

  return (
    <main className="content">
      <section className="profile">
        <a href="#" onClick={handleAvatarClick} className="profile__link">
          <img className="profile__avatar" src={avatar} alt=" Ваш аватар." />
        </a>
        <div className="profile__info">
          <div className="profile__nickname">
            <h1 className="profile__title">Жак-Ив Кусто</h1>
            <button onClick={handleProfileClick} type="button" className="profile__edit-button button" aria-label=" Изменить профиль."></button>
          </div>
          <p className="profile__subtitle">Исследователь океана</p>
        </div>
        <button onClick={handleAddPlaceClick} type="button" className="profile__add-button button" aria-label=" Добавить пост."></button>
      </section>
      <section className="places"></section>
    </main>
  )
}

export default Main