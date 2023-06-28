import { add } from './App';

// for descriptor/test "name", good convention
    // is to simply name it the thing you're testing

test('add', () => {
    const value = add(1, 2);
    // we expect (assert) variable value to be 3
    expect(value).toBe(3);
})

// ***** SAMPLE TEST *****

// test('Fake Test', () => {
//     expect(true).toBeTruthy();
// });

// expects are called assertions
    // you are asserting that things will be some way
    // general format of assertions:
        // we expect(expect(something)) to be
            // (.toBe(anotherSomething)) something

// ***** END SAMPLE TEST *****

