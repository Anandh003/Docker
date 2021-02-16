const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.json([{
    name: 'anandh',
    email: 'anandh@gmail.com'
},
{
    name: 'anga',
    email: 'anga@gmail.com'
},
{
    name: 'alice',
    email: 'alice@gmail.com'
}
]))

app.listen(port, () => console.log(`Example app is listening on the port ${port}!`))