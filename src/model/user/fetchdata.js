import http from 'axios';
export const fetchdata = async (data) => {
    try {
        console.log(data);
        const response = await http.post(
            'http://182.18.161.55/AC_PROD_MobileAPI_Core/api/Security/UserDetails', data
        );
        const userdata = await response.data;
        return userdata;
    } catch (e) {
        //return e;
        //return { error: "Network Error" };
    }
};