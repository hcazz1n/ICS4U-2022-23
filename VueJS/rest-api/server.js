import express from 'express'

const app = express()

const PORT = process.env.PORT || 5000

//middleware
app.use(express.json())

let students = [
    {id: 1, name: 'Fred', age: 16},
    {id: 2, name: 'Michael', age: 17},
    {id: 3, name: 'Kyle', age: 14},
]

let courses = [
    {id: 1, name: 'Introduction to Computer Science', instructor: 'John Smith'},
    {id: 2, name: 'Web Deployment Fundamentals', instructor: 'Jane Doe'},
    {id: 3, name: 'Database Systems', instructor: 'Bob Johnson'}
]

let teachers = [
    {id: 1, name: 'Mr. A', course: 'Computer Science'},
    {id: 2, name: 'Ms. O', course: 'World Religion'},
    {id: 3, name: 'Mr. P', course: 'Psychology'},
    {id: 4, name: 'Ms. Z', course: 'Chemistry'}
]

//create endpoint (routes)
app.get('/api/students', (req, res) => {
    res.send(students)
})

app.get('/api/students/:id', (req, res) => {
    const student = students.find(s => s.id === parseInt(req.params.id))
    if(!student) return res.status(404).send('Student not found.')
    res.send(student)
})

app.post('/api/students', (req, res) => {
    const student = {
        id: students.length + 1,
        name: req.body.name,
        age: req.body.age,
    }
    
    students.push(student)
    res.send(student)
})

app.put('/api/students/:id', (req, res) => {
    const student = students.find(s => s.id === parseInt(req.params.id))
    if(!student) return res.status(404).send('Student not found.')
    
    student.name = req.body.name
    student.age = req.body.age
    
    res.send(student)
})


app.delete('/api/students/:id', (req, res) => {
    const student = students.find(s => s.id === parseInt(req.params.id))
    if(!student) return res.status(404).send('Student not found.')
    
    const index = students.indexOf(student)
    students.splice(index, 1)
    
    res.send(student)
})

app.get('/api/courses', (req, res) => {
    res.send(courses);
});

app.get('/api/teachers', (req, res) => {
    res.send(teachers);
});


app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`))