const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;


app.use(cors());
const chefs = require('./data/chefs.json');


app.get('/', (req, res) => {
	res.send("chef recipe is running")
});

app.get('/chefs', (req, res) => {
	res.send(chefs);
})


app.get('/chefs/:id', (req, res) => {
	const id = req.params.id;
	const selectedChefs =chefs.find(s => s.id == id)
	res.send(selectedChefs);
})

app.listen(port, () => {
	console.log(`chefCorner is running on port:${port}`);
})

