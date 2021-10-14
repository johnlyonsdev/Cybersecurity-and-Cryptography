const bcrypt = require('bcryptjs')
const users = []

module.exports = {
    login: (req, res) => {
      console.log('Logging In User')
      console.log(req.body)
      const { username, password } = req.body
      for (let i = 0; i < users.length; i++) {
        const existing = bcrypt.compareSync(password, users[i].passHash)
        if (existing) {
          let messagesToReturn = {... users[i]}
          delete messagesToReturn.passHash
          res.status(200).send(messagesToReturn)
          return
        }
      }
      res.status(400).send("User not found.")
    },
    register: (req, res) => {
        console.log('Registering User')
        console.log(req.body)
        const {username, email, firstName, lastName, password} = req.body
        const salt = bcrypt.genSaltSync(5)
        const passHash = bcrypt.hashSync(password, salt)
        console.log(passHash)

        let newUser = {
          username,
          email,
          firstName,
          lastName,
          passHash 
        }
        users.push(newUser)
        console.log(users)
        let messagesToReturn = {...newUser}
        delete messagesToReturn.passHash
        res.status(200).send(messagesToReturn)
    }
}