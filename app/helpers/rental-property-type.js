import Ember from 'ember';

const communityPropertyTypes = [
  'Condo',
  'Townhouse',
  'Apartment'
];

export function rentalPropertyType(listOfArgs/*, hash*/) {
  if (communityPropertyTypes.includes(listOfArgs[0])) {
    return 'Community';
  }

  return 'Standalone';
}

export default Ember.Helper.helper(rentalPropertyType);
