// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs_browser_repl.ui.repl_input');
goog.require('cljs.core');
goog.require('clojure.string');
cljs_browser_repl.ui.repl_input.resize = (function cljs_browser_repl$ui$repl_input$resize(node){
node.style.height = "auto";

return node.style.height = [cljs.core.str(node.scrollHeight),cljs.core.str("px")].join('');
});
/**
 * Is an event the Enter key?
 */
cljs_browser_repl.ui.repl_input.enter_QMARK_ = (function cljs_browser_repl$ui$repl_input$enter_QMARK_(e){
return cljs.core._EQ_.call(null,e.key,"Enter");
});
/**
 * Is an event the Esc key?
 */
cljs_browser_repl.ui.repl_input.escape_QMARK_ = (function cljs_browser_repl$ui$repl_input$escape_QMARK_(e){
return cljs.core._EQ_.call(null,e.key,"Escape");
});
cljs_browser_repl.ui.repl_input.get_val = (function cljs_browser_repl$ui$repl_input$get_val(e){
return e.target.value;
});
/**
 * When shift+enter adds a new line. When only enter if the input is valid it
 *   runs the callback function and clears value and triggers the resize. If the
 *   input is not valid i'll do as if it was a shift+enter
 */
cljs_browser_repl.ui.repl_input.enter_pressed_BANG_ = (function cljs_browser_repl$ui$repl_input$enter_pressed_BANG_(e,valid_QMARK_,send_input){
var shift_QMARK_ = e.shiftKey;
if(cljs.core.truth_((function (){var and__11885__auto__ = cljs.core.not.call(null,shift_QMARK_);
if(and__11885__auto__){
return valid_QMARK_;
} else {
return and__11885__auto__;
}
})())){
send_input.call(null,clojure.string.trim.call(null,cljs_browser_repl.ui.repl_input.get_val.call(null,e)));

return e.preventDefault();
} else {
return null;
}
});
cljs_browser_repl.ui.repl_input.repl_input_raw = (function cljs_browser_repl$ui$repl_input$repl_input_raw(p__26295){
var map__26298 = p__26295;
var map__26298__$1 = ((((!((map__26298 == null)))?((((map__26298.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26298.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26298):map__26298);
var pre_label = cljs.core.get.call(null,map__26298__$1,new cljs.core.Keyword(null,"pre-label","pre-label",-2100396496));
var on_change = cljs.core.get.call(null,map__26298__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var on_valid_input = cljs.core.get.call(null,map__26298__$1,new cljs.core.Keyword(null,"on-valid-input","on-valid-input",-1482196942));
var valid_input_QMARK_ = cljs.core.get.call(null,map__26298__$1,new cljs.core.Keyword(null,"valid-input?","valid-input?",-1714695932));
var value = cljs.core.get.call(null,map__26298__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.repl-input","div.repl-input",-1804001456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.repl-input-pre","span.repl-input-pre",-619018267),pre_label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea.repl-input-input","textarea.repl-input-input",117805625),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),((function (map__26298,map__26298__$1,pre_label,on_change,on_valid_input,valid_input_QMARK_,value){
return (function (e){
if(cljs.core.truth_(cljs_browser_repl.ui.repl_input.enter_QMARK_.call(null,e))){
return cljs_browser_repl.ui.repl_input.enter_pressed_BANG_.call(null,e,valid_input_QMARK_.call(null,cljs_browser_repl.ui.repl_input.get_val.call(null,e)),on_valid_input);
} else {
if(cljs.core.truth_(cljs_browser_repl.ui.repl_input.escape_QMARK_.call(null,e))){
return e.target.blur();
} else {
return null;
}
}
});})(map__26298,map__26298__$1,pre_label,on_change,on_valid_input,valid_input_QMARK_,value))
,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__26298,map__26298__$1,pre_label,on_change,on_valid_input,valid_input_QMARK_,value){
return (function (p1__26294_SHARP_){
return on_change.call(null,cljs_browser_repl.ui.repl_input.get_val.call(null,p1__26294_SHARP_));
});})(map__26298,map__26298__$1,pre_label,on_change,on_valid_input,valid_input_QMARK_,value))
,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Type clojurescript code here",new cljs.core.Keyword(null,"rows","rows",850049680),(1),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null)], null);
});
cljs_browser_repl.ui.repl_input.repl_input = cljs.core.with_meta.call(null,cljs_browser_repl.ui.repl_input.repl_input_raw,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (this$,old_argv){
var input = this$.getDOMNode().querySelector(".repl-input-input");
return cljs_browser_repl.ui.repl_input.resize.call(null,input);
})], null));

//# sourceMappingURL=repl_input.js.map?rel=1451058381537