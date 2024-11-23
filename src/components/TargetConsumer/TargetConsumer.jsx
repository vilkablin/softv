import Image from 'next/image';
import targetImage from '../../assets/images/targetConsumer/target.png';

import likeIcon from '../../assets/images/targetConsumer/target-icon1.png';
import schoolIcon from '../../assets/images/targetConsumer/target-icon2.png';
import groupIcon from '../../assets/images/targetConsumer/target-icon3.png';

const TargetConsumer = () => {
  return(
    <section id="target-consumer" className="target-consumer">
        <div className="container">
          <h2>Для кого подходит?</h2>
        <div className="target-consumer__content">
          <div className="target-consumer__block main-block">
            <Image src={likeIcon} alt="like icon"/>
            <Image className="target-picture" src={targetImage} alt="target image"/>
            <div className="target-consumer__info">
            <h3 className="target-text3">Школьники</h3>
            <p className="target-text">Благодаря подробному методическому комплексу сделать первые шаги в робототехнике проще простого!</p>
            </div>
          </div>
          <div className="target__content-2col">
            <div className="target-consumer__block">
            <Image src={schoolIcon} alt="school icon"/>
            <h3 className=" target-text3">Студенты СУЗов и ВУЗов</h3>
            <p className="target-text">Благодаря большому количеству поддерживаемых языков программирования студенты различных направлений смогут погрузиться в изучение мобильной робототехники!</p>
          </div>
          <div className="target-consumer__block">
            <Image src={groupIcon} alt="group icon"/>
            <h3 className=" target-text3">Слушатели курсов квалификации</h3>
            <p className="target-text">Для проведения курсов преподавателям достаточно обычного кабинета с ноутбуками или стационарными компьютерами, что позволит в том числе проводить онлайн уроки по всему миру!</p>
          </div>
          </div>
        </div>
        </div>
      </section>
  )
}

export default TargetConsumer;