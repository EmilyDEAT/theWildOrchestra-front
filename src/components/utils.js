const dateConvert = (date) => {
const tabDate = date.split('-')
    switch (tabDate[0]) {
        case 'Monday':
            tabDate[0] = 'Lundi'
            break
        case 'Tuesday':
            tabDate[0] = 'Mardi'
            break
        case 'Wednesday':
            tabDate[0] = 'Mercredi'
            break
        case 'Thursday':
            tabDate[0] = 'Jeudi'
            break
        case 'Friday':
            tabDate[0] = 'Vendredi'
            break
        case 'Saturday':
            tabDate[0] = 'Samedi'
            break
        case 'Sunday':
            tabDate[0] = 'Dimanche'
            break
        default:
            tabDate[0] = 'Jour'
    }
    switch (tabDate[2]) {
        case '01':
            tabDate[2] = 'janvier'
            break
        case '02':
            tabDate[2] = 'février'
            break
        case '03':
            tabDate[2] = 'mars'
            break
        case '04':
            tabDate[2] = 'avril'
            break
        case '05':
            tabDate[2] = 'mai'
            break
        case '06':
            tabDate[2] = 'juin'
            break
        case '07':
            tabDate[2] = 'juillet'
            break
        case '08':
            tabDate[2] = 'août'
            break
        case '09':
            tabDate[2] = 'septembre'
            break
        case '10':
            tabDate[2] = 'octobre'
            break
        case '11':
            tabDate[2] = 'novembre'
            break
        case '12':
            tabDate[2] = 'décembre'
            break
        default:
            tabDate[2] = 'Mois'
    }
    return tabDate.join(' ')
}

export { dateConvert };