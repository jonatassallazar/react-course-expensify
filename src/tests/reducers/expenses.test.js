import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test('Should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' })

    expect(state).toEqual([])
})

test('Should remove expense', () => {
    const state = expensesReducer(expenses,
        {
            type: 'REMOVE_EXPENSE',
            expense: {
                id: expenses[0].id
            }
        })

    expect(state).toEqual([expenses[1], expenses[2]])
})

test('Should NOT remove expense', () => {
    const state = expensesReducer(expenses,
        {
            type: 'REMOVE_EXPENSE',
            expense: {
                id: '-1'
            }
        })

    expect(state).toEqual([expenses[0], expenses[1], expenses[2]])
})

test('Should add expense', () => {
    const expense = {
        id: '4',
        description: 'Loan',
        amount: 5000,
        createdAt: 1825
    }

    const state = expensesReducer(expenses, { type: 'ADD_EXPENSE', expense })

    expect(state).toEqual([...expenses, expense])
})

test('Should edit an expense', () => {
    const expense = {
        id: expenses[0].id,
        description: 'New Loan',
        amount: 9000,
        createdAt: 951753,
        note: ''
    }

    const state = expensesReducer(expenses,
        {
            type: 'EDIT_EXPENSE',
            id: expenses[0].id,
            updates: expense
        })

    expect(state).toEqual([expense, expenses[1], expenses[2]])
})

test('Should NOT edit an expense', () => {
    const state = expensesReducer(expenses,
        {
            type: 'EDIT_EXPENSE',
            id: '-1',
            updates: {
                description: 'New Loan',
                amount: 9000,
                createdAt: 951753,
                note: ''
            }
        })

    expect(state).toEqual([expenses[0], expenses[1], expenses[2]])
})