import filtersReducer from '../../reducers/filters'
import moment from 'moment'

test('Should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' })

    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('Should setup sort by amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' })

    expect(state).toEqual({
        text: '',
        sortBy: 'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('Should setup sort by date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    }
    const action = { type: 'SORT_BY_DATE'}
    
    const state = filtersReducer(currentState, { type: 'SORT_BY_DATE' })

    expect(state.sortBy).toBe('date')
})

test('Should setup filter by text', () => {
    const state = filtersReducer(undefined, { type: 'SET_TEXT_FILTER', text:'Paybill' })

    expect(state).toEqual({
        text: 'Paybill',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('Should setup filter by startDate', () => {
    const state = filtersReducer(undefined, { type: 'SET_START_DATE', startDate: moment(0) })

    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: moment().endOf('month')
    })
})

test('Should setup filter by endDate', () => {
    const state = filtersReducer(undefined, { type: 'SET_END_DATE', endDate: moment(1000) })

    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment(1000)
    })
})