const userdata = require('./userdata.json')

function checkData(data){
  let checkemail = []
  let pass = []
  checkemail = userdata.userdata.filter(person => person.email === data.email)
  pass = checkemail.filter(person => person.password === data.password)
  return pass
}

module.exports = checkData