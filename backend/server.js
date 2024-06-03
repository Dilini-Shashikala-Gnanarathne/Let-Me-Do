const app= require('./App');
const port =3001;
const host= '127.0.0.1'
const server=app.listen(port, host, () => {
    console.log(`Server is running on ${server.address().port}`);
});