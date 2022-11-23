import React from 'react';
import {Fade} from "react-awesome-reveal";

const About = ({lang}) => {
    return (
        <Fade direction={"up"}>
        <div className={"About"}>

            {/*eslint-disable-next-line*/}
            <img className={"top-img"} src="/images-dev/components/About/About.svg" alt="preview-image"/>

            <div className="text">
                <h2>
                    {lang === "eng" && "About company"}
                    {lang === "rus" && "О компании"}
                </h2>
                <p className={"small"}>
                    {
                        lang === "eng" ?
                        "We are a young growing IT company that helps our clients to do their work more productively by introducing new or upgrading existing IT solutions." :
                        "Мы молодая развивающаяся IT компания, которая помогает нашим клиентам делать свою работу продуктивнее с помощью внедрения новых или модернизации существующих IT-решений."
                    }
                    <br/><br/>
                    {
                        lang === "eng" ?
                            "We have a solution for any task, regardless of its scale, complexity and budget. We are equally attentive to the needs of both government agencies and large corporations, as well as representatives of medium and small businesses." :
                            "У нас найдется решение для любой задачи, независимо от ее масштаба, сложности и бюджета. Мы одинаково внимательно относимся к потребностям как государственных структур и крупных корпораций, так и представителей среднего и малого бизнеса."
                    }
                </p>
            </div>

            {/*eslint-disable-next-line*/}
            <img className={"bot-img"} src="/images-dev/components/About/About.svg" alt="preview-image"/>
        </div>
        </Fade>
    );
};

export default About;
