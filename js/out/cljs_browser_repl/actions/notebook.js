// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs_browser_repl.actions.notebook');
goog.require('cljs.core');
goog.require('cljs_browser_repl.net.gist');
goog.require('cljs_browser_repl.net.file');
goog.require('cljs_browser_repl.actions.repl');
goog.require('cljs.core.async');
goog.require('cljs.pprint');
goog.require('cljs_browser_repl.state');
cljs_browser_repl.actions.notebook.cmd_to_history_BANG_ = (function cljs_browser_repl$actions$notebook$cmd_to_history_BANG_(cmd){
return cljs.core.swap_BANG_.call(null,cljs_browser_repl.state.history,cljs_browser_repl.state.add_entry,cljs_browser_repl.state.to_repl.call(null,cmd));
});
cljs_browser_repl.actions.notebook.disable_stops_BANG_ = (function cljs_browser_repl$actions$notebook$disable_stops_BANG_(){
return cljs.core.swap_BANG_.call(null,cljs_browser_repl.state.history,(function (h){
return cljs.core.mapv.call(null,(function (p1__14555_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__14555_SHARP_),new cljs.core.Keyword(null,"stop","stop",-2140911342))){
return cljs.core.assoc.call(null,p1__14555_SHARP_,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true);
} else {
return p1__14555_SHARP_;
}
}),h);
}));
});
cljs_browser_repl.actions.notebook.add_separator_BANG_ = (function cljs_browser_repl$actions$notebook$add_separator_BANG_(){
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,cljs.core.deref.call(null,cljs_browser_repl.state.history))),new cljs.core.Keyword(null,"stop","stop",-2140911342))){
return cljs.core.swap_BANG_.call(null,cljs_browser_repl.state.history,cljs_browser_repl.state.add_entry,cljs_browser_repl.state.to_repl.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"separator","separator",-1628749125)], null)));
} else {
return null;
}
});
cljs_browser_repl.actions.notebook.play_notebook_BANG_ = (function cljs_browser_repl$actions$notebook$play_notebook_BANG_(){
var position_14570 = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_browser_repl.state.current_notebook));
var started_QMARK__14571 = typeof position_14570 === 'number';
var map__14563_14572 = cljs_browser_repl.state.current_command.call(null,cljs.core.deref.call(null,cljs_browser_repl.state.current_notebook));
var map__14563_14573__$1 = ((((!((map__14563_14572 == null)))?((((map__14563_14572.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14563_14572.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14563_14572):map__14563_14572);
var cmd_14574 = map__14563_14573__$1;
var type_14575 = cljs.core.get.call(null,map__14563_14573__$1,new cljs.core.Keyword(null,"type","type",1174270348));
if((started_QMARK__14571) && (cljs.core._EQ_.call(null,type_14575,new cljs.core.Keyword(null,"stop","stop",-2140911342)))){
cljs_browser_repl.actions.notebook.disable_stops_BANG_.call(null);

cljs_browser_repl.actions.notebook.add_separator_BANG_.call(null);

cljs.core.swap_BANG_.call(null,cljs_browser_repl.state.current_notebook,cljs.core.update,new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.inc);
} else {
}

var temp__4425__auto__ = cljs_browser_repl.state.current_command.call(null,cljs.core.deref.call(null,cljs_browser_repl.state.current_notebook));
if(cljs.core.truth_(temp__4425__auto__)){
var map__14565 = temp__4425__auto__;
var map__14565__$1 = ((((!((map__14565 == null)))?((((map__14565.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14565.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14565):map__14565);
var cmd = map__14565__$1;
var type = cljs.core.get.call(null,map__14565__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var pos = (function (){var or__11897__auto__ = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_browser_repl.state.current_notebook));
if(cljs.core.truth_(or__11897__auto__)){
return or__11897__auto__;
} else {
return (0);
}
})();
while(true){
var cmds = new cljs.core.Keyword(null,"cmds","cmds",-1841503952).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_browser_repl.state.current_notebook));
var map__14567 = cljs.core.nth.call(null,cmds,pos);
var map__14567__$1 = ((((!((map__14567 == null)))?((((map__14567.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14567.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14567):map__14567);
var cmd__$1 = map__14567__$1;
var type__$1 = cljs.core.get.call(null,map__14567__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var value = cljs.core.get.call(null,map__14567__$1,new cljs.core.Keyword(null,"value","value",305978217));
var silent_QMARK_ = cljs.core.get.call(null,map__14567__$1,new cljs.core.Keyword(null,"silent?","silent?",-1639424539));
var new_pos = (pos + (1));
var G__14569_14576 = (((type__$1 instanceof cljs.core.Keyword))?type__$1.fqn:null);
switch (G__14569_14576) {
case "input":
if(cljs.core.truth_(new cljs.core.Keyword(null,"sample?","sample?",-606794501).cljs$core$IFn$_invoke$arity$1(cmd__$1))){
cljs_browser_repl.actions.notebook.cmd_to_history_BANG_.call(null,cmd__$1);
} else {
cljs_browser_repl.actions.repl.repl_entry_BANG_.call(null,value,cljs.core.not.call(null,silent_QMARK_));
}

break;
default:
cljs_browser_repl.actions.notebook.cmd_to_history_BANG_.call(null,cmd__$1);

}

if((cljs.core.not_EQ_.call(null,type__$1,new cljs.core.Keyword(null,"stop","stop",-2140911342))) && ((new_pos < cljs.core.count.call(null,cmds)))){
cljs.core.swap_BANG_.call(null,cljs_browser_repl.state.current_notebook,cljs.core.assoc,new cljs.core.Keyword(null,"position","position",-2011731912),new_pos);

var G__14578 = new_pos;
pos = G__14578;
continue;
} else {
return null;
}
break;
}
} else {
return null;
}
});
cljs_browser_repl.actions.notebook.from_gist_BANG_ = (function cljs_browser_repl$actions$notebook$from_gist_BANG_(var_args){
var args14579 = [];
var len__12955__auto___14600 = arguments.length;
var i__12956__auto___14601 = (0);
while(true){
if((i__12956__auto___14601 < len__12955__auto___14600)){
args14579.push((arguments[i__12956__auto___14601]));

var G__14602 = (i__12956__auto___14601 + (1));
i__12956__auto___14601 = G__14602;
continue;
} else {
}
break;
}

var G__14581 = args14579.length;
switch (G__14581) {
case 1:
return cljs_browser_repl.actions.notebook.from_gist_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_browser_repl.actions.notebook.from_gist_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14579.length)].join('')));

}
});

cljs_browser_repl.actions.notebook.from_gist_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (id){
return cljs_browser_repl.actions.notebook.from_gist_BANG_.call(null,id,"index");
});

cljs_browser_repl.actions.notebook.from_gist_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (id,file_name){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_browser_repl.state.current_notebook)),id)){
cljs.core.swap_BANG_.call(null,cljs_browser_repl.state.current_notebook,cljs.core.assoc,new cljs.core.Keyword(null,"position","position",-2011731912),(0),new cljs.core.Keyword(null,"cmds","cmds",-1841503952),cljs_browser_repl.net.gist.get_commands.call(null,new cljs.core.Keyword(null,"gist","gist",96143031).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_browser_repl.state.current_notebook)),file_name));

return cljs_browser_repl.actions.notebook.play_notebook_BANG_.call(null);
} else {
cljs.core.reset_BANG_.call(null,cljs_browser_repl.state.history,cljs.core.PersistentVector.EMPTY);

var c__13922__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13922__auto__){
return (function (){
var f__13923__auto__ = (function (){var switch__13901__auto__ = ((function (c__13922__auto__){
return (function (state_14590){
var state_val_14591 = (state_14590[(1)]);
if((state_val_14591 === (1))){
var inst_14582 = cljs_browser_repl.net.gist.get_BANG_.call(null,id);
var state_14590__$1 = state_14590;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14590__$1,(2),inst_14582);
} else {
if((state_val_14591 === (2))){
var inst_14584 = (state_14590[(2)]);
var inst_14585 = cljs_browser_repl.net.gist.get_commands.call(null,inst_14584,file_name);
var inst_14586 = cljs.core.reset_BANG_.call(null,cljs_browser_repl.state.current_notebook,cljs_browser_repl.state.empty_notebook);
var inst_14587 = cljs.core.swap_BANG_.call(null,cljs_browser_repl.state.current_notebook,cljs.core.assoc,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"gist","gist",96143031),inst_14584,new cljs.core.Keyword(null,"cmds","cmds",-1841503952),inst_14585);
var inst_14588 = cljs_browser_repl.actions.notebook.play_notebook_BANG_.call(null);
var state_14590__$1 = (function (){var statearr_14592 = state_14590;
(statearr_14592[(7)] = inst_14587);

(statearr_14592[(8)] = inst_14586);

return statearr_14592;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14590__$1,inst_14588);
} else {
return null;
}
}
});})(c__13922__auto__))
;
return ((function (switch__13901__auto__,c__13922__auto__){
return (function() {
var cljs_browser_repl$actions$notebook$state_machine__13902__auto__ = null;
var cljs_browser_repl$actions$notebook$state_machine__13902__auto____0 = (function (){
var statearr_14596 = [null,null,null,null,null,null,null,null,null];
(statearr_14596[(0)] = cljs_browser_repl$actions$notebook$state_machine__13902__auto__);

(statearr_14596[(1)] = (1));

return statearr_14596;
});
var cljs_browser_repl$actions$notebook$state_machine__13902__auto____1 = (function (state_14590){
while(true){
var ret_value__13903__auto__ = (function (){try{while(true){
var result__13904__auto__ = switch__13901__auto__.call(null,state_14590);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13904__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13904__auto__;
}
break;
}
}catch (e14597){if((e14597 instanceof Object)){
var ex__13905__auto__ = e14597;
var statearr_14598_14604 = state_14590;
(statearr_14598_14604[(5)] = ex__13905__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14590);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14597;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14605 = state_14590;
state_14590 = G__14605;
continue;
} else {
return ret_value__13903__auto__;
}
break;
}
});
cljs_browser_repl$actions$notebook$state_machine__13902__auto__ = function(state_14590){
switch(arguments.length){
case 0:
return cljs_browser_repl$actions$notebook$state_machine__13902__auto____0.call(this);
case 1:
return cljs_browser_repl$actions$notebook$state_machine__13902__auto____1.call(this,state_14590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_browser_repl$actions$notebook$state_machine__13902__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_browser_repl$actions$notebook$state_machine__13902__auto____0;
cljs_browser_repl$actions$notebook$state_machine__13902__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_browser_repl$actions$notebook$state_machine__13902__auto____1;
return cljs_browser_repl$actions$notebook$state_machine__13902__auto__;
})()
;})(switch__13901__auto__,c__13922__auto__))
})();
var state__13924__auto__ = (function (){var statearr_14599 = f__13923__auto__.call(null);
(statearr_14599[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13922__auto__);

return statearr_14599;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13924__auto__);
});})(c__13922__auto__))
);

return c__13922__auto__;
}
});

cljs_browser_repl.actions.notebook.from_gist_BANG_.cljs$lang$maxFixedArity = 2;
cljs_browser_repl.actions.notebook.from_filesystem_BANG_ = (function cljs_browser_repl$actions$notebook$from_filesystem_BANG_(var_args){
var args14606 = [];
var len__12955__auto___14627 = arguments.length;
var i__12956__auto___14628 = (0);
while(true){
if((i__12956__auto___14628 < len__12955__auto___14627)){
args14606.push((arguments[i__12956__auto___14628]));

var G__14629 = (i__12956__auto___14628 + (1));
i__12956__auto___14628 = G__14629;
continue;
} else {
}
break;
}

var G__14608 = args14606.length;
switch (G__14608) {
case 1:
return cljs_browser_repl.actions.notebook.from_filesystem_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_browser_repl.actions.notebook.from_filesystem_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14606.length)].join('')));

}
});

