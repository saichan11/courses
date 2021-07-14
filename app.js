const express = require('express');
const app = express();

const courses = [
    { id: 1, course_name: 'python' },
    { id: 2, course_name: 'javascript' },
    { id: 3, course_name: 'node js' },
];

app.get('/', (req, res) => {
    res.send('Courses');

});

app.get('/coursesList', (req, res) => {
    res.send(courses);

});

app.get('/courses/:id', (res, req) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
});

const port = process.env.PORT || 3000;
app.listen(3000, () => console.log(`listening port ${port}...`));