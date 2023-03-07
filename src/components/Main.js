import avatar from '../images/profile__avatar.jpg'

function Main({onEditProfile, onAddPlace, onEditAvatar}) {

  return (
    <main className="content">
      <section className="profile">
        <a href="#" className="profile__link" onClick={() => onEditAvatar(true)}>
          <img className="profile__avatar" src={avatar} alt=" Ваш аватар." />
        </a>
        <div className="profile__info">
          <div className="profile__nickname">
            <h1 className="profile__title">Жак-Ив Кусто</h1>
            <button onClick={() => onEditProfile(true)} type="button" className="profile__edit-button button" aria-label=" Изменить профиль."></button>
          </div>
          <p className="profile__subtitle">Исследователь океана</p>
        </div>
        <button onClick={() => onAddPlace(true)} type="button" className="profile__add-button button" aria-label=" Добавить пост."></button>
      </section>
      <section className="places"></section>
    </main>
  )
}

export default Main