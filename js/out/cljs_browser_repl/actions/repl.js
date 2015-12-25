// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs_browser_repl.actions.repl');
goog.require('cljs.core');
goog.require('cljs_browser_repl.state');
goog.require('cljs_browser_repl.compiler');
goog.require('replumb.core');
goog.require('replumb.repl');
goog.require('clojure.string');
cljs_browser_repl.actions.repl.new_input_BANG_ = (function cljs_browser_repl$actions$repl$new_input_BANG_(s){
return cljs.core.reset_BANG_.call(null,cljs_browser_repl.state.input,s);
});
cljs_browser_repl.actions.repl.repl_entry_BANG_ = (function cljs_browser_repl$actions$repl$repl_entry_BANG_(var_args){
var args14543 = [];
var len__12955__auto___14549 = arguments.length;
var i__12956__auto___14550 = (0);
while(true){
if((i__12956__auto___14550 < len__12955__auto___14549)){
args14543.push((arguments[i__12956__auto___14550]));

var G__14551 = (i__12956__auto___14550 + (1));
i__12956__auto___14550 = G__14551;
continue;
} else {
}
break;
}

var G__14545 = args14543.length;
switch (G__14545) {
case 1:
return cljs_browser_repl.actions.repl.repl_entry_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_browser_repl.actions.repl.repl_entry_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14543.length)].join('')));

}
});

cljs_browser_repl.actions.repl.repl_entry_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (code){
return cljs_browser_repl.actions.repl.repl_entry_BANG_.call(null,code,true);
});

cljs_browser_repl.actions.repl.repl_entry_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (code,history_QMARK_){
if(clojure.string.blank_QMARK_.call(null,code)){
return null;
} else {
cljs_browser_repl.actions.repl.new_input_BANG_.call(null,"");

if(cljs.core.truth_(history_QMARK_)){
cljs.core.swap_BANG_.call(null,cljs_browser_repl.state.history,cljs_browser_repl.state.add_entry,cljs_browser_repl.state.to_repl_input.call(null,code));
} else {
}

return cljs_browser_repl.compiler.cljs_read_eval_print_BANG_.call(null,code,(function (p__14546){
var map__14547 = p__14546;
var map__14547__$1 = ((((!((map__14547 == null)))?((((map__14547.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14547.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14547):map__14547);
var ret = map__14547__$1;
var value = cljs.core.get.call(null,map__14547__$1,new cljs.core.Keyword(null,"value","value",305978217));
var error = cljs.core.get.call(null,map__14547__$1,new cljs.core.Keyword(null,"error","error",-978969032));
if(cljs.core.truth_(history_QMARK_)){
return cljs.core.swap_BANG_.call(null,cljs_browser_repl.state.history,cljs_browser_repl.state.add_entry,(cljs.core.truth_(error)?cljs_browser_repl.state.to_repl_error.call(null,replumb.core.error__GT_str.call(null,error)):(function (){
cljs.core.reset_BANG_.call(null,cljs_browser_repl.state.current_ns,replumb.repl.current_ns.call(null));

return cljs_browser_repl.state.to_repl_result.call(null,value);
})()
));
} else {
return null;
}
}));
}
});

cljs_browser_repl.actions.repl.repl_entry_BANG_.cljs$lang$maxFixedArity = 2;
cljs_browser_repl.actions.repl.insert_repl_intro_BANG_ = (function cljs_browser_repl$actions$repl$insert_repl_intro_BANG_(){
return cljs.core.reset_BANG_.call(null,cljs_browser_repl.state.history,cljs_browser_repl.state.initial_history_messages);
});

//# sourceMappingURL=repl.js.map?rel=1451063352189