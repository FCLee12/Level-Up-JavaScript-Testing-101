import { total } from './App';
import { add } from './add';

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

// *** NOTE: active version of this test has been moved to add.test.js ***

// test('add', () => {
//     const value = add(1, 2);
//     // we expect (assert) variable value to be 3
//     expect(value).toBe(3);

//     // alt:
//     expect(add(1,2)).toBe(3);
//     expect(add(5,2)).toBe(7);
// })

    // Unit Tests:
        // only tests one thing
            // EX: A React component only renders itself, not its children
        // as opposed to Integration Tests:
            // EX: functions that runs other functions,
                // React components that trigger other components to render

// ***** END UNIT TEST *****

// ***** INTEGRATION TEST *****

// Defining an integration test (again):
    // testing a function that relies on another function
    // or in React: testing a component that renders another component

// *** NOTE: active version of this test has been moved to MOCKING MODULES Section ***

// test('total', () => {
//     expect(total(5,20)).toBe("$25");
// })

// NOTE: total() relies on add() to function correctly
    // therefore this tests both add() and total()


// ***** END INTEGRATION TEST *****

// ***** MOCK FUNCTIONS *****

// this is a mock function
    // the purpose is to create a fake function
    // that will give you some results
    // can be async, can return a promise, or data
    // can even load a function from a dependency and turn it into a mock
        // EX: Database call, but I don't actually want it to hit the database
            // you can load the function, turn it into a mock, and then determine
            // whether or not the function is ever run

const returnsOne = jest.fn(() => 1);
const minus = jest.fn((x, y) => x - y);

test('returnsOne', () => {
    expect(returnsOne()).toBe(1);
    expect(returnsOne).toHaveBeenCalledTimes(1);
})

test('minus', () => {
    expect(minus(3,2)).toBe(1);
    expect(minus).toHaveBeenCalledTimes(1);
    expect(minus).toHaveBeenCalledWith(3,2);
})

// ***** END MOCK FUNCTIONS *****

// ***** MOCKING MODULES *****

// a mocked dependency
    // mocked the location './add'
    // used the arrow function returning an object is used to say
        // there is a module called 'add' (Note object property name is 'add')
    // we're defining it as a mock function that returns 25
jest.mock('./add', () => ({
    add: jest.fn(() => 25)
}));

test('total', () => {
    // This utilizes the mocked "add" function instead of the actual one
        // that is imported from add.js
        // EX: if this were an API call, rather than testing some other
            // company's API code, you're basically throwing in a mock
            // function so the larger/dependant function can still be tested
    expect(total(5,20)).toBe("$25");

    // This verifies that the "add" function was run
        // within the "total" function
    expect(add).toHaveBeenCalledTimes(1);

    // This adjusts the mocked "add" function to return 30 instead of 25
    add.mockImplementation(() => 30);

    expect(total(5, 25)).toBe('$30');
    expect(add).toHaveBeenCalledTimes(2);
});

// ***** END MOCKING MODULES *****