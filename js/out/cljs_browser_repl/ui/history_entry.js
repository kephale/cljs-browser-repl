// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs_browser_repl.ui.history_entry');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs_browser_repl.markdown');
cljs_browser_repl.ui.history_entry.history_entry;
cljs_browser_repl.ui.history_entry.response_with_meta__GT_entry = (function cljs_browser_repl$ui$history_entry$response_with_meta__GT_entry(p__24008){
var map__24011 = p__24008;
var map__24011__$1 = ((((!((map__24011 == null)))?((((map__24011.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24011.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24011):map__24011);
var entry = map__24011__$1;
var value = cljs.core.get.call(null,map__24011__$1,new cljs.core.Keyword(null,"value","value",305978217));
var sub_type = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,value));
var is_value_map_QMARK_ = cljs.core._EQ_.call(null,cljs.core.type.call(null,value),cljs.core.PersistentArrayMap);
var value_of_value_QMARK_ = !((new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(value) == null));
var new_value = (((is_value_map_QMARK_) && (value_of_value_QMARK_))?new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(value):value);
return cljs.core.with_meta.call(null,cljs.core.assoc.call(null,entry,new cljs.core.Keyword(null,"type","type",1174270348),sub_type,new cljs.core.Keyword(null,"value","value",305978217),new_value),null);
});
cljs_browser_repl.ui.history_entry.emit_input_BANG_ = (function cljs_browser_repl$ui$history_entry$emit_input_BANG_(emit_fn,entry){
var sel = window.getSelection().toString();
var value = ((clojure.string.blank_QMARK_.call(null,sel))?new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(entry):sel);
var payload = cljs_browser_repl.ui.history_entry.response_with_meta__GT_entry.call(null,cljs.core.assoc.call(null,entry,new cljs.core.Keyword(null,"value","value",305978217),value));
return emit_fn.call(null,new cljs.core.Keyword(null,"input","input",556931961),payload);
});
cljs_browser_repl.ui.history_entry.history_input = (function cljs_browser_repl$ui$history_entry$history_input(p__24013,p__24014){
var map__24019 = p__24013;
var map__24019__$1 = ((((!((map__24019 == null)))?((((map__24019.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24019.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24019):map__24019);
var emit = cljs.core.get.call(null,map__24019__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));
var map__24020 = p__24014;
var map__24020__$1 = ((((!((map__24020 == null)))?((((map__24020.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24020.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24020):map__24020);
var entry = map__24020__$1;
var value = cljs.core.get.call(null,map__24020__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.history-input","div.history-input",-1946133575),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__24019,map__24019__$1,emit,map__24020,map__24020__$1,entry,value){
return (function (){
return cljs_browser_repl.ui.history_entry.emit_input_BANG_.call(null,emit,entry);
});})(map__24019,map__24019__$1,emit,map__24020,map__24020__$1,entry,value))
], null),value], null);
});
cljs_browser_repl.ui.history_entry.history_response = (function cljs_browser_repl$ui$history_entry$history_response(p__24023,p__24024){
var map__24029 = p__24023;
var map__24029__$1 = ((((!((map__24029 == null)))?((((map__24029.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24029.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24029):map__24029);
var emit = cljs.core.get.call(null,map__24029__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));
var map__24030 = p__24024;
var map__24030__$1 = ((((!((map__24030 == null)))?((((map__24030.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24030.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24030):map__24030);
var entry = map__24030__$1;
var value = cljs.core.get.call(null,map__24030__$1,new cljs.core.Keyword(null,"value","value",305978217));
var sub_type = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,value));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.history-response","div.history-response",2036810698),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(sub_type)?"":"history-response-cljs"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (sub_type,map__24029,map__24029__$1,emit,map__24030,map__24030__$1,entry,value){
return (function (){
return cljs_browser_repl.ui.history_entry.emit_input_BANG_.call(null,emit,entry);
});})(sub_type,map__24029,map__24029__$1,emit,map__24030,map__24030__$1,entry,value))
], null),(cljs.core.truth_(sub_type)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_browser_repl.ui.history_entry.history_entry,null,cljs_browser_repl.ui.history_entry.response_with_meta__GT_entry.call(null,entry)], null):cljs.core.println_str.call(null,value))], null);
});
cljs_browser_repl.ui.history_entry.history_response_error = (function cljs_browser_repl$ui$history_entry$history_response_error(p__24033,p__24034){
var map__24039 = p__24033;
var map__24039__$1 = ((((!((map__24039 == null)))?((((map__24039.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24039.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24039):map__24039);
var emit = cljs.core.get.call(null,map__24039__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));
var map__24040 = p__24034;
var map__24040__$1 = ((((!((map__24040 == null)))?((((map__24040.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24040.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24040):map__24040);
var value = cljs.core.get.call(null,map__24040__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.history-response-error","div.history-response-error",903167561),value], null);
});
cljs_browser_repl.ui.history_entry.history_unknown = (function cljs_browser_repl$ui$history_entry$history_unknown(p__24043,entry){
var map__24046 = p__24043;
var map__24046__$1 = ((((!((map__24046 == null)))?((((map__24046.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24046.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24046):map__24046);
var emit = cljs.core.get.call(null,map__24046__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre.history-unknown","pre.history-unknown",228775659),cljs.core.println_str.call(null,entry)], null);
});
cljs_browser_repl.ui.history_entry.history_html = (function cljs_browser_repl$ui$history_entry$history_html(p__24048,p__24049){
var map__24054 = p__24048;
var map__24054__$1 = ((((!((map__24054 == null)))?((((map__24054.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24054.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24054):map__24054);
var emit = cljs.core.get.call(null,map__24054__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));
var map__24055 = p__24049;
var map__24055__$1 = ((((!((map__24055 == null)))?((((map__24055.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24055.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24055):map__24055);
var value = cljs.core.get.call(null,map__24055__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.history-html","div.history-html",-1330193097),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),value], null)], null)], null);
});
cljs_browser_repl.ui.history_entry.internal_re = (new RegExp([cljs.core.str("^"),cljs.core.str(location.origin),cljs.core.str(".*#/file/(.*)")].join('')));
cljs_browser_repl.ui.history_entry.history_md = (function cljs_browser_repl$ui$history_entry$history_md(p__24059,p__24060){
var map__24065 = p__24059;
var map__24065__$1 = ((((!((map__24065 == null)))?((((map__24065.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24065.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24065):map__24065);
var emit = cljs.core.get.call(null,map__24065__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));
var map__24066 = p__24060;
var map__24066__$1 = ((((!((map__24066 == null)))?((((map__24066.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24066.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24066):map__24066);
var value = cljs.core.get.call(null,map__24066__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.history-markdown","div.history-markdown",-1224543335),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__24065,map__24065__$1,emit,map__24066,map__24066__$1,value){
return (function (p1__24058_SHARP_){
p1__24058_SHARP_.preventDefault();

var target = p1__24058_SHARP_.target;
var href = target.href;
if(cljs.core.truth_(href)){
var temp__4423__auto__ = cljs.core.re_seq.call(null,cljs_browser_repl.ui.history_entry.internal_re,href);
if(cljs.core.truth_(temp__4423__auto__)){
var internal_QMARK_ = temp__4423__auto__;
return emit.call(null,new cljs.core.Keyword(null,"visit-file","visit-file",1396273326),cljs.core.second.call(null,cljs.core.first.call(null,internal_QMARK_)));
} else {
return window.open(href);
}
} else {
return null;
}
});})(map__24065,map__24065__$1,emit,map__24066,map__24066__$1,value))
,new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),cljs_browser_repl.markdown.render.call(null,value)], null)], null)], null);
});
cljs_browser_repl.ui.history_entry.history_separator = (function cljs_browser_repl$ui$history_entry$history_separator(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null);
});
cljs_browser_repl.ui.history_entry.history_stop = (function cljs_browser_repl$ui$history_entry$history_stop(p__24069,p__24070){
var map__24075 = p__24069;
var map__24075__$1 = ((((!((map__24075 == null)))?((((map__24075.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24075.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24075):map__24075);
var emit = cljs.core.get.call(null,map__24075__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));
var map__24076 = p__24070;
var map__24076__$1 = ((((!((map__24076 == null)))?((((map__24076.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24076.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24076):map__24076);
var entry = map__24076__$1;
var disabled = cljs.core.get.call(null,map__24076__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
if(cljs.core.truth_(disabled)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_browser_repl.ui.history_entry.history_separator], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.history-stop","div.history-stop",446810996),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__24075,map__24075__$1,emit,map__24076,map__24076__$1,entry,disabled){
return (function (){
return emit.call(null,new cljs.core.Keyword(null,"continue","continue",-207346553));
});})(map__24075,map__24075__$1,emit,map__24076,map__24076__$1,entry,disabled))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),"Next"], null)], null);
}
});
cljs_browser_repl.ui.history_entry.history_entry = (function cljs_browser_repl$ui$history_entry$history_entry(p__24079,p__24080){
var map__24086 = p__24079;
var map__24086__$1 = ((((!((map__24086 == null)))?((((map__24086.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24086.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24086):map__24086);
var attrs = map__24086__$1;
var emit = cljs.core.get.call(null,map__24086__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));
var map__24087 = p__24080;
var map__24087__$1 = ((((!((map__24087 == null)))?((((map__24087.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24087.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24087):map__24087);
var entry = map__24087__$1;
var type = cljs.core.get.call(null,map__24087__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.history-entry","div.history-entry",-1020769015),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__24090 = (((new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(entry) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(entry).fqn:null);
switch (G__24090) {
case "input":
return cljs_browser_repl.ui.history_entry.history_input;

break;
case "error":
return cljs_browser_repl.ui.history_entry.history_response_error;

break;
case "response":
return cljs_browser_repl.ui.history_entry.history_response;

break;
case "html":
return cljs_browser_repl.ui.history_entry.history_html;

break;
case "markdown":
return cljs_browser_repl.ui.history_entry.history_md;

break;
case "stop":
return cljs_browser_repl.ui.history_entry.history_stop;

break;
case "separator":
return cljs_browser_repl.ui.history_entry.history_separator;

break;
default:
return cljs_browser_repl.ui.history_entry.history_unknown;

}
})(),attrs,entry], null)], null);
});

//# sourceMappingURL=history_entry.js.map?rel=1451058379035