import React from 'react'
import { connect } from 'react-redux'
import numeral from 'numeral'
import selectExpenses from '../selectors/expenses'
import selectExpensesTotal from '../selectors/expenses-total'

const ExpensesSummary = ({expenseCount, expensesTotal}) => (
    <div>
        <h1>Viewing {expenseCount} {expenseCount.length > 1 ? 'expenses' : 'expense'} totalling {numeral(expensesTotal / 100).format('$0,0.00')}</h1>
    </div>
)

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters)
    
    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses)
    }
  }

export default connect(mapStateToProps)(ExpensesSummary)