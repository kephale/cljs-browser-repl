// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__25567 = cljs.core._EQ_;
var expr__25568 = (function (){var or__11897__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__11897__auto__)){
return or__11897__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__25567.call(null,"true",expr__25568))){
return true;
} else {
if(cljs.core.truth_(pred__25567.call(null,"false",expr__25568))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__25568)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__25570__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__25570 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25571__i = 0, G__25571__a = new Array(arguments.length -  0);
while (G__25571__i < G__25571__a.length) {G__25571__a[G__25571__i] = arguments[G__25571__i + 0]; ++G__25571__i;}
  args = new cljs.core.IndexedSeq(G__25571__a,0);
} 
return G__25570__delegate.call(this,args);};
G__25570.cljs$lang$maxFixedArity = 0;
G__25570.cljs$lang$applyTo = (function (arglist__25572){
var args = cljs.core.seq(arglist__25572);
return G__25570__delegate(args);
});
G__25570.cljs$core$IFn$_invoke$arity$variadic = G__25570__delegate;
return G__25570;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__25573){
var map__25576 = p__25573;
var map__25576__$1 = ((((!((map__25576 == null)))?((((map__25576.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25576.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25576):map__25576);
var message = cljs.core.get.call(null,map__25576__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__25576__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__11897__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__11897__auto__)){
return or__11897__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__11885__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__11885__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__11885__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__17398__auto___25738 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17398__auto___25738,ch){
return (function (){
var f__17399__auto__ = (function (){var switch__17286__auto__ = ((function (c__17398__auto___25738,ch){
return (function (state_25707){
var state_val_25708 = (state_25707[(1)]);
if((state_val_25708 === (7))){
var inst_25703 = (state_25707[(2)]);
var state_25707__$1 = state_25707;
var statearr_25709_25739 = state_25707__$1;
(statearr_25709_25739[(2)] = inst_25703);

(statearr_25709_25739[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25708 === (1))){
var state_25707__$1 = state_25707;
var statearr_25710_25740 = state_25707__$1;
(statearr_25710_25740[(2)] = null);

(statearr_25710_25740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25708 === (4))){
var inst_25660 = (state_25707[(7)]);
var inst_25660__$1 = (state_25707[(2)]);
var state_25707__$1 = (function (){var statearr_25711 = state_25707;
(statearr_25711[(7)] = inst_25660__$1);

return statearr_25711;
})();
if(cljs.core.truth_(inst_25660__$1)){
var statearr_25712_25741 = state_25707__$1;
(statearr_25712_25741[(1)] = (5));

} else {
var statearr_25713_25742 = state_25707__$1;
(statearr_25713_25742[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25708 === (15))){
var inst_25667 = (state_25707[(8)]);
var inst_25682 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_25667);
var inst_25683 = cljs.core.first.call(null,inst_25682);
var inst_25684 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_25683);
var inst_25685 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_25684)].join('');
var inst_25686 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_25685);
var state_25707__$1 = state_25707;
var statearr_25714_25743 = state_25707__$1;
(statearr_25714_25743[(2)] = inst_25686);

(statearr_25714_25743[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25708 === (13))){
var inst_25691 = (state_25707[(2)]);
var state_25707__$1 = state_25707;
var statearr_25715_25744 = state_25707__$1;
(statearr_25715_25744[(2)] = inst_25691);

(statearr_25715_25744[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25708 === (6))){
var state_25707__$1 = state_25707;
var statearr_25716_25745 = state_25707__$1;
(statearr_25716_25745[(2)] = null);

(statearr_25716_25745[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25708 === (17))){
var inst_25689 = (state_25707[(2)]);
var state_25707__$1 = state_25707;
var statearr_25717_25746 = state_25707__$1;
(statearr_25717_25746[(2)] = inst_25689);

(statearr_25717_25746[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25708 === (3))){
var inst_25705 = (state_25707[(2)]);
var state_25707__$1 = state_25707;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25707__$1,inst_25705);
} else {
if((state_val_25708 === (12))){
var inst_25666 = (state_25707[(9)]);
var inst_25680 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_25666,opts);
var state_25707__$1 = state_25707;
if(cljs.core.truth_(inst_25680)){
var statearr_25718_25747 = state_25707__$1;
(statearr_25718_25747[(1)] = (15));

} else {
var statearr_25719_25748 = state_25707__$1;
(statearr_25719_25748[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25708 === (2))){
var state_25707__$1 = state_25707;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25707__$1,(4),ch);
} else {
if((state_val_25708 === (11))){
var inst_25667 = (state_25707[(8)]);
var inst_25672 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25673 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_25667);
var inst_25674 = cljs.core.async.timeout.call(null,(1000));
var inst_25675 = [inst_25673,inst_25674];
var inst_25676 = (new cljs.core.PersistentVector(null,2,(5),inst_25672,inst_25675,null));
var state_25707__$1 = state_25707;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25707__$1,(14),inst_25676);
} else {
if((state_val_25708 === (9))){
var inst_25667 = (state_25707[(8)]);
var inst_25693 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_25694 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_25667);
var inst_25695 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_25694);
var inst_25696 = [cljs.core.str("Not loading: "),cljs.core.str(inst_25695)].join('');
var inst_25697 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_25696);
var state_25707__$1 = (function (){var statearr_25720 = state_25707;
(statearr_25720[(10)] = inst_25693);

return statearr_25720;
})();
var statearr_25721_25749 = state_25707__$1;
(statearr_25721_25749[(2)] = inst_25697);

(statearr_25721_25749[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25708 === (5))){
var inst_25660 = (state_25707[(7)]);
var inst_25662 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_25663 = (new cljs.core.PersistentArrayMap(null,2,inst_25662,null));
var inst_25664 = (new cljs.core.PersistentHashSet(null,inst_25663,null));
var inst_25665 = figwheel.client.focus_msgs.call(null,inst_25664,inst_25660);
var inst_25666 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_25665);
var inst_25667 = cljs.core.first.call(null,inst_25665);
var inst_25668 = figwheel.client.autoload_QMARK_.call(null);
var state_25707__$1 = (function (){var statearr_25722 = state_25707;
(statearr_25722[(8)] = inst_25667);

(statearr_25722[(9)] = inst_25666);

return statearr_25722;
})();
if(cljs.core.truth_(inst_25668)){
var statearr_25723_25750 = state_25707__$1;
(statearr_25723_25750[(1)] = (8));

} else {
var statearr_25724_25751 = state_25707__$1;
(statearr_25724_25751[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25708 === (14))){
var inst_25678 = (state_25707[(2)]);
var state_25707__$1 = state_25707;
var statearr_25725_25752 = state_25707__$1;
(statearr_25725_25752[(2)] = inst_25678);

(statearr_25725_25752[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25708 === (16))){
var state_25707__$1 = state_25707;
var statearr_25726_25753 = state_25707__$1;
(statearr_25726_25753[(2)] = null);

(statearr_25726_25753[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25708 === (10))){
var inst_25699 = (state_25707[(2)]);
var state_25707__$1 = (function (){var statearr_25727 = state_25707;
(statearr_25727[(11)] = inst_25699);

return statearr_25727;
})();
var statearr_25728_25754 = state_25707__$1;
(statearr_25728_25754[(2)] = null);

(statearr_25728_25754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25708 === (8))){
var inst_25666 = (state_25707[(9)]);
var inst_25670 = figwheel.client.reload_file_state_QMARK_.call(null,inst_25666,opts);
var state_25707__$1 = state_25707;
if(cljs.core.truth_(inst_25670)){
var statearr_25729_25755 = state_25707__$1;
(statearr_25729_25755[(1)] = (11));

} else {
var statearr_25730_25756 = state_25707__$1;
(statearr_25730_25756[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__17398__auto___25738,ch))
;
return ((function (switch__17286__auto__,c__17398__auto___25738,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__17287__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__17287__auto____0 = (function (){
var statearr_25734 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25734[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__17287__auto__);

(statearr_25734[(1)] = (1));

return statearr_25734;
});
var figwheel$client$file_reloader_plugin_$_state_machine__17287__auto____1 = (function (state_25707){
while(true){
var ret_value__17288__auto__ = (function (){try{while(true){
var result__17289__auto__ = switch__17286__auto__.call(null,state_25707);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17289__auto__;
}
break;
}
}catch (e25735){if((e25735 instanceof Object)){
var ex__17290__auto__ = e25735;
var statearr_25736_25757 = state_25707;
(statearr_25736_25757[(5)] = ex__17290__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25707);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25735;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25758 = state_25707;
state_25707 = G__25758;
continue;
} else {
return ret_value__17288__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__17287__auto__ = function(state_25707){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__17287__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__17287__auto____1.call(this,state_25707);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__17287__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__17287__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__17287__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__17287__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__17287__auto__;
})()
;})(switch__17286__auto__,c__17398__auto___25738,ch))
})();
var state__17400__auto__ = (function (){var statearr_25737 = f__17399__auto__.call(null);
(statearr_25737[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17398__auto___25738);

return statearr_25737;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17400__auto__);
});})(c__17398__auto___25738,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__25759_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__25759_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_25766 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_25766){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_25764 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_25765 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_25764,_STAR_print_newline_STAR_25765,base_path_25766){
return (function() { 
var G__25767__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__25767 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25768__i = 0, G__25768__a = new Array(arguments.length -  0);
while (G__25768__i < G__25768__a.length) {G__25768__a[G__25768__i] = arguments[G__25768__i + 0]; ++G__25768__i;}
  args = new cljs.core.IndexedSeq(G__25768__a,0);
} 
return G__25767__delegate.call(this,args);};
G__25767.cljs$lang$maxFixedArity = 0;
G__25767.cljs$lang$applyTo = (function (arglist__25769){
var args = cljs.core.seq(arglist__25769);
return G__25767__delegate(args);
});
G__25767.cljs$core$IFn$_invoke$arity$variadic = G__25767__delegate;
return G__25767;
})()
;})(_STAR_print_fn_STAR_25764,_STAR_print_newline_STAR_25765,base_path_25766))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_25765;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_25764;
}}catch (e25763){if((e25763 instanceof Error)){
var e = e25763;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_25766], null));
} else {
var e = e25763;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_25766))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__25770){
var map__25777 = p__25770;
var map__25777__$1 = ((((!((map__25777 == null)))?((((map__25777.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25777.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25777):map__25777);
var opts = map__25777__$1;
var build_id = cljs.core.get.call(null,map__25777__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__25777,map__25777__$1,opts,build_id){
return (function (p__25779){
var vec__25780 = p__25779;
var map__25781 = cljs.core.nth.call(null,vec__25780,(0),null);
var map__25781__$1 = ((((!((map__25781 == null)))?((((map__25781.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25781.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25781):map__25781);
var msg = map__25781__$1;
var msg_name = cljs.core.get.call(null,map__25781__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25780,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__25780,map__25781,map__25781__$1,msg,msg_name,_,map__25777,map__25777__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__25780,map__25781,map__25781__$1,msg,msg_name,_,map__25777,map__25777__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__25777,map__25777__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__25787){
var vec__25788 = p__25787;
var map__25789 = cljs.core.nth.call(null,vec__25788,(0),null);
var map__25789__$1 = ((((!((map__25789 == null)))?((((map__25789.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25789.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25789):map__25789);
var msg = map__25789__$1;
var msg_name = cljs.core.get.call(null,map__25789__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25788,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__25791){
var map__25801 = p__25791;
var map__25801__$1 = ((((!((map__25801 == null)))?((((map__25801.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25801.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25801):map__25801);
var on_compile_warning = cljs.core.get.call(null,map__25801__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__25801__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__25801,map__25801__$1,on_compile_warning,on_compile_fail){
return (function (p__25803){
var vec__25804 = p__25803;
var map__25805 = cljs.core.nth.call(null,vec__25804,(0),null);
var map__25805__$1 = ((((!((map__25805 == null)))?((((map__25805.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25805.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25805):map__25805);
var msg = map__25805__$1;
var msg_name = cljs.core.get.call(null,map__25805__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25804,(1));
var pred__25807 = cljs.core._EQ_;
var expr__25808 = msg_name;
if(cljs.core.truth_(pred__25807.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__25808))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__25807.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__25808))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__25801,map__25801__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__17398__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17398__auto__,msg_hist,msg_names,msg){
return (function (){
var f__17399__auto__ = (function (){var switch__17286__auto__ = ((function (c__17398__auto__,msg_hist,msg_names,msg){
return (function (state_26024){
var state_val_26025 = (state_26024[(1)]);
if((state_val_26025 === (7))){
var inst_25948 = (state_26024[(2)]);
var state_26024__$1 = state_26024;
if(cljs.core.truth_(inst_25948)){
var statearr_26026_26072 = state_26024__$1;
(statearr_26026_26072[(1)] = (8));

} else {
var statearr_26027_26073 = state_26024__$1;
(statearr_26027_26073[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26025 === (20))){
var inst_26018 = (state_26024[(2)]);
var state_26024__$1 = state_26024;
var statearr_26028_26074 = state_26024__$1;
(statearr_26028_26074[(2)] = inst_26018);

(statearr_26028_26074[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26025 === (27))){
var inst_26014 = (state_26024[(2)]);
var state_26024__$1 = state_26024;
var statearr_26029_26075 = state_26024__$1;
(statearr_26029_26075[(2)] = inst_26014);

(statearr_26029_26075[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26025 === (1))){
var inst_25941 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_26024__$1 = state_26024;
if(cljs.core.truth_(inst_25941)){
var statearr_26030_26076 = state_26024__$1;
(statearr_26030_26076[(1)] = (2));

} else {
var statearr_26031_26077 = state_26024__$1;
(statearr_26031_26077[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26025 === (24))){
var inst_26016 = (state_26024[(2)]);
var state_26024__$1 = state_26024;
var statearr_26032_26078 = state_26024__$1;
(statearr_26032_26078[(2)] = inst_26016);

(statearr_26032_26078[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26025 === (4))){
var inst_26022 = (state_26024[(2)]);
var state_26024__$1 = state_26024;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26024__$1,inst_26022);
} else {
if((state_val_26025 === (15))){
var inst_26020 = (state_26024[(2)]);
var state_26024__$1 = state_26024;
var statearr_26033_26079 = state_26024__$1;
(statearr_26033_26079[(2)] = inst_26020);

(statearr_26033_26079[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26025 === (21))){
var inst_25979 = (state_26024[(2)]);
var state_26024__$1 = state_26024;
var statearr_26034_26080 = state_26024__$1;
(statearr_26034_26080[(2)] = inst_25979);

(statearr_26034_26080[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26025 === (31))){
var inst_26003 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_26024__$1 = state_26024;
if(cljs.core.truth_(inst_26003)){
var statearr_26035_26081 = state_26024__$1;
(statearr_26035_26081[(1)] = (34));

} else {
var statearr_26036_26082 = state_26024__$1;
(statearr_26036_26082[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26025 === (32))){
var inst_26012 = (state_26024[(2)]);
var state_26024__$1 = state_26024;
var statearr_26037_26083 = state_26024__$1;
(statearr_26037_26083[(2)] = inst_26012);

(statearr_26037_26083[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26025 === (33))){
var inst_26001 = (state_26024[(2)]);
var state_26024__$1 = state_26024;
var statearr_26038_26084 = state_26024__$1;
(statearr_26038_26084[(2)] = inst_26001);

(statearr_26038_26084[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26025 === (13))){
var inst_25962 = figwheel.client.heads_up.clear.call(null);
var state_26024__$1 = state_26024;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26024__$1,(16),inst_25962);
} else {
if((state_val_26025 === (22))){
var inst_25983 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25984 = figwheel.client.heads_up.append_message.call(null,inst_25983);
var state_26024__$1 = state_26024;
var statearr_26039_26085 = state_26024__$1;
(statearr_26039_26085[(2)] = inst_25984);

(statearr_26039_26085[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26025 === (36))){
var inst_26010 = (state_26024[(2)]);
var state_26024__$1 = state_26024;
var statearr_26040_26086 = state_26024__$1;
(statearr_26040_26086[(2)] = inst_26010);

(statearr_26040_26086[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26025 === (29))){
var inst_25994 = (state_26024[(2)]);
var state_26024__$1 = state_26024;
var statearr_26041_26087 = state_26024__$1;
(statearr_26041_26087[(2)] = inst_25994);

(statearr_26041_26087[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26025 === (6))){
var inst_25943 = (state_26024[(7)]);
var state_26024__$1 = state_26024;
var statearr_26042_26088 = state_26024__$1;
(statearr_26042_26088[(2)] = inst_25943);

(statearr_26042_26088[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26025 === (28))){
var inst_25990 = (state_26024[(2)]);
var inst_25991 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25992 = figwheel.client.heads_up.display_warning.call(null,inst_25991);
var state_26024__$1 = (function (){var statearr_26043 = state_26024;
(statearr_26043[(8)] = inst_25990);

return statearr_26043;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26024__$1,(29),inst_25992);
} else {
if((state_val_26025 === (25))){
var inst_25988 = figwheel.client.heads_up.clear.call(null);
var state_26024__$1 = state_26024;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26024__$1,(28),inst_25988);
} else {
if((state_val_26025 === (34))){
var inst_26005 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26024__$1 = state_26024;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26024__$1,(37),inst_26005);
} else {
if((state_val_26025 === (17))){
var inst_25970 = (state_26024[(2)]);
var state_26024__$1 = state_26024;
var statearr_26044_26089 = state_26024__$1;
(statearr_26044_26089[(2)] = inst_25970);

(statearr_26044_26089[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26025 === (3))){
var inst_25960 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_26024__$1 = state_26024;
if(cljs.core.truth_(inst_25960)){
var statearr_26045_26090 = state_26024__$1;
(statearr_26045_26090[(1)] = (13));

} else {
var statearr_26046_26091 = state_26024__$1;
(statearr_26046_26091[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26025 === (12))){
var inst_25956 = (state_26024[(2)]);
var state_26024__$1 = state_26024;
var statearr_26047_26092 = state_26024__$1;
(statearr_26047_26092[(2)] = inst_25956);

(statearr_26047_26092[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26025 === (2))){
var inst_25943 = (state_26024[(7)]);
var inst_25943__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_26024__$1 = (function (){var statearr_26048 = state_26024;
(statearr_26048[(7)] = inst_25943__$1);

return statearr_26048;
})();
if(cljs.core.truth_(inst_25943__$1)){
var statearr_26049_26093 = state_26024__$1;
(statearr_26049_26093[(1)] = (5));

} else {
var statearr_26050_26094 = state_26024__$1;
(statearr_26050_26094[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26025 === (23))){
var inst_25986 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_26024__$1 = state_26024;
if(cljs.core.truth_(inst_25986)){
var statearr_26051_26095 = state_26024__$1;
(statearr_26051_26095[(1)] = (25));

} else {
var statearr_26052_26096 = state_26024__$1;
(statearr_26052_26096[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26025 === (35))){
var state_26024__$1 = state_26024;
var statearr_26053_26097 = state_26024__$1;
(statearr_26053_26097[(2)] = null);

(statearr_26053_26097[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26025 === (19))){
var inst_25981 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_26024__$1 = state_26024;
if(cljs.core.truth_(inst_25981)){
var statearr_26054_26098 = state_26024__$1;
(statearr_26054_26098[(1)] = (22));

} else {
var statearr_26055_26099 = state_26024__$1;
(statearr_26055_26099[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26025 === (11))){
var inst_25952 = (state_26024[(2)]);
var state_26024__$1 = state_26024;
var statearr_26056_26100 = state_26024__$1;
(statearr_26056_26100[(2)] = inst_25952);

(statearr_26056_26100[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26025 === (9))){
var inst_25954 = figwheel.client.heads_up.clear.call(null);
var state_26024__$1 = state_26024;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26024__$1,(12),inst_25954);
} else {
if((state_val_26025 === (5))){
var inst_25945 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_26024__$1 = state_26024;
var statearr_26057_26101 = state_26024__$1;
(statearr_26057_26101[(2)] = inst_25945);

(statearr_26057_26101[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26025 === (14))){
var inst_25972 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_26024__$1 = state_26024;
if(cljs.core.truth_(inst_25972)){
var statearr_26058_26102 = state_26024__$1;
(statearr_26058_26102[(1)] = (18));

} else {
var statearr_26059_26103 = state_26024__$1;
(statearr_26059_26103[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26025 === (26))){
var inst_25996 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_26024__$1 = state_26024;
if(cljs.core.truth_(inst_25996)){
var statearr_26060_26104 = state_26024__$1;
(statearr_26060_26104[(1)] = (30));

} else {
var statearr_26061_26105 = state_26024__$1;
(statearr_26061_26105[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26025 === (16))){
var inst_25964 = (state_26024[(2)]);
var inst_25965 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25966 = figwheel.client.format_messages.call(null,inst_25965);
var inst_25967 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25968 = figwheel.client.heads_up.display_error.call(null,inst_25966,inst_25967);
var state_26024__$1 = (function (){var statearr_26062 = state_26024;
(statearr_26062[(9)] = inst_25964);

return statearr_26062;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26024__$1,(17),inst_25968);
} else {
if((state_val_26025 === (30))){
var inst_25998 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25999 = figwheel.client.heads_up.display_warning.call(null,inst_25998);
var state_26024__$1 = state_26024;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26024__$1,(33),inst_25999);
} else {
if((state_val_26025 === (10))){
var inst_25958 = (state_26024[(2)]);
var state_26024__$1 = state_26024;
var statearr_26063_26106 = state_26024__$1;
(statearr_26063_26106[(2)] = inst_25958);

(statearr_26063_26106[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26025 === (18))){
var inst_25974 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25975 = figwheel.client.format_messages.call(null,inst_25974);
var inst_25976 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25977 = figwheel.client.heads_up.display_error.call(null,inst_25975,inst_25976);
var state_26024__$1 = state_26024;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26024__$1,(21),inst_25977);
} else {
if((state_val_26025 === (37))){
var inst_26007 = (state_26024[(2)]);
var state_26024__$1 = state_26024;
var statearr_26064_26107 = state_26024__$1;
(statearr_26064_26107[(2)] = inst_26007);

(statearr_26064_26107[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26025 === (8))){
var inst_25950 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26024__$1 = state_26024;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26024__$1,(11),inst_25950);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__17398__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__17286__auto__,c__17398__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__17287__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__17287__auto____0 = (function (){
var statearr_26068 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26068[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__17287__auto__);

(statearr_26068[(1)] = (1));

return statearr_26068;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__17287__auto____1 = (function (state_26024){
while(true){
var ret_value__17288__auto__ = (function (){try{while(true){
var result__17289__auto__ = switch__17286__auto__.call(null,state_26024);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17289__auto__;
}
break;
}
}catch (e26069){if((e26069 instanceof Object)){
var ex__17290__auto__ = e26069;
var statearr_26070_26108 = state_26024;
(statearr_26070_26108[(5)] = ex__17290__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26024);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26069;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26109 = state_26024;
state_26024 = G__26109;
continue;
} else {
return ret_value__17288__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__17287__auto__ = function(state_26024){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__17287__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__17287__auto____1.call(this,state_26024);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__17287__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__17287__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__17287__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__17287__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__17287__auto__;
})()
;})(switch__17286__auto__,c__17398__auto__,msg_hist,msg_names,msg))
})();
var state__17400__auto__ = (function (){var statearr_26071 = f__17399__auto__.call(null);
(statearr_26071[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17398__auto__);

return statearr_26071;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17400__auto__);
});})(c__17398__auto__,msg_hist,msg_names,msg))
);

return c__17398__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__17398__auto___26172 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17398__auto___26172,ch){
return (function (){
var f__17399__auto__ = (function (){var switch__17286__auto__ = ((function (c__17398__auto___26172,ch){
return (function (state_26155){
var state_val_26156 = (state_26155[(1)]);
if((state_val_26156 === (1))){
var state_26155__$1 = state_26155;
var statearr_26157_26173 = state_26155__$1;
(statearr_26157_26173[(2)] = null);

(statearr_26157_26173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26156 === (2))){
var state_26155__$1 = state_26155;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26155__$1,(4),ch);
} else {
if((state_val_26156 === (3))){
var inst_26153 = (state_26155[(2)]);
var state_26155__$1 = state_26155;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26155__$1,inst_26153);
} else {
if((state_val_26156 === (4))){
var inst_26143 = (state_26155[(7)]);
var inst_26143__$1 = (state_26155[(2)]);
var state_26155__$1 = (function (){var statearr_26158 = state_26155;
(statearr_26158[(7)] = inst_26143__$1);

return statearr_26158;
})();
if(cljs.core.truth_(inst_26143__$1)){
var statearr_26159_26174 = state_26155__$1;
(statearr_26159_26174[(1)] = (5));

} else {
var statearr_26160_26175 = state_26155__$1;
(statearr_26160_26175[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26156 === (5))){
var inst_26143 = (state_26155[(7)]);
var inst_26145 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_26143);
var state_26155__$1 = state_26155;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26155__$1,(8),inst_26145);
} else {
if((state_val_26156 === (6))){
var state_26155__$1 = state_26155;
var statearr_26161_26176 = state_26155__$1;
(statearr_26161_26176[(2)] = null);

(statearr_26161_26176[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26156 === (7))){
var inst_26151 = (state_26155[(2)]);
var state_26155__$1 = state_26155;
var statearr_26162_26177 = state_26155__$1;
(statearr_26162_26177[(2)] = inst_26151);

(statearr_26162_26177[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26156 === (8))){
var inst_26147 = (state_26155[(2)]);
var state_26155__$1 = (function (){var statearr_26163 = state_26155;
(statearr_26163[(8)] = inst_26147);

return statearr_26163;
})();
var statearr_26164_26178 = state_26155__$1;
(statearr_26164_26178[(2)] = null);

(statearr_26164_26178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__17398__auto___26172,ch))
;
return ((function (switch__17286__auto__,c__17398__auto___26172,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__17287__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__17287__auto____0 = (function (){
var statearr_26168 = [null,null,null,null,null,null,null,null,null];
(statearr_26168[(0)] = figwheel$client$heads_up_plugin_$_state_machine__17287__auto__);

(statearr_26168[(1)] = (1));

return statearr_26168;
});
var figwheel$client$heads_up_plugin_$_state_machine__17287__auto____1 = (function (state_26155){
while(true){
var ret_value__17288__auto__ = (function (){try{while(true){
var result__17289__auto__ = switch__17286__auto__.call(null,state_26155);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17289__auto__;
}
break;
}
}catch (e26169){if((e26169 instanceof Object)){
var ex__17290__auto__ = e26169;
var statearr_26170_26179 = state_26155;
(statearr_26170_26179[(5)] = ex__17290__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26155);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26169;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26180 = state_26155;
state_26155 = G__26180;
continue;
} else {
return ret_value__17288__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__17287__auto__ = function(state_26155){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__17287__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__17287__auto____1.call(this,state_26155);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__17287__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__17287__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__17287__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__17287__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__17287__auto__;
})()
;})(switch__17286__auto__,c__17398__auto___26172,ch))
})();
var state__17400__auto__ = (function (){var statearr_26171 = f__17399__auto__.call(null);
(statearr_26171[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17398__auto___26172);

return statearr_26171;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17400__auto__);
});})(c__17398__auto___26172,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__17398__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17398__auto__){
return (function (){
var f__17399__auto__ = (function (){var switch__17286__auto__ = ((function (c__17398__auto__){
return (function (state_26201){
var state_val_26202 = (state_26201[(1)]);
if((state_val_26202 === (1))){
var inst_26196 = cljs.core.async.timeout.call(null,(3000));
var state_26201__$1 = state_26201;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26201__$1,(2),inst_26196);
} else {
if((state_val_26202 === (2))){
var inst_26198 = (state_26201[(2)]);
var inst_26199 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_26201__$1 = (function (){var statearr_26203 = state_26201;
(statearr_26203[(7)] = inst_26198);

return statearr_26203;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26201__$1,inst_26199);
} else {
return null;
}
}
});})(c__17398__auto__))
;
return ((function (switch__17286__auto__,c__17398__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__17287__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__17287__auto____0 = (function (){
var statearr_26207 = [null,null,null,null,null,null,null,null];
(statearr_26207[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__17287__auto__);

(statearr_26207[(1)] = (1));

return statearr_26207;
});
var figwheel$client$enforce_project_plugin_$_state_machine__17287__auto____1 = (function (state_26201){
while(true){
var ret_value__17288__auto__ = (function (){try{while(true){
var result__17289__auto__ = switch__17286__auto__.call(null,state_26201);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17289__auto__;
}
break;
}
}catch (e26208){if((e26208 instanceof Object)){
var ex__17290__auto__ = e26208;
var statearr_26209_26211 = state_26201;
(statearr_26209_26211[(5)] = ex__17290__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26201);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26208;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26212 = state_26201;
state_26201 = G__26212;
continue;
} else {
return ret_value__17288__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__17287__auto__ = function(state_26201){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__17287__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__17287__auto____1.call(this,state_26201);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__17287__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__17287__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__17287__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__17287__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__17287__auto__;
})()
;})(switch__17286__auto__,c__17398__auto__))
})();
var state__17400__auto__ = (function (){var statearr_26210 = f__17399__auto__.call(null);
(statearr_26210[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17398__auto__);

return statearr_26210;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17400__auto__);
});})(c__17398__auto__))
);

return c__17398__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__26213){
var map__26220 = p__26213;
var map__26220__$1 = ((((!((map__26220 == null)))?((((map__26220.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26220.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26220):map__26220);
var ed = map__26220__$1;
var formatted_exception = cljs.core.get.call(null,map__26220__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__26220__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__26220__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__26222_26226 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__26223_26227 = null;
var count__26224_26228 = (0);
var i__26225_26229 = (0);
while(true){
if((i__26225_26229 < count__26224_26228)){
var msg_26230 = cljs.core._nth.call(null,chunk__26223_26227,i__26225_26229);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26230);

var G__26231 = seq__26222_26226;
var G__26232 = chunk__26223_26227;
var G__26233 = count__26224_26228;
var G__26234 = (i__26225_26229 + (1));
seq__26222_26226 = G__26231;
chunk__26223_26227 = G__26232;
count__26224_26228 = G__26233;
i__26225_26229 = G__26234;
continue;
} else {
var temp__4425__auto___26235 = cljs.core.seq.call(null,seq__26222_26226);
if(temp__4425__auto___26235){
var seq__26222_26236__$1 = temp__4425__auto___26235;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26222_26236__$1)){
var c__12701__auto___26237 = cljs.core.chunk_first.call(null,seq__26222_26236__$1);
var G__26238 = cljs.core.chunk_rest.call(null,seq__26222_26236__$1);
var G__26239 = c__12701__auto___26237;
var G__26240 = cljs.core.count.call(null,c__12701__auto___26237);
var G__26241 = (0);
seq__26222_26226 = G__26238;
chunk__26223_26227 = G__26239;
count__26224_26228 = G__26240;
i__26225_26229 = G__26241;
continue;
} else {
var msg_26242 = cljs.core.first.call(null,seq__26222_26236__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26242);

var G__26243 = cljs.core.next.call(null,seq__26222_26236__$1);
var G__26244 = null;
var G__26245 = (0);
var G__26246 = (0);
seq__26222_26226 = G__26243;
chunk__26223_26227 = G__26244;
count__26224_26228 = G__26245;
i__26225_26229 = G__26246;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__26247){
var map__26250 = p__26247;
var map__26250__$1 = ((((!((map__26250 == null)))?((((map__26250.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26250.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26250):map__26250);
var w = map__26250__$1;
var message = cljs.core.get.call(null,map__26250__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__11885__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__11885__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__11885__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__26258 = cljs.core.seq.call(null,plugins);
var chunk__26259 = null;
var count__26260 = (0);
var i__26261 = (0);
while(true){
if((i__26261 < count__26260)){
var vec__26262 = cljs.core._nth.call(null,chunk__26259,i__26261);
var k = cljs.core.nth.call(null,vec__26262,(0),null);
var plugin = cljs.core.nth.call(null,vec__26262,(1),null);
if(cljs.core.truth_(plugin)){
var pl_26264 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26258,chunk__26259,count__26260,i__26261,pl_26264,vec__26262,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_26264.call(null,msg_hist);
});})(seq__26258,chunk__26259,count__26260,i__26261,pl_26264,vec__26262,k,plugin))
);
} else {
}

var G__26265 = seq__26258;
var G__26266 = chunk__26259;
var G__26267 = count__26260;
var G__26268 = (i__26261 + (1));
seq__26258 = G__26265;
chunk__26259 = G__26266;
count__26260 = G__26267;
i__26261 = G__26268;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26258);
if(temp__4425__auto__){
var seq__26258__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26258__$1)){
var c__12701__auto__ = cljs.core.chunk_first.call(null,seq__26258__$1);
var G__26269 = cljs.core.chunk_rest.call(null,seq__26258__$1);
var G__26270 = c__12701__auto__;
var G__26271 = cljs.core.count.call(null,c__12701__auto__);
var G__26272 = (0);
seq__26258 = G__26269;
chunk__26259 = G__26270;
count__26260 = G__26271;
i__26261 = G__26272;
continue;
} else {
var vec__26263 = cljs.core.first.call(null,seq__26258__$1);
var k = cljs.core.nth.call(null,vec__26263,(0),null);
var plugin = cljs.core.nth.call(null,vec__26263,(1),null);
if(cljs.core.truth_(plugin)){
var pl_26273 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26258,chunk__26259,count__26260,i__26261,pl_26273,vec__26263,k,plugin,seq__26258__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_26273.call(null,msg_hist);
});})(seq__26258,chunk__26259,count__26260,i__26261,pl_26273,vec__26263,k,plugin,seq__26258__$1,temp__4425__auto__))
);
} else {
}

var G__26274 = cljs.core.next.call(null,seq__26258__$1);
var G__26275 = null;
var G__26276 = (0);
var G__26277 = (0);
seq__26258 = G__26274;
chunk__26259 = G__26275;
count__26260 = G__26276;
i__26261 = G__26277;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args26278 = [];
var len__12956__auto___26281 = arguments.length;
var i__12957__auto___26282 = (0);
while(true){
if((i__12957__auto___26282 < len__12956__auto___26281)){
args26278.push((arguments[i__12957__auto___26282]));

var G__26283 = (i__12957__auto___26282 + (1));
i__12957__auto___26282 = G__26283;
continue;
} else {
}
break;
}

var G__26280 = args26278.length;
switch (G__26280) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26278.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__12963__auto__ = [];
var len__12956__auto___26289 = arguments.length;
var i__12957__auto___26290 = (0);
while(true){
if((i__12957__auto___26290 < len__12956__auto___26289)){
args__12963__auto__.push((arguments[i__12957__auto___26290]));

var G__26291 = (i__12957__auto___26290 + (1));
i__12957__auto___26290 = G__26291;
continue;
} else {
}
break;
}

var argseq__12964__auto__ = ((((0) < args__12963__auto__.length))?(new cljs.core.IndexedSeq(args__12963__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__12964__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__26286){
var map__26287 = p__26286;
var map__26287__$1 = ((((!((map__26287 == null)))?((((map__26287.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26287.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26287):map__26287);
var opts = map__26287__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq26285){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26285));
});

//# sourceMappingURL=client.js.map?rel=1451058381422