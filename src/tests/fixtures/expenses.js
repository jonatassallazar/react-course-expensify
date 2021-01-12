import moment from 'moment'

export default [{
    id: '1',
    description: 'Tes',
    note: '',
    amount: 145,
    createdAt: 0
},{
    id: '2',
    description: 'Nos',
    note: '',
    amount: 1450,
    createdAt: moment(0).subtract(4, 'days').valueOf()
},{
    id: '3',
    description: 'Gui',
    note: '',
    amount: 18,
    createdAt: moment(0).add(4, 'days').valueOf()
}]