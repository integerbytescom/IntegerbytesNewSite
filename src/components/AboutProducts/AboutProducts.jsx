import React from 'react';
import {Fade} from "react-awesome-reveal";
import '../../styles/components/AboutProducts/AboutProducts.css';
import '../../styles/components/AboutProducts/AboutProductsMedia.css';

const AboutProducts = ({lang}) => {

    const data = [
        {
            id:0,
            img:'/images-dev/components/AboutProducts/4.svg',
            title: lang === 'rus' ? 'Лучшие решения' : 'Best Solutions',
            text: lang === 'rus' ?
                'Проводим анализ конкурентов и выбираем лучшее решение для каждого клиента.':
                'We analyze competitors and choose the best solution for each client.',
        },
        {
            id:1,
            img:'/images-dev/components/AboutProducts/2.svg',
            title: lang === 'rus' ? 'Новейшие технологии' : 'The latest technology',
            text: lang === 'rus' ?
                'Используем только современные и проверенные технологии для решения задач.':
                'We use only modern and proven technologies to solve problems.',
        },
        {
            id:2,
            img:'/images-dev/components/AboutProducts/3.svg',
            title: lang === 'rus' ? 'Современный дизайн' : 'Modern design',
            text: lang === 'rus' ?
                'После анализа конкурентов реализуем наиболее подходящий и актуальный дизайн для ваших проектов.':
                'After analyzing competitors, we implement the most appropriate and relevant design for your projects.',
        },
        {
            id:3,
            img:'/images-dev/components/AboutProducts/1.svg',
            title: lang === 'rus' ? 'Довольные клиенты' : 'Satisfied clients',
            text:lang === 'rus' ?
                'Наши клиенты всегда остаются довольны за счет скорости и качества работы нашей компании.':
                'Our clients are always satisfied due to the speed and quality of our company.',
        },
    ];

    return (
        <Fade direction={"up"}>
        <div className={"AboutProducts"}>

            {/*eslint-disable-next-line*/}
            <img
                src="/images-dev/bgs/lines-old.png"
                alt="circle-small"
                className={"lines-old"}
                style={{bottom:"0", left:"-25%"}}
            />

            {
                data.map(elem => (
                    <div key={elem.id} className="block">
                        <img src={elem.img} alt={elem.title}/>
                        <h4>{elem.title}</h4>
                        <p className={"small"}>{elem.text}</p>
                    </div>
                ))
            }
        </div>
        </Fade>
    );
};

export default AboutProducts;
