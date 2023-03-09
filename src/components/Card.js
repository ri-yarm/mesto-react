const Card = ({name, link,likes}) => {
  return (
    <article className="card">
      <button
        className="card__delete-btn button"
        aria-label=" Удалить карточку."
      ></button>
      <img className="card__image" src={link} alt={` ${name}.`} />
      <div className="card__ctrl-wrapper">
        <h2 className="card__title">{name}</h2>
        <div className="card__likes-wrapper">
          <button
            type="button"
            className="card__like-btn button"
            aria-label=" Поставить лайк."
          ></button>
          <span className="card__count-likes">{likes.length}</span>
        </div>
      </div>
    </article>
  )
}

export default Card;