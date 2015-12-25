// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs_browser_repl.compiler');
goog.require('cljs.core');
goog.require('replumb.core');
goog.require('replumb.repl');
goog.require('cljs_mathbox.mathbox');
goog.require('goog.net.XhrIo');
/**
 * Very simple implementation of XMLHttpRequests that given a file path
 *   calls src-cb with the string fetched of nil in case of error.
 *   See doc at https://developers.google.com/closure/library/docs/xhrio
 */
cljs_browser_repl.compiler.fetch_file_BANG_ = (function cljs_browser_repl$compiler$fetch_file_BANG_(file_url,src_cb){
try{return goog.net.XhrIo.send(file_url,(function (e){
if(cljs.core.truth_(e.target.isSuccess())){
return src_cb.call(null,e.target.getResponseText());
} else {
return src_cb.call(null,null);
}
}));
}catch (e14536){var e = e14536;
return src_cb.call(null,null);
}});
cljs_browser_repl.compiler.cljs_read_eval_print_BANG_ = (function cljs_browser_repl$compiler$cljs_read_eval_print_BANG_(line,cb){
try{return replumb.core.read_eval_call.call(null,replumb.core.browser_options.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["js/out"], null),cljs_browser_repl.compiler.fetch_file_BANG_),cb,line);
}catch (e14538){if((e14538 instanceof Error)){
var err = e14538;
cljs.core.println.call(null,"Caught js/Error during read-eval-print: ",err);

return cb.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),err,new cljs.core.Keyword(null,"ns","ns",441598760),replumb.repl.current_ns.call(null)], null));
} else {
throw e14538;

}
}});
cljs_browser_repl.compiler.is_readable_QMARK_ = (function cljs_browser_repl$compiler$is_readable_QMARK_(line){
try{replumb.repl.repl_read_string.call(null,line);

return true;
}catch (e14540){var _ = e14540;
return false;
}});

//# sourceMappingURL=compiler.js.map?rel=1451063352143