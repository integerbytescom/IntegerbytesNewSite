import React from 'react';
import {Button} from "react-bootstrap";
import {useGetData} from "../../../hooks/useGetData";
import {useGetImages} from "../../../hooks/useGetImages";
import TeamCard from "./TeamCard";

const Team = ({lang,admin}) => {

    const data = [
        {
            id:0,
            img:"/images-dev/components/Team/mrMo.png",
            title:lang === 'rus' ? "Мохамед" : 'Mr. Mohamed',
            text: lang === 'rus' ? "Генеральный директор" : "CEO",
        },
        {
            id:1,
            img:"/images-dev/components/Team/mrIr.png",
            title: lang === 'rus' ? "Ирина" : "Irina",
            text: lang === 'rus' ? "Заместитель генерального директора" : "Deputy General Director",
        },
        {
            id:2,
            img:"/images-dev/components/Team/mrA.png",
            title: lang === 'rus' ? "Андрей" : "Andrew",
            text: lang === 'rus' ? "Руководитель отдела разработки" : "Team Lead",
        },
        {
            id:3,
            img:"/images-dev/components/Team/mrK.png",
            title: lang === "rus" ? "Кирилл" : "Kirill",
            text: lang === "rus" ? "Front-end разработчик" : "Front-end developer",
        },
    ];

    const dataDatabase = useGetData(`/blocks/${lang}/team`);

    return (
        <div className={"Team"}>
            <h2>{lang === 'rus' ? 'Наша команда' : 'Our team'}</h2>

            <div className="block-container">

                {
                    dataDatabase.length &&
                    dataDatabase.map(elem => (
                       <TeamCard key={elem.id} elem={elem} admin={admin} />
                    ))
                }

            </div>

            {
                admin &&
                <div className={"w-100 my-3 d-flex justify-content-center"}>
                    <Button size={"sm"} variant={"light"}>
                        Add new block
                    </Button>
                </div>
            }
        </div>
    );
};

export default Team;
