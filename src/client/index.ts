import Axios from 'axios';

const btn = document.getElementById('foo');
btn.addEventListener('click', () => {
    Axios.post('/foo', { value: 'bar' })
    .then(res => console.log(res.data))
    .catch(err => console.log(err));
});