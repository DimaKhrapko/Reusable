'use strict';

/* Do following tasks inside function `fn` (see stub: `7-objects.js`)
- Define constant object with single field `name`.
- Define variable object with single field `name`.
- Try to change field `name`.
- Try to assign other object to both identifiers.
- Explain script behaviour. */

const fn = () => {
  const object1 = {
    name: 'Siegfried'
  };
  let object2 = {
    name: 'Siegfried'
  };
  object1.name = 'Asol';
  object2.name = 'Asol';
  // object1 = {
  //     name: 'William'  // doesn't work due to const
  // }
  object2 = {
    name: 'William',
  };
};

module.exports = { fn };
