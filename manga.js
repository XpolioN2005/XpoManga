const title = 'Onepiece';
const baseUrl = 'https://api.mangadex.org';

axios.get(`${baseUrl}/manga`, {
    params: {
        title: title
    }
})
    .then(function (response) {
        // Handle success
        console.log(response.data.data.map(manga => manga.id));
    })
    .catch(function (error) {
        // Handle error
        console.log('Error fetching data:', error);
    })
    .then(function () {
        // Always executed
        console.log('Request completed');
    });