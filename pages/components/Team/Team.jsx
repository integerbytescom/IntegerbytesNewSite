import React from 'react';

const Team = ({lang}) => {

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

    return (
        <div className={"Team"}>
            <h2>{lang === 'rus' ? 'Наша команда' : 'Our team'}</h2>

            <div className="block-container">

                {
                    data.map(elem => (
                        <div key={elem.id} className="team-block">
                            <img src={elem.img} alt={elem.title}/>
                            <div className="inner">
                                <h5 className={"mb-1"}>{elem.title}</h5>
                                <div className="line" />
                                <p className={"small"}>{elem.text}</p>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    );
};

export default Team;
