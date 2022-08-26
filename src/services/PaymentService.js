const paymentUrl = 'https://mesomb.hachther.com/api/v1.0/payment/online/';
export const PaymentService = {
    collect: async (info) => {
        const config = {
            method: "POST",
            cors: 'nocors',
            body: JSON.stringify(info),
            headers: {
                'Content-Type': 'application/json',
                'X-Mesomb-Application': process.evn.MESOMB_APP_KEY,
                'X-Mesomb-OperationMode': 'synchronous'
            }
        }
        const res = await fetch(paymentUrl, config);
        return await res.json();
    }
}
