import React from 'react';
import '../App.css';
import TalentName from '../components/talentName.jsx'

function Main({items}) {
  console.log(items);
  return (
    <div>
    <div className = "wrapper">
    <div className = "header">
    {
    items.map((obj) => <TalentName
    key={obj.id}
      {...obj}
    />)}

  </div>

  <div className = "content">
      Настя, с днём рождения тебя! Я подготовил этот сайт специально для тебя,
      Я посчитал что это будет оригинальный подарок, к тому же в нём есть некая цель.
      Он играет роль не только интерактивной открытки, но и имеет цель показать тебе
      на сколько ты прекрасный и разносторонний человек которого я очень люблю.
      Вообщем то главной целью этого сайта я решил сделать избавления тебя от твоих загонов на счёт
      некой безполезности и чувстве постоянных неудач, с помощью наглядных примеров твоих достижений.
      <p></p>
        Так же он является не простой статичной вещью, в том плане что тут постоянно можно добавлять новую информацию.
        Это я к тому, что данный сайт будет расти и улучшаться вместе с тобой. Каждое твоё достижение будет создавать новую страничку,
        наглядно показывая твои успехи в жизни. Желаю чтобы он не простаивал и постоянно обновлялся.
      </div>
      </div>
      </div>


  );
}

export default Main;
