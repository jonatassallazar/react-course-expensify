import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
  addExpense,
  startAddExpense,
  editExpense,
  removeExpense,
} from "../../actions/expenses";
import expenses from "../fixtures/expenses";
import database from "../../firebase/firebase";

const createMockStore = configureMockStore([thunk]);

test("Should setup remove expense action object", () => {
  const action = removeExpense("123abc");
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    expense: {
      id: "123abc",
    },
  });
});

test("Should setup edit expense action object", () => {
  const action = editExpense("123abc", { note: "new note value" });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123abc",
    updates: {
      note: "new note value",
    },
  });
});

test("Should setup add expense action object with provided values", () => {
  const action = addExpense(expenses[2]);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: expenses[2],
  });
});

test("should add expense to database and store", () => {
  const expense = {
    description: expenses[1].description,
    amount: expenses[1].amount,
    note: expenses[1].note,
    createdAt: expenses[1].createdAt,
  };

  const store = createMockStore({});

  const userID = 'testing'

  return store.dispatch(startAddExpense(expense, userID)).then(() => {
    const actions = store.getActions();
    expect(action[0]).toEqual({
      type: "ADD_EXPENSE",
      expense: {
        id: expect.any(String),
        ...expense,
      },
    });

    return database
      .ref(`users/${userID}/expenses/${actions[0].expense.id}`)
      .once("value")
      .then((snap) => {
          expect(snap.val()).toEqual(expense);
      });
  });
});
