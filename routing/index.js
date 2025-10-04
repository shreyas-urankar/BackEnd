const express = require('express')
const app = express()
const port = 3000


// import item ki router file
const item=require('./routes/item')
const birds=require('./routes/birds')
// load in to application
app.use('/api', item);
app.use('/filler',birds);

// ->/api/ -> items home page
// ->/api/items->item post request
// ->/api/item/id->put/delete request

app.listen(port, () => {
  console.log(`Shreyas app listening on port ${port}`)
})
