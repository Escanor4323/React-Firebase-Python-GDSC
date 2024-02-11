import { database } from './firebase'; // Adjust the import path as necessary
import { ref, set, push, get, onValue, off } from 'firebase/database';

class RealtimeDatabase {
    constructor() {}

    // Method to submit data to a specific path
    submitData(path, data) {
        console.log(`Submitting data to ${path}:`, data);
        return new Promise((resolve, reject) => {
            const newRef = push(ref(database, path));
            set(newRef, data)
                .then(() => {
                    console.log(`Data submitted successfully to ${path}`);
                    resolve(newRef.key);
                })
                .catch((error) => {
                    console.error(`Error submitting data to ${path}:`, error);
                    reject(error);
                });
        });
    }

    // Method to fetch data from a specific path
    fetchData(path) {
        console.log(`Fetching data from ${path}`);
        return new Promise((resolve, reject) => {
            get(ref(database, path))
                .then((snapshot) => {
                    if (snapshot.exists()) {
                        console.log(`Data fetched from ${path}:`, snapshot.val());
                        resolve(snapshot.val());
                    } else {
                        console.log(`No data exists at ${path}`);
                        resolve({});
                    }
                })
                .catch((error) => {
                    console.error(`Error fetching data from ${path}:`, error);
                    reject(error);
                });
        });
    }

    // Method to listen to data changes at a specific path
    listenData(path, callback) {
        console.log(`Listening for data changes at ${path}`);
        const dataRef = ref(database, path);
        onValue(dataRef, (snapshot) => {
            const data = snapshot.val();
            console.log(`Data changed at ${path}:`, data);
            callback(data);
        });
        return () => {
            console.log(`Unsubscribing from data changes at ${path}`);
            off(dataRef);
        };
    }
}

export default new RealtimeDatabase();
