// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs_browser_repl.ui.cljs_browser_repl');
goog.require('cljs.core');
goog.require('cljs_browser_repl.ui.top_bar');
goog.require('cljs_browser_repl.compiler');
goog.require('cljs_browser_repl.actions.notebook');
goog.require('cljs_browser_repl.state');
goog.require('cljs_browser_repl.ui.history');
goog.require('cljs_browser_repl.router');
goog.require('goog.events');
goog.require('cljs_browser_repl.ui.repl_input');
goog.require('clojure.string');
goog.require('cljs_browser_repl.actions.repl');
cljs_browser_repl.ui.cljs_browser_repl.cljs_browser_repl_raw = (function cljs_browser_repl$ui$cljs_browser_repl$cljs_browser_repl_raw(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cljs-browser-repl","div.cljs-browser-repl",-252699194),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_browser_repl.ui.top_bar.top_bar], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_browser_repl.ui.history.history,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-event","on-event",1340574774),(function (type,payload){
var G__14655 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__14655) {
case "input":
return cljs_browser_repl.actions.repl.new_input_BANG_.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(payload));

break;
case "continue":
return cljs_browser_repl.actions.notebook.play_notebook_BANG_.call(null);

break;
case "visit-file":
return cljs_browser_repl.router.navigate_BANG_.call(null,clojure.string.replace.call(null,cljs_browser_repl.router.get_token.call(null),/\/file\/(.*)/,[cljs.core.str("/file/"),cljs.core.str(payload)].join('')));

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
})], null),cljs.core.deref.call(null,cljs_browser_repl.state.history)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_browser_repl.ui.repl_input.repl_input,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"pre-label","pre-label",-2100396496),[cljs.core.str(cljs.core.deref.call(null,cljs_browser_repl.state.current_ns))].join(''),new cljs.core.Keyword(null,"valid-input?","valid-input?",-1714695932),cljs_browser_repl.compiler.is_readable_QMARK_,new cljs.core.Keyword(null,"on-valid-input","on-valid-input",-1482196942),cljs_browser_repl.actions.repl.repl_entry_BANG_,new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs_browser_repl.actions.repl.new_input_BANG_,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,cljs_browser_repl.state.input)], null)], null)], null);
});
cljs_browser_repl.ui.cljs_browser_repl.cljs_browser_repl = cljs.core.with_meta.call(null,cljs_browser_repl.ui.cljs_browser_repl.cljs_browser_repl_raw,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
this$.shortcutListener = (function (e){
if(cljs.core._EQ_.call(null,e.target.nodeName,"TEXTAREA")){
return null;
} else {
var G__14657 = e.keyCode;
switch (G__14657) {
case (78):
return cljs_browser_repl.actions.notebook.play_notebook_BANG_.call(null);

break;
case (73):
return document.querySelector(".repl-input-input").focus();

break;
default:
return null;

}
}
});

return goog.events.listen(window,"keyup",this$.shortcutListener);
}),new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),(function (this$){
return goog.events.unlisten(window,"keyup",this$.shortcutListener);
})], null));

//# sourceMappingURL=cljs_browser_repl.js.map?rel=1451063352443