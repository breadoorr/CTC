export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17')
];

export const server_loads = [];

export const dictionary = {
		"/": [3],
		"/[lang]": [4,[2]],
		"/[lang]/about": [5,[2]],
		"/[lang]/blog": [6,[2]],
		"/[lang]/contact": [7,[2]],
		"/[lang]/directions": [8,[2]],
		"/[lang]/directions/architectural-forms": [9,[2]],
		"/[lang]/directions/for-kids": [10,[2]],
		"/[lang]/directions/interior-furniture": [11,[2]],
		"/[lang]/directions/private-houses": [12,[2]],
		"/[lang]/directions/restoration": [13,[2]],
		"/[lang]/directions/street-furniture": [14,[2]],
		"/[lang]/gallery": [15,[2]],
		"/[lang]/services": [16,[2]],
		"/[lang]/video": [17,[2]]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
	
	reroute: (() => {}),
	transport: {}
};

export const decoders = Object.fromEntries(Object.entries(hooks.transport).map(([k, v]) => [k, v.decode]));

export const hash = false;

export const decode = (type, value) => decoders[type](value);

export { default as root } from '../root.js';