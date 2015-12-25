// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs_mathbox.mathbox');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljsjs.mathbox');
/**
 * Create and return a mathbox instance. mathBox must be defined as a top-level
 *   JS variable (which just means loading the library in your HTML file). The instance will be attached to a div you name (or 'mathboxdiv' if divname is nil)
 */
cljs_mathbox.mathbox.create_mathbox = (function cljs_mathbox$mathbox$create_mathbox(var_args){
var args__12962__auto__ = [];
var len__12955__auto___14339 = arguments.length;
var i__12956__auto___14340 = (0);
while(true){
if((i__12956__auto___14340 < len__12955__auto___14339)){
args__12962__auto__.push((arguments[i__12956__auto___14340]));

var G__14341 = (i__12956__auto___14340 + (1));
i__12956__auto___14340 = G__14341;
continue;
} else {
}
break;
}

var argseq__12963__auto__ = ((((2) < args__12962__auto__.length))?(new cljs.core.IndexedSeq(args__12962__auto__.slice((2)),(0))):null);
return cljs_mathbox.mathbox.create_mathbox.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12963__auto__);
});

cljs_mathbox.mathbox.create_mathbox.cljs$core$IFn$_invoke$arity$variadic = (function (shader_file,opts_map,divname){
var defaults = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"cameraControls","cameraControls",1353112542),true,new cljs.core.Keyword(null,"cursor","cursor",1011937484),true,new cljs.core.Keyword(null,"stats","stats",-85643011),false,new cljs.core.Keyword(null,"elementResize","elementResize",-1069714999),true,new cljs.core.Keyword(null,"expression","expression",202311876),cljs.core.constantly.call(null,(0))], null);
var mb_div = (function (){var or__11897__auto__ = cljs.core.first.call(null,divname);
if(cljs.core.truth_(or__11897__auto__)){
return or__11897__auto__;
} else {
return "mathboxdiv";
}
})();
var containing_element = document.getElementById(mb_div);
var mb = (cljs.core.truth_(containing_element)?(new mathBox(containing_element,cljs.core.clj__GT_js.call(null,cljs.core.into.call(null,defaults,opts_map)))).start():(new mathBox(cljs.core.clj__GT_js.call(null,cljs.core.into.call(null,defaults,opts_map)))).start());
var shader_filename = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shader_file], null));
var _ = ThreeBox.preload(shader_filename,((function (defaults,mb_div,containing_element,mb,shader_filename){
return (function (){
return cljs.core.List.EMPTY;
});})(defaults,mb_div,containing_element,mb,shader_filename))
);
return mb;
});

cljs_mathbox.mathbox.create_mathbox.cljs$lang$maxFixedArity = (2);

cljs_mathbox.mathbox.create_mathbox.cljs$lang$applyTo = (function (seq14336){
var G__14337 = cljs.core.first.call(null,seq14336);
var seq14336__$1 = cljs.core.next.call(null,seq14336);
var G__14338 = cljs.core.first.call(null,seq14336__$1);
var seq14336__$2 = cljs.core.next.call(null,seq14336__$1);
return cljs_mathbox.mathbox.create_mathbox.cljs$core$IFn$_invoke$arity$variadic(G__14337,G__14338,seq14336__$2);
});
cljs_mathbox.mathbox.platonic = (function cljs_mathbox$mathbox$platonic(mb_instance,opts_map){
return mb_instance.platonic(cljs.core.clj__GT_js.call(null,opts_map));
});
cljs_mathbox.mathbox.curve = (function cljs_mathbox$mathbox$curve(mb_instance,opts_map){
return mb_instance.curve(cljs.core.clj__GT_js.call(null,opts_map));
});
cljs_mathbox.mathbox.bezier = (function cljs_mathbox$mathbox$bezier(mb_instance,opts_map){
return mb_instance.bezier(cljs.core.clj__GT_js.call(null,opts_map));
});
cljs_mathbox.mathbox.bezier_surface = (function cljs_mathbox$mathbox$bezier_surface(mb_instance,opts_map){
return mb_instance.bezierSurface(cljs.core.clj__GT_js.call(null,opts_map));
});
cljs_mathbox.mathbox.axis = (function cljs_mathbox$mathbox$axis(mb_instance,opts_map){
return mb_instance.axis(cljs.core.clj__GT_js.call(null,opts_map));
});
cljs_mathbox.mathbox.grid = (function cljs_mathbox$mathbox$grid(mb_instance,opts_map){
return mb_instance.grid(cljs.core.clj__GT_js.call(null,opts_map));
});
cljs_mathbox.mathbox.surface = (function cljs_mathbox$mathbox$surface(mb_instance,opts_map){
return mb_instance.surface(cljs.core.clj__GT_js.call(null,opts_map));
});
/**
 * Named mb-vector in order to not shadow core/vector
 */
