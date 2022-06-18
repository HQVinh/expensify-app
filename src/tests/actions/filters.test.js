import { setStartDate, 
  setEndDate,
  setTextFilter,
  sortByDate,
  sortByAmount
} from '../../actions/filters';
import moment from 'moment';

test('test should generate setStartDate action object', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  });
});

test('test should generate setEndDate action object', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  });
});

test('test should generate setTextFilter action object with default value', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  });
});

test('test should generate setTextFilter action object with defined value', () => {
  const action = setTextFilter('Blah');
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'Blah'
  });
});

test('test should generate sortByDate action object', () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: 'SORT_BY_DATE'
  });
});

test('test should generate sortByAmount action object', () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT'
  });
});