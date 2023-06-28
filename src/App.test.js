import { add } from './App';


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

// NOTE:
    // for descriptor/test "name", good convention
        // is to simply name it the thing you're testing

// ***** UNIT TEST *****

test('add', () => {
    const value = add(1, 2);
    // we expect (assert) variable value to be 3
    expect(value).toBe(3);

    // alt:
    expect(add(1,2)).toBe(3);
    expect(add(5,2)).toBe(7);
})

    // Unit Tests:
        // only tests one thing
            // EX: A React component only renders itself, not its children
        // as opposed to Integration Tests:
            // EX: functions that runs other functions,
                // React components that trigger other components to render

// ***** END UNIT TEST *****





