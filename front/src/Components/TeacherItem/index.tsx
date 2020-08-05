import React from 'react';


import Whatsapp from '../../assets/images/icons/whatsapp.svg';


import './styles.css';

const TeacherItem: React.FC = () => { 
  return(
    <article className="teacher-item">
    <header>
      <img src="https://avatars1.githubusercontent.com/u/39497501?s=460&u=df068176118dc47cbf565206307bbf62012fdb8b&v=4" alt='imagem do professor'/>
      <div>
        <strong>Matheus Akio</strong>
        <span>Matematica</span>
      </div>
    </header>
    
    <p>
      Bora calcular as coisas!!
    </p>

    <footer>
      <p>
        Preço/hora:
        <strong>R$ 80,00</strong>
      </p>
      <button type="button">
        <img src={Whatsapp} alt="Whatsapp"/>
        Entrar em contato
      </button>
    </footer>

  </article>
  );
}

export default TeacherItem;