const {faker} = require('@faker-js/faker')
const constant = require('./constant')
function createEmployee (
    employeeCount
)  {
    const employeList = []

    for(let i = 0; i < employeeCount; i++){
        let employe = {
            firstName : faker.name.firstName(),
            lastName : faker.name.lastName(),
            dateOfBirth: faker.date.past(20).toLocaleDateString('fr-FR'),
            startDate: faker.date.past(2).toLocaleDateString('fr-FR'),
            street: faker.address.street(),
            city: faker.address.cityName(),
            state: faker.address.state(),
            zipCode: faker.datatype.number({min:11111, max:99999}),
            department: constant.department[faker.datatype.number({min:0, max:4})]
        }

        employeList.push(employe)
    }

    return employeList
}

module.exports = createEmployee