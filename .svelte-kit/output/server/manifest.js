export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "ChromeMainPage/_app",
	assets: new Set(["robots.txt"]),
	mimeTypes: {".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.aq685MlJ.js",app:"_app/immutable/entry/app.ZoYxFO58.js",imports:["_app/immutable/entry/start.aq685MlJ.js","_app/immutable/chunks/sKTx2IlT.js","_app/immutable/chunks/CPRd7N1J.js","_app/immutable/chunks/yTfBmMmE.js","_app/immutable/entry/app.ZoYxFO58.js","_app/immutable/chunks/yTfBmMmE.js","_app/immutable/chunks/CPRd7N1J.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/DgO9b6GH.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/ChromeMainPage/"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
