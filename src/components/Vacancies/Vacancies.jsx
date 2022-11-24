import React, {useState} from 'react';
import {Accordion,Form} from "react-bootstrap";
import VacanciesModal from "./VacanciesModal";
import {Fade} from "react-awesome-reveal";
import {ref, update} from "firebase/database";
import {realtimeDB} from "../../database";
import {useGetData} from "../../hooks/useGetData";
import "../../styles/components/Vacancies/Vacancies.css";
import "../../styles/components/Vacancies/VacanciesModal.css";
import "../../styles/components/Vacancies/VacanciesMedia.css";


const Vacancies = ({lang,admin}) => {

    const dataVacancy = useGetData(`/blocks/vacancy`);

    const setShowBlock = value => {
        update(ref(realtimeDB, `/blocks/vacancy/`),{
            show: value,
        })
            .then(console.log)
    }

    const data = [
        {
            id:1,
            title: lang === 'eng' ? 'UX/UI web designer' : 'Web-дизайнер UX/UI',
            list: [
                {
                    title:'Чем Вам предстоит заниматься:',
                    ul:[
                        "Развивать и поддерживать существующие проекты компании в области криптовалютных бирж;",
                        "Участие в разработке p2p платформ (обмен, покупка, продажа);",
                        "Взаимодействие с командой разработчиков;",
                    ]
                },
                {
                    title:'Что мы ожидаем от Вас:',
                    ul:[
                        "Опыт проектирования сложных интерфейсов;",
                        "Понимание как сложный интерфейс сделать простым для пользователя;",
                        "Умение самостоятельно генерировать идеи и находить разные способы решения;",
                        "Опыт работы UI/UX дизайнером;",
                        "Наличие портфолио реализованных проектов;",
                        "Понимание верстки, HTML, CSS;"
                    ]
                },
                {
                    title:'Мы предлагаем: ',
                    ul:[
                        "Работу в активно развивающейся компании;",
                        "Белую заработную плату (выплачивается 2 раза в месяц);",
                        "График работы: пятидневная рабочая неделя, 5/2 полный рабочий день с 9 до 18:00;",
                        "Официальное трудоустройство по ТК РФ;",
                        "Оплачиваемый больничный;",
                        "Оплачиваемый отпуск 28 календарных дней."
                    ]
                },
            ],
        },
        {
            id:2,
            title: lang === 'eng' ? 'Office Manager' : 'Офис-менеджер',
            list: [
                {
                    title:'Чем Вам предстоит заниматься:',
                    ul:[
                        "Прием входящих обращений, деловая переписка;",
                        "Работа с первичными документами от контрагентов, курьерскими службами;",
                        "Прием и распределение телефонных звонков;",
                        "Обеспечение жизнедеятельности офиса и закупок;",
                        "Выполнение поручений руководителя;"
                    ]
                },
                {
                    title:'Что мы ожидаем от Вас:',
                    ul:[
                        "Отличные коммуникативные навыки, грамотная устная и письменная речь, вежливость;",
                        "Владение ПК, умение обращаться с оргтехникой (напечатать, распечатать, отсканировать);",
                        "Добросовестность, исполнительность, оптимистичный взгляд на мир;",
                        "Высшее образование, будет преимуществом знание английского;",
                        "Опыт работы секретарем или офис-менеджером от года (желателен);",
                        "Инициативность, ответственность, аккуратность, внимательность;"
                    ]
                },
                {
                    title:'Мы предлагаем: ',
                    ul:[
                        "Работу в активно развивающейся компании;",
                        "Белую заработную плату (выплачивается 2 раза в месяц);",
                        "График работы: пятидневная рабочая неделя, 5/2 полный рабочий день с 9 до 18:00;",
                        "Официальное трудоустройство по ТК РФ;",
                        "Оплачиваемый больничный;",
                        "Оплачиваемый отпуск 28 календарных дней."
                    ]
                },
            ],
        },
        {
            id:3,
            title: lang === 'eng' ? 'Back-end developer JavaScript/TypeScript' : 'Back-end Разработчик JavaScript/TypeScript',
            list: [
                {
                    title:'Чем Вам предстоит заниматься:',
                    ul:[
                        "Развивать и поддерживать существующие проекты компании в области криптовалютных бирж;",
                        "Участие в разработке p2p платформ (обмен, покупка, продажа);",
                    ]
                },
                {
                    title:'Что мы ожидаем от Вас:',
                    ul:[
                        "Опыт в JavaScript, TypeScript, MongoDB;",
                        "Знания Git/Docker, REST API, JSON, XML, HTML, CSS;",
                        "Плюсом будет понимание: С++/C#, PostgresDB, SCSS;",
                        "Знание английского языка на уровне чтения технической документации;",
                    ]
                },
                {
                    title:'Мы предлагаем: ',
                    ul:[
                        "Работу в активно развивающейся компании;",
                        "Белую заработную плату (выплачивается 2 раза в месяц);",
                        "График работы: пятидневная рабочая неделя, 5/2 полный рабочий день с 9 до 18:00;",
                        "Официальное трудоустройство по ТК РФ;",
                        "Оплачиваемый больничный;",
                        "Оплачиваемый отпуск 28 календарных дней."
                    ]
                },
            ],
        },
        {
            id:4,
            title: lang === 'eng' ? 'Front-end developer JavaScript/Bootstrap' : 'Front-end Разработчик JavaScript/Bootstrap',
            list:[
                {
                    title:'Чем Вам предстоит заниматься:',
                    ul:[
                        "Развивать и поддерживать существующие проекты компании в области криптовалютных бирж;",
                        "Участие в разработке p2p платформ (обмен, покупка, продажа);",
                    ]
                },
                {
                    title:'Что мы ожидаем от Вас:',
                    ul:[
                        "Опыт в JavaScript, Bootstrap, jQuery, HTML, CSS;",
                        "Знания Vue.js, Shell, ExtendScript, Git/Docker, REST API, JSON, XML;",
                        "Плюсом будет понимание: ExtendScript, TypeScript, PostgresDB, MongoDB, SCSS;",
                        "Знание английского языка на уровне чтения технической документации;",
                    ]
                },
                {
                    title:'Мы предлагаем: ',
                    ul:[
                        "Работу в активно развивающейся компании;",
                        "Белую заработную плату (выплачивается 2 раза в месяц);",
                        "График работы: пятидневная рабочая неделя, 5/2 полный рабочий день с 9 до 18:00;",
                        "Официальное трудоустройство по ТК РФ;",
                        "Оплачиваемый больничный;",
                        "Оплачиваемый отпуск 28 календарных дней."
                    ]
                },
            ],
        },
    ];

    const [show, setShow] = useState(false);
    const [modalData,setModalData] = useState("");

    //open nodal and set data
    const openModal = (data) => {
        setModalData(data);
        setShow(true);
    }

    if(dataVacancy[0] || admin){
        return (
            <>
                <div className={'Vacancies'}>
                    <h2>
                        {lang === "rus" && "Актуальные вакансии"}
                        {lang === "eng" && "Current vacancies"}
                    </h2>

                    {
                        admin &&
                        <Form.Check
                            type="switch"
                            id="custom-switch"
                            label="Hide this block"
                            checked={!dataVacancy[0]}
                            onChange={() => setShowBlock(!dataVacancy[0])}
                        />
                    }

                    <Fade direction={"up"}>
                        <div className="vacancies-container">
                            <img
                                src="/images-dev/components/Vacancies/vacancies.png"
                                alt="vacancies"
                                className={"vaacncies-img"}
                            />

                            <Accordion defaultActiveKey="1" flush>
                                {
                                    data.map(elem => (
                                        <Accordion.Item eventKey={elem.id} key={elem.id}>
                                            <Accordion.Header>{elem.title}</Accordion.Header>
                                            <Accordion.Body className={"small"}>
                                                {elem.list.map(item => (
                                                    <div key={item.title}>
                                                        <h6>{item.title}</h6>
                                                        <ul>
                                                            {
                                                                item.ul.map(item => (
                                                                    <li key={item}>{item}</li>
                                                                ))
                                                            }
                                                        </ul>
                                                    </div>
                                                ))}
                                                <br/>
                                                <button onClick={() => openModal(elem.title)} className={"out-pill-white-button"}>
                                                    {lang === "rus" ? "Откликнуться" : "Respond"}
                                                </button>
                                                <br/><br/>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    ))
                                }
                            </Accordion>
                        </div>
                    </Fade>
                </div>

                {/*modal*/}
                <VacanciesModal show={show} onHide={() => setShow(false)} data={modalData} lang={lang} />
            </>
        );
    }
};

export default Vacancies;
