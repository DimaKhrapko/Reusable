'use strict';

/* 10. Implement phone book using hash (also known as `object`).
- Define hash with `key` contains `name` (from previous example) and `value`
contains `phone`.
- Implement function `findPhoneByName` with signature
`findPhoneByName(name: string): string`. Returning phone from hash/object.
Use `hash[key]` to find needed phone. */

const phonebook = {
    John: '+380437589158',
    Max: '+380582067180'
};

const findPhoneByName = (name) => return phonebook[name];

module.exports = { phonebook, findPhoneByName };
