const mongoose=require('mongoose')

mongoose.connect('mongodb://localhost:27017/TravelWebsite')
.then(()=>console.log('database is connected'))
.catch(()=>console.log('database not connected'))