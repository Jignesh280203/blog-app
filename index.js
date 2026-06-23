const express = require('express');
const path = require('path');
const postRoutes = require('./routes/postRoutes');

const app = express();


app.use(express.json());


app.use(express.static(path.join(__dirname, 'public')));


app.use('/api/posts', postRoutes);


app.get('/', (req, res) => {
    res.redirect('/create.html');
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