cljs_browser_repl.actions.notebook.from_filesystem_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (id){
return cljs_browser_repl.actions.notebook.from_filesystem_BANG_.call(null,id,"index");
});

cljs_browser_repl.actions.notebook.from_filesystem_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (id,file_name){
cljs.core.reset_BANG_.call(null,cljs_browser_repl.state.history,cljs.core.PersistentVector.EMPTY);

var c__13922__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13922__auto__){
return (function (){
var f__13923__auto__ = (function (){var switch__13901__auto__ = ((function (c__13922__auto__){
return (function (state_14617){
var state_val_14618 = (state_14617[(1)]);
if((state_val_14618 === (1))){
var inst_14609 = cljs_browser_repl.net.file.get_BANG_.call(null,id,file_name);
var state_14617__$1 = state_14617;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14617__$1,(2),inst_14609);
} else {
if((state_val_14618 === (2))){
var inst_14611 = (state_14617[(2)]);
var inst_14612 = cljs_browser_repl.net.file.get_commands.call(null,inst_14611);
var inst_14613 = cljs.core.reset_BANG_.call(null,cljs_browser_repl.state.current_notebook,cljs_browser_repl.state.empty_notebook);
var inst_14614 = cljs.core.swap_BANG_.call(null,cljs_browser_repl.state.current_notebook,cljs.core.assoc,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"file-name","file-name",-1654217259),file_name,new cljs.core.Keyword(null,"file","file",-1269645878),inst_14611,new cljs.core.Keyword(null,"cmds","cmds",-1841503952),inst_14612);
var inst_14615 = cljs_browser_repl.actions.notebook.play_notebook_BANG_.call(null);
var state_14617__$1 = (function (){var statearr_14619 = state_14617;
(statearr_14619[(7)] = inst_14614);

(statearr_14619[(8)] = inst_14613);

return statearr_14619;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14617__$1,inst_14615);
} else {
return null;
}
}
});})(c__13922__auto__))
;
return ((function (switch__13901__auto__,c__13922__auto__){
return (function() {
var cljs_browser_repl$actions$notebook$state_machine__13902__auto__ = null;
var cljs_browser_repl$actions$notebook$state_machine__13902__auto____0 = (function (){
var statearr_14623 = [null,null,null,null,null,null,null,null,null];
(statearr_14623[(0)] = cljs_browser_repl$actions$notebook$state_machine__13902__auto__);

(statearr_14623[(1)] = (1));

return statearr_14623;
});
var cljs_browser_repl$actions$notebook$state_machine__13902__auto____1 = (function (state_14617){
while(true){
var ret_value__13903__auto__ = (function (){try{while(true){
var result__13904__auto__ = switch__13901__auto__.call(null,state_14617);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13904__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13904__auto__;
}
break;
}
}catch (e14624){if((e14624 instanceof Object)){
var ex__13905__auto__ = e14624;
var statearr_14625_14631 = state_14617;
(statearr_14625_14631[(5)] = ex__13905__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14617);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14624;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14632 = state_14617;
state_14617 = G__14632;
continue;
} else {
return ret_value__13903__auto__;
}
break;
}
});
cljs_browser_repl$actions$notebook$state_machine__13902__auto__ = function(state_14617){
switch(arguments.length){
case 0:
return cljs_browser_repl$actions$notebook$state_machine__13902__auto____0.call(this);
case 1:
return cljs_browser_repl$actions$notebook$state_machine__13902__auto____1.call(this,state_14617);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_browser_repl$actions$notebook$state_machine__13902__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_browser_repl$actions$notebook$state_machine__13902__auto____0;
cljs_browser_repl$actions$notebook$state_machine__13902__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_browser_repl$actions$notebook$state_machine__13902__auto____1;
return cljs_browser_repl$actions$notebook$state_machine__13902__auto__;
})()
;})(switch__13901__auto__,c__13922__auto__))
})();
var state__13924__auto__ = (function (){var statearr_14626 = f__13923__auto__.call(null);
(statearr_14626[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13922__auto__);

return statearr_14626;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13924__auto__);
});})(c__13922__auto__))
);

return c__13922__auto__;
});

cljs_browser_repl.actions.notebook.from_filesystem_BANG_.cljs$lang$maxFixedArity = 2;

//# sourceMappingURL=notebook.js.map?rel=1451063352324