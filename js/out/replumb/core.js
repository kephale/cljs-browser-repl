// Compiled by ClojureScript 1.7.170 {}
goog.provide('replumb.core');
goog.require('cljs.core');
goog.require('replumb.target');
goog.require('cljs.js');
goog.require('replumb.target.nodejs');
goog.require('replumb.repl');
goog.require('replumb.common');
/**
 * Reads, evaluates and calls back with the evaluation result.
 * 
 *   The first parameter is a map of configuration options, currently
 *   supporting:
 * 
 *   * `:verbose` will enable the the evaluation logging, defaults to false
 *   * `:target` `:nodejs` and `:default` supported, the latter used if missing
 *   * `:init-fn!` user provided initialization function, it will be passed a
 *   map:
 * 
 *        :form   ;; the form to evaluate, as data
 *        :ns     ;; the current namespace, as symbol
 *        :target ;; the current target
 * 
 *   * `:load-fn!` will override ClojureScript's default `cljs.js/*load-fn*`:
 * 
 *    > Each runtime environment provides a different way to load a library.
 *    > Whatever function `*load-fn*` is bound to will be passed two arguments
 *    > - a map and a callback function: The map will have the following keys:
 *    >
 *    >     :name   - the name of the library (a symbol)
 *    >     :macros - modifier signaling a macros namespace load
 *    >     :path   - munged relative library path (a string)
 *    >
 *    > The callback cb, upon resolution, will need to pass the same map:
 *    >
 *    >     :lang       - the language, :clj or :js
 *    >     :source     - the source of the library (a string)
 *    >     :cache      - optional, if a :clj namespace has been precompiled to
 *    >                   :js, can give an analysis cache for faster loads.
 *    >     :source-map - optional, if a :clj namespace has been precompiled
 *    >                   to :js, can give a V3 source map JSON
 *    >
 *    > If the resource could not be resolved, the callback should be invoked with
 *    > nil.
 * 
 *   The second parameter, `callback`, should be a 1-arity function which receives
 *   the result map, whose result keys will be:
 * 
 *   ```
 *   :success?  ;; a boolean indicating if everything went right
 *   :value     ;; (if (success? result)) will contain the actual yield of the evaluation
 *   :error     ;; (if (not (success? result)) will contain a js/Error
 *   :form      ;; the evaluated form as data structure (not a string)
 *   ```
 * 
 *   It initializes the repl harness if necessary.
 */
replumb.core.read_eval_call = (function replumb$core$read_eval_call(var_args){
var args22073 = [];
var len__12956__auto___22076 = arguments.length;
var i__12957__auto___22077 = (0);
while(true){
if((i__12957__auto___22077 < len__12956__auto___22076)){
args22073.push((arguments[i__12957__auto___22077]));

var G__22078 = (i__12957__auto___22077 + (1));
i__12957__auto___22077 = G__22078;
continue;
} else {
}
break;
}

var G__22075 = args22073.length;
switch (G__22075) {
case 2:
return replumb.core.read_eval_call.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return replumb.core.read_eval_call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22073.length)].join('')));

}
});
goog.exportSymbol('replumb.core.read_eval_call', replumb.core.read_eval_call);

replumb.core.read_eval_call.cljs$core$IFn$_invoke$arity$2 = (function (callback,source){
return replumb.repl.read_eval_call.call(null,cljs.core.PersistentArrayMap.EMPTY,callback,source);
});

replumb.core.read_eval_call.cljs$core$IFn$_invoke$arity$3 = (function (opts,callback,source){
return replumb.repl.read_eval_call.call(null,opts,callback,source);
});

replumb.core.read_eval_call.cljs$lang$maxFixedArity = 3;
/**
 * Retrieves the REPL prompt to display, according to the current
 *   namespace. Returns a string.
 */
replumb.core.get_prompt = (function replumb$core$get_prompt(){
return [cljs.core.str(replumb.repl.current_ns.call(null)),cljs.core.str("=> ")].join('');
});
goog.exportSymbol('replumb.core.get_prompt', replumb.core.get_prompt);
/**
 * Return the message string of the input `js/Error`.
 */
replumb.core.error__GT_str = (function replumb$core$error__GT_str(var_args){
var args22080 = [];
var len__12956__auto___22083 = arguments.length;
var i__12957__auto___22084 = (0);
while(true){
if((i__12957__auto___22084 < len__12956__auto___22083)){
args22080.push((arguments[i__12957__auto___22084]));

var G__22085 = (i__12957__auto___22084 + (1));
i__12957__auto___22084 = G__22085;
continue;
} else {
}
break;
}

var G__22082 = args22080.length;
switch (G__22082) {
case 1:
return replumb.core.error__GT_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return replumb.core.error__GT_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22080.length)].join('')));

}
});
goog.exportSymbol('replumb.core.error__GT_str', replumb.core.error__GT_str);

replumb.core.error__GT_str.cljs$core$IFn$_invoke$arity$1 = (function (error){
return replumb.common.extract_message.call(null,error);
});

replumb.core.error__GT_str.cljs$core$IFn$_invoke$arity$2 = (function (error,print_stack_QMARK_){
return replumb.common.extract_message.call(null,error,print_stack_QMARK_);
});

