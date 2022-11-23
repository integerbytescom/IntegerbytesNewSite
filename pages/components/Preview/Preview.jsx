import React from 'react';
import Link from "next/link";
import Fade from "react-awesome-reveal";


const Preview = ({lang}) => {

    return (
        <div className={"Preview"}>

            <div className={"text-container"}>
                <Fade cascade>
                    <h1>INTEGERBYTES</h1>
                    {
                        lang === "rus" &&
                        <p>
                            Наша компания предлагает услуги дизайна, разработки и продвижения.
                            Наша задача реализовывать лучшие решения для наших заказчиков.
                            <br /><br />
                            Вы можете
                            <a href={"#feedback"} className={"mx-1"}>оставить заявку</a>
                            и наши HR-менеджеры свяжутся с вами в ближайшее время.
                        </p>
                    }
                    {
                        lang === "eng" &&
                        <p>

                            Our company offers design, development and promotion services.
                            Our task is to implement the best solutions for our customers.
                            <br /><br />
                            You can
                            <Link href={"/"} className={"mx-1"}>leave a request</Link>
                            and our HR managers will contact you shortly.
                        </p>
                    }
                </Fade>
            </div>

            {/*eslint-disable-next-line*/}
            <img src="/images-dev/components/Preview/preview-main.png" alt="preview-image" className={"animate__animated animate__fadeIn animate__delay-2s"} />

        </div>
    );
};

export default Preview;
