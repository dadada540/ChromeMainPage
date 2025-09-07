export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["robots.txt"]),
	mimeTypes: {".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.DLTopGuQ.js",app:"_app/immutable/entry/app.DcLUZSrJ.js",imports:["_app/immutable/entry/start.DLTopGuQ.js","_app/immutable/chunks/B0suLMhP.js","_app/immutable/chunks/CPRd7N1J.js","_app/immutable/chunks/yTfBmMmE.js","_app/immutable/entry/app.DcLUZSrJ.js","_app/immutable/chunks/yTfBmMmE.js","_app/immutable/chunks/CPRd7N1J.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/DgO9b6GH.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