replumb.core.error__GT_str.cljs$lang$maxFixedArity = 2;
/**
 * Unwraps the result of an evaluation.
 * 
 *   It returns the content of `:value` in case of success and the content
 *   of `:error` (a `js/Error`) in case of failure.
 */
replumb.core.unwrap_result = (function replumb$core$unwrap_result(result_map){
if(cljs.core.truth_(new cljs.core.Keyword(null,"success?","success?",-122854052).cljs$core$IFn$_invoke$arity$1(result_map))){
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(result_map);
} else {
return new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(result_map);
}
});
goog.exportSymbol('replumb.core.unwrap_result', replumb.core.unwrap_result);
/**
 * Given a `result-map`, tells whether the evaluation was successful.
 */
replumb.core.success_QMARK_ = (function replumb$core$success_QMARK_(result_map){
return new cljs.core.Keyword(null,"success?","success?",-122854052).cljs$core$IFn$_invoke$arity$1(result_map);
});
goog.exportSymbol('replumb.core.success_QMARK_', replumb.core.success_QMARK_);
/**
 * Given a `result-map`, returns the result of an evaluation as string.
 */
replumb.core.result__GT_string = (function replumb$core$result__GT_string(var_args){
var args22087 = [];
var len__12956__auto___22090 = arguments.length;
var i__12957__auto___22091 = (0);
while(true){
if((i__12957__auto___22091 < len__12956__auto___22090)){
args22087.push((arguments[i__12957__auto___22091]));

var G__22092 = (i__12957__auto___22091 + (1));
i__12957__auto___22091 = G__22092;
continue;
} else {
}
break;
}

var G__22089 = args22087.length;
switch (G__22089) {
case 1:
return replumb.core.result__GT_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return replumb.core.result__GT_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22087.length)].join('')));

}
});
goog.exportSymbol('replumb.core.result__GT_string', replumb.core.result__GT_string);

replumb.core.result__GT_string.cljs$core$IFn$_invoke$arity$1 = (function (result_map){
return replumb.core.result__GT_string.call(null,result_map,false);
});

replumb.core.result__GT_string.cljs$core$IFn$_invoke$arity$2 = (function (result_map,print_stack_QMARK_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"success?","success?",-122854052).cljs$core$IFn$_invoke$arity$1(result_map))){
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(result_map);
} else {
return replumb.common.extract_message.call(null,new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(result_map),false,print_stack_QMARK_);
}
});

replumb.core.result__GT_string.cljs$lang$maxFixedArity = 2;
/**
 * Creates a Node.js option map for read-eval-call.
 * 
 *   The first param of the 2-arity signature plugs in a `load-fn!`. It
 *   needs the source paths and a 2-arity function `(fn [filename source-cb]
 *   ...)` where source-cb is itself a function `(fn [source] ...)` that needs
 *   to be called with the source of the library (as string) when ready.
 *   The no-arity signature does not add any `load-fn!` to the option map.
 * 
 *   The attached `load-fn!` is akin to `cljs.js/*load-fn*`:
 * 
 *   > Each runtime environment provides a different way to load a library.
 *   > Whatever function `*load-fn*` is bound to will be passed two arguments - a
 *   > map and a callback function: The map will have the following keys:
 *   >
 *   >     :name   - the name of the library (a symbol)
 *   >     :macros - modifier signaling a macros namespace load
 *   >     :path   - munged relative library path (a string)
 *   >
 *   > The callback cb, upon resolution, will need to pass the same map:
 *   >
 *   >     :lang       - the language, :clj or :js
 *   >     :source     - the source of the library (a string)
 *   >     :cache      - optional, if a :clj namespace has been precompiled to :js, can
 *   >                   give an analysis cache for faster loads.
 *   >     :source-map - optional, if a :clj namespace has been precompiled to :js, can
 *   >                   give a V3 source map JSON
 *   >
 *   > If the resource could not be resolved, the callback should be invoked with
 *   > nil.
 */
replumb.core.nodejs_options = (function replumb$core$nodejs_options(var_args){
var args22094 = [];
var len__12956__auto___22097 = arguments.length;
var i__12957__auto___22098 = (0);
while(true){
if((i__12957__auto___22098 < len__12956__auto___22097)){
args22094.push((arguments[i__12957__auto___22098]));

var G__22099 = (i__12957__auto___22098 + (1));
i__12957__auto___22098 = G__22099;
continue;
} else {
}
break;
}

var G__22096 = args22094.length;
switch (G__22096) {
case 0:
return replumb.core.nodejs_options.cljs$core$IFn$_invoke$arity$0();

break;
case 2:
return replumb.core.nodejs_options.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22094.length)].join('')));

}
});
goog.exportSymbol('replumb.core.nodejs_options', replumb.core.nodejs_options);

replumb.core.nodejs_options.cljs$core$IFn$_invoke$arity$0 = (function (){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"nodejs","nodejs",321212524)], null);
});

replumb.core.nodejs_options.cljs$core$IFn$_invoke$arity$2 = (function (src_paths,read_file_fn){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"nodejs","nodejs",321212524),new cljs.core.Keyword(null,"load-fn!","load-fn!",-896695751),replumb.target.nodejs.make_load_fn.call(null,src_paths,read_file_fn)], null);
});

replumb.core.nodejs_options.cljs$lang$maxFixedArity = 2;

//# sourceMappingURL=core.js.map?rel=1451058371679