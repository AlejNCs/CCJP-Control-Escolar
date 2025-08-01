const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('API del sistema de control escolar'));
app.listen(3000, () => console.log('Servidor backend en puerto 3000'));