import React from "react";
import { shallow } from "enzyme";
import { ExpenseListFilters } from "../../components/ExpenseListFilters";
import { filters, altFilters } from "../fixtures/filters";
import moment from 'moment';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setEndDate = jest.fn();
    setStartDate = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters
            filters={filters}
            setTextFilter={setTextFilter}
            sortByAmount={sortByAmount}
            sortByDate={sortByDate}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
        />
    );
});

test('should render ExpenseListFilters correctly', () => {
    expect(wrapper).toMatchSnapshot();
})

test('should render ExpenseListFilters with alt data correctly', () => {
    wrapper.setProps({
        filters: altFilters
    })
    expect(wrapper).toMatchSnapshot();
})

test('should handle text change', () => {
    const value = 'bills'
    wrapper.find('input').at(0).simulate('change', {
        target: { value }
    })
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
})

test('should sort by date', () => {
    const value = 'date'
    wrapper.find('select').at(0).simulate('change', {
        target: { value }
    })
    expect(sortByDate).toHaveBeenCalled();
})

test('should sort by amount', () => {
    const value = 'amount'
    wrapper.find('select').at(0).simulate('change', {
        target: { value }
    })
    expect(sortByAmount).toHaveBeenCalled();
})

test('should handle date changes', () => {
    const startDate = moment(2);
    const endDate = moment(22);
    wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({ startDate, endDate });
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
})

test('should handle date focus changes', () => {
    expect(wrapper.state('calendarFocused')).toEqual(null);
    wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')({focused: true});
    expect(wrapper.state('calendarFocused')).toEqual({ focused: true});
})