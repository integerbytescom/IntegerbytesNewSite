import React from 'react';
import {Button, Placeholder} from "react-bootstrap";
import {useGetImages} from "../../../hooks/useGetImages";

const TeamCard = ({elem,admin}) => {

    const imageCard = useGetImages(`/blocks/team/${elem.id}`);
    // console.log(imageCard);

    return (
        <div key={elem.id} className="team-block">
            {
                (imageCard.length && imageCard[0].link) ?
                    <img src={imageCard[0].link} alt={elem.title}/>:
                    <Placeholder as="p" animation="glow">
                        <Placeholder xs={12} style={{height:300,borderRadius:20}} />
                    </Placeholder>
            }

            <div className="inner">
                <h5 className={"mb-1"}>{elem.title}</h5>
                <div className="line" />
                <p className={"small"}>{elem.text}</p>
            </div>

            {
                admin &&
                <Button size={"sm"} variant={"danger"}>
                    Delete
                </Button>
            }
        </div>
    );
};

export default TeamCard;
