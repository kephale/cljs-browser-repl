// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs_browser_repl.net.file');
goog.require('cljs.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('cljs.pprint');
goog.require('cljs_browser_repl.state');
goog.require('cljs.reader');
/**
 * Retrieves a notebook file by id and file name. Returns a channel that will
 *   be filled with a clj-http response {:success true :body ...}
 */
cljs_browser_repl.net.file.get_BANG_ = (function cljs_browser_repl$net$file$get_BANG_(id,file_name){
var resp = cljs.core.async.chan.call(null);
var url = ((function (resp){
return (function (p1__22600_SHARP_){
return [cljs.core.str("notebooks/"),cljs.core.str(id),cljs.core.str("/"),cljs.core.str(file_name),cljs.core.str(p1__22600_SHARP_)].join('');
});})(resp))
;
var c__17398__auto___22701 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17398__auto___22701,resp,url){
return (function (){
var f__17399__auto__ = (function (){var switch__17286__auto__ = ((function (c__17398__auto___22701,resp,url){
return (function (state_22682){
var state_val_22683 = (state_22682[(1)]);
if((state_val_22683 === (7))){
var inst_22669 = (state_22682[(7)]);
var inst_22669__$1 = (state_22682[(2)]);
var inst_22670 = new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(inst_22669__$1);
var state_22682__$1 = (function (){var statearr_22684 = state_22682;
(statearr_22684[(7)] = inst_22669__$1);

return statearr_22684;
})();
if(cljs.core.truth_(inst_22670)){
var statearr_22685_22702 = state_22682__$1;
(statearr_22685_22702[(1)] = (8));

} else {
var statearr_22686_22703 = state_22682__$1;
(statearr_22686_22703[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22683 === (1))){
var inst_22651 = url.call(null,".edn");
var inst_22652 = [new cljs.core.Keyword(null,"content-type","content-type",-508222634)];
var inst_22653 = ["application/edn"];
var inst_22654 = cljs.core.PersistentHashMap.fromArrays(inst_22652,inst_22653);
var inst_22655 = cljs_http.client.get.call(null,inst_22651,inst_22654);
var state_22682__$1 = state_22682;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22682__$1,(2),inst_22655);
} else {
if((state_val_22683 === (4))){
var inst_22663 = url.call(null,".json");
var inst_22664 = [new cljs.core.Keyword(null,"content-type","content-type",-508222634)];
var inst_22665 = ["application/json"];
var inst_22666 = cljs.core.PersistentHashMap.fromArrays(inst_22664,inst_22665);
var inst_22667 = cljs_http.client.get.call(null,inst_22663,inst_22666);
var state_22682__$1 = state_22682;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22682__$1,(7),inst_22667);
} else {
if((state_val_22683 === (6))){
var inst_22661 = (state_22682[(2)]);
var state_22682__$1 = state_22682;
var statearr_22687_22704 = state_22682__$1;
(statearr_22687_22704[(2)] = inst_22661);

(statearr_22687_22704[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22683 === (3))){
var inst_22657 = (state_22682[(8)]);
var state_22682__$1 = state_22682;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22682__$1,(6),resp,inst_22657);
} else {
if((state_val_22683 === (12))){
var inst_22676 = (state_22682[(2)]);
var state_22682__$1 = state_22682;
var statearr_22688_22705 = state_22682__$1;
(statearr_22688_22705[(2)] = inst_22676);

(statearr_22688_22705[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22683 === (2))){
var inst_22657 = (state_22682[(8)]);
var inst_22657__$1 = (state_22682[(2)]);
var inst_22658 = new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(inst_22657__$1);
var state_22682__$1 = (function (){var statearr_22689 = state_22682;
(statearr_22689[(8)] = inst_22657__$1);

return statearr_22689;
})();
if(cljs.core.truth_(inst_22658)){
var statearr_22690_22706 = state_22682__$1;
(statearr_22690_22706[(1)] = (3));

} else {
var statearr_22691_22707 = state_22682__$1;
(statearr_22691_22707[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22683 === (11))){
var inst_22673 = (state_22682[(2)]);
var state_22682__$1 = state_22682;
var statearr_22692_22708 = state_22682__$1;
(statearr_22692_22708[(2)] = inst_22673);

(statearr_22692_22708[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22683 === (9))){
var inst_22657 = (state_22682[(8)]);
var state_22682__$1 = state_22682;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22682__$1,(12),resp,inst_22657);
} else {
if((state_val_22683 === (5))){
var inst_22680 = (state_22682[(2)]);
var state_22682__$1 = state_22682;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22682__$1,inst_22680);
} else {
if((state_val_22683 === (10))){
var inst_22678 = (state_22682[(2)]);
var state_22682__$1 = state_22682;
var statearr_22693_22709 = state_22682__$1;
(statearr_22693_22709[(2)] = inst_22678);

(statearr_22693_22709[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22683 === (8))){
var inst_22669 = (state_22682[(7)]);
var state_22682__$1 = state_22682;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22682__$1,(11),resp,inst_22669);
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
});})(c__17398__auto___22701,resp,url))
;
return ((function (switch__17286__auto__,c__17398__auto___22701,resp,url){
return (function() {
var cljs_browser_repl$net$file$get_BANG__$_state_machine__17287__auto__ = null;
var cljs_browser_repl$net$file$get_BANG__$_state_machine__17287__auto____0 = (function (){
var statearr_22697 = [null,null,null,null,null,null,null,null,null];
(statearr_22697[(0)] = cljs_browser_repl$net$file$get_BANG__$_state_machine__17287__auto__);

(statearr_22697[(1)] = (1));

return statearr_22697;
});
var cljs_browser_repl$net$file$get_BANG__$_state_machine__17287__auto____1 = (function (state_22682){
while(true){
var ret_value__17288__auto__ = (function (){try{while(true){
var result__17289__auto__ = switch__17286__auto__.call(null,state_22682);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17289__auto__;
}
break;
}
}catch (e22698){if((e22698 instanceof Object)){
var ex__17290__auto__ = e22698;
var statearr_22699_22710 = state_22682;
(statearr_22699_22710[(5)] = ex__17290__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22682);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22698;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22711 = state_22682;
state_22682 = G__22711;
continue;
} else {
return ret_value__17288__auto__;
}
break;
}
});
cljs_browser_repl$net$file$get_BANG__$_state_machine__17287__auto__ = function(state_22682){
switch(arguments.length){
case 0:
return cljs_browser_repl$net$file$get_BANG__$_state_machine__17287__auto____0.call(this);
case 1:
return cljs_browser_repl$net$file$get_BANG__$_state_machine__17287__auto____1.call(this,state_22682);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_browser_repl$net$file$get_BANG__$_state_machine__17287__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_browser_repl$net$file$get_BANG__$_state_machine__17287__auto____0;
cljs_browser_repl$net$file$get_BANG__$_state_machine__17287__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_browser_repl$net$file$get_BANG__$_state_machine__17287__auto____1;
return cljs_browser_repl$net$file$get_BANG__$_state_machine__17287__auto__;
})()
;})(switch__17286__auto__,c__17398__auto___22701,resp,url))
})();
var state__17400__auto__ = (function (){var statearr_22700 = f__17399__auto__.call(null);
(statearr_22700[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17398__auto___22701);

return statearr_22700;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17400__auto__);
});})(c__17398__auto___22701,resp,url))
);


return resp;
});
cljs_browser_repl.net.file.invalid_file = (function cljs_browser_repl$net$file$invalid_file(file,err){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_browser_repl.state.to_repl_error.call(null,[cljs.core.str(err),cljs.core.str("\n\n"),cljs.core.str((function (){var sb__12872__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_22714_22716 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_22715_22717 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_22714_22716,_STAR_print_fn_STAR_22715_22717,sb__12872__auto__){
return (function (x__12873__auto__){
return sb__12872__auto__.append(x__12873__auto__);
});})(_STAR_print_newline_STAR_22714_22716,_STAR_print_fn_STAR_22715_22717,sb__12872__auto__))
;

try{cljs.pprint.pprint.call(null,file);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_22715_22717;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_22714_22716;
}
return [cljs.core.str(sb__12872__auto__)].join('');
})())].join(''))], null);
});
/**
 * Given a file response it will return a list of commands for the repl to run.
 */
cljs_browser_repl.net.file.get_commands = (function cljs_browser_repl$net$file$get_commands(p__22718){
var map__22721 = p__22718;
var map__22721__$1 = ((((!((map__22721 == null)))?((((map__22721.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22721.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22721):map__22721);
var file = map__22721__$1;
var success = cljs.core.get.call(null,map__22721__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var body = cljs.core.get.call(null,map__22721__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
if(cljs.core.truth_(success)){
if(cljs.core._EQ_.call(null,cljs.core.type.call(null,body),String)){
return cljs.reader.read_string.call(null,body);
} else {
return body;
}
} else {
return cljs_browser_repl.net.file.invalid_file.call(null,file,(new Error("Request failed")));
}
});

//# sourceMappingURL=file.js.map?rel=1451058373353