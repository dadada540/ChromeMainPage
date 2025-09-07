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
		client: {start:"_app/immutable/entry/start.C9sH9wnX.js",app:"_app/immutable/entry/app.C-DM323b.js",imports:["_app/immutable/entry/start.C9sH9wnX.js","_app/immutable/chunks/7JeWvCAC.js","_app/immutable/chunks/CPRd7N1J.js","_app/immutable/chunks/yTfBmMmE.js","_app/immutable/entry/app.C-DM323b.js","_app/immutable/chunks/yTfBmMmE.js","_app/immutable/chunks/CPRd7N1J.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/DgO9b6GH.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
