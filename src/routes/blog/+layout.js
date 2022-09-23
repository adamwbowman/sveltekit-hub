
// blog/+layout.js

export function load() {
	return {
		posts: [
			{ year: '2022', month: '12', day: '01', title: 'title', text: 'test text here, test text here' },
			{ year: '2022', month: '12', day: '02', title: 'title', text: 'test text here, test text here' },
			{ year: '2022', month: '12', day: '03', title: 'title', text: 'test text here, test text here' },
			{ year: '2022', month: '12', day: '04', title: 'title', text: 'test text here, test text here' },
		],
		sections: [
			{ route: '#', title: 'Link here' },
			{ route: '#', title: 'Link here' },
			{ route: '#', title: 'Link here' },
		]
	};
}