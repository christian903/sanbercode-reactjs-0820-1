var readBooks = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]

var temp = 0
readBooks(10000, books[0], function(checktime){
    console.log(checktime)
    temp = checktime
    readBooks(temp, books[1], function(checktime){
        console.log(checktime)
        temp = checktime
        readBooks(temp, books[2], function(checktime){
            console.log(checktime)
            temp = checktime
            readBooks(temp, books[3], function(checktime){
                console.log(checktime)
                temp = checktime
            })
        })
    })
})




