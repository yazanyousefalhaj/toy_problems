/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *	"())"
 */

function balancedParens(input) {
	const open = ['[', '{', '(']
	const closed = [']', '}', ')']
	let stack = []
	for (let ch of input) {
		if (open.includes(ch)) {
			stack.push(ch)
		} else if (closed.includes(ch)) {
			let lastOpen = stack.pop();
			if (!lastOpen) return false;
			const openCh = open[closed.indexOf(ch)]
			if (openCh != lastOpen) return false;
		}
	}
	return stack.length === 0;
}

describe("Tests", () => {
	it("test balancedParens #case1", () => {
		expect(balancedParens("(")).toEqual(false)
		expect(balancedParens("()")).toEqual(true)
		expect(balancedParens(")(")).toEqual(false)
		expect(balancedParens("(())")).toEqual(true)

		expect(balancedParens("[](){}")).toEqual(true)
		expect(balancedParens("[({})]")).toEqual(true)
		expect(balancedParens("[(]{)}")).toEqual(false)

		expect(balancedParens(" var wow  = { yo: thisIsAwesome() }")).toEqual(true)
		expect(balancedParens(" var hubble = function() { telescopes.awesome();")).toEqual(false)
	})
})
