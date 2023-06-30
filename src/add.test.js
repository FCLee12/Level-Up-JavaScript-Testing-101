import { add } from "./add";

test('add', () => {
    const value = add(1, 2);
    // we expect (assert) variable value to be 3
    expect(value).toBe(3);

    // alt:
    expect(add(1,2)).toBe(3);
    expect(add(5,2)).toBe(7);
})