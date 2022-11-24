import {remove,ref} from 'firebase/database'
import {realtimeDB} from "../database";

export const handleDeleteDB = url => {
    return remove(ref(realtimeDB,url))
}
