import React from 'react';
import { shallow } from 'enzyme';
import { ContinentSelectPresenter, SelectStyled } from './ContinentSelect';

describe('test ContinentSelect component', () => {
  const props = {
    continent: '',
    continents: [
      { code: 'AF', name: 'Africa' },
      { code: 'AN', name: 'Antarctica' },
      { code: 'AS', name: 'Asia' },
      { code: 'EU', name: 'Europe' },
      { code: 'NA', name: 'North America' },
      { code: 'OC', name: 'Oceania' },
      { code: 'SA', name: 'South America' }
    ],
    chooseContinent: jest.fn()
  };
  const event = { target: { value: 'EU' } };

  const wrapper = shallow(<ContinentSelectPresenter {...props} />);
  wrapper.instance().onContinentChange(event);

  it('should render correct children components', () => {
    expect(wrapper).toContainMatchingElement(SelectStyled);
  });

  it('method `onContinentChange` should be called one time', () => {
    expect(props.chooseContinent).toBeCalledTimes(1);
  });

  it('method `onContinentChange` should be called with correct param', () => {
    expect(props.chooseContinent).toBeCalledWith(event.target.value);
  });
});
