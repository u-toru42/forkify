const res = await axios(`${PROXY}http://food2fork.com/api/search?key=${KEY}&q=${this.query}`);
const res = await axios(`https://forkify-api.herokuapp.com/api/search?&q=${this.query}`);