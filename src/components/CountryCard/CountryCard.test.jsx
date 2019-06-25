import React from 'react';
import { shallow } from 'enzyme';
import CountryCard from './CountryCard';
import { CountryCardGroup, CountryCardRow, CountryCardText } from './CountryCardStyled';

describe('test CountryCard component', () => {
  const props = {
    country: {
      code: 'BG',
      name: 'Bulgaria',
      native: 'България',
      phone: '359',
      emoji: '🇧🇬',
      currency: 'BGN',
      languages: [
        { code: 'bg', name: 'Bulgarian', native: 'Български' },
        { code: 'en', name: undefined, native: 'English' }
      ]
    }
  };

  it('should correct children components', () => {
    const wrapper = shallow(<CountryCard {...props} />);
    const languagesRow = wrapper
      .find(CountryCardRow)
      .at(2)
      .find(CountryCardText)
      .at(0);
    expect(wrapper).toContainMatchingElement(CountryCardGroup);
    expect(languagesRow).toIncludeText(props.country.languages[0].native);
    expect(languagesRow).not.toIncludeText(props.country.languages[1].native);
  });
});
