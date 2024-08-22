// 6-payment_token.js
function getPaymentTokenFromAPI(success) {
    return new Promise((resolve, reject) => {
        if (success) {
            resolve({ data: 'Successful response from the API' });
        } else {
            // Not calling reject to mimic 'doing nothing' as specified
        }
    });
}

module.exports = getPaymentTokenFromAPI;
