import cloneArray from "../cloneArray";

test('Clones array [1,2,3] in new memory location', () => {
	let array = [1,2,3];
	expect(cloneArray(array)).toEqual(array);
});
