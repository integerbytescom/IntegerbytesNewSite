import React, {useState,useRef} from 'react';
import {Button, CloseButton, Form, Modal, Spinner} from "react-bootstrap";
import * as emailjs from "@emailjs/browser";

const VacanciesModal = ({show,onHide,data,lang}) => {

    const [formData,setFormData] = useState({
        vacancy:data,
        name:"",
        email:"",
        city:"",
    })

    const [spinner,setSpinner] = useState(false)

    //ref for form
    const formRef = useRef()

    //result form after send
    const [resForm,setResForm] = useState({})

    //change formData
    const handleChange = (input,value) => {
        const copy = Object.assign({},formData);
        copy[input] = value;
        setFormData(copy);
    }

    const handleSend = async (e) => {
        e.preventDefault()
        setSpinner(true)
        await emailjs.sendForm('service_noc1qmd', 'template_rx8a71i', formRef.current, 'i4qn_i5OB48CqVSFb')
            .then(() => setSpinner(false))
            .then((result) => {
                setResForm({error: false, ok:'Форма была успешно отправлена, скоро с вами свяжутся наши сотрудники.'})
            }, (error) => {
                setResForm({error: 'Form submission error.', ok:false})
            });
        setFormData({vacancy:data, name:"", email:"", city:"",})
        setTimeout(() => setResForm({}),1000 * 10)
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            className={"VacanciesModal"}
            size="md"
            centered
        >
            <Modal.Header>
                <h5>{lang === 'eng' ? 'Response to a job' : 'Отклик на вакансию'}<br /> <strong>{data}</strong></h5>
                <CloseButton onClick={onHide} variant="white" />
            </Modal.Header>

            <Modal.Body>
                <Form ref={formRef} onSubmit={handleSend}>
                    <input type="text" value={data} hidden name={"job"}/>
                    <input
                        name={"name"}
                        placeholder={lang === "rus" ? "Введите ваше имя" : "Enter your name"}
                        value={formData.name}
                        onChange={e => handleChange("name", e.target.value)}
                        required
                        type="text"
                    />
                    <input
                        name={"email"}
                        placeholder={lang === "rus" ? "Введите ваш email" : "Enter your email"}
                        value={formData.email}
                        onChange={e => handleChange("email", e.target.value)}
                        required
                        type="email"
                    />
                    <input
                        name={"city"}
                        placeholder={lang === "rus" ? "Введите ваш город проживания" : "Enter your city"}
                        value={formData.city}
                        onChange={e => handleChange("city", e.target.value)}
                        required
                        type="text"
                    />

                    {
                        resForm.error?
                            <p className={'res-p error'}>{resForm.error}</p>:
                            resForm.ok?
                                <p className={'res-p success'}>{resForm.ok}</p>:''
                    }

                    <button className={"out-pill-white-button mt-3 mx-auto"} type={"submit"}>
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
                                lang === 'eng' ? 'Send' : 'Отправить'
                        }
                    </button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default VacanciesModal;
