import React from 'react';
import {Card} from "react-bootstrap";
import Fade from "react-awesome-reveal";

const Services = ({lang}) => {

    const data = [
        {
            id:0,
            img:'/images-dev/components/Services/1.svg',
            title: lang === 'rus' ? 'Сайты и приложения' : 'Websites and Apps',
            text: lang === 'rus' ?
                'Предлагаем услуги дизайна, разработки и продвижения. Приступаем к работе только, если сайт позволит решить задачи бизнеса.':
                'We offer design, development and promotion services. We start working only if the site allows us to solve business problems.',
        },
        {
            id:1,
            img:'/images-dev/components/Services/2.svg',
            title: lang === 'rus' ? 'Программное обеспечение' : 'Software',
            text: lang === 'rus' ?
                'Наша цель – создавать системы, которые решают бизнес-задачи. Поэтому мы готовы минимизировать риски заказчика за счет собственных вложений.':
                'Our goal is to create systems that solve business problems. Therefore, we are ready to minimize the risks of the customer at the expense of our own investments.',
        },
        {
            id:2,
            img:'/images-dev/components/Services/3.svg',
            title: lang === 'rus' ? 'Корпоративные системы' : 'Enterprise systems',
            text: lang === 'rus' ?
                'Наша задача реализовать полезное решение для бизнеса. Таким образом, мы ставим пред собой цели заказчика и стараемся минимизировать его риски.':
                'Our task is to implement a useful solution for business. Thus, we set ourselves the goals of the customer and try to minimize his risks.',
        },
    ];

    return (
        <div className={"Services"}>
            <h2 className={'animate__animated animate__fadeIn animate__delay-1s'}>
                {lang === 'eng' && "Internet solutions for any task"}
                {lang === 'rus' && "Интернет-решения под ключ"}
            </h2>

            <div className="services-containers">
                {
                    data.map(elem => (
                        <Card key={elem.id} style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={elem.img} />
                            <Card.Body>
                                <Card.Title>{elem.title}</Card.Title>
                                <Card.Text className={"small"}>{elem.text}</Card.Text>
                            </Card.Body>
                        </Card>
                    ))
                }

            </div>
        </div>
    );
};

export default Services;
