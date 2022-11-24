import React, {useState} from 'react';
import {Button, CloseButton, Form, Modal} from "react-bootstrap";
import {addPerson} from "./functions/addPerson";

const TeamModal = ({show,onHide,lang}) => {

    const [formData,setFormData] = useState({
        title: "",
        text: "",
        img: {},
    })

    //change input in form
    const handleChange = (input,value) => {
        const copy = Object.assign({},formData);
        copy[input] = value;
        setFormData(copy);
    }

    //send data in db
    const handleSend = (e) => {
        e.preventDefault()
        addPerson(e,formData,lang)
            .then(() => setFormData({
                title: "",
                text: "",
                img: {},
            }))
            .then(onHide)
        console.log(formData)
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
            className={"TeamModal"}
        >
            <Modal.Header>
                <h5 className={"fw-lighter"}>Add new person</h5>
                <CloseButton onClick={onHide} variant="white" />
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSend}>
                    <Form.Control
                        required
                        size="sm"
                        placeholder="Enter name"
                        value={formData.title}
                        onChange={e => handleChange("title",e.target.value)}
                    />
                    <Form.Control
                        required
                        size="sm"
                        className={"my-2"}
                        placeholder="Enter position"
                        value={formData.text}
                        onChange={e => handleChange("text",e.target.value)}
                    />

                    <Form.Control
                        required
                        type="file"
                        size="sm"
                        onChange={e => handleChange("img",e.target.files)}
                    />

                    <Button type={"submit"} size={"sm"} variant={"outline-light"} className={"w-100 mt-2"}>
                        Send
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default TeamModal;
