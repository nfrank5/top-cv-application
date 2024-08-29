

const CV = {

  generalInfo: {

  firstName: "Juan",
  lastName: "Perez",
  email: "jperez@inline.com",
  phone: "234 4567 7890",
  },

  educationExperience: [{
    school: "UBA",
    title: "Ingenieria Mecanica",
    date: new Date(Date.parse("2020-08-25T12:00:00Z")),
    id: crypto.randomUUID()
  }],

  practicalExperience: [{
    company: "Huawei",
    positionTitle: "Ingeniero",
    dateFrom: new Date(Date.parse("2021-12-11T12:00:00Z")),
    dateUntil: new Date(Date.parse("2024-06-01T12:00:00Z")),
    id: crypto.randomUUID()
  }]
  


} 

export default CV;