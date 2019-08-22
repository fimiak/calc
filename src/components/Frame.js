import React, { Component } from 'react';
import Button from './Button';
import Equals from '../containers/Equals';
import FilterOperator from '../containers/FilterOperator';
import AddNum from '../containers/AddNum';
import ClearAll from '../containers/ClearAll';
import ScreenContainer from '../containers/ScreenContainer';
import { OperatorFilters } from '../redux/actions';

class Frame extends Component {
  render() {
    return (
      <div className="frame">
        <ScreenContainer className="screen" />
        <ClearAll className="clear" value="C" />
        <Button className="negative" value="+/-" />
        <Button className="percentage" value="%" />
        <FilterOperator className="divide" value="/" filter={OperatorFilters.DIVISION}>
          /
        </FilterOperator>
        <AddNum className="seven" value="7" />
        <AddNum className="eight" value="8" />
        <AddNum className="nine" value="9" />
        <FilterOperator stored={'a'} className="multiply" value="x" filter={OperatorFilters.MULTIPLICATION}>
          x
        </FilterOperator>
        <AddNum className="four" value="4" />
        <AddNum className="five" value="5" />
        <AddNum className="six" value="6" />
        <FilterOperator className="minus" value="-" filter={OperatorFilters.SUBTRACTION}>
          -
        </FilterOperator>
        <AddNum className="one" value="1" />
        <AddNum className="two" value="2" />
        <AddNum className="three" value="3" />
        <FilterOperator className="plus" value="abc" filter={OperatorFilters.ADDITION}>
          +
        </FilterOperator>
        <AddNum className="zero" value="0" />
        <Button className="decimal" value="." />
        <Equals className="equals" value="=" />
      </div>
    );
  }
}

export default Frame;
