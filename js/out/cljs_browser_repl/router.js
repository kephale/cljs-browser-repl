// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs_browser_repl.router');
goog.require('cljs.core');
goog.require('secretary.core');
goog.require('cljs_browser_repl.actions.notebook');
goog.require('goog.history.EventType');
goog.require('goog.History');
goog.require('goog.events');
goog.require('cljs_browser_repl.actions.repl');
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");
if(typeof cljs_browser_repl.router.history !== 'undefined'){
} else {
cljs_browser_repl.router.history = (new goog.History());
}
cljs_browser_repl.router.scroll_top = (function cljs_browser_repl$router$scroll_top(){
return window.scrollY;
});
cljs_browser_repl.router.set_scroll_top_BANG_ = (function cljs_browser_repl$router$set_scroll_top_BANG_(){
var state = (function (){var or__11897__auto__ = history.state;
if(cljs.core.truth_(or__11897__auto__)){
return or__11897__auto__;
} else {
return {};
}
})();
(state["scroll-top"] = cljs_browser_repl.router.scroll_top.call(null));

return history.replaceState(state);
});
cljs_browser_repl.router.get_scroll_top = (function cljs_browser_repl$router$get_scroll_top(){
var temp__4425__auto__ = history.state;
if(cljs.core.truth_(temp__4425__auto__)){
var state = temp__4425__auto__;
return (state["scroll-top"]);
} else {
return null;
}
});
cljs_browser_repl.router.handle_url_change_BANG_ = (function cljs_browser_repl$router$handle_url_change_BANG_(e){
return secretary.core.dispatch_BANG_.call(null,e.token);
});
cljs_browser_repl.router.init = (function cljs_browser_repl$router$init(){
goog.events.listen(cljs_browser_repl.router.history,goog.history.EventType.NAVIGATE,(function (p1__14635_SHARP_){
return cljs_browser_repl.router.handle_url_change_BANG_.call(null,p1__14635_SHARP_);
}));

return cljs_browser_repl.router.history.setEnabled(true);
});
cljs_browser_repl.router.navigate_BANG_ = (function cljs_browser_repl$router$navigate_BANG_(url){
return cljs_browser_repl.router.history.setToken(url);
});
cljs_browser_repl.router.replace_BANG_ = (function cljs_browser_repl$router$replace_BANG_(url){
return cljs_browser_repl.router.history.replaceToken(url);
});
cljs_browser_repl.router.get_token = (function cljs_browser_repl$router$get_token(){
return cljs_browser_repl.router.history.getToken();
});
var action__14312__auto___14639 = (function (params__14313__auto__){
if(cljs.core.map_QMARK_.call(null,params__14313__auto__)){
var map__14636 = params__14313__auto__;
var map__14636__$1 = ((((!((map__14636 == null)))?((((map__14636.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14636.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14636):map__14636);
return cljs_browser_repl.actions.repl.insert_repl_intro_BANG_.call(null);
} else {
if(cljs.core.vector_QMARK_.call(null,params__14313__auto__)){
var vec__14638 = params__14313__auto__;
return cljs_browser_repl.actions.repl.insert_repl_intro_BANG_.call(null);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__14312__auto___14639);

var action__14312__auto___14643 = (function (params__14313__auto__){
if(cljs.core.map_QMARK_.call(null,params__14313__auto__)){
var map__14640 = params__14313__auto__;
var map__14640__$1 = ((((!((map__14640 == null)))?((((map__14640.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14640.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14640):map__14640);
var id = cljs.core.get.call(null,map__14640__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs_browser_repl.router.replace_BANG_.call(null,[cljs.core.str(cljs_browser_repl.router.get_token.call(null)),cljs.core.str("/file/index")].join(''));
} else {
if(cljs.core.vector_QMARK_.call(null,params__14313__auto__)){
var vec__14642 = params__14313__auto__;
var id = cljs.core.nth.call(null,vec__14642,(0),null);
return cljs_browser_repl.router.replace_BANG_.call(null,[cljs.core.str(cljs_browser_repl.router.get_token.call(null)),cljs.core.str("/file/index")].join(''));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/gist/:id",action__14312__auto___14643);

var action__14312__auto___14647 = (function (params__14313__auto__){
if(cljs.core.map_QMARK_.call(null,params__14313__auto__)){
var map__14644 = params__14313__auto__;
var map__14644__$1 = ((((!((map__14644 == null)))?((((map__14644.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14644.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14644):map__14644);
var id = cljs.core.get.call(null,map__14644__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var file = cljs.core.get.call(null,map__14644__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return cljs_browser_repl.actions.notebook.from_gist_BANG_.call(null,id,file);
} else {
if(cljs.core.vector_QMARK_.call(null,params__14313__auto__)){
var vec__14646 = params__14313__auto__;
var id = cljs.core.nth.call(null,vec__14646,(0),null);
var file = cljs.core.nth.call(null,vec__14646,(1),null);
return cljs_browser_repl.actions.notebook.from_gist_BANG_.call(null,id,file);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/gist/:id/file/:file",action__14312__auto___14647);

var action__14312__auto___14651 = (function (params__14313__auto__){
if(cljs.core.map_QMARK_.call(null,params__14313__auto__)){
var map__14648 = params__14313__auto__;
var map__14648__$1 = ((((!((map__14648 == null)))?((((map__14648.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14648.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14648):map__14648);
var id = cljs.core.get.call(null,map__14648__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var file = cljs.core.get.call(null,map__14648__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return cljs_browser_repl.actions.notebook.from_filesystem_BANG_.call(null,id,file);
} else {
if(cljs.core.vector_QMARK_.call(null,params__14313__auto__)){
var vec__14650 = params__14313__auto__;
var id = cljs.core.nth.call(null,vec__14650,(0),null);
var file = cljs.core.nth.call(null,vec__14650,(1),null);
return cljs_browser_repl.actions.notebook.from_filesystem_BANG_.call(null,id,file);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/notebook/:id/file/:file",action__14312__auto___14651);


//# sourceMappingURL=router.js.map?rel=1451063352407