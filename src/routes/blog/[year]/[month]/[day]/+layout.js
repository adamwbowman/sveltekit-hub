
// blog/[year]/[month]/[day]/+layout.js

export function load() {
	return {
		sections: [
			{ slug: 'abc', title: 'ABC' },
			{ slug: 'def', title: 'DEF' },
			{ slug: 'ghi', title: 'GHI' }
		]
	};
}