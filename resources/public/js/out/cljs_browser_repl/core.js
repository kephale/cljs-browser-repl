// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs_browser_repl.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs_browser_repl.actions.repl');
goog.require('cljs_browser_repl.ui.cljs_browser_repl');
goog.require('cljs_browser_repl.router');
cljs.core.enable_console_print_BANG_.call(null);
cljs_browser_repl.core.render_BANG_ = (function cljs_browser_repl$core$render_BANG_(){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_browser_repl.ui.cljs_browser_repl.cljs_browser_repl], null),document.getElementById("app"));
});
if(typeof cljs_browser_repl.core.initialize_repl_ns !== 'undefined'){
} else {
cljs_browser_repl.core.initialize_repl_ns = (function (){
cljs_browser_repl.actions.repl.repl_entry_BANG_.call(null,"(ns cljs.user)",false);

cljs_browser_repl.core.render_BANG_.call(null);

return cljs_browser_repl.router.init.call(null);
})()
;
}
cljs_browser_repl.core.on_js_reload = (function cljs_browser_repl$core$on_js_reload(){
cljs_browser_repl.core.render_BANG_.call(null);

return cljs_browser_repl.router.replace_BANG_.call(null,cljs_browser_repl.router.get_token.call(null));
});

//# sourceMappingURL=core.js.map?rel=1451063352458