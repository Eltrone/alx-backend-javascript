function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
        // Simulez une opération asynchrone, par exemple une demande à une API
        setTimeout(() => {
            resolve("Data received");
        }, 1000);
    });
}

export default getResponseFromAPI;
