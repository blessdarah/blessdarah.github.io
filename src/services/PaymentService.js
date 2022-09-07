const paymentUrl = 'https://mesomb.hachther.com/api/v1.0/payment/online';
const url = 'http://rafineg.herokuapp.com/api/collect/bootcamp';
import axios from "axios";

export const paymentService = {
    collect: async (info) => {
        const requestOptions = {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(info),
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json; charset=utf-8"
            }
        };
        const res = await fetch(url, requestOptions);
        const data = await res.json();

        // const result = fetch(url, requestOptions)
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log('data: ', data);
        //         return data;
        //     })
        //     .catch(error => console.log('error', error));
        console.log("result: ", data);
        return data;
    },
}
