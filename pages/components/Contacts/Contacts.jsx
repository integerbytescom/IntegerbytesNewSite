import React, {useRef, useState} from 'react';
import {Form, Spinner} from "react-bootstrap";
import * as emailjs from "@emailjs/browser";

const Contacts = ({lang}) => {

    //for inputs value
    const [email,setEmail] = useState('')
    const [text,setText] = useState('')

    const [spinner,setSpinner] = useState(false)

    //ref for form
    const formRef = useRef()

    //result form after send
    const [resForm,setResForm] = useState({})

    //for send form
    const handleSendForm = async e =>{
        e.preventDefault()
        setSpinner(true)
        await emailjs.sendForm('service_noc1qmd', 'template_ahqs7eu', formRef.current, 'i4qn_i5OB48CqVSFb')
            .then(() => setSpinner(false))
            .then((result) => {
                setResForm({error: false, ok:'Форма была успешно отправлена, скоро с вами свяжутся наши сотрудники.'})
            }, (error) => {
                setResForm({error: 'Form submission error.', ok:false})
            });
        setEmail('')
        setText('')
        setTimeout(() => setResForm({}),1000 * 10)
    }

    return (
        <div className={"Contacts"}>

            <div className="block-text">

                <a name={"feedback"}></a>

                <h2>{lang === 'rus' ? 'Контакты' : 'Contacts'}</h2>

                <a href="tel:+78314378850">
                    <h4 className={"number"}>+7 (831) 437-88-50</h4>
                </a>

                <a href="mailto:info@integerbytes.com?subject=Вопрос с сайта Integerbytes">
                    <h5 className={"email"}>info@integerbytes.com</h5>
                </a>
                <h5 className={"address"}>
                    {
                        lang === 'rus' ?
                            'Нижний Новгород ул.Ломоносова, 9':
                            'Russia, Nizhni Novgorod, Lomonosova street, 9'
                    }
                </h5>
            </div>

            <Form ref={formRef} onSubmit={handleSendForm}>
                <h4>
                    {
                        lang === 'rus' ?
                            'Оставьте заявку на обратную связь':
                            'Leave a request for feedback'
                    }
                </h4>
                <input
                    name={"email"}
                    placeholder={lang === 'rus' ? "Введите ваш емаил" : "Enter your email"}
                    required
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />

                <textarea
                    name={"text"}
                    placeholder={lang === 'rus' ? "Введите ваше сообщение" : "Enter your message"}
                    style={{background:"none"}}
                    value={text}
                    onChange={e => setText(e.target.value)}
                />

                {
                    resForm.error?
                        <p className={'res-p error'}>{resForm.error}</p>:
                        resForm.ok?
                            <p className={'res-p success'}>{resForm.ok}</p>:''
                }

                <button
                    className={"out-pill-white-button"}
                    type={"submit"}
                >
                    {
                        spinner ?
                            <Spinner
                                as="span"
                                animation="border"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                                variant={'light'}
                            />:
                            lang === "rus" ? "Отправить" : "Send"

                    }
                </button>
            </Form>
        </div>
    );
};

export default Contacts;
