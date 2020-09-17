import asyncstorage from '@react-native-community/async-storage';
export const fetchToken = async () => {
    try {
        const fToken = await asyncstorage.getItem('token');
        return fToken;
    } catch (e) {
        console.log(e);
    }
};
