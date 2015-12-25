// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
goog.require('cljs_browser_repl.core');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__14322__delegate = function (x){
if(cljs.core.truth_(cljs_browser_repl.core.on_js_reload)){
return cljs.core.apply.call(null,cljs_browser_repl.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'cljs-browser-repl.core/on-js-reload' is missing");
}
};
var G__14322 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__14323__i = 0, G__14323__a = new Array(arguments.length -  0);
while (G__14323__i < G__14323__a.length) {G__14323__a[G__14323__i] = arguments[G__14323__i + 0]; ++G__14323__i;}
  x = new cljs.core.IndexedSeq(G__14323__a,0);
} 
return G__14322__delegate.call(this,x);};
G__14322.cljs$lang$maxFixedArity = 0;
G__14322.cljs$lang$applyTo = (function (arglist__14324){
var x = cljs.core.seq(arglist__14324);
return G__14322__delegate(x);
});
G__14322.cljs$core$IFn$_invoke$arity$variadic = G__14322__delegate;
return G__14322;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map?rel=1451063378341