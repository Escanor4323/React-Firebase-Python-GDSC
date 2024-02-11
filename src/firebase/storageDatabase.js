import { storage } from './firebase';
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';

class StorageDatabase {
    constructor() {}

    uploadFile(path, file) {
        return new Promise((resolve, reject) => {
            const uploadRef = storageRef(storage, path);
            uploadBytes(uploadRef, file).then((snapshot) => {
                getDownloadURL(snapshot.ref).then((downloadURL) => {
                    resolve(downloadURL);
                }).catch((error) => reject(error));
            }).catch((error) => reject(error));
        });
    }
    fetchFileURL(path) {
        return new Promise((resolve, reject) => {
            const fileRef = storageRef(storage, path);
            getDownloadURL(fileRef).then((url) => {
                resolve(url);
            }).catch((error) => reject(error));
        });
    }
}

export default new StorageDatabase();
