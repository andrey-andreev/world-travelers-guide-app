import React from 'react';
import { shallow } from 'enzyme';
import { Query } from 'react-apollo';
import QueryCountries from './QueryCountries';

describe('text QueryCountries component', () => {
  const SampleChildComponent = () => <div>SampleChildComponent</div>;
  const props = {
    children: SampleChildComponent,
    query: {
      kind: '_SampleChildComponent',
      definitions: []
    }
  };
  it('should render `Query` component', () => {
    const wrapper = shallow(<QueryCountries {...props}>{SampleChildComponent}</QueryCountries>);
    expect(wrapper).toContainMatchingElement(Query);
  });
});
