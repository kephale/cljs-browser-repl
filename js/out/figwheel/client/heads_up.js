// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');
figwheel.client.heads_up.clear;

figwheel.client.heads_up.cljs_logo_svg;
figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__12963__auto__ = [];
var len__12956__auto___25333 = arguments.length;
var i__12957__auto___25334 = (0);
while(true){
if((i__12957__auto___25334 < len__12956__auto___25333)){
args__12963__auto__.push((arguments[i__12957__auto___25334]));

var G__25335 = (i__12957__auto___25334 + (1));
i__12957__auto___25334 = G__25335;
continue;
} else {
}
break;
}

var argseq__12964__auto__ = ((((2) < args__12963__auto__.length))?(new cljs.core.IndexedSeq(args__12963__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12964__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__25325_25336 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__25326_25337 = null;
var count__25327_25338 = (0);
var i__25328_25339 = (0);
while(true){
if((i__25328_25339 < count__25327_25338)){
var k_25340 = cljs.core._nth.call(null,chunk__25326_25337,i__25328_25339);
e.setAttribute(cljs.core.name.call(null,k_25340),cljs.core.get.call(null,attrs,k_25340));

var G__25341 = seq__25325_25336;
var G__25342 = chunk__25326_25337;
var G__25343 = count__25327_25338;
var G__25344 = (i__25328_25339 + (1));
seq__25325_25336 = G__25341;
chunk__25326_25337 = G__25342;
count__25327_25338 = G__25343;
i__25328_25339 = G__25344;
continue;
} else {
var temp__4425__auto___25345 = cljs.core.seq.call(null,seq__25325_25336);
if(temp__4425__auto___25345){
var seq__25325_25346__$1 = temp__4425__auto___25345;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25325_25346__$1)){
var c__12701__auto___25347 = cljs.core.chunk_first.call(null,seq__25325_25346__$1);
var G__25348 = cljs.core.chunk_rest.call(null,seq__25325_25346__$1);
var G__25349 = c__12701__auto___25347;
var G__25350 = cljs.core.count.call(null,c__12701__auto___25347);
var G__25351 = (0);
seq__25325_25336 = G__25348;
chunk__25326_25337 = G__25349;
count__25327_25338 = G__25350;
i__25328_25339 = G__25351;
continue;
} else {
var k_25352 = cljs.core.first.call(null,seq__25325_25346__$1);
e.setAttribute(cljs.core.name.call(null,k_25352),cljs.core.get.call(null,attrs,k_25352));

var G__25353 = cljs.core.next.call(null,seq__25325_25346__$1);
var G__25354 = null;
var G__25355 = (0);
var G__25356 = (0);
seq__25325_25336 = G__25353;
chunk__25326_25337 = G__25354;
count__25327_25338 = G__25355;
i__25328_25339 = G__25356;
continue;
}
} else {
}
}
break;
}

var seq__25329_25357 = cljs.core.seq.call(null,children);
var chunk__25330_25358 = null;
var count__25331_25359 = (0);
var i__25332_25360 = (0);
while(true){
if((i__25332_25360 < count__25331_25359)){
var ch_25361 = cljs.core._nth.call(null,chunk__25330_25358,i__25332_25360);
e.appendChild(ch_25361);

var G__25362 = seq__25329_25357;
var G__25363 = chunk__25330_25358;
var G__25364 = count__25331_25359;
var G__25365 = (i__25332_25360 + (1));
seq__25329_25357 = G__25362;
chunk__25330_25358 = G__25363;
count__25331_25359 = G__25364;
i__25332_25360 = G__25365;
continue;
} else {
var temp__4425__auto___25366 = cljs.core.seq.call(null,seq__25329_25357);
if(temp__4425__auto___25366){
var seq__25329_25367__$1 = temp__4425__auto___25366;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25329_25367__$1)){
var c__12701__auto___25368 = cljs.core.chunk_first.call(null,seq__25329_25367__$1);
var G__25369 = cljs.core.chunk_rest.call(null,seq__25329_25367__$1);
var G__25370 = c__12701__auto___25368;
var G__25371 = cljs.core.count.call(null,c__12701__auto___25368);
var G__25372 = (0);
seq__25329_25357 = G__25369;
chunk__25330_25358 = G__25370;
count__25331_25359 = G__25371;
i__25332_25360 = G__25372;
continue;
} else {
var ch_25373 = cljs.core.first.call(null,seq__25329_25367__$1);
e.appendChild(ch_25373);

var G__25374 = cljs.core.next.call(null,seq__25329_25367__$1);
var G__25375 = null;
var G__25376 = (0);
var G__25377 = (0);
seq__25329_25357 = G__25374;
chunk__25330_25358 = G__25375;
count__25331_25359 = G__25376;
i__25332_25360 = G__25377;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq25322){
var G__25323 = cljs.core.first.call(null,seq25322);
var seq25322__$1 = cljs.core.next.call(null,seq25322);
var G__25324 = cljs.core.first.call(null,seq25322__$1);
var seq25322__$2 = cljs.core.next.call(null,seq25322__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__25323,G__25324,seq25322__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__12811__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__12812__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__12813__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__12814__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__12815__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__12811__auto__,prefer_table__12812__auto__,method_cache__12813__auto__,cached_hierarchy__12814__auto__,hierarchy__12815__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__12811__auto__,prefer_table__12812__auto__,method_cache__12813__auto__,cached_hierarchy__12814__auto__,hierarchy__12815__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__12815__auto__,method_table__12811__auto__,prefer_table__12812__auto__,method_cache__12813__auto__,cached_hierarchy__12814__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_25378 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_25378.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_25378.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_25378.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_25378);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__25379,st_map){
var map__25384 = p__25379;
var map__25384__$1 = ((((!((map__25384 == null)))?((((map__25384.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25384.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25384):map__25384);
var container_el = cljs.core.get.call(null,map__25384__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__25384,map__25384__$1,container_el){
return (function (p__25386){
var vec__25387 = p__25386;
var k = cljs.core.nth.call(null,vec__25387,(0),null);
var v = cljs.core.nth.call(null,vec__25387,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__25384,map__25384__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__25388,dom_str){
var map__25391 = p__25388;
var map__25391__$1 = ((((!((map__25391 == null)))?((((map__25391.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25391.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25391):map__25391);
var c = map__25391__$1;
var content_area_el = cljs.core.get.call(null,map__25391__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__25393){
var map__25396 = p__25393;
var map__25396__$1 = ((((!((map__25396 == null)))?((((map__25396.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25396.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25396):map__25396);
var content_area_el = cljs.core.get.call(null,map__25396__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__17398__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17398__auto__){
return (function (){
var f__17399__auto__ = (function (){var switch__17286__auto__ = ((function (c__17398__auto__){
return (function (state_25439){
var state_val_25440 = (state_25439[(1)]);
if((state_val_25440 === (1))){
var inst_25424 = (state_25439[(7)]);
var inst_25424__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_25425 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_25426 = ["10px","10px","100%","68px","1.0"];
var inst_25427 = cljs.core.PersistentHashMap.fromArrays(inst_25425,inst_25426);
var inst_25428 = cljs.core.merge.call(null,inst_25427,style);
var inst_25429 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_25424__$1,inst_25428);
var inst_25430 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_25424__$1,msg);
var inst_25431 = cljs.core.async.timeout.call(null,(300));
var state_25439__$1 = (function (){var statearr_25441 = state_25439;
(statearr_25441[(8)] = inst_25430);

(statearr_25441[(7)] = inst_25424__$1);

(statearr_25441[(9)] = inst_25429);

return statearr_25441;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25439__$1,(2),inst_25431);
} else {
if((state_val_25440 === (2))){
var inst_25424 = (state_25439[(7)]);
var inst_25433 = (state_25439[(2)]);
var inst_25434 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_25435 = ["auto"];
var inst_25436 = cljs.core.PersistentHashMap.fromArrays(inst_25434,inst_25435);
var inst_25437 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_25424,inst_25436);
var state_25439__$1 = (function (){var statearr_25442 = state_25439;
(statearr_25442[(10)] = inst_25433);

return statearr_25442;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25439__$1,inst_25437);
} else {
return null;
}
}
});})(c__17398__auto__))
;
return ((function (switch__17286__auto__,c__17398__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__17287__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__17287__auto____0 = (function (){
var statearr_25446 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25446[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__17287__auto__);

(statearr_25446[(1)] = (1));

return statearr_25446;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__17287__auto____1 = (function (state_25439){
while(true){
var ret_value__17288__auto__ = (function (){try{while(true){
var result__17289__auto__ = switch__17286__auto__.call(null,state_25439);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17289__auto__;
}
break;
}
}catch (e25447){if((e25447 instanceof Object)){
var ex__17290__auto__ = e25447;
var statearr_25448_25450 = state_25439;
(statearr_25448_25450[(5)] = ex__17290__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25439);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25447;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25451 = state_25439;
state_25439 = G__25451;
continue;
} else {
return ret_value__17288__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__17287__auto__ = function(state_25439){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__17287__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__17287__auto____1.call(this,state_25439);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__17287__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__17287__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__17287__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__17287__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__17287__auto__;
})()
;})(switch__17286__auto__,c__17398__auto__))
})();
var state__17400__auto__ = (function (){var statearr_25449 = f__17399__auto__.call(null);
(statearr_25449[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17398__auto__);

return statearr_25449;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17400__auto__);
});})(c__17398__auto__))
);

return c__17398__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4423__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__25453 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__25453,(0),null);
var ln = cljs.core.nth.call(null,vec__25453,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__25456 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__25456,(0),null);
var file_line = cljs.core.nth.call(null,vec__25456,(1),null);
var file_column = cljs.core.nth.call(null,vec__25456,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__25456,file_name,file_line,file_column){
return (function (p1__25454_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__25454_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__25456,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__11897__auto__ = file_line;
if(cljs.core.truth_(or__11897__auto__)){
return or__11897__auto__;
} else {
var and__11885__auto__ = cause;
if(cljs.core.truth_(and__11885__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__11885__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__25459 = figwheel.client.heads_up.ensure_container.call(null);
var map__25459__$1 = ((((!((map__25459 == null)))?((((map__25459.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25459.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25459):map__25459);
var content_area_el = cljs.core.get.call(null,map__25459__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__17398__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17398__auto__){
return (function (){
var f__17399__auto__ = (function (){var switch__17286__auto__ = ((function (c__17398__auto__){
return (function (state_25507){
var state_val_25508 = (state_25507[(1)]);
if((state_val_25508 === (1))){
var inst_25490 = (state_25507[(7)]);
var inst_25490__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_25491 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_25492 = ["0.0"];
var inst_25493 = cljs.core.PersistentHashMap.fromArrays(inst_25491,inst_25492);
var inst_25494 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_25490__$1,inst_25493);
var inst_25495 = cljs.core.async.timeout.call(null,(300));
var state_25507__$1 = (function (){var statearr_25509 = state_25507;
(statearr_25509[(8)] = inst_25494);

(statearr_25509[(7)] = inst_25490__$1);

return statearr_25509;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25507__$1,(2),inst_25495);
} else {
if((state_val_25508 === (2))){
var inst_25490 = (state_25507[(7)]);
var inst_25497 = (state_25507[(2)]);
var inst_25498 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_25499 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_25500 = cljs.core.PersistentHashMap.fromArrays(inst_25498,inst_25499);
var inst_25501 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_25490,inst_25500);
var inst_25502 = cljs.core.async.timeout.call(null,(200));
var state_25507__$1 = (function (){var statearr_25510 = state_25507;
(statearr_25510[(9)] = inst_25497);

(statearr_25510[(10)] = inst_25501);

return statearr_25510;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25507__$1,(3),inst_25502);
} else {
if((state_val_25508 === (3))){
var inst_25490 = (state_25507[(7)]);
var inst_25504 = (state_25507[(2)]);
var inst_25505 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_25490,"");
var state_25507__$1 = (function (){var statearr_25511 = state_25507;
(statearr_25511[(11)] = inst_25504);

return statearr_25511;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25507__$1,inst_25505);
} else {
return null;
}
}
}
});})(c__17398__auto__))
;
return ((function (switch__17286__auto__,c__17398__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__17287__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__17287__auto____0 = (function (){
var statearr_25515 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25515[(0)] = figwheel$client$heads_up$clear_$_state_machine__17287__auto__);

(statearr_25515[(1)] = (1));

return statearr_25515;
});
var figwheel$client$heads_up$clear_$_state_machine__17287__auto____1 = (function (state_25507){
while(true){
var ret_value__17288__auto__ = (function (){try{while(true){
var result__17289__auto__ = switch__17286__auto__.call(null,state_25507);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17289__auto__;
}
break;
}
}catch (e25516){if((e25516 instanceof Object)){
var ex__17290__auto__ = e25516;
var statearr_25517_25519 = state_25507;
(statearr_25517_25519[(5)] = ex__17290__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25507);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25516;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25520 = state_25507;
state_25507 = G__25520;
continue;
} else {
return ret_value__17288__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__17287__auto__ = function(state_25507){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__17287__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__17287__auto____1.call(this,state_25507);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__17287__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__17287__auto____0;
figwheel$client$heads_up$clear_$_state_machine__17287__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__17287__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__17287__auto__;
})()
;})(switch__17286__auto__,c__17398__auto__))
})();
var state__17400__auto__ = (function (){var statearr_25518 = f__17399__auto__.call(null);
(statearr_25518[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17398__auto__);

return statearr_25518;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17400__auto__);
});})(c__17398__auto__))
);

return c__17398__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__17398__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17398__auto__){
return (function (){
var f__17399__auto__ = (function (){var switch__17286__auto__ = ((function (c__17398__auto__){
return (function (state_25552){
var state_val_25553 = (state_25552[(1)]);
if((state_val_25553 === (1))){
var inst_25542 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_25552__$1 = state_25552;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25552__$1,(2),inst_25542);
} else {
if((state_val_25553 === (2))){
var inst_25544 = (state_25552[(2)]);
var inst_25545 = cljs.core.async.timeout.call(null,(400));
var state_25552__$1 = (function (){var statearr_25554 = state_25552;
(statearr_25554[(7)] = inst_25544);

return statearr_25554;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25552__$1,(3),inst_25545);
} else {
if((state_val_25553 === (3))){
var inst_25547 = (state_25552[(2)]);
var inst_25548 = figwheel.client.heads_up.clear.call(null);
var state_25552__$1 = (function (){var statearr_25555 = state_25552;
(statearr_25555[(8)] = inst_25547);

return statearr_25555;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25552__$1,(4),inst_25548);
} else {
if((state_val_25553 === (4))){
var inst_25550 = (state_25552[(2)]);
var state_25552__$1 = state_25552;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25552__$1,inst_25550);
} else {
return null;
}
}
}
}
});})(c__17398__auto__))
;
return ((function (switch__17286__auto__,c__17398__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__17287__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__17287__auto____0 = (function (){
var statearr_25559 = [null,null,null,null,null,null,null,null,null];
(statearr_25559[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__17287__auto__);

(statearr_25559[(1)] = (1));

return statearr_25559;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__17287__auto____1 = (function (state_25552){
while(true){
var ret_value__17288__auto__ = (function (){try{while(true){
var result__17289__auto__ = switch__17286__auto__.call(null,state_25552);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17289__auto__;
}
break;
}
}catch (e25560){if((e25560 instanceof Object)){
var ex__17290__auto__ = e25560;
var statearr_25561_25563 = state_25552;
(statearr_25561_25563[(5)] = ex__17290__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25552);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25560;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25564 = state_25552;
state_25552 = G__25564;
continue;
} else {
return ret_value__17288__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__17287__auto__ = function(state_25552){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__17287__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__17287__auto____1.call(this,state_25552);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__17287__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__17287__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__17287__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__17287__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__17287__auto__;
})()
;})(switch__17286__auto__,c__17398__auto__))
})();
var state__17400__auto__ = (function (){var statearr_25562 = f__17399__auto__.call(null);
(statearr_25562[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17398__auto__);

return statearr_25562;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17400__auto__);
});})(c__17398__auto__))
);

return c__17398__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1451058380843