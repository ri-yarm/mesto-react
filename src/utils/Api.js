import * as consts from "./constants";

class Api {
  constructor(config) {
    this._url = config.api;
    this._key = config.headers;
  }

  _getResponseData = (res, about) => {
    return res.ok ? res.json() : Promise.reject(`${about}: ${res.status}`);
  };

  getUserInfo = () => {
    return fetch(`${this._url}/users/me`, {
      headers: this._key,
    }).then((res) =>
      this._getResponseData(res, "Данные о пользователе не загрузились")
    );
  };

  setNewProfileData = (data) => {
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: this._key,
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      }),
    }).then((res) =>
      this._getResponseData(res, "Данные о пользователе не отправились!")
    );
  };

  setNewAvatar = (data) => {
    return fetch(`${this._url}/users/me/avatar`, {
      method: "PATCH",
      headers: this._key,
      body: JSON.stringify({
        avatar: data.avatar,
      }),
    }).then((res) => this._getResponseData(res, "Новый аватар не сохранён!"));
  };

  getDefaultCard = () => {
    return fetch(`${this._url}/cards`, {
      headers: this._key,
    }).then((res) => this._getResponseData(res, "Не удалось обновить ленту!"));
  };

  postNewPhoto = (data) => {
    return fetch(`${this._url}/cards`, {
      method: "POST",
      headers: this._key,
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      }),
    }).then((res) => this._getResponseData(res, "Новый пост не загрузился!"));
  };

  deleteCard = (thisCard) => {
    return fetch(`${this._url}/cards/${thisCard}`, {
      method: "DELETE",
      headers: this._key,
    }).then((res) => this._getResponseData(res, "Не удалось удалить карту!"));
  };

  likeCard = (thisCard) => {
    return fetch(`${this._url}/cards/${thisCard}/likes`, {
      method: "PUT",
      headers: this._key,
    }).then((res) => this._getResponseData(res, "Не удалось поставить лайк!"));
  };

  unlikeCard = (thisCard) => {
    return fetch(`${this._url}/cards/${thisCard}/likes`, {
      method: "DELETE",
      headers: this._key,
    }).then((res) => this._getResponseData(res, "Не удалось удалить лайк!"));
  };
}

const api = new Api(consts.fetchConfig);

export default api;
