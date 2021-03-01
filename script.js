let searchForm = document.querySelector('.user-input');
let joke = document.querySelector('.joke');

searchForm.addEventListener('submit', async function (e) {
    e.preventDefault();
    const config = { headers: { Accept: "application/json" } };
    const res = await axios.get('https://icanhazdadjoke.com', config);
    let results = res.data.joke;
    await addNewJoke(results);

})


const addNewJoke = async (theJoke) => {
    joke.innerHTML = theJoke;
}
