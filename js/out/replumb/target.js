// Compiled by ClojureScript 1.7.170 {}
goog.provide('replumb.target');
goog.require('cljs.core');
goog.require('replumb.target.browser');
goog.require('replumb.target.nodejs');
/**
 * Browser default set of options for read-eval-call.
 */
replumb.target.browser_default_opts = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"load-fn!","load-fn!",-896695751),replumb.target.browser.load_fn_BANG_,new cljs.core.Keyword(null,"init-fns","init-fns",1169633539),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [replumb.target.browser.init_fn_BANG_], null)], null);
/**
 * Node.js default set of options for read-eval-call.
 *   It is intentionally missing :load-fn! that will need to be added
 *   before calling read-eval-call. See nodejs-opts.
 */
replumb.target.nodejs_default_opts = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"nodejs","nodejs",321212524),new cljs.core.Keyword(null,"init-fns","init-fns",1169633539),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [replumb.target.nodejs.init_fn_BANG_], null)], null);
/**
 * Given a target (string or keyword), returns the default option map
 *   for it. The no-arity version returns the browser default options.
 */
replumb.target.default_opts = (function replumb$target$default_opts(var_args){
var args20706 = [];
var len__12956__auto___20712 = arguments.length;
var i__12957__auto___20713 = (0);
while(true){
if((i__12957__auto___20713 < len__12956__auto___20712)){
args20706.push((arguments[i__12957__auto___20713]));

var G__20714 = (i__12957__auto___20713 + (1));
i__12957__auto___20713 = G__20714;
continue;
} else {
}
break;
}

var G__20708 = args20706.length;
switch (G__20708) {
case 0:
return replumb.target.default_opts.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return replumb.target.default_opts.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20706.length)].join('')));

}
});

replumb.target.default_opts.cljs$core$IFn$_invoke$arity$0 = (function (){
return replumb.target.default_opts.call(null,new cljs.core.Keyword(null,"default","default",-1987822328));
});

replumb.target.default_opts.cljs$core$IFn$_invoke$arity$1 = (function (target){
var pred__20709 = cljs.core._EQ_;
var expr__20710 = cljs.core.keyword.call(null,target);
if(cljs.core.truth_(pred__20709.call(null,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),expr__20710))){
return replumb.target.nodejs_default_opts;
} else {
return replumb.target.browser_default_opts;
}
});

replumb.target.default_opts.cljs$lang$maxFixedArity = 1;
/**
 * This load function just calls:
 *   (cb {:lang   :js
 *     :source ""})
 */
replumb.target.fake_load_fn_BANG_ = (function replumb$target$fake_load_fn_BANG_(_,cb){
return cb.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),""], null));
});

//# sourceMappingURL=target.js.map?rel=1451058367685