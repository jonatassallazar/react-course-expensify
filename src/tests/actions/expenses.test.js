import { addExpense, editExpense, removeExpense } from '../../actions/expenses'

test('Should setup remove expense action object', () => {
    const action = removeExpense('123abc')
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        expense: {
            id: '123abc'
        }
    })
})

test('Should setup edit expense action object', () => {
    const action = editExpense('123abc', {note: 'new note value'})
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            note: 'new note value'
        }
    })
})

test('Should setup add expense action object with provided values', () => {
    const expense = {
        description: 'Test',
        amount: 10555,
        createdAt: 1525412541,
        note: 'This was a test'
    }
    
    const action = addExpense(expense)
    
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expense
        }
    })
})
