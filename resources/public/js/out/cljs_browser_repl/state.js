// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs_browser_repl.state');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('replumb.repl');
cljs_browser_repl.state.now = (function cljs_browser_repl$state$now(){
return Date.now();
});
cljs_browser_repl.state.add_entry = (function cljs_browser_repl$state$add_entry(h,e){
return cljs.core.conj.call(null,h,e);
});
cljs_browser_repl.state.add_entries = (function cljs_browser_repl$state$add_entries(h,es){
return cljs.core.apply.call(null,cljs.core.conj,h,es);
});
cljs_browser_repl.state.to_repl = (function cljs_browser_repl$state$to_repl(o){
return cljs.core.assoc.call(null,o,new cljs.core.Keyword(null,"date","date",-1463434462),cljs_browser_repl.state.now.call(null));
});
cljs_browser_repl.state.to_repl_input = (function cljs_browser_repl$state$to_repl_input(source){
return cljs_browser_repl.state.to_repl.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"value","value",305978217),source], null));
});
cljs_browser_repl.state.to_repl_error = (function cljs_browser_repl$state$to_repl_error(err){
return cljs_browser_repl.state.to_repl.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"value","value",305978217),err], null));
});
cljs_browser_repl.state.to_repl_result = (function cljs_browser_repl$state$to_repl_result(resp){
return cljs_browser_repl.state.to_repl.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.Keyword(null,"value","value",305978217),resp], null));
});
cljs_browser_repl.state.to_repl_entry = (function cljs_browser_repl$state$to_repl_entry(t,source){
return cljs_browser_repl.state.to_repl.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),t,new cljs.core.Keyword(null,"value","value",305978217),source], null));
});
cljs_browser_repl.state.initial_history_messages = cljs.core.mapv.call(null,(function (p1__22399_SHARP_){
return cljs.core.apply.call(null,cljs_browser_repl.state.to_repl_entry,p1__22399_SHARP_);
}),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"markdown","markdown",1227225089),"\n  ### Hi!\n\n  # Welcome to the clojurescript web repl.\n\n  Enter any forms in the input at the bottom. Hit enter to evaluate.\n\n  Here are some examples of things to try:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),"(doc inc)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),"(inc 5)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),"(defn square [x] (* x x))"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),"(square 6)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"markdown","markdown",1227225089),"\nIf you want to learn Clojurescript I would recommend checking out the\n[Diving into ClojureScript](./#/notebook/diving-into-clojurescript/file/index)\nnotebook and follow along in this same repl!\n\nHave fun!\n\n![](http://media2.giphy.com/media/HVr4gFHYIqeti/giphy.gif)"], null)], null));
if(typeof cljs_browser_repl.state.history !== 'undefined'){
} else {
cljs_browser_repl.state.history = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if(typeof cljs_browser_repl.state.current_ns !== 'undefined'){
} else {
cljs_browser_repl.state.current_ns = reagent.core.atom.call(null,replumb.repl.current_ns.call(null));
}
if(typeof cljs_browser_repl.state.input !== 'undefined'){
} else {
cljs_browser_repl.state.input = reagent.core.atom.call(null,"");
}
cljs_browser_repl.state.empty_notebook = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"gist","gist",96143031),null,new cljs.core.Keyword(null,"file-name","file-name",-1654217259),null,new cljs.core.Keyword(null,"file","file",-1269645878),null,new cljs.core.Keyword(null,"cmds","cmds",-1841503952),null,new cljs.core.Keyword(null,"position","position",-2011731912),(0)], null);
if(typeof cljs_browser_repl.state.current_notebook !== 'undefined'){
} else {
cljs_browser_repl.state.current_notebook = reagent.core.atom.call(null,cljs_browser_repl.state.empty_notebook);
}
cljs_browser_repl.state.current_command = (function cljs_browser_repl$state$current_command(notebook){
var map__22402 = notebook;
var map__22402__$1 = ((((!((map__22402 == null)))?((((map__22402.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22402.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22402):map__22402);
var cmds = cljs.core.get.call(null,map__22402__$1,new cljs.core.Keyword(null,"cmds","cmds",-1841503952));
var position = cljs.core.get.call(null,map__22402__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
return cljs.core.nth.call(null,cmds,position);
});

//# sourceMappingURL=state.js.map?rel=1451058372841