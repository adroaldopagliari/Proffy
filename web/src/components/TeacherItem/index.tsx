import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars2.githubusercontent.com/u/15057026?s=460&u=0f786accd291f82ae7c9b86797a66d26f4f98f9a&v=4"
          alt="Profile"
        />
        <div>
          <strong>Adroaldo Pagliari</strong>
          <span>Física</span>
        </div>
      </header>

      <p>Entusiasta em programação, matéria, movimento e energia.</p>

      <footer>
        <p>
          Preço/Hora
          <strong>R$ 200,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
