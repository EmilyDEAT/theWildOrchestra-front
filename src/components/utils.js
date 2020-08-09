const daysOfWeek = [
  'Dimanche',
  'Lundi',
  'Mardi',
  'Mercredi',
  'Jeudi',
  'Vendredi',
  'Samedi'
]

const months = [
  'janvier',
  'février',
  'mars',
  'avril',
  'mai',
  'juin',
  'juillet',
  'août',
  'septembre',
  'octobre',
  'novembre',
  'décembre'
]

const dateConvert = (date) => {
  const jsDate = new Date(date)
  const day = jsDate.getDate()
  const dayOfWeek = jsDate.getDay()
  const month = jsDate.getMonth()
  const year = 1900 + jsDate.getYear()
  return `${daysOfWeek[dayOfWeek]} ${day} ${months[month]} ${year}`
}

export { dateConvert }
