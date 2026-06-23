const express = require('express');
const bodyParser = require('body-parser');
const postRoutes = require('./routes/postRoutes');

const app = express();
const PORT = 3000;


app.use(bodyParser.json());
app.use(express.static('public'));


app.use('/api/posts', postRoutes);


app.get('/', (req, res) => {
    res.redirect('/create.html');
});


app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
