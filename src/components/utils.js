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

const sortConcertsByDate = (concert1, concert2) => {
  if (concert1.date !== concert2.date) {
    return concert1.date < concert2.date ? -1 : 1
  }
  if (concert1.time !== concert2.time) {
    return concert1.time < concert2.time ? -1 : 1
  }
  return 0
}

export { dateConvert, sortConcertsByDate }
