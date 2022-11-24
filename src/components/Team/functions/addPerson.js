import {realtimeDB} from "../../../database";
import {set,ref} from "firebase/database";
import {addPersonPhoto} from "./addPersonPhoto";

export const addPerson = (e,data,lang) => {
    e.preventDefault();

    const id = Date.now();

    const url = `/blocks/${lang}/team/${id}`;

    addPersonPhoto(e,id,data.img,lang)
        .then(() => console.log("Photo added successfully"))

    return set(ref(realtimeDB,url),{
        id:id,
        text:data.text,
        title:data.title,
    });
}
