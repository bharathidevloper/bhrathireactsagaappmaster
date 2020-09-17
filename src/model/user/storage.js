import asyncstorage from '@react-native-community/async-storage';
export const storeData = async (data) => {
    try {
        console.log("storagetoken:" + data);

        await asyncstorage.setItem('token', data == "" ? null : data);
    } catch (e) {
        console.log(e);
    }
};
