let searchForm = document.querySelector('.user-input');
let joke = document.querySelector('.joke');

searchForm.addEventListener('submit', async function (e) {
    e.preventDefault();
    try {
        const config = { headers: { Accept: "application/json" } };
        const res = await axios.get('https://icanhazdadjoke.com', config);
        let results = res.data.joke;
        addNewJoke(results);
    }
    catch (e) {
        addNewJoke("No Jokes availabe sorry")
    }


})


const addNewJoke = (theJoke) => {
    joke.innerHTML = theJoke;
}
