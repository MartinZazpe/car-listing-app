const bodyParser = require('body-parser')

let db

async function createConnection() {

    const mysql = require('mysql2/promise')


    const con = await mysql.createConnection({
        host: 'sql7.freesqldatabase.com',
        user: 'sql7628701',
        password: 'YaLYAqEjvW',
        database: 'sql7628701'
        //   port: 3306??
    })

    await con.connect((err) => {
        if (err) {
            console.log(err)
        } else {
            console.log('db connection success')
        }
    })
    db = con
    return db
}

createConnection()



const indexMethods = {

    home: async (req, res) => {
        //load initial data from db
        // res.send('hello this is home get req')
        var list = await db.query('select * from cars')

        // res.send(list[0].forEach(element => {
        //     console.log(element.id)
        // }))

        res.send(list[0])
    },

    add: async (req, res) => {

        //creating data to be entered.
        const id = null
        const name = await req.body.form.name
        const color = await req.body.form.color
        const price = await req.body.form.price

        //just saving the incoming form obj
        const formObj = req.body.form

        //turn the formObject to an array
        var formObjToArray = Object.keys(formObj).map((key) => [key, formObj[key]])

        //here we will store errors
        let errorList = []


        //search the object and if any parts are null or too long return error array result;
        const filteredBody = formObjToArray.forEach(element => {
            if (element[1] == null || (element[1].replaceAll(' ', '').length <= 0)) {
                var newError = `The field ${element} can't be null.`
                // console.log(newError)
                errorList.push(newError)

                // else return newError
            } else {
                return
            }
        })

        //HERE I NEED TO CHECK CORRECTLY 
        if (errorList.length >= 1) {
            // console.log('this is errorList 1: ' + errorList[0])
            console.log('all errors ' + errorList)
            res.send(errorList)
        }

        //then if all is good, insert in query, else show errors.
        else {
            await db.query('insert into cars values(?,?,?,?)', [id, name, color, price], (err, res) => {
                if (err) {
                    console.log(err)
                } else {
                    console.log(res)
                }
            })
            res.send('success')
        }
    },


    delete: async (req, res) => {

        //get current user
        const currentUser = req.params.id

        //delete current user from db
        const deleteFromDb = await db.query(`delete from cars where id = ${currentUser}`)

        if (deleteFromDb) {
            res.send({ message: 'succesfully deleted item with id ' + currentUser })
        } else if (!deleteFromDb) {
            res.send({ message: 'Error, this entry could not be deleted' })
        }
    }

}


module.exports = indexMethods