cljs_mathbox.mathbox.mb_vector = (function cljs_mathbox$mathbox$mb_vector(mb_instance,opts_map){
return mb_instance.vector(cljs.core.clj__GT_js.call(null,opts_map));
});
/**
 * Remove an object from the stage, with animation props to control eg duration
 */
cljs_mathbox.mathbox.mb_remove = (function cljs_mathbox$mathbox$mb_remove(mb_instance,id,animation_opts_map){
return mb_instance.remove(id,cljs.core.clj__GT_js.call(null,animation_opts_map));
});
cljs_mathbox.mathbox.get_props = (function cljs_mathbox$mathbox$get_props(mb_instance,id){
return cljs.core.js__GT_clj.call(null,mb_instance.get(id));
});
cljs_mathbox.mathbox.get_prop = (function cljs_mathbox$mathbox$get_prop(mb_instance,id,prop_name){
var key = cljs.core.clj__GT_js.call(null,prop_name);
return cljs.core.get.call(null,cljs_mathbox.mathbox.get_props.call(null,mb_instance,id),key);
});
cljs_mathbox.mathbox.set_props_BANG_ = (function cljs_mathbox$mathbox$set_props_BANG_(mb_instance,id,opts_map){
return mb_instance.set(id,cljs.core.clj__GT_js.call(null,opts_map));
});
cljs_mathbox.mathbox.viewport = (function cljs_mathbox$mathbox$viewport(mb_instance,opts_map){
return mb_instance.viewport(cljs.core.clj__GT_js.call(null,opts_map));
});
cljs_mathbox.mathbox.camera = (function cljs_mathbox$mathbox$camera(mb_instance,opts_map){
return mb_instance.camera(cljs.core.clj__GT_js.call(null,opts_map));
});
cljs_mathbox.mathbox.animate = (function cljs_mathbox$mathbox$animate(mb_instance,id,new_opts_map,animation_opts_map){
var c__13922__auto___14368 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13922__auto___14368){
return (function (){
var f__13923__auto__ = (function (){var switch__13901__auto__ = ((function (c__13922__auto___14368){
return (function (state_14359){
var state_val_14360 = (state_14359[(1)]);
if((state_val_14360 === (1))){
var inst_14355 = cljs.core.clj__GT_js.call(null,new_opts_map);
var inst_14356 = cljs.core.clj__GT_js.call(null,animation_opts_map);
var inst_14357 = mb_instance.animate(id,inst_14355,inst_14356);
var state_14359__$1 = state_14359;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14359__$1,inst_14357);
} else {
return null;
}
});})(c__13922__auto___14368))
;
return ((function (switch__13901__auto__,c__13922__auto___14368){
return (function() {
var cljs_mathbox$mathbox$animate_$_state_machine__13902__auto__ = null;
var cljs_mathbox$mathbox$animate_$_state_machine__13902__auto____0 = (function (){
var statearr_14364 = [null,null,null,null,null,null,null];
(statearr_14364[(0)] = cljs_mathbox$mathbox$animate_$_state_machine__13902__auto__);

(statearr_14364[(1)] = (1));

return statearr_14364;
});
var cljs_mathbox$mathbox$animate_$_state_machine__13902__auto____1 = (function (state_14359){
while(true){
var ret_value__13903__auto__ = (function (){try{while(true){
var result__13904__auto__ = switch__13901__auto__.call(null,state_14359);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13904__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13904__auto__;
}
break;
}
}catch (e14365){if((e14365 instanceof Object)){
var ex__13905__auto__ = e14365;
var statearr_14366_14369 = state_14359;
(statearr_14366_14369[(5)] = ex__13905__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14359);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14365;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14370 = state_14359;
state_14359 = G__14370;
continue;
} else {
return ret_value__13903__auto__;
}
break;
}
});
cljs_mathbox$mathbox$animate_$_state_machine__13902__auto__ = function(state_14359){
switch(arguments.length){
case 0:
return cljs_mathbox$mathbox$animate_$_state_machine__13902__auto____0.call(this);
case 1:
return cljs_mathbox$mathbox$animate_$_state_machine__13902__auto____1.call(this,state_14359);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_mathbox$mathbox$animate_$_state_machine__13902__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_mathbox$mathbox$animate_$_state_machine__13902__auto____0;
cljs_mathbox$mathbox$animate_$_state_machine__13902__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_mathbox$mathbox$animate_$_state_machine__13902__auto____1;
return cljs_mathbox$mathbox$animate_$_state_machine__13902__auto__;
})()
;})(switch__13901__auto__,c__13922__auto___14368))
})();
var state__13924__auto__ = (function (){var statearr_14367 = f__13923__auto__.call(null);
(statearr_14367[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13922__auto___14368);

return statearr_14367;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13924__auto__);
});})(c__13922__auto___14368))
);


return mb_instance;
});
/**
 * Named mb-clone in order to not shadow core/clone
 */
cljs_mathbox.mathbox.mb_clone = (function cljs_mathbox$mathbox$mb_clone(mb_instance,id,new_opts_map,animation_opts_map){
var c__13922__auto___14397 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13922__auto___14397){
return (function (){
var f__13923__auto__ = (function (){var switch__13901__auto__ = ((function (c__13922__auto___14397){
return (function (state_14388){
var state_val_14389 = (state_14388[(1)]);
if((state_val_14389 === (1))){
var inst_14384 = cljs.core.clj__GT_js.call(null,new_opts_map);
var inst_14385 = cljs.core.clj__GT_js.call(null,animation_opts_map);
var inst_14386 = mb_instance.clone(id,inst_14384,inst_14385);
var state_14388__$1 = state_14388;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14388__$1,inst_14386);
} else {
return null;
}
});})(c__13922__auto___14397))
;
return ((function (switch__13901__auto__,c__13922__auto___14397){
return (function() {
var cljs_mathbox$mathbox$mb_clone_$_state_machine__13902__auto__ = null;
var cljs_mathbox$mathbox$mb_clone_$_state_machine__13902__auto____0 = (function (){
var statearr_14393 = [null,null,null,null,null,null,null];
(statearr_14393[(0)] = cljs_mathbox$mathbox$mb_clone_$_state_machine__13902__auto__);

(statearr_14393[(1)] = (1));

return statearr_14393;
});
var cljs_mathbox$mathbox$mb_clone_$_state_machine__13902__auto____1 = (function (state_14388){
while(true){
var ret_value__13903__auto__ = (function (){try{while(true){
var result__13904__auto__ = switch__13901__auto__.call(null,state_14388);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13904__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13904__auto__;
}
break;
}
}catch (e14394){if((e14394 instanceof Object)){
var ex__13905__auto__ = e14394;
var statearr_14395_14398 = state_14388;
(statearr_14395_14398[(5)] = ex__13905__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14388);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14394;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14399 = state_14388;
state_14388 = G__14399;
continue;
} else {
return ret_value__13903__auto__;
}
break;
}
});
cljs_mathbox$mathbox$mb_clone_$_state_machine__13902__auto__ = function(state_14388){
switch(arguments.length){
case 0:
return cljs_mathbox$mathbox$mb_clone_$_state_machine__13902__auto____0.call(this);
case 1:
return cljs_mathbox$mathbox$mb_clone_$_state_machine__13902__auto____1.call(this,state_14388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_mathbox$mathbox$mb_clone_$_state_machine__13902__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_mathbox$mathbox$mb_clone_$_state_machine__13902__auto____0;
cljs_mathbox$mathbox$mb_clone_$_state_machine__13902__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_mathbox$mathbox$mb_clone_$_state_machine__13902__auto____1;
return cljs_mathbox$mathbox$mb_clone_$_state_machine__13902__auto__;
})()
;})(switch__13901__auto__,c__13922__auto___14397))
})();
var state__13924__auto__ = (function (){var statearr_14396 = f__13923__auto__.call(null);
(statearr_14396[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13922__auto___14397);

return statearr_14396;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13924__auto__);
});})(c__13922__auto___14397))
);


return mb_instance;
});

//# sourceMappingURL=mathbox.js.map?rel=1451063348074