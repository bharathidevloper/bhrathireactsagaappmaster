import asyncstorage from '@react-native-community/async-storage';
export const removeToken = async () => {
    try {

        await asyncstorage.removeItem('token');
    } catch (e) {
        console.log(e);
    }
};
