import React from 'react'

const Contacts = () => {
  return (
    
    <section id="forms" className="forms">
    <div className="container">
      <h2 className="form-title">Оставьте нам заявку</h2>
      <p className="form-subtitle">
        Свяжемся с вами в течении рабочего дня
      </p>
      <form className="contact-form">
        <div className="form-group">
          <input type="text" placeholder="Ваше имя" required />
          <input type="email" placeholder="Ваш эл. адрес" required />
          <input type="text" placeholder="Тема сообщения" required />
        </div>
        <div className="form-group">
          <textarea placeholder="Ваше сообщение" required></textarea>
        </div>
      </form>
      <div className="form-footer">
        <p>
          Нажимая на кнопку, я соглашаюсь на обработку{" "}
          <a href="#">персональных данных</a> и с{" "}
          <a href="#">правилами пользования Платформой</a>
        </p>
        <button type="submit">Отправить</button>
      </div>
    </div>
  </section>
  )
}
export default Contacts;