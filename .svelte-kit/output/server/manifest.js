export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["images/for kids/2024-06-21 16-19-32.JPG","images/for kids/2024-06-21 16-20-24.JPG","images/for kids/2024-06-21 16-20-28.JPG","images/for kids/photo_2025-07-26_15-23-05.jpg","images/house/33bd0883de8e84637a5259827d798d53cedc01f1.jpeg","images/house/a4f1748b8d0ba362d3ddb23f529e98b6.jpg","images/house/house(1).jpg","images/house/house(2).jpg","images/house/house(3).jpg","images/house/house(4).jpg","images/indoor/2024-05-11 12-36-40.JPG","images/indoor/2024-05-12 23-19-10.JPG","images/indoor/2024-06-01 14-39-21.JPG","images/indoor/2024-06-24 06-27-19_1719213072226.JPG","images/indoor/2024-06-25 16-34-51.JPG","images/indoor/2024-07-06 14-43-32.JPG","images/indoor/2024-07-06 14-46-41.JPG","images/indoor/2024-08-10 08-22-03.JPG","images/indoor/2024-08-26 13-39-44.JPG","images/indoor/2024-09-09 15-35-50.JPG","images/indoor/cabinet.jpg","images/indoor/photo_2023-12-27_14-30-24.jpg","images/indoor/photo_2024-01-26_17-56-21 (2).jpg","images/indoor/photo_2024-01-26_17-56-21.jpg","images/indoor/photo_2025-04-11_19-55-30.jpg","images/indoor/photo_2025-07-21_21-00-39.jpg","images/indoor/photo_2025-07-21_21-01-01 (2).jpg","images/indoor/photo_2025-07-21_21-01-01.jpg","images/indoor/photo_2025-07-21_21-01-02.jpg","images/indoor/photo_2025-07-21_21-01-23.jpg","images/indoor/photo_2025-07-21_21-02-36.jpg","images/indoor/photo_2025-07-21_21-15-01.jpg","images/indoor/photo_2025-07-21_21-38-26.jpg","images/indoor/photo_2025-07-21_21-38-31.jpg","images/indoor/photo_2025-07-21_21-38-36.jpg","images/indoor/photo_2025-07-21_21-38-52.jpg","images/indoor/photo_2025-07-21_21-38-54.jpg","images/indoor/photo_2025-07-21_21-39-11.jpg","images/indoor/photo_2025-07-21_21-39-12.jpg","images/indoor/photo_2025-07-21_21-39-16.jpg","images/indoor/photo_2025-07-21_21-39-53 (2).jpg","images/indoor/photo_2025-07-21_21-39-53.jpg","images/indoor/photo_2025-07-21_21-39-56.jpg","images/indoor/photo_2025-07-21_21-41-03.jpg","images/indoor/photo_2025-07-21_21-41-14 (2).jpg","images/indoor/photo_2025-07-21_21-41-14.jpg","images/indoor/photo_2025-07-21_21-41-16.jpg","images/indoor/photo_2025-07-21_21-41-17.jpg","images/indoor/photo_2025-07-21_21-41-58.jpg","images/indoor/photo_2025-07-21_21-41-59.jpg","images/indoor/photo_2025-07-21_21-42-03.jpg","images/indoor/photo_2025-07-21_21-43-27.jpg","images/indoor/photo_2025-07-21_21-43-36.jpg","images/indoor/photo_2025-07-21_21-43-41.jpg","images/indoor/photo_2025-07-21_21-43-42.jpg","images/indoor/photo_2025-07-21_21-43-44.jpg","images/indoor/photo_2025-07-21_21-43-49.jpg","images/indoor/photo_2025-07-21_21-43-56.jpg","images/indoor/photo_2025-07-21_21-44-09.jpg","images/indoor/photo_2025-07-21_21-44-13.jpg","images/indoor/photo_2025-07-21_21-44-21.jpg","images/indoor/photo_2025-07-21_21-44-24.jpg","images/indoor/photo_2025-07-25_17-01-14.jpg","images/indoor/photo_2025-07-25_17-01-20.jpg","images/indoor/photo_2025-07-25_17-01-25.jpg","images/indoor/shelf.jpg","images/outdoor furniture/2024-04-11 11-18-49.JPG","images/outdoor furniture/2024-04-11 11-18-53.JPG","images/outdoor furniture/2024-04-11 11-19-20.JPG","images/outdoor furniture/2024-05-13 12-08-37.JPG","images/outdoor furniture/2024-06-20 16-13-00.JPG","images/outdoor furniture/2024-06-21 16-36-31.JPG","images/outdoor furniture/2024-06-21 16-37-11 (1).JPG","images/outdoor furniture/2024-06-21 16-37-11.JPG","images/outdoor furniture/2024-06-24 06-27-19.JPG","images/outdoor furniture/2024-06-24 06-27-19_1719213059979.JPG","images/outdoor furniture/2024-06-24 06-27-19_1719213080407.JPG","images/outdoor furniture/2024-06-24 06-48-06.JPG","images/outdoor furniture/2024-07-20 13-39-55.JPG","images/outdoor furniture/2024-07-20 13-40-13.JPG","images/outdoor furniture/chair.jpg","images/outdoor furniture/photo_2025-07-01_07-07-40 (2).jpg","images/outdoor furniture/photo_2025-07-01_07-07-40 (3).jpg","images/outdoor furniture/photo_2025-07-01_07-07-40.jpg","images/outdoor furniture/photo_2025-07-21_21-39-49.jpg","images/outdoor furniture/photo_2025-07-21_21-39-50.jpg","images/outdoor furniture/photo_2025-07-26_15-39-24.jpg","images/outdoor furniture/photo_2025-07-26_15-39-29.jpg","images/outdoor furniture/photo_2025-07-26_15-39-32.jpg","images/restoration/after/2024-05-18 13-49-31.JPG","images/restoration/after/2024-05-18 13-50-34.JPG","images/restoration/after/2024-05-18 18-04-41_1716223436706.JPG","images/restoration/after/2024-06-24 06-27-19_1719213080407 (1).JPG","images/restoration/after/2024-06-24 06-48-06_1719213034992.JPG","images/restoration/after/2024-06-24 06-48-06_1719213042873.JPG","images/restoration/after/photo_2023-11-22_15-34-39.jpg","images/restoration/after/photo_2024-05-28_15-38-11.jpg","images/restoration/after/photo_2025-07-01_07-07-40 (2).jpg","images/restoration/after/photo_2025-07-01_07-07-40 (3).jpg","images/restoration/after/photo_2025-07-01_07-07-40.jpg","images/restoration/after/photo_2025-07-21_21-14-46.jpg","images/restoration/after/photo_2025-07-26_15-42-51.jpg","images/restoration/after/photo_2025-07-26_15-42-53.jpg","images/restoration/after/photo_2025-07-26_15-42-57.jpg","images/restoration/after/photo_2025-07-26_15-43-04.jpg","images/restoration/after/photo_2025-07-26_15-43-07.jpg","images/restoration/before/2024-04-10 18-56-28.JPG","images/restoration/before/2024-05-14 16-44-07.JPG","images/restoration/before/2024-05-14 16-44-40.JPG","images/restoration/before/2024-05-14 16-45-04.JPG","images/restoration/before/2024-05-14 16-47-06.JPG","images/restoration/before/2024-06-12 18-35-46.JPG","images/restoration/before/img.png","images/restoration/before/photo_2025-07-01_07-07-40.jpg","images/restoration/before/photo_2025-07-21_21-14-47.jpg","images/restoration/before/photo_2025-07-26_15-41-39.jpg","images/restoration/before/photo_2025-07-26_15-41-45.jpg","images/small forms/963A9631.jpg","images/small forms/963A9633.jpg","images/small forms/963A9642.jpg","images/small forms/963A9643.jpg","images/small forms/963A9644.jpg","images/small forms/963A9646.jpg","images/small forms/photo_2025-07-21_21-42-37.jpg","images/small forms/photo_2025-07-25_17-01-06.jpg","images/small forms/photo_2025-07-25_17-01-07.jpg","images/small forms/photo_2025-07-25_17-01-17.jpg","images/small forms/Беседка1.jpg","images/small forms/беседка.jpg","logo/2023-07-12 10.18.43.jpg","logo/black logo.svg","logo/Лого СТС 152.png","logo/Лого СТС 270.png","logo/Лого СТС без рамки 2.jpg","logo/Лого СТС без рамки 3.jpg","logo/Лого СТС без рамки 4.jpg","logo/Лого СТС без рамки.jpg","logo/Лого СТС без слов.jpg","logo/Лого-СТС-без-слов.svg"]),
	mimeTypes: {".JPG":"image/jpeg",".jpg":"image/jpeg",".jpeg":"image/jpeg",".png":"image/png",".svg":"image/svg+xml"},
	_: {
		client: {start:"_app/immutable/entry/start.DajJrW1p.js",app:"_app/immutable/entry/app.cZFH4K8q.js",imports:["_app/immutable/entry/start.DajJrW1p.js","_app/immutable/chunks/C06w6Dk_.js","_app/immutable/chunks/C3DYXwYK.js","_app/immutable/entry/app.cZFH4K8q.js","_app/immutable/chunks/C3DYXwYK.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/tXKiff9Q.js","_app/immutable/chunks/DV9wc9iY.js","_app/immutable/chunks/7TrWnwH0.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js')),
			__memo(() => import('./nodes/12.js')),
			__memo(() => import('./nodes/13.js')),
			__memo(() => import('./nodes/14.js')),
			__memo(() => import('./nodes/15.js')),
			__memo(() => import('./nodes/16.js')),
			__memo(() => import('./nodes/17.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/[lang]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"lang","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/[lang]/about",
				pattern: /^\/([^/]+?)\/about\/?$/,
				params: [{"name":"lang","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/[lang]/blog",
				pattern: /^\/([^/]+?)\/blog\/?$/,
				params: [{"name":"lang","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/[lang]/contact",
				pattern: /^\/([^/]+?)\/contact\/?$/,
				params: [{"name":"lang","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/[lang]/directions",
				pattern: /^\/([^/]+?)\/directions\/?$/,
				params: [{"name":"lang","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/[lang]/directions/architectural-forms",
				pattern: /^\/([^/]+?)\/directions\/architectural-forms\/?$/,
				params: [{"name":"lang","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/[lang]/directions/for-kids",
				pattern: /^\/([^/]+?)\/directions\/for-kids\/?$/,
				params: [{"name":"lang","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/[lang]/directions/interior-furniture",
				pattern: /^\/([^/]+?)\/directions\/interior-furniture\/?$/,
				params: [{"name":"lang","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/[lang]/directions/private-houses",
				pattern: /^\/([^/]+?)\/directions\/private-houses\/?$/,
				params: [{"name":"lang","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/[lang]/directions/restoration",
				pattern: /^\/([^/]+?)\/directions\/restoration\/?$/,
				params: [{"name":"lang","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/[lang]/directions/street-furniture",
				pattern: /^\/([^/]+?)\/directions\/street-furniture\/?$/,
				params: [{"name":"lang","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/[lang]/gallery",
				pattern: /^\/([^/]+?)\/gallery\/?$/,
				params: [{"name":"lang","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/[lang]/services",
				pattern: /^\/([^/]+?)\/services\/?$/,
				params: [{"name":"lang","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/[lang]/video",
				pattern: /^\/([^/]+?)\/video\/?$/,
				params: [{"name":"lang","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 17 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
