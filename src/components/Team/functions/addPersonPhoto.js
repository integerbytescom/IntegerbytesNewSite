import {ref, uploadBytesResumable} from "firebase/storage";
import {storageDB} from "../../../database";


export const addPersonPhoto = (e,id,image,lang) => {
    e.preventDefault();
    console.log(image[0])
    const fileRef = ref(storageDB,`/blocks/${lang}/team/${id}/${image[0].name}`)
    return uploadBytesResumable(fileRef,image[0])
        // .then(() => console.log('Картинка ' + image[0].name + ' загружена.'))
}
