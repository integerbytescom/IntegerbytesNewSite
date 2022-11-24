import {ref, listAll,getDownloadURL,getMetadata } from "firebase/storage";
import {useLayoutEffect, useState} from "react";
import {storageDB} from "../database";

//получаем фото из storage
export const useGetImages = link => {

    //for files from database
    const [data,setData] = useState([]);
    //ref for database
    const listRef = ref(storageDB,link);

    useLayoutEffect(() => {

        setData([])

        listAll(listRef)
            .then(res => {
                res.items.forEach(itemRef => {
                    getDownloadURL(itemRef).then(elemLink => {
                        getMetadata(itemRef).then(elemMD => {
                            //получаем ссылку и метадату
                            setData(old => [...old, {link: elemLink, metaData: elemMD}])
                        })
                    })
                })
            })
            .catch(() => setData([]))

        //eslint-disable-next-line
    }, [link]);

    //удаляем повторяющиеся элементы массива
    return data.filter((v,i,a) => a.findIndex(t => (t.link === v.link)) === i);
}
