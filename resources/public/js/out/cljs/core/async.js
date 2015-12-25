// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args17443 = [];
var len__12956__auto___17449 = arguments.length;
var i__12957__auto___17450 = (0);
while(true){
if((i__12957__auto___17450 < len__12956__auto___17449)){
args17443.push((arguments[i__12957__auto___17450]));

var G__17451 = (i__12957__auto___17450 + (1));
i__12957__auto___17450 = G__17451;
continue;
} else {
}
break;
}

var G__17445 = args17443.length;
switch (G__17445) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17443.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async17446 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17446 = (function (f,blockable,meta17447){
this.f = f;
this.blockable = blockable;
this.meta17447 = meta17447;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17446.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17448,meta17447__$1){
var self__ = this;
var _17448__$1 = this;
return (new cljs.core.async.t_cljs$core$async17446(self__.f,self__.blockable,meta17447__$1));
});

cljs.core.async.t_cljs$core$async17446.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17448){
var self__ = this;
var _17448__$1 = this;
return self__.meta17447;
});

cljs.core.async.t_cljs$core$async17446.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async17446.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async17446.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async17446.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async17446.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta17447","meta17447",153528133,null)], null);
});

cljs.core.async.t_cljs$core$async17446.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17446.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17446";

cljs.core.async.t_cljs$core$async17446.cljs$lang$ctorPrWriter = (function (this__12496__auto__,writer__12497__auto__,opt__12498__auto__){
return cljs.core._write.call(null,writer__12497__auto__,"cljs.core.async/t_cljs$core$async17446");
});

cljs.core.async.__GT_t_cljs$core$async17446 = (function cljs$core$async$__GT_t_cljs$core$async17446(f__$1,blockable__$1,meta17447){
return (new cljs.core.async.t_cljs$core$async17446(f__$1,blockable__$1,meta17447));
});

}

return (new cljs.core.async.t_cljs$core$async17446(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args17455 = [];
var len__12956__auto___17458 = arguments.length;
var i__12957__auto___17459 = (0);
while(true){
if((i__12957__auto___17459 < len__12956__auto___17458)){
args17455.push((arguments[i__12957__auto___17459]));

var G__17460 = (i__12957__auto___17459 + (1));
i__12957__auto___17459 = G__17460;
continue;
} else {
}
break;
}

var G__17457 = args17455.length;
switch (G__17457) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17455.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args17462 = [];
var len__12956__auto___17465 = arguments.length;
var i__12957__auto___17466 = (0);
while(true){
if((i__12957__auto___17466 < len__12956__auto___17465)){
args17462.push((arguments[i__12957__auto___17466]));

var G__17467 = (i__12957__auto___17466 + (1));
i__12957__auto___17466 = G__17467;
continue;
} else {
}
break;
}

var G__17464 = args17462.length;
switch (G__17464) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17462.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args17469 = [];
var len__12956__auto___17472 = arguments.length;
var i__12957__auto___17473 = (0);
while(true){
if((i__12957__auto___17473 < len__12956__auto___17472)){
args17469.push((arguments[i__12957__auto___17473]));

var G__17474 = (i__12957__auto___17473 + (1));
i__12957__auto___17473 = G__17474;
continue;
} else {
}
break;
}

var G__17471 = args17469.length;
switch (G__17471) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17469.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_17476 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_17476);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_17476,ret){
return (function (){
return fn1.call(null,val_17476);
});})(val_17476,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args17477 = [];
var len__12956__auto___17480 = arguments.length;
var i__12957__auto___17481 = (0);
while(true){
if((i__12957__auto___17481 < len__12956__auto___17480)){
args17477.push((arguments[i__12957__auto___17481]));

var G__17482 = (i__12957__auto___17481 + (1));
i__12957__auto___17481 = G__17482;
continue;
} else {
}
break;
}

var G__17479 = args17477.length;
switch (G__17479) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17477.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__12801__auto___17484 = n;
var x_17485 = (0);
while(true){
if((x_17485 < n__12801__auto___17484)){
(a[x_17485] = (0));

var G__17486 = (x_17485 + (1));
x_17485 = G__17486;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__17487 = (i + (1));
i = G__17487;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async17491 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17491 = (function (alt_flag,flag,meta17492){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta17492 = meta17492;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17491.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_17493,meta17492__$1){
var self__ = this;
var _17493__$1 = this;
return (new cljs.core.async.t_cljs$core$async17491(self__.alt_flag,self__.flag,meta17492__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async17491.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_17493){
var self__ = this;
var _17493__$1 = this;
return self__.meta17492;
});})(flag))
;

cljs.core.async.t_cljs$core$async17491.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async17491.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async17491.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async17491.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async17491.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta17492","meta17492",417097451,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async17491.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17491.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17491";

cljs.core.async.t_cljs$core$async17491.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__12496__auto__,writer__12497__auto__,opt__12498__auto__){
return cljs.core._write.call(null,writer__12497__auto__,"cljs.core.async/t_cljs$core$async17491");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async17491 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async17491(alt_flag__$1,flag__$1,meta17492){
return (new cljs.core.async.t_cljs$core$async17491(alt_flag__$1,flag__$1,meta17492));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async17491(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async17497 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17497 = (function (alt_handler,flag,cb,meta17498){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta17498 = meta17498;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17497.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17499,meta17498__$1){
var self__ = this;
var _17499__$1 = this;
return (new cljs.core.async.t_cljs$core$async17497(self__.alt_handler,self__.flag,self__.cb,meta17498__$1));
});

cljs.core.async.t_cljs$core$async17497.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17499){
var self__ = this;
var _17499__$1 = this;
return self__.meta17498;
});

cljs.core.async.t_cljs$core$async17497.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async17497.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async17497.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async17497.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async17497.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta17498","meta17498",-1821770394,null)], null);
});

cljs.core.async.t_cljs$core$async17497.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17497.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17497";

cljs.core.async.t_cljs$core$async17497.cljs$lang$ctorPrWriter = (function (this__12496__auto__,writer__12497__auto__,opt__12498__auto__){
return cljs.core._write.call(null,writer__12497__auto__,"cljs.core.async/t_cljs$core$async17497");
});

cljs.core.async.__GT_t_cljs$core$async17497 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async17497(alt_handler__$1,flag__$1,cb__$1,meta17498){
return (new cljs.core.async.t_cljs$core$async17497(alt_handler__$1,flag__$1,cb__$1,meta17498));
});

}

return (new cljs.core.async.t_cljs$core$async17497(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17500_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17500_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17501_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17501_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__11897__auto__ = wport;
if(cljs.core.truth_(or__11897__auto__)){
return or__11897__auto__;
} else {
return port;
}
})()], null));
} else {
var G__17502 = (i + (1));
i = G__17502;
continue;
}
} else {
return null;
}
break;
}
})();
var or__11897__auto__ = ret;
if(cljs.core.truth_(or__11897__auto__)){
return or__11897__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__11885__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__11885__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__11885__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__12963__auto__ = [];
var len__12956__auto___17508 = arguments.length;
var i__12957__auto___17509 = (0);
while(true){
if((i__12957__auto___17509 < len__12956__auto___17508)){
args__12963__auto__.push((arguments[i__12957__auto___17509]));

var G__17510 = (i__12957__auto___17509 + (1));
i__12957__auto___17509 = G__17510;
continue;
} else {
}
break;
}

var argseq__12964__auto__ = ((((1) < args__12963__auto__.length))?(new cljs.core.IndexedSeq(args__12963__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12964__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__17505){
var map__17506 = p__17505;
var map__17506__$1 = ((((!((map__17506 == null)))?((((map__17506.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17506.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17506):map__17506);
var opts = map__17506__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq17503){
var G__17504 = cljs.core.first.call(null,seq17503);
var seq17503__$1 = cljs.core.next.call(null,seq17503);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17504,seq17503__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args17511 = [];
var len__12956__auto___17561 = arguments.length;
var i__12957__auto___17562 = (0);
while(true){
if((i__12957__auto___17562 < len__12956__auto___17561)){
args17511.push((arguments[i__12957__auto___17562]));

var G__17563 = (i__12957__auto___17562 + (1));
i__12957__auto___17562 = G__17563;
continue;
} else {
}
break;
}

var G__17513 = args17511.length;
switch (G__17513) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17511.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__17398__auto___17565 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17398__auto___17565){
return (function (){
var f__17399__auto__ = (function (){var switch__17286__auto__ = ((function (c__17398__auto___17565){
return (function (state_17537){
var state_val_17538 = (state_17537[(1)]);
if((state_val_17538 === (7))){
var inst_17533 = (state_17537[(2)]);
var state_17537__$1 = state_17537;
var statearr_17539_17566 = state_17537__$1;
(statearr_17539_17566[(2)] = inst_17533);

(statearr_17539_17566[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17538 === (1))){
var state_17537__$1 = state_17537;
var statearr_17540_17567 = state_17537__$1;
(statearr_17540_17567[(2)] = null);

(statearr_17540_17567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17538 === (4))){
var inst_17516 = (state_17537[(7)]);
var inst_17516__$1 = (state_17537[(2)]);
var inst_17517 = (inst_17516__$1 == null);
var state_17537__$1 = (function (){var statearr_17541 = state_17537;
(statearr_17541[(7)] = inst_17516__$1);

return statearr_17541;
})();
if(cljs.core.truth_(inst_17517)){
var statearr_17542_17568 = state_17537__$1;
(statearr_17542_17568[(1)] = (5));

} else {
var statearr_17543_17569 = state_17537__$1;
(statearr_17543_17569[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17538 === (13))){
var state_17537__$1 = state_17537;
var statearr_17544_17570 = state_17537__$1;
(statearr_17544_17570[(2)] = null);

(statearr_17544_17570[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17538 === (6))){
var inst_17516 = (state_17537[(7)]);
var state_17537__$1 = state_17537;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17537__$1,(11),to,inst_17516);
} else {
if((state_val_17538 === (3))){
var inst_17535 = (state_17537[(2)]);
var state_17537__$1 = state_17537;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17537__$1,inst_17535);
} else {
if((state_val_17538 === (12))){
var state_17537__$1 = state_17537;
var statearr_17545_17571 = state_17537__$1;
(statearr_17545_17571[(2)] = null);

(statearr_17545_17571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17538 === (2))){
var state_17537__$1 = state_17537;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17537__$1,(4),from);
} else {
if((state_val_17538 === (11))){
var inst_17526 = (state_17537[(2)]);
var state_17537__$1 = state_17537;
if(cljs.core.truth_(inst_17526)){
var statearr_17546_17572 = state_17537__$1;
(statearr_17546_17572[(1)] = (12));

} else {
var statearr_17547_17573 = state_17537__$1;
(statearr_17547_17573[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17538 === (9))){
var state_17537__$1 = state_17537;
var statearr_17548_17574 = state_17537__$1;
(statearr_17548_17574[(2)] = null);

(statearr_17548_17574[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17538 === (5))){
var state_17537__$1 = state_17537;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17549_17575 = state_17537__$1;
(statearr_17549_17575[(1)] = (8));

} else {
var statearr_17550_17576 = state_17537__$1;
(statearr_17550_17576[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17538 === (14))){
var inst_17531 = (state_17537[(2)]);
var state_17537__$1 = state_17537;
var statearr_17551_17577 = state_17537__$1;
(statearr_17551_17577[(2)] = inst_17531);

(statearr_17551_17577[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17538 === (10))){
var inst_17523 = (state_17537[(2)]);
var state_17537__$1 = state_17537;
var statearr_17552_17578 = state_17537__$1;
(statearr_17552_17578[(2)] = inst_17523);

(statearr_17552_17578[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17538 === (8))){
var inst_17520 = cljs.core.async.close_BANG_.call(null,to);
var state_17537__$1 = state_17537;
var statearr_17553_17579 = state_17537__$1;
(statearr_17553_17579[(2)] = inst_17520);

(statearr_17553_17579[(1)] = (10));


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
});})(c__17398__auto___17565))
;
return ((function (switch__17286__auto__,c__17398__auto___17565){
return (function() {
var cljs$core$async$state_machine__17287__auto__ = null;
var cljs$core$async$state_machine__17287__auto____0 = (function (){
var statearr_17557 = [null,null,null,null,null,null,null,null];
(statearr_17557[(0)] = cljs$core$async$state_machine__17287__auto__);

(statearr_17557[(1)] = (1));

return statearr_17557;
});
var cljs$core$async$state_machine__17287__auto____1 = (function (state_17537){
while(true){
var ret_value__17288__auto__ = (function (){try{while(true){
var result__17289__auto__ = switch__17286__auto__.call(null,state_17537);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17289__auto__;
}
break;
}
}catch (e17558){if((e17558 instanceof Object)){
var ex__17290__auto__ = e17558;
var statearr_17559_17580 = state_17537;
(statearr_17559_17580[(5)] = ex__17290__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17537);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17558;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17581 = state_17537;
state_17537 = G__17581;
continue;
} else {
return ret_value__17288__auto__;
}
break;
}
});
cljs$core$async$state_machine__17287__auto__ = function(state_17537){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17287__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17287__auto____1.call(this,state_17537);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17287__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17287__auto____0;
cljs$core$async$state_machine__17287__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17287__auto____1;
return cljs$core$async$state_machine__17287__auto__;
})()
;})(switch__17286__auto__,c__17398__auto___17565))
})();
var state__17400__auto__ = (function (){var statearr_17560 = f__17399__auto__.call(null);
(statearr_17560[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17398__auto___17565);

return statearr_17560;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17400__auto__);
});})(c__17398__auto___17565))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__17765){
var vec__17766 = p__17765;
var v = cljs.core.nth.call(null,vec__17766,(0),null);
var p = cljs.core.nth.call(null,vec__17766,(1),null);
var job = vec__17766;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__17398__auto___17948 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17398__auto___17948,res,vec__17766,v,p,job,jobs,results){
return (function (){
var f__17399__auto__ = (function (){var switch__17286__auto__ = ((function (c__17398__auto___17948,res,vec__17766,v,p,job,jobs,results){
return (function (state_17771){
var state_val_17772 = (state_17771[(1)]);
if((state_val_17772 === (1))){
var state_17771__$1 = state_17771;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17771__$1,(2),res,v);
} else {
if((state_val_17772 === (2))){
var inst_17768 = (state_17771[(2)]);
var inst_17769 = cljs.core.async.close_BANG_.call(null,res);
var state_17771__$1 = (function (){var statearr_17773 = state_17771;
(statearr_17773[(7)] = inst_17768);

return statearr_17773;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17771__$1,inst_17769);
} else {
return null;
}
}
});})(c__17398__auto___17948,res,vec__17766,v,p,job,jobs,results))
;
return ((function (switch__17286__auto__,c__17398__auto___17948,res,vec__17766,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17287__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17287__auto____0 = (function (){
var statearr_17777 = [null,null,null,null,null,null,null,null];
(statearr_17777[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17287__auto__);

(statearr_17777[(1)] = (1));

return statearr_17777;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17287__auto____1 = (function (state_17771){
while(true){
var ret_value__17288__auto__ = (function (){try{while(true){
var result__17289__auto__ = switch__17286__auto__.call(null,state_17771);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17289__auto__;
}
break;
}
}catch (e17778){if((e17778 instanceof Object)){
var ex__17290__auto__ = e17778;
var statearr_17779_17949 = state_17771;
(statearr_17779_17949[(5)] = ex__17290__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17771);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17778;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17950 = state_17771;
state_17771 = G__17950;
continue;
} else {
return ret_value__17288__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17287__auto__ = function(state_17771){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17287__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17287__auto____1.call(this,state_17771);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17287__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17287__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17287__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17287__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17287__auto__;
})()
;})(switch__17286__auto__,c__17398__auto___17948,res,vec__17766,v,p,job,jobs,results))
})();
var state__17400__auto__ = (function (){var statearr_17780 = f__17399__auto__.call(null);
(statearr_17780[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17398__auto___17948);

return statearr_17780;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17400__auto__);
});})(c__17398__auto___17948,res,vec__17766,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__17781){
var vec__17782 = p__17781;
var v = cljs.core.nth.call(null,vec__17782,(0),null);
var p = cljs.core.nth.call(null,vec__17782,(1),null);
var job = vec__17782;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__12801__auto___17951 = n;
var __17952 = (0);
while(true){
if((__17952 < n__12801__auto___17951)){
var G__17783_17953 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__17783_17953) {
case "compute":
var c__17398__auto___17955 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__17952,c__17398__auto___17955,G__17783_17953,n__12801__auto___17951,jobs,results,process,async){
return (function (){
var f__17399__auto__ = (function (){var switch__17286__auto__ = ((function (__17952,c__17398__auto___17955,G__17783_17953,n__12801__auto___17951,jobs,results,process,async){
return (function (state_17796){
var state_val_17797 = (state_17796[(1)]);
if((state_val_17797 === (1))){
var state_17796__$1 = state_17796;
var statearr_17798_17956 = state_17796__$1;
(statearr_17798_17956[(2)] = null);

(statearr_17798_17956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17797 === (2))){
var state_17796__$1 = state_17796;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17796__$1,(4),jobs);
} else {
if((state_val_17797 === (3))){
var inst_17794 = (state_17796[(2)]);
var state_17796__$1 = state_17796;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17796__$1,inst_17794);
} else {
if((state_val_17797 === (4))){
var inst_17786 = (state_17796[(2)]);
var inst_17787 = process.call(null,inst_17786);
var state_17796__$1 = state_17796;
if(cljs.core.truth_(inst_17787)){
var statearr_17799_17957 = state_17796__$1;
(statearr_17799_17957[(1)] = (5));

} else {
var statearr_17800_17958 = state_17796__$1;
(statearr_17800_17958[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17797 === (5))){
var state_17796__$1 = state_17796;
var statearr_17801_17959 = state_17796__$1;
(statearr_17801_17959[(2)] = null);

(statearr_17801_17959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17797 === (6))){
var state_17796__$1 = state_17796;
var statearr_17802_17960 = state_17796__$1;
(statearr_17802_17960[(2)] = null);

(statearr_17802_17960[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17797 === (7))){
var inst_17792 = (state_17796[(2)]);
var state_17796__$1 = state_17796;
var statearr_17803_17961 = state_17796__$1;
(statearr_17803_17961[(2)] = inst_17792);

(statearr_17803_17961[(1)] = (3));


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
});})(__17952,c__17398__auto___17955,G__17783_17953,n__12801__auto___17951,jobs,results,process,async))
;
return ((function (__17952,switch__17286__auto__,c__17398__auto___17955,G__17783_17953,n__12801__auto___17951,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17287__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17287__auto____0 = (function (){
var statearr_17807 = [null,null,null,null,null,null,null];
(statearr_17807[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17287__auto__);

(statearr_17807[(1)] = (1));

return statearr_17807;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17287__auto____1 = (function (state_17796){
while(true){
var ret_value__17288__auto__ = (function (){try{while(true){
var result__17289__auto__ = switch__17286__auto__.call(null,state_17796);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17289__auto__;
}
break;
}
}catch (e17808){if((e17808 instanceof Object)){
var ex__17290__auto__ = e17808;
var statearr_17809_17962 = state_17796;
(statearr_17809_17962[(5)] = ex__17290__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17796);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17808;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17963 = state_17796;
state_17796 = G__17963;
continue;
} else {
return ret_value__17288__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17287__auto__ = function(state_17796){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17287__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17287__auto____1.call(this,state_17796);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17287__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17287__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17287__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17287__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17287__auto__;
})()
;})(__17952,switch__17286__auto__,c__17398__auto___17955,G__17783_17953,n__12801__auto___17951,jobs,results,process,async))
})();
var state__17400__auto__ = (function (){var statearr_17810 = f__17399__auto__.call(null);
(statearr_17810[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17398__auto___17955);

return statearr_17810;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17400__auto__);
});})(__17952,c__17398__auto___17955,G__17783_17953,n__12801__auto___17951,jobs,results,process,async))
);


break;
case "async":
var c__17398__auto___17964 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__17952,c__17398__auto___17964,G__17783_17953,n__12801__auto___17951,jobs,results,process,async){
return (function (){
var f__17399__auto__ = (function (){var switch__17286__auto__ = ((function (__17952,c__17398__auto___17964,G__17783_17953,n__12801__auto___17951,jobs,results,process,async){
return (function (state_17823){
var state_val_17824 = (state_17823[(1)]);
if((state_val_17824 === (1))){
var state_17823__$1 = state_17823;
var statearr_17825_17965 = state_17823__$1;
(statearr_17825_17965[(2)] = null);

(statearr_17825_17965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17824 === (2))){
var state_17823__$1 = state_17823;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17823__$1,(4),jobs);
} else {
if((state_val_17824 === (3))){
var inst_17821 = (state_17823[(2)]);
var state_17823__$1 = state_17823;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17823__$1,inst_17821);
} else {
if((state_val_17824 === (4))){
var inst_17813 = (state_17823[(2)]);
var inst_17814 = async.call(null,inst_17813);
var state_17823__$1 = state_17823;
if(cljs.core.truth_(inst_17814)){
var statearr_17826_17966 = state_17823__$1;
(statearr_17826_17966[(1)] = (5));

} else {
var statearr_17827_17967 = state_17823__$1;
(statearr_17827_17967[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17824 === (5))){
var state_17823__$1 = state_17823;
var statearr_17828_17968 = state_17823__$1;
(statearr_17828_17968[(2)] = null);

(statearr_17828_17968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17824 === (6))){
var state_17823__$1 = state_17823;
var statearr_17829_17969 = state_17823__$1;
(statearr_17829_17969[(2)] = null);

(statearr_17829_17969[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17824 === (7))){
var inst_17819 = (state_17823[(2)]);
var state_17823__$1 = state_17823;
var statearr_17830_17970 = state_17823__$1;
(statearr_17830_17970[(2)] = inst_17819);

(statearr_17830_17970[(1)] = (3));


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
});})(__17952,c__17398__auto___17964,G__17783_17953,n__12801__auto___17951,jobs,results,process,async))
;
return ((function (__17952,switch__17286__auto__,c__17398__auto___17964,G__17783_17953,n__12801__auto___17951,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17287__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17287__auto____0 = (function (){
var statearr_17834 = [null,null,null,null,null,null,null];
(statearr_17834[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17287__auto__);

(statearr_17834[(1)] = (1));

return statearr_17834;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17287__auto____1 = (function (state_17823){
while(true){
var ret_value__17288__auto__ = (function (){try{while(true){
var result__17289__auto__ = switch__17286__auto__.call(null,state_17823);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17289__auto__;
}
break;
}
}catch (e17835){if((e17835 instanceof Object)){
var ex__17290__auto__ = e17835;
var statearr_17836_17971 = state_17823;
(statearr_17836_17971[(5)] = ex__17290__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17823);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17835;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17972 = state_17823;
state_17823 = G__17972;
continue;
} else {
return ret_value__17288__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17287__auto__ = function(state_17823){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17287__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17287__auto____1.call(this,state_17823);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17287__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17287__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17287__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17287__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17287__auto__;
})()
;})(__17952,switch__17286__auto__,c__17398__auto___17964,G__17783_17953,n__12801__auto___17951,jobs,results,process,async))
})();
var state__17400__auto__ = (function (){var statearr_17837 = f__17399__auto__.call(null);
(statearr_17837[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17398__auto___17964);

return statearr_17837;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17400__auto__);
});})(__17952,c__17398__auto___17964,G__17783_17953,n__12801__auto___17951,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__17973 = (__17952 + (1));
__17952 = G__17973;
continue;
} else {
}
break;
}

var c__17398__auto___17974 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17398__auto___17974,jobs,results,process,async){
return (function (){
var f__17399__auto__ = (function (){var switch__17286__auto__ = ((function (c__17398__auto___17974,jobs,results,process,async){
return (function (state_17859){
var state_val_17860 = (state_17859[(1)]);
if((state_val_17860 === (1))){
var state_17859__$1 = state_17859;
var statearr_17861_17975 = state_17859__$1;
(statearr_17861_17975[(2)] = null);

(statearr_17861_17975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17860 === (2))){
var state_17859__$1 = state_17859;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17859__$1,(4),from);
} else {
if((state_val_17860 === (3))){
var inst_17857 = (state_17859[(2)]);
var state_17859__$1 = state_17859;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17859__$1,inst_17857);
} else {
if((state_val_17860 === (4))){
var inst_17840 = (state_17859[(7)]);
var inst_17840__$1 = (state_17859[(2)]);
var inst_17841 = (inst_17840__$1 == null);
var state_17859__$1 = (function (){var statearr_17862 = state_17859;
(statearr_17862[(7)] = inst_17840__$1);

return statearr_17862;
})();
if(cljs.core.truth_(inst_17841)){
var statearr_17863_17976 = state_17859__$1;
(statearr_17863_17976[(1)] = (5));

} else {
var statearr_17864_17977 = state_17859__$1;
(statearr_17864_17977[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17860 === (5))){
var inst_17843 = cljs.core.async.close_BANG_.call(null,jobs);
var state_17859__$1 = state_17859;
var statearr_17865_17978 = state_17859__$1;
(statearr_17865_17978[(2)] = inst_17843);

(statearr_17865_17978[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17860 === (6))){
var inst_17840 = (state_17859[(7)]);
var inst_17845 = (state_17859[(8)]);
var inst_17845__$1 = cljs.core.async.chan.call(null,(1));
var inst_17846 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17847 = [inst_17840,inst_17845__$1];
var inst_17848 = (new cljs.core.PersistentVector(null,2,(5),inst_17846,inst_17847,null));
var state_17859__$1 = (function (){var statearr_17866 = state_17859;
(statearr_17866[(8)] = inst_17845__$1);

return statearr_17866;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17859__$1,(8),jobs,inst_17848);
} else {
if((state_val_17860 === (7))){
var inst_17855 = (state_17859[(2)]);
var state_17859__$1 = state_17859;
var statearr_17867_17979 = state_17859__$1;
(statearr_17867_17979[(2)] = inst_17855);

(statearr_17867_17979[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17860 === (8))){
var inst_17845 = (state_17859[(8)]);
var inst_17850 = (state_17859[(2)]);
var state_17859__$1 = (function (){var statearr_17868 = state_17859;
(statearr_17868[(9)] = inst_17850);

return statearr_17868;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17859__$1,(9),results,inst_17845);
} else {
if((state_val_17860 === (9))){
var inst_17852 = (state_17859[(2)]);
var state_17859__$1 = (function (){var statearr_17869 = state_17859;
(statearr_17869[(10)] = inst_17852);

return statearr_17869;
})();
var statearr_17870_17980 = state_17859__$1;
(statearr_17870_17980[(2)] = null);

(statearr_17870_17980[(1)] = (2));


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
});})(c__17398__auto___17974,jobs,results,process,async))
;
return ((function (switch__17286__auto__,c__17398__auto___17974,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17287__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17287__auto____0 = (function (){
var statearr_17874 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17874[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17287__auto__);

(statearr_17874[(1)] = (1));

return statearr_17874;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17287__auto____1 = (function (state_17859){
while(true){
var ret_value__17288__auto__ = (function (){try{while(true){
var result__17289__auto__ = switch__17286__auto__.call(null,state_17859);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17289__auto__;
}
break;
}
}catch (e17875){if((e17875 instanceof Object)){
var ex__17290__auto__ = e17875;
var statearr_17876_17981 = state_17859;
(statearr_17876_17981[(5)] = ex__17290__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17859);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17875;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17982 = state_17859;
state_17859 = G__17982;
continue;
} else {
return ret_value__17288__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17287__auto__ = function(state_17859){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17287__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17287__auto____1.call(this,state_17859);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17287__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17287__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17287__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17287__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17287__auto__;
})()
;})(switch__17286__auto__,c__17398__auto___17974,jobs,results,process,async))
})();
var state__17400__auto__ = (function (){var statearr_17877 = f__17399__auto__.call(null);
(statearr_17877[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17398__auto___17974);

return statearr_17877;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17400__auto__);
});})(c__17398__auto___17974,jobs,results,process,async))
);


var c__17398__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17398__auto__,jobs,results,process,async){
return (function (){
var f__17399__auto__ = (function (){var switch__17286__auto__ = ((function (c__17398__auto__,jobs,results,process,async){
return (function (state_17915){
var state_val_17916 = (state_17915[(1)]);
if((state_val_17916 === (7))){
var inst_17911 = (state_17915[(2)]);
var state_17915__$1 = state_17915;
var statearr_17917_17983 = state_17915__$1;
(statearr_17917_17983[(2)] = inst_17911);

(statearr_17917_17983[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17916 === (20))){
var state_17915__$1 = state_17915;
var statearr_17918_17984 = state_17915__$1;
(statearr_17918_17984[(2)] = null);

(statearr_17918_17984[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17916 === (1))){
var state_17915__$1 = state_17915;
var statearr_17919_17985 = state_17915__$1;
(statearr_17919_17985[(2)] = null);

(statearr_17919_17985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17916 === (4))){
var inst_17880 = (state_17915[(7)]);
var inst_17880__$1 = (state_17915[(2)]);
var inst_17881 = (inst_17880__$1 == null);
var state_17915__$1 = (function (){var statearr_17920 = state_17915;
(statearr_17920[(7)] = inst_17880__$1);

return statearr_17920;
})();
if(cljs.core.truth_(inst_17881)){
var statearr_17921_17986 = state_17915__$1;
(statearr_17921_17986[(1)] = (5));

} else {
var statearr_17922_17987 = state_17915__$1;
(statearr_17922_17987[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17916 === (15))){
var inst_17893 = (state_17915[(8)]);
var state_17915__$1 = state_17915;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17915__$1,(18),to,inst_17893);
} else {
if((state_val_17916 === (21))){
var inst_17906 = (state_17915[(2)]);
var state_17915__$1 = state_17915;
var statearr_17923_17988 = state_17915__$1;
(statearr_17923_17988[(2)] = inst_17906);

(statearr_17923_17988[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17916 === (13))){
var inst_17908 = (state_17915[(2)]);
var state_17915__$1 = (function (){var statearr_17924 = state_17915;
(statearr_17924[(9)] = inst_17908);

return statearr_17924;
})();
var statearr_17925_17989 = state_17915__$1;
(statearr_17925_17989[(2)] = null);

(statearr_17925_17989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17916 === (6))){
var inst_17880 = (state_17915[(7)]);
var state_17915__$1 = state_17915;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17915__$1,(11),inst_17880);
} else {
if((state_val_17916 === (17))){
var inst_17901 = (state_17915[(2)]);
var state_17915__$1 = state_17915;
if(cljs.core.truth_(inst_17901)){
var statearr_17926_17990 = state_17915__$1;
(statearr_17926_17990[(1)] = (19));

} else {
var statearr_17927_17991 = state_17915__$1;
(statearr_17927_17991[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17916 === (3))){
var inst_17913 = (state_17915[(2)]);
var state_17915__$1 = state_17915;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17915__$1,inst_17913);
} else {
if((state_val_17916 === (12))){
var inst_17890 = (state_17915[(10)]);
var state_17915__$1 = state_17915;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17915__$1,(14),inst_17890);
} else {
if((state_val_17916 === (2))){
var state_17915__$1 = state_17915;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17915__$1,(4),results);
} else {
if((state_val_17916 === (19))){
var state_17915__$1 = state_17915;
var statearr_17928_17992 = state_17915__$1;
(statearr_17928_17992[(2)] = null);

(statearr_17928_17992[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17916 === (11))){
var inst_17890 = (state_17915[(2)]);
var state_17915__$1 = (function (){var statearr_17929 = state_17915;
(statearr_17929[(10)] = inst_17890);

return statearr_17929;
})();
var statearr_17930_17993 = state_17915__$1;
(statearr_17930_17993[(2)] = null);

(statearr_17930_17993[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17916 === (9))){
var state_17915__$1 = state_17915;
var statearr_17931_17994 = state_17915__$1;
(statearr_17931_17994[(2)] = null);

(statearr_17931_17994[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17916 === (5))){
var state_17915__$1 = state_17915;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17932_17995 = state_17915__$1;
(statearr_17932_17995[(1)] = (8));

} else {
var statearr_17933_17996 = state_17915__$1;
(statearr_17933_17996[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17916 === (14))){
var inst_17893 = (state_17915[(8)]);
var inst_17895 = (state_17915[(11)]);
var inst_17893__$1 = (state_17915[(2)]);
var inst_17894 = (inst_17893__$1 == null);
var inst_17895__$1 = cljs.core.not.call(null,inst_17894);
var state_17915__$1 = (function (){var statearr_17934 = state_17915;
(statearr_17934[(8)] = inst_17893__$1);

(statearr_17934[(11)] = inst_17895__$1);

return statearr_17934;
})();
if(inst_17895__$1){
var statearr_17935_17997 = state_17915__$1;
(statearr_17935_17997[(1)] = (15));

} else {
var statearr_17936_17998 = state_17915__$1;
(statearr_17936_17998[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17916 === (16))){
var inst_17895 = (state_17915[(11)]);
var state_17915__$1 = state_17915;
var statearr_17937_17999 = state_17915__$1;
(statearr_17937_17999[(2)] = inst_17895);

(statearr_17937_17999[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17916 === (10))){
var inst_17887 = (state_17915[(2)]);
var state_17915__$1 = state_17915;
var statearr_17938_18000 = state_17915__$1;
(statearr_17938_18000[(2)] = inst_17887);

(statearr_17938_18000[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17916 === (18))){
var inst_17898 = (state_17915[(2)]);
var state_17915__$1 = state_17915;
var statearr_17939_18001 = state_17915__$1;
(statearr_17939_18001[(2)] = inst_17898);

(statearr_17939_18001[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17916 === (8))){
var inst_17884 = cljs.core.async.close_BANG_.call(null,to);
var state_17915__$1 = state_17915;
var statearr_17940_18002 = state_17915__$1;
(statearr_17940_18002[(2)] = inst_17884);

(statearr_17940_18002[(1)] = (10));


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
}
}
}
}
});})(c__17398__auto__,jobs,results,process,async))
;
return ((function (switch__17286__auto__,c__17398__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17287__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17287__auto____0 = (function (){
var statearr_17944 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17944[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17287__auto__);

(statearr_17944[(1)] = (1));

return statearr_17944;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17287__auto____1 = (function (state_17915){
while(true){
var ret_value__17288__auto__ = (function (){try{while(true){
var result__17289__auto__ = switch__17286__auto__.call(null,state_17915);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17289__auto__;
}
break;
}
}catch (e17945){if((e17945 instanceof Object)){
var ex__17290__auto__ = e17945;
var statearr_17946_18003 = state_17915;
(statearr_17946_18003[(5)] = ex__17290__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17915);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17945;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18004 = state_17915;
state_17915 = G__18004;
continue;
} else {
return ret_value__17288__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17287__auto__ = function(state_17915){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17287__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17287__auto____1.call(this,state_17915);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17287__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17287__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17287__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17287__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17287__auto__;
})()
;})(switch__17286__auto__,c__17398__auto__,jobs,results,process,async))
})();
var state__17400__auto__ = (function (){var statearr_17947 = f__17399__auto__.call(null);
(statearr_17947[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17398__auto__);

return statearr_17947;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17400__auto__);
});})(c__17398__auto__,jobs,results,process,async))
);

return c__17398__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args18005 = [];
var len__12956__auto___18008 = arguments.length;
var i__12957__auto___18009 = (0);
while(true){
if((i__12957__auto___18009 < len__12956__auto___18008)){
args18005.push((arguments[i__12957__auto___18009]));

var G__18010 = (i__12957__auto___18009 + (1));
i__12957__auto___18009 = G__18010;
continue;
} else {
}
break;
}

var G__18007 = args18005.length;
switch (G__18007) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18005.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args18012 = [];
var len__12956__auto___18015 = arguments.length;
var i__12957__auto___18016 = (0);
while(true){
if((i__12957__auto___18016 < len__12956__auto___18015)){
args18012.push((arguments[i__12957__auto___18016]));

var G__18017 = (i__12957__auto___18016 + (1));
i__12957__auto___18016 = G__18017;
continue;
} else {
}
break;
}

var G__18014 = args18012.length;
switch (G__18014) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18012.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args18019 = [];
var len__12956__auto___18072 = arguments.length;
var i__12957__auto___18073 = (0);
while(true){
if((i__12957__auto___18073 < len__12956__auto___18072)){
args18019.push((arguments[i__12957__auto___18073]));

var G__18074 = (i__12957__auto___18073 + (1));
i__12957__auto___18073 = G__18074;
continue;
} else {
}
break;
}

var G__18021 = args18019.length;
switch (G__18021) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18019.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__17398__auto___18076 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17398__auto___18076,tc,fc){
return (function (){
var f__17399__auto__ = (function (){var switch__17286__auto__ = ((function (c__17398__auto___18076,tc,fc){
return (function (state_18047){
var state_val_18048 = (state_18047[(1)]);
if((state_val_18048 === (7))){
var inst_18043 = (state_18047[(2)]);
var state_18047__$1 = state_18047;
var statearr_18049_18077 = state_18047__$1;
(statearr_18049_18077[(2)] = inst_18043);

(statearr_18049_18077[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18048 === (1))){
var state_18047__$1 = state_18047;
var statearr_18050_18078 = state_18047__$1;
(statearr_18050_18078[(2)] = null);

(statearr_18050_18078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18048 === (4))){
var inst_18024 = (state_18047[(7)]);
var inst_18024__$1 = (state_18047[(2)]);
var inst_18025 = (inst_18024__$1 == null);
var state_18047__$1 = (function (){var statearr_18051 = state_18047;
(statearr_18051[(7)] = inst_18024__$1);

return statearr_18051;
})();
if(cljs.core.truth_(inst_18025)){
var statearr_18052_18079 = state_18047__$1;
(statearr_18052_18079[(1)] = (5));

} else {
var statearr_18053_18080 = state_18047__$1;
(statearr_18053_18080[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18048 === (13))){
var state_18047__$1 = state_18047;
var statearr_18054_18081 = state_18047__$1;
(statearr_18054_18081[(2)] = null);

(statearr_18054_18081[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18048 === (6))){
var inst_18024 = (state_18047[(7)]);
var inst_18030 = p.call(null,inst_18024);
var state_18047__$1 = state_18047;
if(cljs.core.truth_(inst_18030)){
var statearr_18055_18082 = state_18047__$1;
(statearr_18055_18082[(1)] = (9));

} else {
var statearr_18056_18083 = state_18047__$1;
(statearr_18056_18083[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18048 === (3))){
var inst_18045 = (state_18047[(2)]);
var state_18047__$1 = state_18047;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18047__$1,inst_18045);
} else {
if((state_val_18048 === (12))){
var state_18047__$1 = state_18047;
var statearr_18057_18084 = state_18047__$1;
(statearr_18057_18084[(2)] = null);

(statearr_18057_18084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18048 === (2))){
var state_18047__$1 = state_18047;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18047__$1,(4),ch);
} else {
if((state_val_18048 === (11))){
var inst_18024 = (state_18047[(7)]);
var inst_18034 = (state_18047[(2)]);
var state_18047__$1 = state_18047;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18047__$1,(8),inst_18034,inst_18024);
} else {
if((state_val_18048 === (9))){
var state_18047__$1 = state_18047;
var statearr_18058_18085 = state_18047__$1;
(statearr_18058_18085[(2)] = tc);

(statearr_18058_18085[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18048 === (5))){
var inst_18027 = cljs.core.async.close_BANG_.call(null,tc);
var inst_18028 = cljs.core.async.close_BANG_.call(null,fc);
var state_18047__$1 = (function (){var statearr_18059 = state_18047;
(statearr_18059[(8)] = inst_18027);

return statearr_18059;
})();
var statearr_18060_18086 = state_18047__$1;
(statearr_18060_18086[(2)] = inst_18028);

(statearr_18060_18086[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18048 === (14))){
var inst_18041 = (state_18047[(2)]);
var state_18047__$1 = state_18047;
var statearr_18061_18087 = state_18047__$1;
(statearr_18061_18087[(2)] = inst_18041);

(statearr_18061_18087[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18048 === (10))){
var state_18047__$1 = state_18047;
var statearr_18062_18088 = state_18047__$1;
(statearr_18062_18088[(2)] = fc);

(statearr_18062_18088[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18048 === (8))){
var inst_18036 = (state_18047[(2)]);
var state_18047__$1 = state_18047;
if(cljs.core.truth_(inst_18036)){
var statearr_18063_18089 = state_18047__$1;
(statearr_18063_18089[(1)] = (12));

} else {
var statearr_18064_18090 = state_18047__$1;
(statearr_18064_18090[(1)] = (13));

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
});})(c__17398__auto___18076,tc,fc))
;
return ((function (switch__17286__auto__,c__17398__auto___18076,tc,fc){
return (function() {
var cljs$core$async$state_machine__17287__auto__ = null;
var cljs$core$async$state_machine__17287__auto____0 = (function (){
var statearr_18068 = [null,null,null,null,null,null,null,null,null];
(statearr_18068[(0)] = cljs$core$async$state_machine__17287__auto__);

(statearr_18068[(1)] = (1));

return statearr_18068;
});
var cljs$core$async$state_machine__17287__auto____1 = (function (state_18047){
while(true){
var ret_value__17288__auto__ = (function (){try{while(true){
var result__17289__auto__ = switch__17286__auto__.call(null,state_18047);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17289__auto__;
}
break;
}
}catch (e18069){if((e18069 instanceof Object)){
var ex__17290__auto__ = e18069;
var statearr_18070_18091 = state_18047;
(statearr_18070_18091[(5)] = ex__17290__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18047);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18069;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18092 = state_18047;
state_18047 = G__18092;
continue;
} else {
return ret_value__17288__auto__;
}
break;
}
});
cljs$core$async$state_machine__17287__auto__ = function(state_18047){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17287__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17287__auto____1.call(this,state_18047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17287__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17287__auto____0;
cljs$core$async$state_machine__17287__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17287__auto____1;
return cljs$core$async$state_machine__17287__auto__;
})()
;})(switch__17286__auto__,c__17398__auto___18076,tc,fc))
})();
var state__17400__auto__ = (function (){var statearr_18071 = f__17399__auto__.call(null);
(statearr_18071[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17398__auto___18076);

return statearr_18071;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17400__auto__);
});})(c__17398__auto___18076,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__17398__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17398__auto__){
return (function (){
var f__17399__auto__ = (function (){var switch__17286__auto__ = ((function (c__17398__auto__){
return (function (state_18156){
var state_val_18157 = (state_18156[(1)]);
if((state_val_18157 === (7))){
var inst_18152 = (state_18156[(2)]);
var state_18156__$1 = state_18156;
var statearr_18158_18179 = state_18156__$1;
(statearr_18158_18179[(2)] = inst_18152);

(statearr_18158_18179[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18157 === (1))){
var inst_18136 = init;
var state_18156__$1 = (function (){var statearr_18159 = state_18156;
(statearr_18159[(7)] = inst_18136);

return statearr_18159;
})();
var statearr_18160_18180 = state_18156__$1;
(statearr_18160_18180[(2)] = null);

(statearr_18160_18180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18157 === (4))){
var inst_18139 = (state_18156[(8)]);
var inst_18139__$1 = (state_18156[(2)]);
var inst_18140 = (inst_18139__$1 == null);
var state_18156__$1 = (function (){var statearr_18161 = state_18156;
(statearr_18161[(8)] = inst_18139__$1);

return statearr_18161;
})();
if(cljs.core.truth_(inst_18140)){
var statearr_18162_18181 = state_18156__$1;
(statearr_18162_18181[(1)] = (5));

} else {
var statearr_18163_18182 = state_18156__$1;
(statearr_18163_18182[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18157 === (6))){
var inst_18139 = (state_18156[(8)]);
var inst_18143 = (state_18156[(9)]);
var inst_18136 = (state_18156[(7)]);
var inst_18143__$1 = f.call(null,inst_18136,inst_18139);
var inst_18144 = cljs.core.reduced_QMARK_.call(null,inst_18143__$1);
var state_18156__$1 = (function (){var statearr_18164 = state_18156;
(statearr_18164[(9)] = inst_18143__$1);

return statearr_18164;
})();
if(inst_18144){
var statearr_18165_18183 = state_18156__$1;
(statearr_18165_18183[(1)] = (8));

} else {
var statearr_18166_18184 = state_18156__$1;
(statearr_18166_18184[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18157 === (3))){
var inst_18154 = (state_18156[(2)]);
var state_18156__$1 = state_18156;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18156__$1,inst_18154);
} else {
if((state_val_18157 === (2))){
var state_18156__$1 = state_18156;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18156__$1,(4),ch);
} else {
if((state_val_18157 === (9))){
var inst_18143 = (state_18156[(9)]);
var inst_18136 = inst_18143;
var state_18156__$1 = (function (){var statearr_18167 = state_18156;
(statearr_18167[(7)] = inst_18136);

return statearr_18167;
})();
var statearr_18168_18185 = state_18156__$1;
(statearr_18168_18185[(2)] = null);

(statearr_18168_18185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18157 === (5))){
var inst_18136 = (state_18156[(7)]);
var state_18156__$1 = state_18156;
var statearr_18169_18186 = state_18156__$1;
(statearr_18169_18186[(2)] = inst_18136);

(statearr_18169_18186[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18157 === (10))){
var inst_18150 = (state_18156[(2)]);
var state_18156__$1 = state_18156;
var statearr_18170_18187 = state_18156__$1;
(statearr_18170_18187[(2)] = inst_18150);

(statearr_18170_18187[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18157 === (8))){
var inst_18143 = (state_18156[(9)]);
var inst_18146 = cljs.core.deref.call(null,inst_18143);
var state_18156__$1 = state_18156;
var statearr_18171_18188 = state_18156__$1;
(statearr_18171_18188[(2)] = inst_18146);

(statearr_18171_18188[(1)] = (10));


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
});})(c__17398__auto__))
;
return ((function (switch__17286__auto__,c__17398__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__17287__auto__ = null;
var cljs$core$async$reduce_$_state_machine__17287__auto____0 = (function (){
var statearr_18175 = [null,null,null,null,null,null,null,null,null,null];
(statearr_18175[(0)] = cljs$core$async$reduce_$_state_machine__17287__auto__);

(statearr_18175[(1)] = (1));

return statearr_18175;
});
var cljs$core$async$reduce_$_state_machine__17287__auto____1 = (function (state_18156){
while(true){
var ret_value__17288__auto__ = (function (){try{while(true){
var result__17289__auto__ = switch__17286__auto__.call(null,state_18156);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17289__auto__;
}
break;
}
}catch (e18176){if((e18176 instanceof Object)){
var ex__17290__auto__ = e18176;
var statearr_18177_18189 = state_18156;
(statearr_18177_18189[(5)] = ex__17290__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18156);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18176;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18190 = state_18156;
state_18156 = G__18190;
continue;
} else {
return ret_value__17288__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__17287__auto__ = function(state_18156){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__17287__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__17287__auto____1.call(this,state_18156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__17287__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__17287__auto____0;
cljs$core$async$reduce_$_state_machine__17287__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__17287__auto____1;
return cljs$core$async$reduce_$_state_machine__17287__auto__;
})()
;})(switch__17286__auto__,c__17398__auto__))
})();
var state__17400__auto__ = (function (){var statearr_18178 = f__17399__auto__.call(null);
(statearr_18178[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17398__auto__);

return statearr_18178;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17400__auto__);
});})(c__17398__auto__))
);

return c__17398__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args18191 = [];
var len__12956__auto___18243 = arguments.length;
var i__12957__auto___18244 = (0);
while(true){
if((i__12957__auto___18244 < len__12956__auto___18243)){
args18191.push((arguments[i__12957__auto___18244]));

var G__18245 = (i__12957__auto___18244 + (1));
i__12957__auto___18244 = G__18245;
continue;
} else {
}
break;
}

var G__18193 = args18191.length;
switch (G__18193) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18191.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__17398__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17398__auto__){
return (function (){
var f__17399__auto__ = (function (){var switch__17286__auto__ = ((function (c__17398__auto__){
return (function (state_18218){
var state_val_18219 = (state_18218[(1)]);
if((state_val_18219 === (7))){
var inst_18200 = (state_18218[(2)]);
var state_18218__$1 = state_18218;
var statearr_18220_18247 = state_18218__$1;
(statearr_18220_18247[(2)] = inst_18200);

(statearr_18220_18247[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18219 === (1))){
var inst_18194 = cljs.core.seq.call(null,coll);
var inst_18195 = inst_18194;
var state_18218__$1 = (function (){var statearr_18221 = state_18218;
(statearr_18221[(7)] = inst_18195);

return statearr_18221;
})();
var statearr_18222_18248 = state_18218__$1;
(statearr_18222_18248[(2)] = null);

(statearr_18222_18248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18219 === (4))){
var inst_18195 = (state_18218[(7)]);
var inst_18198 = cljs.core.first.call(null,inst_18195);
var state_18218__$1 = state_18218;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18218__$1,(7),ch,inst_18198);
} else {
if((state_val_18219 === (13))){
var inst_18212 = (state_18218[(2)]);
var state_18218__$1 = state_18218;
var statearr_18223_18249 = state_18218__$1;
(statearr_18223_18249[(2)] = inst_18212);

(statearr_18223_18249[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18219 === (6))){
var inst_18203 = (state_18218[(2)]);
var state_18218__$1 = state_18218;
if(cljs.core.truth_(inst_18203)){
var statearr_18224_18250 = state_18218__$1;
(statearr_18224_18250[(1)] = (8));

} else {
var statearr_18225_18251 = state_18218__$1;
(statearr_18225_18251[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18219 === (3))){
var inst_18216 = (state_18218[(2)]);
var state_18218__$1 = state_18218;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18218__$1,inst_18216);
} else {
if((state_val_18219 === (12))){
var state_18218__$1 = state_18218;
var statearr_18226_18252 = state_18218__$1;
(statearr_18226_18252[(2)] = null);

(statearr_18226_18252[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18219 === (2))){
var inst_18195 = (state_18218[(7)]);
var state_18218__$1 = state_18218;
if(cljs.core.truth_(inst_18195)){
var statearr_18227_18253 = state_18218__$1;
(statearr_18227_18253[(1)] = (4));

} else {
var statearr_18228_18254 = state_18218__$1;
(statearr_18228_18254[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18219 === (11))){
var inst_18209 = cljs.core.async.close_BANG_.call(null,ch);
var state_18218__$1 = state_18218;
var statearr_18229_18255 = state_18218__$1;
(statearr_18229_18255[(2)] = inst_18209);

(statearr_18229_18255[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18219 === (9))){
var state_18218__$1 = state_18218;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18230_18256 = state_18218__$1;
(statearr_18230_18256[(1)] = (11));

} else {
var statearr_18231_18257 = state_18218__$1;
(statearr_18231_18257[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18219 === (5))){
var inst_18195 = (state_18218[(7)]);
var state_18218__$1 = state_18218;
var statearr_18232_18258 = state_18218__$1;
(statearr_18232_18258[(2)] = inst_18195);

(statearr_18232_18258[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18219 === (10))){
var inst_18214 = (state_18218[(2)]);
var state_18218__$1 = state_18218;
var statearr_18233_18259 = state_18218__$1;
(statearr_18233_18259[(2)] = inst_18214);

(statearr_18233_18259[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18219 === (8))){
var inst_18195 = (state_18218[(7)]);
var inst_18205 = cljs.core.next.call(null,inst_18195);
var inst_18195__$1 = inst_18205;
var state_18218__$1 = (function (){var statearr_18234 = state_18218;
(statearr_18234[(7)] = inst_18195__$1);

return statearr_18234;
})();
var statearr_18235_18260 = state_18218__$1;
(statearr_18235_18260[(2)] = null);

(statearr_18235_18260[(1)] = (2));


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
});})(c__17398__auto__))
;
return ((function (switch__17286__auto__,c__17398__auto__){
return (function() {
var cljs$core$async$state_machine__17287__auto__ = null;
var cljs$core$async$state_machine__17287__auto____0 = (function (){
var statearr_18239 = [null,null,null,null,null,null,null,null];
(statearr_18239[(0)] = cljs$core$async$state_machine__17287__auto__);

(statearr_18239[(1)] = (1));

return statearr_18239;
});
var cljs$core$async$state_machine__17287__auto____1 = (function (state_18218){
while(true){
var ret_value__17288__auto__ = (function (){try{while(true){
var result__17289__auto__ = switch__17286__auto__.call(null,state_18218);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17289__auto__;
}
break;
}
}catch (e18240){if((e18240 instanceof Object)){
var ex__17290__auto__ = e18240;
var statearr_18241_18261 = state_18218;
(statearr_18241_18261[(5)] = ex__17290__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18218);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18240;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18262 = state_18218;
state_18218 = G__18262;
continue;
} else {
return ret_value__17288__auto__;
}
break;
}
});
cljs$core$async$state_machine__17287__auto__ = function(state_18218){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17287__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17287__auto____1.call(this,state_18218);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17287__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17287__auto____0;
cljs$core$async$state_machine__17287__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17287__auto____1;
return cljs$core$async$state_machine__17287__auto__;
})()
;})(switch__17286__auto__,c__17398__auto__))
})();
var state__17400__auto__ = (function (){var statearr_18242 = f__17399__auto__.call(null);
(statearr_18242[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17398__auto__);

return statearr_18242;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17400__auto__);
});})(c__17398__auto__))
);

return c__17398__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__12553__auto__ = (((_ == null))?null:_);
var m__12554__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__12553__auto__)]);
if(!((m__12554__auto__ == null))){
return m__12554__auto__.call(null,_);
} else {
var m__12554__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__12554__auto____$1 == null))){
return m__12554__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__12553__auto__ = (((m == null))?null:m);
var m__12554__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__12553__auto__)]);
if(!((m__12554__auto__ == null))){
return m__12554__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__12554__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__12554__auto____$1 == null))){
return m__12554__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__12553__auto__ = (((m == null))?null:m);
var m__12554__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__12553__auto__)]);
if(!((m__12554__auto__ == null))){
return m__12554__auto__.call(null,m,ch);
} else {
var m__12554__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__12554__auto____$1 == null))){
return m__12554__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__12553__auto__ = (((m == null))?null:m);
var m__12554__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__12553__auto__)]);
if(!((m__12554__auto__ == null))){
return m__12554__auto__.call(null,m);
} else {
var m__12554__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__12554__auto____$1 == null))){
return m__12554__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async18484 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18484 = (function (mult,ch,cs,meta18485){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta18485 = meta18485;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18484.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_18486,meta18485__$1){
var self__ = this;
var _18486__$1 = this;
return (new cljs.core.async.t_cljs$core$async18484(self__.mult,self__.ch,self__.cs,meta18485__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async18484.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_18486){
var self__ = this;
var _18486__$1 = this;
return self__.meta18485;
});})(cs))
;

cljs.core.async.t_cljs$core$async18484.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async18484.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async18484.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async18484.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18484.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18484.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18484.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta18485","meta18485",-493393249,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async18484.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18484.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18484";

cljs.core.async.t_cljs$core$async18484.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__12496__auto__,writer__12497__auto__,opt__12498__auto__){
return cljs.core._write.call(null,writer__12497__auto__,"cljs.core.async/t_cljs$core$async18484");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async18484 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async18484(mult__$1,ch__$1,cs__$1,meta18485){
return (new cljs.core.async.t_cljs$core$async18484(mult__$1,ch__$1,cs__$1,meta18485));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async18484(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__17398__auto___18705 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17398__auto___18705,cs,m,dchan,dctr,done){
return (function (){
var f__17399__auto__ = (function (){var switch__17286__auto__ = ((function (c__17398__auto___18705,cs,m,dchan,dctr,done){
return (function (state_18617){
var state_val_18618 = (state_18617[(1)]);
if((state_val_18618 === (7))){
var inst_18613 = (state_18617[(2)]);
var state_18617__$1 = state_18617;
var statearr_18619_18706 = state_18617__$1;
(statearr_18619_18706[(2)] = inst_18613);

(statearr_18619_18706[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18618 === (20))){
var inst_18518 = (state_18617[(7)]);
var inst_18528 = cljs.core.first.call(null,inst_18518);
var inst_18529 = cljs.core.nth.call(null,inst_18528,(0),null);
var inst_18530 = cljs.core.nth.call(null,inst_18528,(1),null);
var state_18617__$1 = (function (){var statearr_18620 = state_18617;
(statearr_18620[(8)] = inst_18529);

return statearr_18620;
})();
if(cljs.core.truth_(inst_18530)){
var statearr_18621_18707 = state_18617__$1;
(statearr_18621_18707[(1)] = (22));

} else {
var statearr_18622_18708 = state_18617__$1;
(statearr_18622_18708[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18618 === (27))){
var inst_18489 = (state_18617[(9)]);
var inst_18565 = (state_18617[(10)]);
var inst_18558 = (state_18617[(11)]);
var inst_18560 = (state_18617[(12)]);
var inst_18565__$1 = cljs.core._nth.call(null,inst_18558,inst_18560);
var inst_18566 = cljs.core.async.put_BANG_.call(null,inst_18565__$1,inst_18489,done);
var state_18617__$1 = (function (){var statearr_18623 = state_18617;
(statearr_18623[(10)] = inst_18565__$1);

return statearr_18623;
})();
if(cljs.core.truth_(inst_18566)){
var statearr_18624_18709 = state_18617__$1;
(statearr_18624_18709[(1)] = (30));

} else {
var statearr_18625_18710 = state_18617__$1;
(statearr_18625_18710[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18618 === (1))){
var state_18617__$1 = state_18617;
var statearr_18626_18711 = state_18617__$1;
(statearr_18626_18711[(2)] = null);

(statearr_18626_18711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18618 === (24))){
var inst_18518 = (state_18617[(7)]);
var inst_18535 = (state_18617[(2)]);
var inst_18536 = cljs.core.next.call(null,inst_18518);
var inst_18498 = inst_18536;
var inst_18499 = null;
var inst_18500 = (0);
var inst_18501 = (0);
var state_18617__$1 = (function (){var statearr_18627 = state_18617;
(statearr_18627[(13)] = inst_18501);

(statearr_18627[(14)] = inst_18498);

(statearr_18627[(15)] = inst_18500);

(statearr_18627[(16)] = inst_18499);

(statearr_18627[(17)] = inst_18535);

return statearr_18627;
})();
var statearr_18628_18712 = state_18617__$1;
(statearr_18628_18712[(2)] = null);

(statearr_18628_18712[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18618 === (39))){
var state_18617__$1 = state_18617;
var statearr_18632_18713 = state_18617__$1;
(statearr_18632_18713[(2)] = null);

(statearr_18632_18713[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18618 === (4))){
var inst_18489 = (state_18617[(9)]);
var inst_18489__$1 = (state_18617[(2)]);
var inst_18490 = (inst_18489__$1 == null);
var state_18617__$1 = (function (){var statearr_18633 = state_18617;
(statearr_18633[(9)] = inst_18489__$1);

return statearr_18633;
})();
if(cljs.core.truth_(inst_18490)){
var statearr_18634_18714 = state_18617__$1;
(statearr_18634_18714[(1)] = (5));

} else {
var statearr_18635_18715 = state_18617__$1;
(statearr_18635_18715[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18618 === (15))){
var inst_18501 = (state_18617[(13)]);
var inst_18498 = (state_18617[(14)]);
var inst_18500 = (state_18617[(15)]);
var inst_18499 = (state_18617[(16)]);
var inst_18514 = (state_18617[(2)]);
var inst_18515 = (inst_18501 + (1));
var tmp18629 = inst_18498;
var tmp18630 = inst_18500;
var tmp18631 = inst_18499;
var inst_18498__$1 = tmp18629;
var inst_18499__$1 = tmp18631;
var inst_18500__$1 = tmp18630;
var inst_18501__$1 = inst_18515;
var state_18617__$1 = (function (){var statearr_18636 = state_18617;
(statearr_18636[(18)] = inst_18514);

(statearr_18636[(13)] = inst_18501__$1);

(statearr_18636[(14)] = inst_18498__$1);

(statearr_18636[(15)] = inst_18500__$1);

(statearr_18636[(16)] = inst_18499__$1);

return statearr_18636;
})();
var statearr_18637_18716 = state_18617__$1;
(statearr_18637_18716[(2)] = null);

(statearr_18637_18716[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18618 === (21))){
var inst_18539 = (state_18617[(2)]);
var state_18617__$1 = state_18617;
var statearr_18641_18717 = state_18617__$1;
(statearr_18641_18717[(2)] = inst_18539);

(statearr_18641_18717[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18618 === (31))){
var inst_18565 = (state_18617[(10)]);
var inst_18569 = done.call(null,null);
var inst_18570 = cljs.core.async.untap_STAR_.call(null,m,inst_18565);
var state_18617__$1 = (function (){var statearr_18642 = state_18617;
(statearr_18642[(19)] = inst_18569);

return statearr_18642;
})();
var statearr_18643_18718 = state_18617__$1;
(statearr_18643_18718[(2)] = inst_18570);

(statearr_18643_18718[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18618 === (32))){
var inst_18557 = (state_18617[(20)]);
var inst_18559 = (state_18617[(21)]);
var inst_18558 = (state_18617[(11)]);
var inst_18560 = (state_18617[(12)]);
var inst_18572 = (state_18617[(2)]);
var inst_18573 = (inst_18560 + (1));
var tmp18638 = inst_18557;
var tmp18639 = inst_18559;
var tmp18640 = inst_18558;
var inst_18557__$1 = tmp18638;
var inst_18558__$1 = tmp18640;
var inst_18559__$1 = tmp18639;
var inst_18560__$1 = inst_18573;
var state_18617__$1 = (function (){var statearr_18644 = state_18617;
(statearr_18644[(20)] = inst_18557__$1);

(statearr_18644[(21)] = inst_18559__$1);

(statearr_18644[(11)] = inst_18558__$1);

(statearr_18644[(22)] = inst_18572);

(statearr_18644[(12)] = inst_18560__$1);

return statearr_18644;
})();
var statearr_18645_18719 = state_18617__$1;
(statearr_18645_18719[(2)] = null);

(statearr_18645_18719[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18618 === (40))){
var inst_18585 = (state_18617[(23)]);
var inst_18589 = done.call(null,null);
var inst_18590 = cljs.core.async.untap_STAR_.call(null,m,inst_18585);
var state_18617__$1 = (function (){var statearr_18646 = state_18617;
(statearr_18646[(24)] = inst_18589);

return statearr_18646;
})();
var statearr_18647_18720 = state_18617__$1;
(statearr_18647_18720[(2)] = inst_18590);

(statearr_18647_18720[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18618 === (33))){
var inst_18576 = (state_18617[(25)]);
var inst_18578 = cljs.core.chunked_seq_QMARK_.call(null,inst_18576);
var state_18617__$1 = state_18617;
if(inst_18578){
var statearr_18648_18721 = state_18617__$1;
(statearr_18648_18721[(1)] = (36));

} else {
var statearr_18649_18722 = state_18617__$1;
(statearr_18649_18722[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18618 === (13))){
var inst_18508 = (state_18617[(26)]);
var inst_18511 = cljs.core.async.close_BANG_.call(null,inst_18508);
var state_18617__$1 = state_18617;
var statearr_18650_18723 = state_18617__$1;
(statearr_18650_18723[(2)] = inst_18511);

(statearr_18650_18723[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18618 === (22))){
var inst_18529 = (state_18617[(8)]);
var inst_18532 = cljs.core.async.close_BANG_.call(null,inst_18529);
var state_18617__$1 = state_18617;
var statearr_18651_18724 = state_18617__$1;
(statearr_18651_18724[(2)] = inst_18532);

(statearr_18651_18724[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18618 === (36))){
var inst_18576 = (state_18617[(25)]);
var inst_18580 = cljs.core.chunk_first.call(null,inst_18576);
var inst_18581 = cljs.core.chunk_rest.call(null,inst_18576);
var inst_18582 = cljs.core.count.call(null,inst_18580);
var inst_18557 = inst_18581;
var inst_18558 = inst_18580;
var inst_18559 = inst_18582;
var inst_18560 = (0);
var state_18617__$1 = (function (){var statearr_18652 = state_18617;
(statearr_18652[(20)] = inst_18557);

(statearr_18652[(21)] = inst_18559);

(statearr_18652[(11)] = inst_18558);

(statearr_18652[(12)] = inst_18560);

return statearr_18652;
})();
var statearr_18653_18725 = state_18617__$1;
(statearr_18653_18725[(2)] = null);

(statearr_18653_18725[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18618 === (41))){
var inst_18576 = (state_18617[(25)]);
var inst_18592 = (state_18617[(2)]);
var inst_18593 = cljs.core.next.call(null,inst_18576);
var inst_18557 = inst_18593;
var inst_18558 = null;
var inst_18559 = (0);
var inst_18560 = (0);
var state_18617__$1 = (function (){var statearr_18654 = state_18617;
(statearr_18654[(20)] = inst_18557);

(statearr_18654[(27)] = inst_18592);

(statearr_18654[(21)] = inst_18559);

(statearr_18654[(11)] = inst_18558);

(statearr_18654[(12)] = inst_18560);

return statearr_18654;
})();
var statearr_18655_18726 = state_18617__$1;
(statearr_18655_18726[(2)] = null);

(statearr_18655_18726[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18618 === (43))){
var state_18617__$1 = state_18617;
var statearr_18656_18727 = state_18617__$1;
(statearr_18656_18727[(2)] = null);

(statearr_18656_18727[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18618 === (29))){
var inst_18601 = (state_18617[(2)]);
var state_18617__$1 = state_18617;
var statearr_18657_18728 = state_18617__$1;
(statearr_18657_18728[(2)] = inst_18601);

(statearr_18657_18728[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18618 === (44))){
var inst_18610 = (state_18617[(2)]);
var state_18617__$1 = (function (){var statearr_18658 = state_18617;
(statearr_18658[(28)] = inst_18610);

return statearr_18658;
})();
var statearr_18659_18729 = state_18617__$1;
(statearr_18659_18729[(2)] = null);

(statearr_18659_18729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18618 === (6))){
var inst_18549 = (state_18617[(29)]);
var inst_18548 = cljs.core.deref.call(null,cs);
var inst_18549__$1 = cljs.core.keys.call(null,inst_18548);
var inst_18550 = cljs.core.count.call(null,inst_18549__$1);
var inst_18551 = cljs.core.reset_BANG_.call(null,dctr,inst_18550);
var inst_18556 = cljs.core.seq.call(null,inst_18549__$1);
var inst_18557 = inst_18556;
var inst_18558 = null;
var inst_18559 = (0);
var inst_18560 = (0);
var state_18617__$1 = (function (){var statearr_18660 = state_18617;
(statearr_18660[(20)] = inst_18557);

(statearr_18660[(21)] = inst_18559);

(statearr_18660[(29)] = inst_18549__$1);

(statearr_18660[(30)] = inst_18551);

(statearr_18660[(11)] = inst_18558);

(statearr_18660[(12)] = inst_18560);

return statearr_18660;
})();
var statearr_18661_18730 = state_18617__$1;
(statearr_18661_18730[(2)] = null);

(statearr_18661_18730[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18618 === (28))){
var inst_18557 = (state_18617[(20)]);
var inst_18576 = (state_18617[(25)]);
var inst_18576__$1 = cljs.core.seq.call(null,inst_18557);
var state_18617__$1 = (function (){var statearr_18662 = state_18617;
(statearr_18662[(25)] = inst_18576__$1);

return statearr_18662;
})();
if(inst_18576__$1){
var statearr_18663_18731 = state_18617__$1;
(statearr_18663_18731[(1)] = (33));

} else {
var statearr_18664_18732 = state_18617__$1;
(statearr_18664_18732[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18618 === (25))){
var inst_18559 = (state_18617[(21)]);
var inst_18560 = (state_18617[(12)]);
var inst_18562 = (inst_18560 < inst_18559);
var inst_18563 = inst_18562;
var state_18617__$1 = state_18617;
if(cljs.core.truth_(inst_18563)){
var statearr_18665_18733 = state_18617__$1;
(statearr_18665_18733[(1)] = (27));

} else {
var statearr_18666_18734 = state_18617__$1;
(statearr_18666_18734[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18618 === (34))){
var state_18617__$1 = state_18617;
var statearr_18667_18735 = state_18617__$1;
(statearr_18667_18735[(2)] = null);

(statearr_18667_18735[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18618 === (17))){
var state_18617__$1 = state_18617;
var statearr_18668_18736 = state_18617__$1;
(statearr_18668_18736[(2)] = null);

(statearr_18668_18736[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18618 === (3))){
var inst_18615 = (state_18617[(2)]);
var state_18617__$1 = state_18617;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18617__$1,inst_18615);
} else {
if((state_val_18618 === (12))){
var inst_18544 = (state_18617[(2)]);
var state_18617__$1 = state_18617;
var statearr_18669_18737 = state_18617__$1;
(statearr_18669_18737[(2)] = inst_18544);

(statearr_18669_18737[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18618 === (2))){
var state_18617__$1 = state_18617;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18617__$1,(4),ch);
} else {
if((state_val_18618 === (23))){
var state_18617__$1 = state_18617;
var statearr_18670_18738 = state_18617__$1;
(statearr_18670_18738[(2)] = null);

(statearr_18670_18738[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18618 === (35))){
var inst_18599 = (state_18617[(2)]);
var state_18617__$1 = state_18617;
var statearr_18671_18739 = state_18617__$1;
(statearr_18671_18739[(2)] = inst_18599);

(statearr_18671_18739[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18618 === (19))){
var inst_18518 = (state_18617[(7)]);
var inst_18522 = cljs.core.chunk_first.call(null,inst_18518);
var inst_18523 = cljs.core.chunk_rest.call(null,inst_18518);
var inst_18524 = cljs.core.count.call(null,inst_18522);
var inst_18498 = inst_18523;
var inst_18499 = inst_18522;
var inst_18500 = inst_18524;
var inst_18501 = (0);
var state_18617__$1 = (function (){var statearr_18672 = state_18617;
(statearr_18672[(13)] = inst_18501);

(statearr_18672[(14)] = inst_18498);

(statearr_18672[(15)] = inst_18500);

(statearr_18672[(16)] = inst_18499);

return statearr_18672;
})();
var statearr_18673_18740 = state_18617__$1;
(statearr_18673_18740[(2)] = null);

(statearr_18673_18740[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18618 === (11))){
var inst_18498 = (state_18617[(14)]);
var inst_18518 = (state_18617[(7)]);
var inst_18518__$1 = cljs.core.seq.call(null,inst_18498);
var state_18617__$1 = (function (){var statearr_18674 = state_18617;
(statearr_18674[(7)] = inst_18518__$1);

return statearr_18674;
})();
if(inst_18518__$1){
var statearr_18675_18741 = state_18617__$1;
(statearr_18675_18741[(1)] = (16));

} else {
var statearr_18676_18742 = state_18617__$1;
(statearr_18676_18742[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18618 === (9))){
var inst_18546 = (state_18617[(2)]);
var state_18617__$1 = state_18617;
var statearr_18677_18743 = state_18617__$1;
(statearr_18677_18743[(2)] = inst_18546);

(statearr_18677_18743[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18618 === (5))){
var inst_18496 = cljs.core.deref.call(null,cs);
var inst_18497 = cljs.core.seq.call(null,inst_18496);
var inst_18498 = inst_18497;
var inst_18499 = null;
var inst_18500 = (0);
var inst_18501 = (0);
var state_18617__$1 = (function (){var statearr_18678 = state_18617;
(statearr_18678[(13)] = inst_18501);

(statearr_18678[(14)] = inst_18498);

(statearr_18678[(15)] = inst_18500);

(statearr_18678[(16)] = inst_18499);

return statearr_18678;
})();
var statearr_18679_18744 = state_18617__$1;
(statearr_18679_18744[(2)] = null);

(statearr_18679_18744[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18618 === (14))){
var state_18617__$1 = state_18617;
var statearr_18680_18745 = state_18617__$1;
(statearr_18680_18745[(2)] = null);

(statearr_18680_18745[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18618 === (45))){
var inst_18607 = (state_18617[(2)]);
var state_18617__$1 = state_18617;
var statearr_18681_18746 = state_18617__$1;
(statearr_18681_18746[(2)] = inst_18607);

(statearr_18681_18746[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18618 === (26))){
var inst_18549 = (state_18617[(29)]);
var inst_18603 = (state_18617[(2)]);
var inst_18604 = cljs.core.seq.call(null,inst_18549);
var state_18617__$1 = (function (){var statearr_18682 = state_18617;
(statearr_18682[(31)] = inst_18603);

return statearr_18682;
})();
if(inst_18604){
var statearr_18683_18747 = state_18617__$1;
(statearr_18683_18747[(1)] = (42));

} else {
var statearr_18684_18748 = state_18617__$1;
(statearr_18684_18748[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18618 === (16))){
var inst_18518 = (state_18617[(7)]);
var inst_18520 = cljs.core.chunked_seq_QMARK_.call(null,inst_18518);
var state_18617__$1 = state_18617;
if(inst_18520){
var statearr_18685_18749 = state_18617__$1;
(statearr_18685_18749[(1)] = (19));

} else {
var statearr_18686_18750 = state_18617__$1;
(statearr_18686_18750[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18618 === (38))){
var inst_18596 = (state_18617[(2)]);
var state_18617__$1 = state_18617;
var statearr_18687_18751 = state_18617__$1;
(statearr_18687_18751[(2)] = inst_18596);

(statearr_18687_18751[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18618 === (30))){
var state_18617__$1 = state_18617;
var statearr_18688_18752 = state_18617__$1;
(statearr_18688_18752[(2)] = null);

(statearr_18688_18752[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18618 === (10))){
var inst_18501 = (state_18617[(13)]);
var inst_18499 = (state_18617[(16)]);
var inst_18507 = cljs.core._nth.call(null,inst_18499,inst_18501);
var inst_18508 = cljs.core.nth.call(null,inst_18507,(0),null);
var inst_18509 = cljs.core.nth.call(null,inst_18507,(1),null);
var state_18617__$1 = (function (){var statearr_18689 = state_18617;
(statearr_18689[(26)] = inst_18508);

return statearr_18689;
})();
if(cljs.core.truth_(inst_18509)){
var statearr_18690_18753 = state_18617__$1;
(statearr_18690_18753[(1)] = (13));

} else {
var statearr_18691_18754 = state_18617__$1;
(statearr_18691_18754[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18618 === (18))){
var inst_18542 = (state_18617[(2)]);
var state_18617__$1 = state_18617;
var statearr_18692_18755 = state_18617__$1;
(statearr_18692_18755[(2)] = inst_18542);

(statearr_18692_18755[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18618 === (42))){
var state_18617__$1 = state_18617;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18617__$1,(45),dchan);
} else {
if((state_val_18618 === (37))){
var inst_18489 = (state_18617[(9)]);
var inst_18585 = (state_18617[(23)]);
var inst_18576 = (state_18617[(25)]);
var inst_18585__$1 = cljs.core.first.call(null,inst_18576);
var inst_18586 = cljs.core.async.put_BANG_.call(null,inst_18585__$1,inst_18489,done);
var state_18617__$1 = (function (){var statearr_18693 = state_18617;
(statearr_18693[(23)] = inst_18585__$1);

return statearr_18693;
})();
if(cljs.core.truth_(inst_18586)){
var statearr_18694_18756 = state_18617__$1;
(statearr_18694_18756[(1)] = (39));

} else {
var statearr_18695_18757 = state_18617__$1;
(statearr_18695_18757[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18618 === (8))){
var inst_18501 = (state_18617[(13)]);
var inst_18500 = (state_18617[(15)]);
var inst_18503 = (inst_18501 < inst_18500);
var inst_18504 = inst_18503;
var state_18617__$1 = state_18617;
if(cljs.core.truth_(inst_18504)){
var statearr_18696_18758 = state_18617__$1;
(statearr_18696_18758[(1)] = (10));

} else {
var statearr_18697_18759 = state_18617__$1;
(statearr_18697_18759[(1)] = (11));

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
});})(c__17398__auto___18705,cs,m,dchan,dctr,done))
;
return ((function (switch__17286__auto__,c__17398__auto___18705,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__17287__auto__ = null;
var cljs$core$async$mult_$_state_machine__17287__auto____0 = (function (){
var statearr_18701 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18701[(0)] = cljs$core$async$mult_$_state_machine__17287__auto__);

(statearr_18701[(1)] = (1));

return statearr_18701;
});
var cljs$core$async$mult_$_state_machine__17287__auto____1 = (function (state_18617){
while(true){
var ret_value__17288__auto__ = (function (){try{while(true){
var result__17289__auto__ = switch__17286__auto__.call(null,state_18617);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17289__auto__;
}
break;
}
}catch (e18702){if((e18702 instanceof Object)){
var ex__17290__auto__ = e18702;
var statearr_18703_18760 = state_18617;
(statearr_18703_18760[(5)] = ex__17290__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18617);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18702;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18761 = state_18617;
state_18617 = G__18761;
continue;
} else {
return ret_value__17288__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__17287__auto__ = function(state_18617){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__17287__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__17287__auto____1.call(this,state_18617);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__17287__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__17287__auto____0;
cljs$core$async$mult_$_state_machine__17287__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__17287__auto____1;
return cljs$core$async$mult_$_state_machine__17287__auto__;
})()
;})(switch__17286__auto__,c__17398__auto___18705,cs,m,dchan,dctr,done))
})();
var state__17400__auto__ = (function (){var statearr_18704 = f__17399__auto__.call(null);
(statearr_18704[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17398__auto___18705);

return statearr_18704;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17400__auto__);
});})(c__17398__auto___18705,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args18762 = [];
var len__12956__auto___18765 = arguments.length;
var i__12957__auto___18766 = (0);
while(true){
if((i__12957__auto___18766 < len__12956__auto___18765)){
args18762.push((arguments[i__12957__auto___18766]));

var G__18767 = (i__12957__auto___18766 + (1));
i__12957__auto___18766 = G__18767;
continue;
} else {
}
break;
}

var G__18764 = args18762.length;
switch (G__18764) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18762.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__12553__auto__ = (((m == null))?null:m);
var m__12554__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__12553__auto__)]);
if(!((m__12554__auto__ == null))){
return m__12554__auto__.call(null,m,ch);
} else {
var m__12554__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__12554__auto____$1 == null))){
return m__12554__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__12553__auto__ = (((m == null))?null:m);
var m__12554__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__12553__auto__)]);
if(!((m__12554__auto__ == null))){
return m__12554__auto__.call(null,m,ch);
} else {
var m__12554__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__12554__auto____$1 == null))){
return m__12554__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__12553__auto__ = (((m == null))?null:m);
var m__12554__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__12553__auto__)]);
if(!((m__12554__auto__ == null))){
return m__12554__auto__.call(null,m);
} else {
var m__12554__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__12554__auto____$1 == null))){
return m__12554__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__12553__auto__ = (((m == null))?null:m);
var m__12554__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__12553__auto__)]);
if(!((m__12554__auto__ == null))){
return m__12554__auto__.call(null,m,state_map);
} else {
var m__12554__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__12554__auto____$1 == null))){
return m__12554__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__12553__auto__ = (((m == null))?null:m);
var m__12554__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__12553__auto__)]);
if(!((m__12554__auto__ == null))){
return m__12554__auto__.call(null,m,mode);
} else {
var m__12554__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__12554__auto____$1 == null))){
return m__12554__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__12963__auto__ = [];
var len__12956__auto___18779 = arguments.length;
var i__12957__auto___18780 = (0);
while(true){
if((i__12957__auto___18780 < len__12956__auto___18779)){
args__12963__auto__.push((arguments[i__12957__auto___18780]));

var G__18781 = (i__12957__auto___18780 + (1));
i__12957__auto___18780 = G__18781;
continue;
} else {
}
break;
}

var argseq__12964__auto__ = ((((3) < args__12963__auto__.length))?(new cljs.core.IndexedSeq(args__12963__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__12964__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__18773){
var map__18774 = p__18773;
var map__18774__$1 = ((((!((map__18774 == null)))?((((map__18774.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18774.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18774):map__18774);
var opts = map__18774__$1;
var statearr_18776_18782 = state;
(statearr_18776_18782[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__18774,map__18774__$1,opts){
return (function (val){
var statearr_18777_18783 = state;
(statearr_18777_18783[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__18774,map__18774__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_18778_18784 = state;
(statearr_18778_18784[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq18769){
var G__18770 = cljs.core.first.call(null,seq18769);
var seq18769__$1 = cljs.core.next.call(null,seq18769);
var G__18771 = cljs.core.first.call(null,seq18769__$1);
var seq18769__$2 = cljs.core.next.call(null,seq18769__$1);
var G__18772 = cljs.core.first.call(null,seq18769__$2);
var seq18769__$3 = cljs.core.next.call(null,seq18769__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18770,G__18771,G__18772,seq18769__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async18948 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18948 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18949){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta18949 = meta18949;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18948.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18950,meta18949__$1){
var self__ = this;
var _18950__$1 = this;
return (new cljs.core.async.t_cljs$core$async18948(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta18949__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18948.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18950){
var self__ = this;
var _18950__$1 = this;
return self__.meta18949;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18948.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async18948.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18948.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async18948.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18948.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18948.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18948.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18948.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18948.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta18949","meta18949",-1861410430,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18948.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18948.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18948";

cljs.core.async.t_cljs$core$async18948.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__12496__auto__,writer__12497__auto__,opt__12498__auto__){
return cljs.core._write.call(null,writer__12497__auto__,"cljs.core.async/t_cljs$core$async18948");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async18948 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async18948(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18949){
return (new cljs.core.async.t_cljs$core$async18948(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18949));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async18948(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__17398__auto___19111 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17398__auto___19111,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__17399__auto__ = (function (){var switch__17286__auto__ = ((function (c__17398__auto___19111,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_19048){
var state_val_19049 = (state_19048[(1)]);
if((state_val_19049 === (7))){
var inst_18966 = (state_19048[(2)]);
var state_19048__$1 = state_19048;
var statearr_19050_19112 = state_19048__$1;
(statearr_19050_19112[(2)] = inst_18966);

(statearr_19050_19112[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19049 === (20))){
var inst_18978 = (state_19048[(7)]);
var state_19048__$1 = state_19048;
var statearr_19051_19113 = state_19048__$1;
(statearr_19051_19113[(2)] = inst_18978);

(statearr_19051_19113[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19049 === (27))){
var state_19048__$1 = state_19048;
var statearr_19052_19114 = state_19048__$1;
(statearr_19052_19114[(2)] = null);

(statearr_19052_19114[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19049 === (1))){
var inst_18954 = (state_19048[(8)]);
var inst_18954__$1 = calc_state.call(null);
var inst_18956 = (inst_18954__$1 == null);
var inst_18957 = cljs.core.not.call(null,inst_18956);
var state_19048__$1 = (function (){var statearr_19053 = state_19048;
(statearr_19053[(8)] = inst_18954__$1);

return statearr_19053;
})();
if(inst_18957){
var statearr_19054_19115 = state_19048__$1;
(statearr_19054_19115[(1)] = (2));

} else {
var statearr_19055_19116 = state_19048__$1;
(statearr_19055_19116[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19049 === (24))){
var inst_19001 = (state_19048[(9)]);
var inst_19008 = (state_19048[(10)]);
var inst_19022 = (state_19048[(11)]);
var inst_19022__$1 = inst_19001.call(null,inst_19008);
var state_19048__$1 = (function (){var statearr_19056 = state_19048;
(statearr_19056[(11)] = inst_19022__$1);

return statearr_19056;
})();
if(cljs.core.truth_(inst_19022__$1)){
var statearr_19057_19117 = state_19048__$1;
(statearr_19057_19117[(1)] = (29));

} else {
var statearr_19058_19118 = state_19048__$1;
(statearr_19058_19118[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19049 === (4))){
var inst_18969 = (state_19048[(2)]);
var state_19048__$1 = state_19048;
if(cljs.core.truth_(inst_18969)){
var statearr_19059_19119 = state_19048__$1;
(statearr_19059_19119[(1)] = (8));

} else {
var statearr_19060_19120 = state_19048__$1;
(statearr_19060_19120[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19049 === (15))){
var inst_18995 = (state_19048[(2)]);
var state_19048__$1 = state_19048;
if(cljs.core.truth_(inst_18995)){
var statearr_19061_19121 = state_19048__$1;
(statearr_19061_19121[(1)] = (19));

} else {
var statearr_19062_19122 = state_19048__$1;
(statearr_19062_19122[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19049 === (21))){
var inst_19000 = (state_19048[(12)]);
var inst_19000__$1 = (state_19048[(2)]);
var inst_19001 = cljs.core.get.call(null,inst_19000__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19002 = cljs.core.get.call(null,inst_19000__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19003 = cljs.core.get.call(null,inst_19000__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_19048__$1 = (function (){var statearr_19063 = state_19048;
(statearr_19063[(12)] = inst_19000__$1);

(statearr_19063[(9)] = inst_19001);

(statearr_19063[(13)] = inst_19002);

return statearr_19063;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_19048__$1,(22),inst_19003);
} else {
if((state_val_19049 === (31))){
var inst_19030 = (state_19048[(2)]);
var state_19048__$1 = state_19048;
if(cljs.core.truth_(inst_19030)){
var statearr_19064_19123 = state_19048__$1;
(statearr_19064_19123[(1)] = (32));

} else {
var statearr_19065_19124 = state_19048__$1;
(statearr_19065_19124[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19049 === (32))){
var inst_19007 = (state_19048[(14)]);
var state_19048__$1 = state_19048;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19048__$1,(35),out,inst_19007);
} else {
if((state_val_19049 === (33))){
var inst_19000 = (state_19048[(12)]);
var inst_18978 = inst_19000;
var state_19048__$1 = (function (){var statearr_19066 = state_19048;
(statearr_19066[(7)] = inst_18978);

return statearr_19066;
})();
var statearr_19067_19125 = state_19048__$1;
(statearr_19067_19125[(2)] = null);

(statearr_19067_19125[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19049 === (13))){
var inst_18978 = (state_19048[(7)]);
var inst_18985 = inst_18978.cljs$lang$protocol_mask$partition0$;
var inst_18986 = (inst_18985 & (64));
var inst_18987 = inst_18978.cljs$core$ISeq$;
var inst_18988 = (inst_18986) || (inst_18987);
var state_19048__$1 = state_19048;
if(cljs.core.truth_(inst_18988)){
var statearr_19068_19126 = state_19048__$1;
(statearr_19068_19126[(1)] = (16));

} else {
var statearr_19069_19127 = state_19048__$1;
(statearr_19069_19127[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19049 === (22))){
var inst_19007 = (state_19048[(14)]);
var inst_19008 = (state_19048[(10)]);
var inst_19006 = (state_19048[(2)]);
var inst_19007__$1 = cljs.core.nth.call(null,inst_19006,(0),null);
var inst_19008__$1 = cljs.core.nth.call(null,inst_19006,(1),null);
var inst_19009 = (inst_19007__$1 == null);
var inst_19010 = cljs.core._EQ_.call(null,inst_19008__$1,change);
var inst_19011 = (inst_19009) || (inst_19010);
var state_19048__$1 = (function (){var statearr_19070 = state_19048;
(statearr_19070[(14)] = inst_19007__$1);

(statearr_19070[(10)] = inst_19008__$1);

return statearr_19070;
})();
if(cljs.core.truth_(inst_19011)){
var statearr_19071_19128 = state_19048__$1;
(statearr_19071_19128[(1)] = (23));

} else {
var statearr_19072_19129 = state_19048__$1;
(statearr_19072_19129[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19049 === (36))){
var inst_19000 = (state_19048[(12)]);
var inst_18978 = inst_19000;
var state_19048__$1 = (function (){var statearr_19073 = state_19048;
(statearr_19073[(7)] = inst_18978);

return statearr_19073;
})();
var statearr_19074_19130 = state_19048__$1;
(statearr_19074_19130[(2)] = null);

(statearr_19074_19130[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19049 === (29))){
var inst_19022 = (state_19048[(11)]);
var state_19048__$1 = state_19048;
var statearr_19075_19131 = state_19048__$1;
(statearr_19075_19131[(2)] = inst_19022);

(statearr_19075_19131[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19049 === (6))){
var state_19048__$1 = state_19048;
var statearr_19076_19132 = state_19048__$1;
(statearr_19076_19132[(2)] = false);

(statearr_19076_19132[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19049 === (28))){
var inst_19018 = (state_19048[(2)]);
var inst_19019 = calc_state.call(null);
var inst_18978 = inst_19019;
var state_19048__$1 = (function (){var statearr_19077 = state_19048;
(statearr_19077[(15)] = inst_19018);

(statearr_19077[(7)] = inst_18978);

return statearr_19077;
})();
var statearr_19078_19133 = state_19048__$1;
(statearr_19078_19133[(2)] = null);

(statearr_19078_19133[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19049 === (25))){
var inst_19044 = (state_19048[(2)]);
var state_19048__$1 = state_19048;
var statearr_19079_19134 = state_19048__$1;
(statearr_19079_19134[(2)] = inst_19044);

(statearr_19079_19134[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19049 === (34))){
var inst_19042 = (state_19048[(2)]);
var state_19048__$1 = state_19048;
var statearr_19080_19135 = state_19048__$1;
(statearr_19080_19135[(2)] = inst_19042);

(statearr_19080_19135[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19049 === (17))){
var state_19048__$1 = state_19048;
var statearr_19081_19136 = state_19048__$1;
(statearr_19081_19136[(2)] = false);

(statearr_19081_19136[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19049 === (3))){
var state_19048__$1 = state_19048;
var statearr_19082_19137 = state_19048__$1;
(statearr_19082_19137[(2)] = false);

(statearr_19082_19137[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19049 === (12))){
var inst_19046 = (state_19048[(2)]);
var state_19048__$1 = state_19048;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19048__$1,inst_19046);
} else {
if((state_val_19049 === (2))){
var inst_18954 = (state_19048[(8)]);
var inst_18959 = inst_18954.cljs$lang$protocol_mask$partition0$;
var inst_18960 = (inst_18959 & (64));
var inst_18961 = inst_18954.cljs$core$ISeq$;
var inst_18962 = (inst_18960) || (inst_18961);
var state_19048__$1 = state_19048;
if(cljs.core.truth_(inst_18962)){
var statearr_19083_19138 = state_19048__$1;
(statearr_19083_19138[(1)] = (5));

} else {
var statearr_19084_19139 = state_19048__$1;
(statearr_19084_19139[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19049 === (23))){
var inst_19007 = (state_19048[(14)]);
var inst_19013 = (inst_19007 == null);
var state_19048__$1 = state_19048;
if(cljs.core.truth_(inst_19013)){
var statearr_19085_19140 = state_19048__$1;
(statearr_19085_19140[(1)] = (26));

} else {
var statearr_19086_19141 = state_19048__$1;
(statearr_19086_19141[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19049 === (35))){
var inst_19033 = (state_19048[(2)]);
var state_19048__$1 = state_19048;
if(cljs.core.truth_(inst_19033)){
var statearr_19087_19142 = state_19048__$1;
(statearr_19087_19142[(1)] = (36));

} else {
var statearr_19088_19143 = state_19048__$1;
(statearr_19088_19143[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19049 === (19))){
var inst_18978 = (state_19048[(7)]);
var inst_18997 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18978);
var state_19048__$1 = state_19048;
var statearr_19089_19144 = state_19048__$1;
(statearr_19089_19144[(2)] = inst_18997);

(statearr_19089_19144[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19049 === (11))){
var inst_18978 = (state_19048[(7)]);
var inst_18982 = (inst_18978 == null);
var inst_18983 = cljs.core.not.call(null,inst_18982);
var state_19048__$1 = state_19048;
if(inst_18983){
var statearr_19090_19145 = state_19048__$1;
(statearr_19090_19145[(1)] = (13));

} else {
var statearr_19091_19146 = state_19048__$1;
(statearr_19091_19146[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19049 === (9))){
var inst_18954 = (state_19048[(8)]);
var state_19048__$1 = state_19048;
var statearr_19092_19147 = state_19048__$1;
(statearr_19092_19147[(2)] = inst_18954);

(statearr_19092_19147[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19049 === (5))){
var state_19048__$1 = state_19048;
var statearr_19093_19148 = state_19048__$1;
(statearr_19093_19148[(2)] = true);

(statearr_19093_19148[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19049 === (14))){
var state_19048__$1 = state_19048;
var statearr_19094_19149 = state_19048__$1;
(statearr_19094_19149[(2)] = false);

(statearr_19094_19149[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19049 === (26))){
var inst_19008 = (state_19048[(10)]);
var inst_19015 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_19008);
var state_19048__$1 = state_19048;
var statearr_19095_19150 = state_19048__$1;
(statearr_19095_19150[(2)] = inst_19015);

(statearr_19095_19150[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19049 === (16))){
var state_19048__$1 = state_19048;
var statearr_19096_19151 = state_19048__$1;
(statearr_19096_19151[(2)] = true);

(statearr_19096_19151[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19049 === (38))){
var inst_19038 = (state_19048[(2)]);
var state_19048__$1 = state_19048;
var statearr_19097_19152 = state_19048__$1;
(statearr_19097_19152[(2)] = inst_19038);

(statearr_19097_19152[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19049 === (30))){
var inst_19001 = (state_19048[(9)]);
var inst_19002 = (state_19048[(13)]);
var inst_19008 = (state_19048[(10)]);
var inst_19025 = cljs.core.empty_QMARK_.call(null,inst_19001);
var inst_19026 = inst_19002.call(null,inst_19008);
var inst_19027 = cljs.core.not.call(null,inst_19026);
var inst_19028 = (inst_19025) && (inst_19027);
var state_19048__$1 = state_19048;
var statearr_19098_19153 = state_19048__$1;
(statearr_19098_19153[(2)] = inst_19028);

(statearr_19098_19153[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19049 === (10))){
var inst_18954 = (state_19048[(8)]);
var inst_18974 = (state_19048[(2)]);
var inst_18975 = cljs.core.get.call(null,inst_18974,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18976 = cljs.core.get.call(null,inst_18974,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18977 = cljs.core.get.call(null,inst_18974,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_18978 = inst_18954;
var state_19048__$1 = (function (){var statearr_19099 = state_19048;
(statearr_19099[(16)] = inst_18976);

(statearr_19099[(17)] = inst_18977);

(statearr_19099[(18)] = inst_18975);

(statearr_19099[(7)] = inst_18978);

return statearr_19099;
})();
var statearr_19100_19154 = state_19048__$1;
(statearr_19100_19154[(2)] = null);

(statearr_19100_19154[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19049 === (18))){
var inst_18992 = (state_19048[(2)]);
var state_19048__$1 = state_19048;
var statearr_19101_19155 = state_19048__$1;
(statearr_19101_19155[(2)] = inst_18992);

(statearr_19101_19155[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19049 === (37))){
var state_19048__$1 = state_19048;
var statearr_19102_19156 = state_19048__$1;
(statearr_19102_19156[(2)] = null);

(statearr_19102_19156[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19049 === (8))){
var inst_18954 = (state_19048[(8)]);
var inst_18971 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18954);
var state_19048__$1 = state_19048;
var statearr_19103_19157 = state_19048__$1;
(statearr_19103_19157[(2)] = inst_18971);

(statearr_19103_19157[(1)] = (10));


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
});})(c__17398__auto___19111,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__17286__auto__,c__17398__auto___19111,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__17287__auto__ = null;
var cljs$core$async$mix_$_state_machine__17287__auto____0 = (function (){
var statearr_19107 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19107[(0)] = cljs$core$async$mix_$_state_machine__17287__auto__);

(statearr_19107[(1)] = (1));

return statearr_19107;
});
var cljs$core$async$mix_$_state_machine__17287__auto____1 = (function (state_19048){
while(true){
var ret_value__17288__auto__ = (function (){try{while(true){
var result__17289__auto__ = switch__17286__auto__.call(null,state_19048);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17289__auto__;
}
break;
}
}catch (e19108){if((e19108 instanceof Object)){
var ex__17290__auto__ = e19108;
var statearr_19109_19158 = state_19048;
(statearr_19109_19158[(5)] = ex__17290__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19048);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19108;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19159 = state_19048;
state_19048 = G__19159;
continue;
} else {
return ret_value__17288__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__17287__auto__ = function(state_19048){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__17287__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__17287__auto____1.call(this,state_19048);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__17287__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__17287__auto____0;
cljs$core$async$mix_$_state_machine__17287__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__17287__auto____1;
return cljs$core$async$mix_$_state_machine__17287__auto__;
})()
;})(switch__17286__auto__,c__17398__auto___19111,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__17400__auto__ = (function (){var statearr_19110 = f__17399__auto__.call(null);
(statearr_19110[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17398__auto___19111);

return statearr_19110;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17400__auto__);
});})(c__17398__auto___19111,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__12553__auto__ = (((p == null))?null:p);
var m__12554__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__12553__auto__)]);
if(!((m__12554__auto__ == null))){
return m__12554__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__12554__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__12554__auto____$1 == null))){
return m__12554__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__12553__auto__ = (((p == null))?null:p);
var m__12554__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__12553__auto__)]);
if(!((m__12554__auto__ == null))){
return m__12554__auto__.call(null,p,v,ch);
} else {
var m__12554__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__12554__auto____$1 == null))){
return m__12554__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args19160 = [];
var len__12956__auto___19163 = arguments.length;
var i__12957__auto___19164 = (0);
while(true){
if((i__12957__auto___19164 < len__12956__auto___19163)){
args19160.push((arguments[i__12957__auto___19164]));

var G__19165 = (i__12957__auto___19164 + (1));
i__12957__auto___19164 = G__19165;
continue;
} else {
}
break;
}

var G__19162 = args19160.length;
switch (G__19162) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19160.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__12553__auto__ = (((p == null))?null:p);
var m__12554__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__12553__auto__)]);
if(!((m__12554__auto__ == null))){
return m__12554__auto__.call(null,p);
} else {
var m__12554__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__12554__auto____$1 == null))){
return m__12554__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__12553__auto__ = (((p == null))?null:p);
var m__12554__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__12553__auto__)]);
if(!((m__12554__auto__ == null))){
return m__12554__auto__.call(null,p,v);
} else {
var m__12554__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__12554__auto____$1 == null))){
return m__12554__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args19168 = [];
var len__12956__auto___19293 = arguments.length;
var i__12957__auto___19294 = (0);
while(true){
if((i__12957__auto___19294 < len__12956__auto___19293)){
args19168.push((arguments[i__12957__auto___19294]));

var G__19295 = (i__12957__auto___19294 + (1));
i__12957__auto___19294 = G__19295;
continue;
} else {
}
break;
}

var G__19170 = args19168.length;
switch (G__19170) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19168.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__11897__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__11897__auto__)){
return or__11897__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__11897__auto__,mults){
return (function (p1__19167_SHARP_){
if(cljs.core.truth_(p1__19167_SHARP_.call(null,topic))){
return p1__19167_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__19167_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__11897__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async19171 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19171 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta19172){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta19172 = meta19172;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19171.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_19173,meta19172__$1){
var self__ = this;
var _19173__$1 = this;
return (new cljs.core.async.t_cljs$core$async19171(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta19172__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19171.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_19173){
var self__ = this;
var _19173__$1 = this;
return self__.meta19172;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19171.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async19171.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19171.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async19171.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19171.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19171.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19171.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19171.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta19172","meta19172",-1194163449,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19171.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19171.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19171";

cljs.core.async.t_cljs$core$async19171.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__12496__auto__,writer__12497__auto__,opt__12498__auto__){
return cljs.core._write.call(null,writer__12497__auto__,"cljs.core.async/t_cljs$core$async19171");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async19171 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async19171(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19172){
return (new cljs.core.async.t_cljs$core$async19171(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19172));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async19171(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__17398__auto___19297 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17398__auto___19297,mults,ensure_mult,p){
return (function (){
var f__17399__auto__ = (function (){var switch__17286__auto__ = ((function (c__17398__auto___19297,mults,ensure_mult,p){
return (function (state_19245){
var state_val_19246 = (state_19245[(1)]);
if((state_val_19246 === (7))){
var inst_19241 = (state_19245[(2)]);
var state_19245__$1 = state_19245;
var statearr_19247_19298 = state_19245__$1;
(statearr_19247_19298[(2)] = inst_19241);

(statearr_19247_19298[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19246 === (20))){
var state_19245__$1 = state_19245;
var statearr_19248_19299 = state_19245__$1;
(statearr_19248_19299[(2)] = null);

(statearr_19248_19299[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19246 === (1))){
var state_19245__$1 = state_19245;
var statearr_19249_19300 = state_19245__$1;
(statearr_19249_19300[(2)] = null);

(statearr_19249_19300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19246 === (24))){
var inst_19224 = (state_19245[(7)]);
var inst_19233 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_19224);
var state_19245__$1 = state_19245;
var statearr_19250_19301 = state_19245__$1;
(statearr_19250_19301[(2)] = inst_19233);

(statearr_19250_19301[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19246 === (4))){
var inst_19176 = (state_19245[(8)]);
var inst_19176__$1 = (state_19245[(2)]);
var inst_19177 = (inst_19176__$1 == null);
var state_19245__$1 = (function (){var statearr_19251 = state_19245;
(statearr_19251[(8)] = inst_19176__$1);

return statearr_19251;
})();
if(cljs.core.truth_(inst_19177)){
var statearr_19252_19302 = state_19245__$1;
(statearr_19252_19302[(1)] = (5));

} else {
var statearr_19253_19303 = state_19245__$1;
(statearr_19253_19303[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19246 === (15))){
var inst_19218 = (state_19245[(2)]);
var state_19245__$1 = state_19245;
var statearr_19254_19304 = state_19245__$1;
(statearr_19254_19304[(2)] = inst_19218);

(statearr_19254_19304[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19246 === (21))){
var inst_19238 = (state_19245[(2)]);
var state_19245__$1 = (function (){var statearr_19255 = state_19245;
(statearr_19255[(9)] = inst_19238);

return statearr_19255;
})();
var statearr_19256_19305 = state_19245__$1;
(statearr_19256_19305[(2)] = null);

(statearr_19256_19305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19246 === (13))){
var inst_19200 = (state_19245[(10)]);
var inst_19202 = cljs.core.chunked_seq_QMARK_.call(null,inst_19200);
var state_19245__$1 = state_19245;
if(inst_19202){
var statearr_19257_19306 = state_19245__$1;
(statearr_19257_19306[(1)] = (16));

} else {
var statearr_19258_19307 = state_19245__$1;
(statearr_19258_19307[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19246 === (22))){
var inst_19230 = (state_19245[(2)]);
var state_19245__$1 = state_19245;
if(cljs.core.truth_(inst_19230)){
var statearr_19259_19308 = state_19245__$1;
(statearr_19259_19308[(1)] = (23));

} else {
var statearr_19260_19309 = state_19245__$1;
(statearr_19260_19309[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19246 === (6))){
var inst_19226 = (state_19245[(11)]);
var inst_19176 = (state_19245[(8)]);
var inst_19224 = (state_19245[(7)]);
var inst_19224__$1 = topic_fn.call(null,inst_19176);
var inst_19225 = cljs.core.deref.call(null,mults);
var inst_19226__$1 = cljs.core.get.call(null,inst_19225,inst_19224__$1);
var state_19245__$1 = (function (){var statearr_19261 = state_19245;
(statearr_19261[(11)] = inst_19226__$1);

(statearr_19261[(7)] = inst_19224__$1);

return statearr_19261;
})();
if(cljs.core.truth_(inst_19226__$1)){
var statearr_19262_19310 = state_19245__$1;
(statearr_19262_19310[(1)] = (19));

} else {
var statearr_19263_19311 = state_19245__$1;
(statearr_19263_19311[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19246 === (25))){
var inst_19235 = (state_19245[(2)]);
var state_19245__$1 = state_19245;
var statearr_19264_19312 = state_19245__$1;
(statearr_19264_19312[(2)] = inst_19235);

(statearr_19264_19312[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19246 === (17))){
var inst_19200 = (state_19245[(10)]);
var inst_19209 = cljs.core.first.call(null,inst_19200);
var inst_19210 = cljs.core.async.muxch_STAR_.call(null,inst_19209);
var inst_19211 = cljs.core.async.close_BANG_.call(null,inst_19210);
var inst_19212 = cljs.core.next.call(null,inst_19200);
var inst_19186 = inst_19212;
var inst_19187 = null;
var inst_19188 = (0);
var inst_19189 = (0);
var state_19245__$1 = (function (){var statearr_19265 = state_19245;
(statearr_19265[(12)] = inst_19186);

(statearr_19265[(13)] = inst_19211);

(statearr_19265[(14)] = inst_19189);

(statearr_19265[(15)] = inst_19187);

(statearr_19265[(16)] = inst_19188);

return statearr_19265;
})();
var statearr_19266_19313 = state_19245__$1;
(statearr_19266_19313[(2)] = null);

(statearr_19266_19313[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19246 === (3))){
var inst_19243 = (state_19245[(2)]);
var state_19245__$1 = state_19245;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19245__$1,inst_19243);
} else {
if((state_val_19246 === (12))){
var inst_19220 = (state_19245[(2)]);
var state_19245__$1 = state_19245;
var statearr_19267_19314 = state_19245__$1;
(statearr_19267_19314[(2)] = inst_19220);

(statearr_19267_19314[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19246 === (2))){
var state_19245__$1 = state_19245;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19245__$1,(4),ch);
} else {
if((state_val_19246 === (23))){
var state_19245__$1 = state_19245;
var statearr_19268_19315 = state_19245__$1;
(statearr_19268_19315[(2)] = null);

(statearr_19268_19315[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19246 === (19))){
var inst_19226 = (state_19245[(11)]);
var inst_19176 = (state_19245[(8)]);
var inst_19228 = cljs.core.async.muxch_STAR_.call(null,inst_19226);
var state_19245__$1 = state_19245;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19245__$1,(22),inst_19228,inst_19176);
} else {
if((state_val_19246 === (11))){
var inst_19186 = (state_19245[(12)]);
var inst_19200 = (state_19245[(10)]);
var inst_19200__$1 = cljs.core.seq.call(null,inst_19186);
var state_19245__$1 = (function (){var statearr_19269 = state_19245;
(statearr_19269[(10)] = inst_19200__$1);

return statearr_19269;
})();
if(inst_19200__$1){
var statearr_19270_19316 = state_19245__$1;
(statearr_19270_19316[(1)] = (13));

} else {
var statearr_19271_19317 = state_19245__$1;
(statearr_19271_19317[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19246 === (9))){
var inst_19222 = (state_19245[(2)]);
var state_19245__$1 = state_19245;
var statearr_19272_19318 = state_19245__$1;
(statearr_19272_19318[(2)] = inst_19222);

(statearr_19272_19318[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19246 === (5))){
var inst_19183 = cljs.core.deref.call(null,mults);
var inst_19184 = cljs.core.vals.call(null,inst_19183);
var inst_19185 = cljs.core.seq.call(null,inst_19184);
var inst_19186 = inst_19185;
var inst_19187 = null;
var inst_19188 = (0);
var inst_19189 = (0);
var state_19245__$1 = (function (){var statearr_19273 = state_19245;
(statearr_19273[(12)] = inst_19186);

(statearr_19273[(14)] = inst_19189);

(statearr_19273[(15)] = inst_19187);

(statearr_19273[(16)] = inst_19188);

return statearr_19273;
})();
var statearr_19274_19319 = state_19245__$1;
(statearr_19274_19319[(2)] = null);

(statearr_19274_19319[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19246 === (14))){
var state_19245__$1 = state_19245;
var statearr_19278_19320 = state_19245__$1;
(statearr_19278_19320[(2)] = null);

(statearr_19278_19320[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19246 === (16))){
var inst_19200 = (state_19245[(10)]);
var inst_19204 = cljs.core.chunk_first.call(null,inst_19200);
var inst_19205 = cljs.core.chunk_rest.call(null,inst_19200);
var inst_19206 = cljs.core.count.call(null,inst_19204);
var inst_19186 = inst_19205;
var inst_19187 = inst_19204;
var inst_19188 = inst_19206;
var inst_19189 = (0);
var state_19245__$1 = (function (){var statearr_19279 = state_19245;
(statearr_19279[(12)] = inst_19186);

(statearr_19279[(14)] = inst_19189);

(statearr_19279[(15)] = inst_19187);

(statearr_19279[(16)] = inst_19188);

return statearr_19279;
})();
var statearr_19280_19321 = state_19245__$1;
(statearr_19280_19321[(2)] = null);

(statearr_19280_19321[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19246 === (10))){
var inst_19186 = (state_19245[(12)]);
var inst_19189 = (state_19245[(14)]);
var inst_19187 = (state_19245[(15)]);
var inst_19188 = (state_19245[(16)]);
var inst_19194 = cljs.core._nth.call(null,inst_19187,inst_19189);
var inst_19195 = cljs.core.async.muxch_STAR_.call(null,inst_19194);
var inst_19196 = cljs.core.async.close_BANG_.call(null,inst_19195);
var inst_19197 = (inst_19189 + (1));
var tmp19275 = inst_19186;
var tmp19276 = inst_19187;
var tmp19277 = inst_19188;
var inst_19186__$1 = tmp19275;
var inst_19187__$1 = tmp19276;
var inst_19188__$1 = tmp19277;
var inst_19189__$1 = inst_19197;
var state_19245__$1 = (function (){var statearr_19281 = state_19245;
(statearr_19281[(12)] = inst_19186__$1);

(statearr_19281[(14)] = inst_19189__$1);

(statearr_19281[(15)] = inst_19187__$1);

(statearr_19281[(17)] = inst_19196);

(statearr_19281[(16)] = inst_19188__$1);

return statearr_19281;
})();
var statearr_19282_19322 = state_19245__$1;
(statearr_19282_19322[(2)] = null);

(statearr_19282_19322[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19246 === (18))){
var inst_19215 = (state_19245[(2)]);
var state_19245__$1 = state_19245;
var statearr_19283_19323 = state_19245__$1;
(statearr_19283_19323[(2)] = inst_19215);

(statearr_19283_19323[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19246 === (8))){
var inst_19189 = (state_19245[(14)]);
var inst_19188 = (state_19245[(16)]);
var inst_19191 = (inst_19189 < inst_19188);
var inst_19192 = inst_19191;
var state_19245__$1 = state_19245;
if(cljs.core.truth_(inst_19192)){
var statearr_19284_19324 = state_19245__$1;
(statearr_19284_19324[(1)] = (10));

} else {
var statearr_19285_19325 = state_19245__$1;
(statearr_19285_19325[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__17398__auto___19297,mults,ensure_mult,p))
;
return ((function (switch__17286__auto__,c__17398__auto___19297,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__17287__auto__ = null;
var cljs$core$async$state_machine__17287__auto____0 = (function (){
var statearr_19289 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19289[(0)] = cljs$core$async$state_machine__17287__auto__);

(statearr_19289[(1)] = (1));

return statearr_19289;
});
var cljs$core$async$state_machine__17287__auto____1 = (function (state_19245){
while(true){
var ret_value__17288__auto__ = (function (){try{while(true){
var result__17289__auto__ = switch__17286__auto__.call(null,state_19245);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17289__auto__;
}
break;
}
}catch (e19290){if((e19290 instanceof Object)){
var ex__17290__auto__ = e19290;
var statearr_19291_19326 = state_19245;
(statearr_19291_19326[(5)] = ex__17290__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19245);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19290;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19327 = state_19245;
state_19245 = G__19327;
continue;
} else {
return ret_value__17288__auto__;
}
break;
}
});
cljs$core$async$state_machine__17287__auto__ = function(state_19245){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17287__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17287__auto____1.call(this,state_19245);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17287__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17287__auto____0;
cljs$core$async$state_machine__17287__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17287__auto____1;
return cljs$core$async$state_machine__17287__auto__;
})()
;})(switch__17286__auto__,c__17398__auto___19297,mults,ensure_mult,p))
})();
var state__17400__auto__ = (function (){var statearr_19292 = f__17399__auto__.call(null);
(statearr_19292[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17398__auto___19297);

return statearr_19292;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17400__auto__);
});})(c__17398__auto___19297,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args19328 = [];
var len__12956__auto___19331 = arguments.length;
var i__12957__auto___19332 = (0);
while(true){
if((i__12957__auto___19332 < len__12956__auto___19331)){
args19328.push((arguments[i__12957__auto___19332]));

var G__19333 = (i__12957__auto___19332 + (1));
i__12957__auto___19332 = G__19333;
continue;
} else {
}
break;
}

var G__19330 = args19328.length;
switch (G__19330) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19328.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args19335 = [];
var len__12956__auto___19338 = arguments.length;
var i__12957__auto___19339 = (0);
while(true){
if((i__12957__auto___19339 < len__12956__auto___19338)){
args19335.push((arguments[i__12957__auto___19339]));

var G__19340 = (i__12957__auto___19339 + (1));
i__12957__auto___19339 = G__19340;
continue;
} else {
}
break;
}

var G__19337 = args19335.length;
switch (G__19337) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19335.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args19342 = [];
var len__12956__auto___19413 = arguments.length;
var i__12957__auto___19414 = (0);
while(true){
if((i__12957__auto___19414 < len__12956__auto___19413)){
args19342.push((arguments[i__12957__auto___19414]));

var G__19415 = (i__12957__auto___19414 + (1));
i__12957__auto___19414 = G__19415;
continue;
} else {
}
break;
}

var G__19344 = args19342.length;
switch (G__19344) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19342.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__17398__auto___19417 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17398__auto___19417,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__17399__auto__ = (function (){var switch__17286__auto__ = ((function (c__17398__auto___19417,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_19383){
var state_val_19384 = (state_19383[(1)]);
if((state_val_19384 === (7))){
var state_19383__$1 = state_19383;
var statearr_19385_19418 = state_19383__$1;
(statearr_19385_19418[(2)] = null);

(statearr_19385_19418[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19384 === (1))){
var state_19383__$1 = state_19383;
var statearr_19386_19419 = state_19383__$1;
(statearr_19386_19419[(2)] = null);

(statearr_19386_19419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19384 === (4))){
var inst_19347 = (state_19383[(7)]);
var inst_19349 = (inst_19347 < cnt);
var state_19383__$1 = state_19383;
if(cljs.core.truth_(inst_19349)){
var statearr_19387_19420 = state_19383__$1;
(statearr_19387_19420[(1)] = (6));

} else {
var statearr_19388_19421 = state_19383__$1;
(statearr_19388_19421[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19384 === (15))){
var inst_19379 = (state_19383[(2)]);
var state_19383__$1 = state_19383;
var statearr_19389_19422 = state_19383__$1;
(statearr_19389_19422[(2)] = inst_19379);

(statearr_19389_19422[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19384 === (13))){
var inst_19372 = cljs.core.async.close_BANG_.call(null,out);
var state_19383__$1 = state_19383;
var statearr_19390_19423 = state_19383__$1;
(statearr_19390_19423[(2)] = inst_19372);

(statearr_19390_19423[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19384 === (6))){
var state_19383__$1 = state_19383;
var statearr_19391_19424 = state_19383__$1;
(statearr_19391_19424[(2)] = null);

(statearr_19391_19424[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19384 === (3))){
var inst_19381 = (state_19383[(2)]);
var state_19383__$1 = state_19383;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19383__$1,inst_19381);
} else {
if((state_val_19384 === (12))){
var inst_19369 = (state_19383[(8)]);
var inst_19369__$1 = (state_19383[(2)]);
var inst_19370 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_19369__$1);
var state_19383__$1 = (function (){var statearr_19392 = state_19383;
(statearr_19392[(8)] = inst_19369__$1);

return statearr_19392;
})();
if(cljs.core.truth_(inst_19370)){
var statearr_19393_19425 = state_19383__$1;
(statearr_19393_19425[(1)] = (13));

} else {
var statearr_19394_19426 = state_19383__$1;
(statearr_19394_19426[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19384 === (2))){
var inst_19346 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_19347 = (0);
var state_19383__$1 = (function (){var statearr_19395 = state_19383;
(statearr_19395[(9)] = inst_19346);

(statearr_19395[(7)] = inst_19347);

return statearr_19395;
})();
var statearr_19396_19427 = state_19383__$1;
(statearr_19396_19427[(2)] = null);

(statearr_19396_19427[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19384 === (11))){
var inst_19347 = (state_19383[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_19383,(10),Object,null,(9));
var inst_19356 = chs__$1.call(null,inst_19347);
var inst_19357 = done.call(null,inst_19347);
var inst_19358 = cljs.core.async.take_BANG_.call(null,inst_19356,inst_19357);
var state_19383__$1 = state_19383;
var statearr_19397_19428 = state_19383__$1;
(statearr_19397_19428[(2)] = inst_19358);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19383__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19384 === (9))){
var inst_19347 = (state_19383[(7)]);
var inst_19360 = (state_19383[(2)]);
var inst_19361 = (inst_19347 + (1));
var inst_19347__$1 = inst_19361;
var state_19383__$1 = (function (){var statearr_19398 = state_19383;
(statearr_19398[(7)] = inst_19347__$1);

(statearr_19398[(10)] = inst_19360);

return statearr_19398;
})();
var statearr_19399_19429 = state_19383__$1;
(statearr_19399_19429[(2)] = null);

(statearr_19399_19429[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19384 === (5))){
var inst_19367 = (state_19383[(2)]);
var state_19383__$1 = (function (){var statearr_19400 = state_19383;
(statearr_19400[(11)] = inst_19367);

return statearr_19400;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19383__$1,(12),dchan);
} else {
if((state_val_19384 === (14))){
var inst_19369 = (state_19383[(8)]);
var inst_19374 = cljs.core.apply.call(null,f,inst_19369);
var state_19383__$1 = state_19383;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19383__$1,(16),out,inst_19374);
} else {
if((state_val_19384 === (16))){
var inst_19376 = (state_19383[(2)]);
var state_19383__$1 = (function (){var statearr_19401 = state_19383;
(statearr_19401[(12)] = inst_19376);

return statearr_19401;
})();
var statearr_19402_19430 = state_19383__$1;
(statearr_19402_19430[(2)] = null);

(statearr_19402_19430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19384 === (10))){
var inst_19351 = (state_19383[(2)]);
var inst_19352 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_19383__$1 = (function (){var statearr_19403 = state_19383;
(statearr_19403[(13)] = inst_19351);

return statearr_19403;
})();
var statearr_19404_19431 = state_19383__$1;
(statearr_19404_19431[(2)] = inst_19352);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19383__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19384 === (8))){
var inst_19365 = (state_19383[(2)]);
var state_19383__$1 = state_19383;
var statearr_19405_19432 = state_19383__$1;
(statearr_19405_19432[(2)] = inst_19365);

(statearr_19405_19432[(1)] = (5));


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
});})(c__17398__auto___19417,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__17286__auto__,c__17398__auto___19417,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__17287__auto__ = null;
var cljs$core$async$state_machine__17287__auto____0 = (function (){
var statearr_19409 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19409[(0)] = cljs$core$async$state_machine__17287__auto__);

(statearr_19409[(1)] = (1));

return statearr_19409;
});
var cljs$core$async$state_machine__17287__auto____1 = (function (state_19383){
while(true){
var ret_value__17288__auto__ = (function (){try{while(true){
var result__17289__auto__ = switch__17286__auto__.call(null,state_19383);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17289__auto__;
}
break;
}
}catch (e19410){if((e19410 instanceof Object)){
var ex__17290__auto__ = e19410;
var statearr_19411_19433 = state_19383;
(statearr_19411_19433[(5)] = ex__17290__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19383);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19410;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19434 = state_19383;
state_19383 = G__19434;
continue;
} else {
return ret_value__17288__auto__;
}
break;
}
});
cljs$core$async$state_machine__17287__auto__ = function(state_19383){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17287__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17287__auto____1.call(this,state_19383);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17287__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17287__auto____0;
cljs$core$async$state_machine__17287__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17287__auto____1;
return cljs$core$async$state_machine__17287__auto__;
})()
;})(switch__17286__auto__,c__17398__auto___19417,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__17400__auto__ = (function (){var statearr_19412 = f__17399__auto__.call(null);
(statearr_19412[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17398__auto___19417);

return statearr_19412;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17400__auto__);
});})(c__17398__auto___19417,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args19436 = [];
var len__12956__auto___19492 = arguments.length;
var i__12957__auto___19493 = (0);
while(true){
if((i__12957__auto___19493 < len__12956__auto___19492)){
args19436.push((arguments[i__12957__auto___19493]));

var G__19494 = (i__12957__auto___19493 + (1));
i__12957__auto___19493 = G__19494;
continue;
} else {
}
break;
}

var G__19438 = args19436.length;
switch (G__19438) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19436.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__17398__auto___19496 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17398__auto___19496,out){
return (function (){
var f__17399__auto__ = (function (){var switch__17286__auto__ = ((function (c__17398__auto___19496,out){
return (function (state_19468){
var state_val_19469 = (state_19468[(1)]);
if((state_val_19469 === (7))){
var inst_19447 = (state_19468[(7)]);
var inst_19448 = (state_19468[(8)]);
var inst_19447__$1 = (state_19468[(2)]);
var inst_19448__$1 = cljs.core.nth.call(null,inst_19447__$1,(0),null);
var inst_19449 = cljs.core.nth.call(null,inst_19447__$1,(1),null);
var inst_19450 = (inst_19448__$1 == null);
var state_19468__$1 = (function (){var statearr_19470 = state_19468;
(statearr_19470[(9)] = inst_19449);

(statearr_19470[(7)] = inst_19447__$1);

(statearr_19470[(8)] = inst_19448__$1);

return statearr_19470;
})();
if(cljs.core.truth_(inst_19450)){
var statearr_19471_19497 = state_19468__$1;
(statearr_19471_19497[(1)] = (8));

} else {
var statearr_19472_19498 = state_19468__$1;
(statearr_19472_19498[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19469 === (1))){
var inst_19439 = cljs.core.vec.call(null,chs);
var inst_19440 = inst_19439;
var state_19468__$1 = (function (){var statearr_19473 = state_19468;
(statearr_19473[(10)] = inst_19440);

return statearr_19473;
})();
var statearr_19474_19499 = state_19468__$1;
(statearr_19474_19499[(2)] = null);

(statearr_19474_19499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19469 === (4))){
var inst_19440 = (state_19468[(10)]);
var state_19468__$1 = state_19468;
return cljs.core.async.ioc_alts_BANG_.call(null,state_19468__$1,(7),inst_19440);
} else {
if((state_val_19469 === (6))){
var inst_19464 = (state_19468[(2)]);
var state_19468__$1 = state_19468;
var statearr_19475_19500 = state_19468__$1;
(statearr_19475_19500[(2)] = inst_19464);

(statearr_19475_19500[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19469 === (3))){
var inst_19466 = (state_19468[(2)]);
var state_19468__$1 = state_19468;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19468__$1,inst_19466);
} else {
if((state_val_19469 === (2))){
var inst_19440 = (state_19468[(10)]);
var inst_19442 = cljs.core.count.call(null,inst_19440);
var inst_19443 = (inst_19442 > (0));
var state_19468__$1 = state_19468;
if(cljs.core.truth_(inst_19443)){
var statearr_19477_19501 = state_19468__$1;
(statearr_19477_19501[(1)] = (4));

} else {
var statearr_19478_19502 = state_19468__$1;
(statearr_19478_19502[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19469 === (11))){
var inst_19440 = (state_19468[(10)]);
var inst_19457 = (state_19468[(2)]);
var tmp19476 = inst_19440;
var inst_19440__$1 = tmp19476;
var state_19468__$1 = (function (){var statearr_19479 = state_19468;
(statearr_19479[(10)] = inst_19440__$1);

(statearr_19479[(11)] = inst_19457);

return statearr_19479;
})();
var statearr_19480_19503 = state_19468__$1;
(statearr_19480_19503[(2)] = null);

(statearr_19480_19503[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19469 === (9))){
var inst_19448 = (state_19468[(8)]);
var state_19468__$1 = state_19468;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19468__$1,(11),out,inst_19448);
} else {
if((state_val_19469 === (5))){
var inst_19462 = cljs.core.async.close_BANG_.call(null,out);
var state_19468__$1 = state_19468;
var statearr_19481_19504 = state_19468__$1;
(statearr_19481_19504[(2)] = inst_19462);

(statearr_19481_19504[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19469 === (10))){
var inst_19460 = (state_19468[(2)]);
var state_19468__$1 = state_19468;
var statearr_19482_19505 = state_19468__$1;
(statearr_19482_19505[(2)] = inst_19460);

(statearr_19482_19505[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19469 === (8))){
var inst_19440 = (state_19468[(10)]);
var inst_19449 = (state_19468[(9)]);
var inst_19447 = (state_19468[(7)]);
var inst_19448 = (state_19468[(8)]);
var inst_19452 = (function (){var cs = inst_19440;
var vec__19445 = inst_19447;
var v = inst_19448;
var c = inst_19449;
return ((function (cs,vec__19445,v,c,inst_19440,inst_19449,inst_19447,inst_19448,state_val_19469,c__17398__auto___19496,out){
return (function (p1__19435_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__19435_SHARP_);
});
;})(cs,vec__19445,v,c,inst_19440,inst_19449,inst_19447,inst_19448,state_val_19469,c__17398__auto___19496,out))
})();
var inst_19453 = cljs.core.filterv.call(null,inst_19452,inst_19440);
var inst_19440__$1 = inst_19453;
var state_19468__$1 = (function (){var statearr_19483 = state_19468;
(statearr_19483[(10)] = inst_19440__$1);

return statearr_19483;
})();
var statearr_19484_19506 = state_19468__$1;
(statearr_19484_19506[(2)] = null);

(statearr_19484_19506[(1)] = (2));


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
});})(c__17398__auto___19496,out))
;
return ((function (switch__17286__auto__,c__17398__auto___19496,out){
return (function() {
var cljs$core$async$state_machine__17287__auto__ = null;
var cljs$core$async$state_machine__17287__auto____0 = (function (){
var statearr_19488 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19488[(0)] = cljs$core$async$state_machine__17287__auto__);

(statearr_19488[(1)] = (1));

return statearr_19488;
});
var cljs$core$async$state_machine__17287__auto____1 = (function (state_19468){
while(true){
var ret_value__17288__auto__ = (function (){try{while(true){
var result__17289__auto__ = switch__17286__auto__.call(null,state_19468);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17289__auto__;
}
break;
}
}catch (e19489){if((e19489 instanceof Object)){
var ex__17290__auto__ = e19489;
var statearr_19490_19507 = state_19468;
(statearr_19490_19507[(5)] = ex__17290__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19468);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19489;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19508 = state_19468;
state_19468 = G__19508;
continue;
} else {
return ret_value__17288__auto__;
}
break;
}
});
cljs$core$async$state_machine__17287__auto__ = function(state_19468){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17287__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17287__auto____1.call(this,state_19468);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17287__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17287__auto____0;
cljs$core$async$state_machine__17287__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17287__auto____1;
return cljs$core$async$state_machine__17287__auto__;
})()
;})(switch__17286__auto__,c__17398__auto___19496,out))
})();
var state__17400__auto__ = (function (){var statearr_19491 = f__17399__auto__.call(null);
(statearr_19491[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17398__auto___19496);

return statearr_19491;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17400__auto__);
});})(c__17398__auto___19496,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args19509 = [];
var len__12956__auto___19558 = arguments.length;
var i__12957__auto___19559 = (0);
while(true){
if((i__12957__auto___19559 < len__12956__auto___19558)){
args19509.push((arguments[i__12957__auto___19559]));

var G__19560 = (i__12957__auto___19559 + (1));
i__12957__auto___19559 = G__19560;
continue;
} else {
}
break;
}

var G__19511 = args19509.length;
switch (G__19511) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19509.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__17398__auto___19562 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17398__auto___19562,out){
return (function (){
var f__17399__auto__ = (function (){var switch__17286__auto__ = ((function (c__17398__auto___19562,out){
return (function (state_19535){
var state_val_19536 = (state_19535[(1)]);
if((state_val_19536 === (7))){
var inst_19517 = (state_19535[(7)]);
var inst_19517__$1 = (state_19535[(2)]);
var inst_19518 = (inst_19517__$1 == null);
var inst_19519 = cljs.core.not.call(null,inst_19518);
var state_19535__$1 = (function (){var statearr_19537 = state_19535;
(statearr_19537[(7)] = inst_19517__$1);

return statearr_19537;
})();
if(inst_19519){
var statearr_19538_19563 = state_19535__$1;
(statearr_19538_19563[(1)] = (8));

} else {
var statearr_19539_19564 = state_19535__$1;
(statearr_19539_19564[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19536 === (1))){
var inst_19512 = (0);
var state_19535__$1 = (function (){var statearr_19540 = state_19535;
(statearr_19540[(8)] = inst_19512);

return statearr_19540;
})();
var statearr_19541_19565 = state_19535__$1;
(statearr_19541_19565[(2)] = null);

(statearr_19541_19565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19536 === (4))){
var state_19535__$1 = state_19535;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19535__$1,(7),ch);
} else {
if((state_val_19536 === (6))){
var inst_19530 = (state_19535[(2)]);
var state_19535__$1 = state_19535;
var statearr_19542_19566 = state_19535__$1;
(statearr_19542_19566[(2)] = inst_19530);

(statearr_19542_19566[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19536 === (3))){
var inst_19532 = (state_19535[(2)]);
var inst_19533 = cljs.core.async.close_BANG_.call(null,out);
var state_19535__$1 = (function (){var statearr_19543 = state_19535;
(statearr_19543[(9)] = inst_19532);

return statearr_19543;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19535__$1,inst_19533);
} else {
if((state_val_19536 === (2))){
var inst_19512 = (state_19535[(8)]);
var inst_19514 = (inst_19512 < n);
var state_19535__$1 = state_19535;
if(cljs.core.truth_(inst_19514)){
var statearr_19544_19567 = state_19535__$1;
(statearr_19544_19567[(1)] = (4));

} else {
var statearr_19545_19568 = state_19535__$1;
(statearr_19545_19568[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19536 === (11))){
var inst_19512 = (state_19535[(8)]);
var inst_19522 = (state_19535[(2)]);
var inst_19523 = (inst_19512 + (1));
var inst_19512__$1 = inst_19523;
var state_19535__$1 = (function (){var statearr_19546 = state_19535;
(statearr_19546[(10)] = inst_19522);

(statearr_19546[(8)] = inst_19512__$1);

return statearr_19546;
})();
var statearr_19547_19569 = state_19535__$1;
(statearr_19547_19569[(2)] = null);

(statearr_19547_19569[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19536 === (9))){
var state_19535__$1 = state_19535;
var statearr_19548_19570 = state_19535__$1;
(statearr_19548_19570[(2)] = null);

(statearr_19548_19570[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19536 === (5))){
var state_19535__$1 = state_19535;
var statearr_19549_19571 = state_19535__$1;
(statearr_19549_19571[(2)] = null);

(statearr_19549_19571[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19536 === (10))){
var inst_19527 = (state_19535[(2)]);
var state_19535__$1 = state_19535;
var statearr_19550_19572 = state_19535__$1;
(statearr_19550_19572[(2)] = inst_19527);

(statearr_19550_19572[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19536 === (8))){
var inst_19517 = (state_19535[(7)]);
var state_19535__$1 = state_19535;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19535__$1,(11),out,inst_19517);
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
});})(c__17398__auto___19562,out))
;
return ((function (switch__17286__auto__,c__17398__auto___19562,out){
return (function() {
var cljs$core$async$state_machine__17287__auto__ = null;
var cljs$core$async$state_machine__17287__auto____0 = (function (){
var statearr_19554 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19554[(0)] = cljs$core$async$state_machine__17287__auto__);

(statearr_19554[(1)] = (1));

return statearr_19554;
});
var cljs$core$async$state_machine__17287__auto____1 = (function (state_19535){
while(true){
var ret_value__17288__auto__ = (function (){try{while(true){
var result__17289__auto__ = switch__17286__auto__.call(null,state_19535);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17289__auto__;
}
break;
}
}catch (e19555){if((e19555 instanceof Object)){
var ex__17290__auto__ = e19555;
var statearr_19556_19573 = state_19535;
(statearr_19556_19573[(5)] = ex__17290__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19535);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19555;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19574 = state_19535;
state_19535 = G__19574;
continue;
} else {
return ret_value__17288__auto__;
}
break;
}
});
cljs$core$async$state_machine__17287__auto__ = function(state_19535){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17287__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17287__auto____1.call(this,state_19535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17287__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17287__auto____0;
cljs$core$async$state_machine__17287__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17287__auto____1;
return cljs$core$async$state_machine__17287__auto__;
})()
;})(switch__17286__auto__,c__17398__auto___19562,out))
})();
var state__17400__auto__ = (function (){var statearr_19557 = f__17399__auto__.call(null);
(statearr_19557[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17398__auto___19562);

return statearr_19557;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17400__auto__);
});})(c__17398__auto___19562,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async19582 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19582 = (function (map_LT_,f,ch,meta19583){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta19583 = meta19583;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19582.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19584,meta19583__$1){
var self__ = this;
var _19584__$1 = this;
return (new cljs.core.async.t_cljs$core$async19582(self__.map_LT_,self__.f,self__.ch,meta19583__$1));
});

cljs.core.async.t_cljs$core$async19582.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19584){
var self__ = this;
var _19584__$1 = this;
return self__.meta19583;
});

cljs.core.async.t_cljs$core$async19582.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async19582.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19582.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19582.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async19582.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async19585 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19585 = (function (map_LT_,f,ch,meta19583,_,fn1,meta19586){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta19583 = meta19583;
this._ = _;
this.fn1 = fn1;
this.meta19586 = meta19586;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19585.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_19587,meta19586__$1){
var self__ = this;
var _19587__$1 = this;
return (new cljs.core.async.t_cljs$core$async19585(self__.map_LT_,self__.f,self__.ch,self__.meta19583,self__._,self__.fn1,meta19586__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async19585.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_19587){
var self__ = this;
var _19587__$1 = this;
return self__.meta19586;
});})(___$1))
;

cljs.core.async.t_cljs$core$async19585.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19585.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async19585.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async19585.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__19575_SHARP_){
return f1.call(null,(((p1__19575_SHARP_ == null))?null:self__.f.call(null,p1__19575_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async19585.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19583","meta19583",1264670984,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async19582","cljs.core.async/t_cljs$core$async19582",-1246535844,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta19586","meta19586",2083870598,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async19585.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19585.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19585";

cljs.core.async.t_cljs$core$async19585.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__12496__auto__,writer__12497__auto__,opt__12498__auto__){
return cljs.core._write.call(null,writer__12497__auto__,"cljs.core.async/t_cljs$core$async19585");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async19585 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19585(map_LT___$1,f__$1,ch__$1,meta19583__$1,___$2,fn1__$1,meta19586){
return (new cljs.core.async.t_cljs$core$async19585(map_LT___$1,f__$1,ch__$1,meta19583__$1,___$2,fn1__$1,meta19586));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async19585(self__.map_LT_,self__.f,self__.ch,self__.meta19583,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__11885__auto__ = ret;
if(cljs.core.truth_(and__11885__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__11885__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async19582.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async19582.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async19582.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19583","meta19583",1264670984,null)], null);
});

cljs.core.async.t_cljs$core$async19582.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19582.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19582";

cljs.core.async.t_cljs$core$async19582.cljs$lang$ctorPrWriter = (function (this__12496__auto__,writer__12497__auto__,opt__12498__auto__){
return cljs.core._write.call(null,writer__12497__auto__,"cljs.core.async/t_cljs$core$async19582");
});

cljs.core.async.__GT_t_cljs$core$async19582 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19582(map_LT___$1,f__$1,ch__$1,meta19583){
return (new cljs.core.async.t_cljs$core$async19582(map_LT___$1,f__$1,ch__$1,meta19583));
});

}

return (new cljs.core.async.t_cljs$core$async19582(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async19591 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19591 = (function (map_GT_,f,ch,meta19592){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta19592 = meta19592;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19591.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19593,meta19592__$1){
var self__ = this;
var _19593__$1 = this;
return (new cljs.core.async.t_cljs$core$async19591(self__.map_GT_,self__.f,self__.ch,meta19592__$1));
});

cljs.core.async.t_cljs$core$async19591.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19593){
var self__ = this;
var _19593__$1 = this;
return self__.meta19592;
});

cljs.core.async.t_cljs$core$async19591.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async19591.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19591.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async19591.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async19591.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async19591.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async19591.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19592","meta19592",1523472322,null)], null);
});

cljs.core.async.t_cljs$core$async19591.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19591.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19591";

cljs.core.async.t_cljs$core$async19591.cljs$lang$ctorPrWriter = (function (this__12496__auto__,writer__12497__auto__,opt__12498__auto__){
return cljs.core._write.call(null,writer__12497__auto__,"cljs.core.async/t_cljs$core$async19591");
});

cljs.core.async.__GT_t_cljs$core$async19591 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async19591(map_GT___$1,f__$1,ch__$1,meta19592){
return (new cljs.core.async.t_cljs$core$async19591(map_GT___$1,f__$1,ch__$1,meta19592));
});

}

return (new cljs.core.async.t_cljs$core$async19591(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async19597 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19597 = (function (filter_GT_,p,ch,meta19598){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta19598 = meta19598;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19597.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19599,meta19598__$1){
var self__ = this;
var _19599__$1 = this;
return (new cljs.core.async.t_cljs$core$async19597(self__.filter_GT_,self__.p,self__.ch,meta19598__$1));
});

cljs.core.async.t_cljs$core$async19597.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19599){
var self__ = this;
var _19599__$1 = this;
return self__.meta19598;
});

cljs.core.async.t_cljs$core$async19597.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async19597.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19597.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19597.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async19597.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async19597.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async19597.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async19597.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19598","meta19598",-838312967,null)], null);
});

cljs.core.async.t_cljs$core$async19597.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19597.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19597";

cljs.core.async.t_cljs$core$async19597.cljs$lang$ctorPrWriter = (function (this__12496__auto__,writer__12497__auto__,opt__12498__auto__){
return cljs.core._write.call(null,writer__12497__auto__,"cljs.core.async/t_cljs$core$async19597");
});

cljs.core.async.__GT_t_cljs$core$async19597 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async19597(filter_GT___$1,p__$1,ch__$1,meta19598){
return (new cljs.core.async.t_cljs$core$async19597(filter_GT___$1,p__$1,ch__$1,meta19598));
});

}

return (new cljs.core.async.t_cljs$core$async19597(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args19600 = [];
var len__12956__auto___19644 = arguments.length;
var i__12957__auto___19645 = (0);
while(true){
if((i__12957__auto___19645 < len__12956__auto___19644)){
args19600.push((arguments[i__12957__auto___19645]));

var G__19646 = (i__12957__auto___19645 + (1));
i__12957__auto___19645 = G__19646;
continue;
} else {
}
break;
}

var G__19602 = args19600.length;
switch (G__19602) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19600.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__17398__auto___19648 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17398__auto___19648,out){
return (function (){
var f__17399__auto__ = (function (){var switch__17286__auto__ = ((function (c__17398__auto___19648,out){
return (function (state_19623){
var state_val_19624 = (state_19623[(1)]);
if((state_val_19624 === (7))){
var inst_19619 = (state_19623[(2)]);
var state_19623__$1 = state_19623;
var statearr_19625_19649 = state_19623__$1;
(statearr_19625_19649[(2)] = inst_19619);

(statearr_19625_19649[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19624 === (1))){
var state_19623__$1 = state_19623;
var statearr_19626_19650 = state_19623__$1;
(statearr_19626_19650[(2)] = null);

(statearr_19626_19650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19624 === (4))){
var inst_19605 = (state_19623[(7)]);
var inst_19605__$1 = (state_19623[(2)]);
var inst_19606 = (inst_19605__$1 == null);
var state_19623__$1 = (function (){var statearr_19627 = state_19623;
(statearr_19627[(7)] = inst_19605__$1);

return statearr_19627;
})();
if(cljs.core.truth_(inst_19606)){
var statearr_19628_19651 = state_19623__$1;
(statearr_19628_19651[(1)] = (5));

} else {
var statearr_19629_19652 = state_19623__$1;
(statearr_19629_19652[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19624 === (6))){
var inst_19605 = (state_19623[(7)]);
var inst_19610 = p.call(null,inst_19605);
var state_19623__$1 = state_19623;
if(cljs.core.truth_(inst_19610)){
var statearr_19630_19653 = state_19623__$1;
(statearr_19630_19653[(1)] = (8));

} else {
var statearr_19631_19654 = state_19623__$1;
(statearr_19631_19654[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19624 === (3))){
var inst_19621 = (state_19623[(2)]);
var state_19623__$1 = state_19623;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19623__$1,inst_19621);
} else {
if((state_val_19624 === (2))){
var state_19623__$1 = state_19623;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19623__$1,(4),ch);
} else {
if((state_val_19624 === (11))){
var inst_19613 = (state_19623[(2)]);
var state_19623__$1 = state_19623;
var statearr_19632_19655 = state_19623__$1;
(statearr_19632_19655[(2)] = inst_19613);

(statearr_19632_19655[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19624 === (9))){
var state_19623__$1 = state_19623;
var statearr_19633_19656 = state_19623__$1;
(statearr_19633_19656[(2)] = null);

(statearr_19633_19656[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19624 === (5))){
var inst_19608 = cljs.core.async.close_BANG_.call(null,out);
var state_19623__$1 = state_19623;
var statearr_19634_19657 = state_19623__$1;
(statearr_19634_19657[(2)] = inst_19608);

(statearr_19634_19657[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19624 === (10))){
var inst_19616 = (state_19623[(2)]);
var state_19623__$1 = (function (){var statearr_19635 = state_19623;
(statearr_19635[(8)] = inst_19616);

return statearr_19635;
})();
var statearr_19636_19658 = state_19623__$1;
(statearr_19636_19658[(2)] = null);

(statearr_19636_19658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19624 === (8))){
var inst_19605 = (state_19623[(7)]);
var state_19623__$1 = state_19623;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19623__$1,(11),out,inst_19605);
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
});})(c__17398__auto___19648,out))
;
return ((function (switch__17286__auto__,c__17398__auto___19648,out){
return (function() {
var cljs$core$async$state_machine__17287__auto__ = null;
var cljs$core$async$state_machine__17287__auto____0 = (function (){
var statearr_19640 = [null,null,null,null,null,null,null,null,null];
(statearr_19640[(0)] = cljs$core$async$state_machine__17287__auto__);

(statearr_19640[(1)] = (1));

return statearr_19640;
});
var cljs$core$async$state_machine__17287__auto____1 = (function (state_19623){
while(true){
var ret_value__17288__auto__ = (function (){try{while(true){
var result__17289__auto__ = switch__17286__auto__.call(null,state_19623);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17289__auto__;
}
break;
}
}catch (e19641){if((e19641 instanceof Object)){
var ex__17290__auto__ = e19641;
var statearr_19642_19659 = state_19623;
(statearr_19642_19659[(5)] = ex__17290__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19623);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19641;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19660 = state_19623;
state_19623 = G__19660;
continue;
} else {
return ret_value__17288__auto__;
}
break;
}
});
cljs$core$async$state_machine__17287__auto__ = function(state_19623){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17287__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17287__auto____1.call(this,state_19623);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17287__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17287__auto____0;
cljs$core$async$state_machine__17287__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17287__auto____1;
return cljs$core$async$state_machine__17287__auto__;
})()
;})(switch__17286__auto__,c__17398__auto___19648,out))
})();
var state__17400__auto__ = (function (){var statearr_19643 = f__17399__auto__.call(null);
(statearr_19643[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17398__auto___19648);

return statearr_19643;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17400__auto__);
});})(c__17398__auto___19648,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args19661 = [];
var len__12956__auto___19664 = arguments.length;
var i__12957__auto___19665 = (0);
while(true){
if((i__12957__auto___19665 < len__12956__auto___19664)){
args19661.push((arguments[i__12957__auto___19665]));

var G__19666 = (i__12957__auto___19665 + (1));
i__12957__auto___19665 = G__19666;
continue;
} else {
}
break;
}

var G__19663 = args19661.length;
switch (G__19663) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19661.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__17398__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17398__auto__){
return (function (){
var f__17399__auto__ = (function (){var switch__17286__auto__ = ((function (c__17398__auto__){
return (function (state_19833){
var state_val_19834 = (state_19833[(1)]);
if((state_val_19834 === (7))){
var inst_19829 = (state_19833[(2)]);
var state_19833__$1 = state_19833;
var statearr_19835_19876 = state_19833__$1;
(statearr_19835_19876[(2)] = inst_19829);

(statearr_19835_19876[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19834 === (20))){
var inst_19799 = (state_19833[(7)]);
var inst_19810 = (state_19833[(2)]);
var inst_19811 = cljs.core.next.call(null,inst_19799);
var inst_19785 = inst_19811;
var inst_19786 = null;
var inst_19787 = (0);
var inst_19788 = (0);
var state_19833__$1 = (function (){var statearr_19836 = state_19833;
(statearr_19836[(8)] = inst_19788);

(statearr_19836[(9)] = inst_19787);

(statearr_19836[(10)] = inst_19810);

(statearr_19836[(11)] = inst_19785);

(statearr_19836[(12)] = inst_19786);

return statearr_19836;
})();
var statearr_19837_19877 = state_19833__$1;
(statearr_19837_19877[(2)] = null);

(statearr_19837_19877[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19834 === (1))){
var state_19833__$1 = state_19833;
var statearr_19838_19878 = state_19833__$1;
(statearr_19838_19878[(2)] = null);

(statearr_19838_19878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19834 === (4))){
var inst_19774 = (state_19833[(13)]);
var inst_19774__$1 = (state_19833[(2)]);
var inst_19775 = (inst_19774__$1 == null);
var state_19833__$1 = (function (){var statearr_19839 = state_19833;
(statearr_19839[(13)] = inst_19774__$1);

return statearr_19839;
})();
if(cljs.core.truth_(inst_19775)){
var statearr_19840_19879 = state_19833__$1;
(statearr_19840_19879[(1)] = (5));

} else {
var statearr_19841_19880 = state_19833__$1;
(statearr_19841_19880[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19834 === (15))){
var state_19833__$1 = state_19833;
var statearr_19845_19881 = state_19833__$1;
(statearr_19845_19881[(2)] = null);

(statearr_19845_19881[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19834 === (21))){
var state_19833__$1 = state_19833;
var statearr_19846_19882 = state_19833__$1;
(statearr_19846_19882[(2)] = null);

(statearr_19846_19882[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19834 === (13))){
var inst_19788 = (state_19833[(8)]);
var inst_19787 = (state_19833[(9)]);
var inst_19785 = (state_19833[(11)]);
var inst_19786 = (state_19833[(12)]);
var inst_19795 = (state_19833[(2)]);
var inst_19796 = (inst_19788 + (1));
var tmp19842 = inst_19787;
var tmp19843 = inst_19785;
var tmp19844 = inst_19786;
var inst_19785__$1 = tmp19843;
var inst_19786__$1 = tmp19844;
var inst_19787__$1 = tmp19842;
var inst_19788__$1 = inst_19796;
var state_19833__$1 = (function (){var statearr_19847 = state_19833;
(statearr_19847[(8)] = inst_19788__$1);

(statearr_19847[(9)] = inst_19787__$1);

(statearr_19847[(14)] = inst_19795);

(statearr_19847[(11)] = inst_19785__$1);

(statearr_19847[(12)] = inst_19786__$1);

return statearr_19847;
})();
var statearr_19848_19883 = state_19833__$1;
(statearr_19848_19883[(2)] = null);

(statearr_19848_19883[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19834 === (22))){
var state_19833__$1 = state_19833;
var statearr_19849_19884 = state_19833__$1;
(statearr_19849_19884[(2)] = null);

(statearr_19849_19884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19834 === (6))){
var inst_19774 = (state_19833[(13)]);
var inst_19783 = f.call(null,inst_19774);
var inst_19784 = cljs.core.seq.call(null,inst_19783);
var inst_19785 = inst_19784;
var inst_19786 = null;
var inst_19787 = (0);
var inst_19788 = (0);
var state_19833__$1 = (function (){var statearr_19850 = state_19833;
(statearr_19850[(8)] = inst_19788);

(statearr_19850[(9)] = inst_19787);

(statearr_19850[(11)] = inst_19785);

(statearr_19850[(12)] = inst_19786);

return statearr_19850;
})();
var statearr_19851_19885 = state_19833__$1;
(statearr_19851_19885[(2)] = null);

(statearr_19851_19885[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19834 === (17))){
var inst_19799 = (state_19833[(7)]);
var inst_19803 = cljs.core.chunk_first.call(null,inst_19799);
var inst_19804 = cljs.core.chunk_rest.call(null,inst_19799);
var inst_19805 = cljs.core.count.call(null,inst_19803);
var inst_19785 = inst_19804;
var inst_19786 = inst_19803;
var inst_19787 = inst_19805;
var inst_19788 = (0);
var state_19833__$1 = (function (){var statearr_19852 = state_19833;
(statearr_19852[(8)] = inst_19788);

(statearr_19852[(9)] = inst_19787);

(statearr_19852[(11)] = inst_19785);

(statearr_19852[(12)] = inst_19786);

return statearr_19852;
})();
var statearr_19853_19886 = state_19833__$1;
(statearr_19853_19886[(2)] = null);

(statearr_19853_19886[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19834 === (3))){
var inst_19831 = (state_19833[(2)]);
var state_19833__$1 = state_19833;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19833__$1,inst_19831);
} else {
if((state_val_19834 === (12))){
var inst_19819 = (state_19833[(2)]);
var state_19833__$1 = state_19833;
var statearr_19854_19887 = state_19833__$1;
(statearr_19854_19887[(2)] = inst_19819);

(statearr_19854_19887[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19834 === (2))){
var state_19833__$1 = state_19833;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19833__$1,(4),in$);
} else {
if((state_val_19834 === (23))){
var inst_19827 = (state_19833[(2)]);
var state_19833__$1 = state_19833;
var statearr_19855_19888 = state_19833__$1;
(statearr_19855_19888[(2)] = inst_19827);

(statearr_19855_19888[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19834 === (19))){
var inst_19814 = (state_19833[(2)]);
var state_19833__$1 = state_19833;
var statearr_19856_19889 = state_19833__$1;
(statearr_19856_19889[(2)] = inst_19814);

(statearr_19856_19889[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19834 === (11))){
var inst_19799 = (state_19833[(7)]);
var inst_19785 = (state_19833[(11)]);
var inst_19799__$1 = cljs.core.seq.call(null,inst_19785);
var state_19833__$1 = (function (){var statearr_19857 = state_19833;
(statearr_19857[(7)] = inst_19799__$1);

return statearr_19857;
})();
if(inst_19799__$1){
var statearr_19858_19890 = state_19833__$1;
(statearr_19858_19890[(1)] = (14));

} else {
var statearr_19859_19891 = state_19833__$1;
(statearr_19859_19891[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19834 === (9))){
var inst_19821 = (state_19833[(2)]);
var inst_19822 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_19833__$1 = (function (){var statearr_19860 = state_19833;
(statearr_19860[(15)] = inst_19821);

return statearr_19860;
})();
if(cljs.core.truth_(inst_19822)){
var statearr_19861_19892 = state_19833__$1;
(statearr_19861_19892[(1)] = (21));

} else {
var statearr_19862_19893 = state_19833__$1;
(statearr_19862_19893[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19834 === (5))){
var inst_19777 = cljs.core.async.close_BANG_.call(null,out);
var state_19833__$1 = state_19833;
var statearr_19863_19894 = state_19833__$1;
(statearr_19863_19894[(2)] = inst_19777);

(statearr_19863_19894[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19834 === (14))){
var inst_19799 = (state_19833[(7)]);
var inst_19801 = cljs.core.chunked_seq_QMARK_.call(null,inst_19799);
var state_19833__$1 = state_19833;
if(inst_19801){
var statearr_19864_19895 = state_19833__$1;
(statearr_19864_19895[(1)] = (17));

} else {
var statearr_19865_19896 = state_19833__$1;
(statearr_19865_19896[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19834 === (16))){
var inst_19817 = (state_19833[(2)]);
var state_19833__$1 = state_19833;
var statearr_19866_19897 = state_19833__$1;
(statearr_19866_19897[(2)] = inst_19817);

(statearr_19866_19897[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19834 === (10))){
var inst_19788 = (state_19833[(8)]);
var inst_19786 = (state_19833[(12)]);
var inst_19793 = cljs.core._nth.call(null,inst_19786,inst_19788);
var state_19833__$1 = state_19833;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19833__$1,(13),out,inst_19793);
} else {
if((state_val_19834 === (18))){
var inst_19799 = (state_19833[(7)]);
var inst_19808 = cljs.core.first.call(null,inst_19799);
var state_19833__$1 = state_19833;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19833__$1,(20),out,inst_19808);
} else {
if((state_val_19834 === (8))){
var inst_19788 = (state_19833[(8)]);
var inst_19787 = (state_19833[(9)]);
var inst_19790 = (inst_19788 < inst_19787);
var inst_19791 = inst_19790;
var state_19833__$1 = state_19833;
if(cljs.core.truth_(inst_19791)){
var statearr_19867_19898 = state_19833__$1;
(statearr_19867_19898[(1)] = (10));

} else {
var statearr_19868_19899 = state_19833__$1;
(statearr_19868_19899[(1)] = (11));

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
}
}
}
}
}
}
});})(c__17398__auto__))
;
return ((function (switch__17286__auto__,c__17398__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__17287__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__17287__auto____0 = (function (){
var statearr_19872 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19872[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__17287__auto__);

(statearr_19872[(1)] = (1));

return statearr_19872;
});
var cljs$core$async$mapcat_STAR__$_state_machine__17287__auto____1 = (function (state_19833){
while(true){
var ret_value__17288__auto__ = (function (){try{while(true){
var result__17289__auto__ = switch__17286__auto__.call(null,state_19833);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17289__auto__;
}
break;
}
}catch (e19873){if((e19873 instanceof Object)){
var ex__17290__auto__ = e19873;
var statearr_19874_19900 = state_19833;
(statearr_19874_19900[(5)] = ex__17290__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19833);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19873;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19901 = state_19833;
state_19833 = G__19901;
continue;
} else {
return ret_value__17288__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__17287__auto__ = function(state_19833){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__17287__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__17287__auto____1.call(this,state_19833);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__17287__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__17287__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__17287__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__17287__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__17287__auto__;
})()
;})(switch__17286__auto__,c__17398__auto__))
})();
var state__17400__auto__ = (function (){var statearr_19875 = f__17399__auto__.call(null);
(statearr_19875[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17398__auto__);

return statearr_19875;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17400__auto__);
});})(c__17398__auto__))
);

return c__17398__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args19902 = [];
var len__12956__auto___19905 = arguments.length;
var i__12957__auto___19906 = (0);
while(true){
if((i__12957__auto___19906 < len__12956__auto___19905)){
args19902.push((arguments[i__12957__auto___19906]));

var G__19907 = (i__12957__auto___19906 + (1));
i__12957__auto___19906 = G__19907;
continue;
} else {
}
break;
}

var G__19904 = args19902.length;
switch (G__19904) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19902.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args19909 = [];
var len__12956__auto___19912 = arguments.length;
var i__12957__auto___19913 = (0);
while(true){
if((i__12957__auto___19913 < len__12956__auto___19912)){
args19909.push((arguments[i__12957__auto___19913]));

var G__19914 = (i__12957__auto___19913 + (1));
i__12957__auto___19913 = G__19914;
continue;
} else {
}
break;
}

var G__19911 = args19909.length;
switch (G__19911) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19909.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args19916 = [];
var len__12956__auto___19967 = arguments.length;
var i__12957__auto___19968 = (0);
while(true){
if((i__12957__auto___19968 < len__12956__auto___19967)){
args19916.push((arguments[i__12957__auto___19968]));

var G__19969 = (i__12957__auto___19968 + (1));
i__12957__auto___19968 = G__19969;
continue;
} else {
}
break;
}

var G__19918 = args19916.length;
switch (G__19918) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19916.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__17398__auto___19971 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17398__auto___19971,out){
return (function (){
var f__17399__auto__ = (function (){var switch__17286__auto__ = ((function (c__17398__auto___19971,out){
return (function (state_19942){
var state_val_19943 = (state_19942[(1)]);
if((state_val_19943 === (7))){
var inst_19937 = (state_19942[(2)]);
var state_19942__$1 = state_19942;
var statearr_19944_19972 = state_19942__$1;
(statearr_19944_19972[(2)] = inst_19937);

(statearr_19944_19972[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19943 === (1))){
var inst_19919 = null;
var state_19942__$1 = (function (){var statearr_19945 = state_19942;
(statearr_19945[(7)] = inst_19919);

return statearr_19945;
})();
var statearr_19946_19973 = state_19942__$1;
(statearr_19946_19973[(2)] = null);

(statearr_19946_19973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19943 === (4))){
var inst_19922 = (state_19942[(8)]);
var inst_19922__$1 = (state_19942[(2)]);
var inst_19923 = (inst_19922__$1 == null);
var inst_19924 = cljs.core.not.call(null,inst_19923);
var state_19942__$1 = (function (){var statearr_19947 = state_19942;
(statearr_19947[(8)] = inst_19922__$1);

return statearr_19947;
})();
if(inst_19924){
var statearr_19948_19974 = state_19942__$1;
(statearr_19948_19974[(1)] = (5));

} else {
var statearr_19949_19975 = state_19942__$1;
(statearr_19949_19975[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19943 === (6))){
var state_19942__$1 = state_19942;
var statearr_19950_19976 = state_19942__$1;
(statearr_19950_19976[(2)] = null);

(statearr_19950_19976[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19943 === (3))){
var inst_19939 = (state_19942[(2)]);
var inst_19940 = cljs.core.async.close_BANG_.call(null,out);
var state_19942__$1 = (function (){var statearr_19951 = state_19942;
(statearr_19951[(9)] = inst_19939);

return statearr_19951;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19942__$1,inst_19940);
} else {
if((state_val_19943 === (2))){
var state_19942__$1 = state_19942;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19942__$1,(4),ch);
} else {
if((state_val_19943 === (11))){
var inst_19922 = (state_19942[(8)]);
var inst_19931 = (state_19942[(2)]);
var inst_19919 = inst_19922;
var state_19942__$1 = (function (){var statearr_19952 = state_19942;
(statearr_19952[(10)] = inst_19931);

(statearr_19952[(7)] = inst_19919);

return statearr_19952;
})();
var statearr_19953_19977 = state_19942__$1;
(statearr_19953_19977[(2)] = null);

(statearr_19953_19977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19943 === (9))){
var inst_19922 = (state_19942[(8)]);
var state_19942__$1 = state_19942;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19942__$1,(11),out,inst_19922);
} else {
if((state_val_19943 === (5))){
var inst_19922 = (state_19942[(8)]);
var inst_19919 = (state_19942[(7)]);
var inst_19926 = cljs.core._EQ_.call(null,inst_19922,inst_19919);
var state_19942__$1 = state_19942;
if(inst_19926){
var statearr_19955_19978 = state_19942__$1;
(statearr_19955_19978[(1)] = (8));

} else {
var statearr_19956_19979 = state_19942__$1;
(statearr_19956_19979[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19943 === (10))){
var inst_19934 = (state_19942[(2)]);
var state_19942__$1 = state_19942;
var statearr_19957_19980 = state_19942__$1;
(statearr_19957_19980[(2)] = inst_19934);

(statearr_19957_19980[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19943 === (8))){
var inst_19919 = (state_19942[(7)]);
var tmp19954 = inst_19919;
var inst_19919__$1 = tmp19954;
var state_19942__$1 = (function (){var statearr_19958 = state_19942;
(statearr_19958[(7)] = inst_19919__$1);

return statearr_19958;
})();
var statearr_19959_19981 = state_19942__$1;
(statearr_19959_19981[(2)] = null);

(statearr_19959_19981[(1)] = (2));


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
});})(c__17398__auto___19971,out))
;
return ((function (switch__17286__auto__,c__17398__auto___19971,out){
return (function() {
var cljs$core$async$state_machine__17287__auto__ = null;
var cljs$core$async$state_machine__17287__auto____0 = (function (){
var statearr_19963 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19963[(0)] = cljs$core$async$state_machine__17287__auto__);

(statearr_19963[(1)] = (1));

return statearr_19963;
});
var cljs$core$async$state_machine__17287__auto____1 = (function (state_19942){
while(true){
var ret_value__17288__auto__ = (function (){try{while(true){
var result__17289__auto__ = switch__17286__auto__.call(null,state_19942);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17289__auto__;
}
break;
}
}catch (e19964){if((e19964 instanceof Object)){
var ex__17290__auto__ = e19964;
var statearr_19965_19982 = state_19942;
(statearr_19965_19982[(5)] = ex__17290__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19942);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19964;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19983 = state_19942;
state_19942 = G__19983;
continue;
} else {
return ret_value__17288__auto__;
}
break;
}
});
cljs$core$async$state_machine__17287__auto__ = function(state_19942){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17287__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17287__auto____1.call(this,state_19942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17287__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17287__auto____0;
cljs$core$async$state_machine__17287__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17287__auto____1;
return cljs$core$async$state_machine__17287__auto__;
})()
;})(switch__17286__auto__,c__17398__auto___19971,out))
})();
var state__17400__auto__ = (function (){var statearr_19966 = f__17399__auto__.call(null);
(statearr_19966[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17398__auto___19971);

return statearr_19966;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17400__auto__);
});})(c__17398__auto___19971,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args19984 = [];
var len__12956__auto___20054 = arguments.length;
var i__12957__auto___20055 = (0);
while(true){
if((i__12957__auto___20055 < len__12956__auto___20054)){
args19984.push((arguments[i__12957__auto___20055]));

var G__20056 = (i__12957__auto___20055 + (1));
i__12957__auto___20055 = G__20056;
continue;
} else {
}
break;
}

var G__19986 = args19984.length;
switch (G__19986) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19984.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__17398__auto___20058 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17398__auto___20058,out){
return (function (){
var f__17399__auto__ = (function (){var switch__17286__auto__ = ((function (c__17398__auto___20058,out){
return (function (state_20024){
var state_val_20025 = (state_20024[(1)]);
if((state_val_20025 === (7))){
var inst_20020 = (state_20024[(2)]);
var state_20024__$1 = state_20024;
var statearr_20026_20059 = state_20024__$1;
(statearr_20026_20059[(2)] = inst_20020);

(statearr_20026_20059[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20025 === (1))){
var inst_19987 = (new Array(n));
var inst_19988 = inst_19987;
var inst_19989 = (0);
var state_20024__$1 = (function (){var statearr_20027 = state_20024;
(statearr_20027[(7)] = inst_19989);

(statearr_20027[(8)] = inst_19988);

return statearr_20027;
})();
var statearr_20028_20060 = state_20024__$1;
(statearr_20028_20060[(2)] = null);

(statearr_20028_20060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20025 === (4))){
var inst_19992 = (state_20024[(9)]);
var inst_19992__$1 = (state_20024[(2)]);
var inst_19993 = (inst_19992__$1 == null);
var inst_19994 = cljs.core.not.call(null,inst_19993);
var state_20024__$1 = (function (){var statearr_20029 = state_20024;
(statearr_20029[(9)] = inst_19992__$1);

return statearr_20029;
})();
if(inst_19994){
var statearr_20030_20061 = state_20024__$1;
(statearr_20030_20061[(1)] = (5));

} else {
var statearr_20031_20062 = state_20024__$1;
(statearr_20031_20062[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20025 === (15))){
var inst_20014 = (state_20024[(2)]);
var state_20024__$1 = state_20024;
var statearr_20032_20063 = state_20024__$1;
(statearr_20032_20063[(2)] = inst_20014);

(statearr_20032_20063[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20025 === (13))){
var state_20024__$1 = state_20024;
var statearr_20033_20064 = state_20024__$1;
(statearr_20033_20064[(2)] = null);

(statearr_20033_20064[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20025 === (6))){
var inst_19989 = (state_20024[(7)]);
var inst_20010 = (inst_19989 > (0));
var state_20024__$1 = state_20024;
if(cljs.core.truth_(inst_20010)){
var statearr_20034_20065 = state_20024__$1;
(statearr_20034_20065[(1)] = (12));

} else {
var statearr_20035_20066 = state_20024__$1;
(statearr_20035_20066[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20025 === (3))){
var inst_20022 = (state_20024[(2)]);
var state_20024__$1 = state_20024;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20024__$1,inst_20022);
} else {
if((state_val_20025 === (12))){
var inst_19988 = (state_20024[(8)]);
var inst_20012 = cljs.core.vec.call(null,inst_19988);
var state_20024__$1 = state_20024;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20024__$1,(15),out,inst_20012);
} else {
if((state_val_20025 === (2))){
var state_20024__$1 = state_20024;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20024__$1,(4),ch);
} else {
if((state_val_20025 === (11))){
var inst_20004 = (state_20024[(2)]);
var inst_20005 = (new Array(n));
var inst_19988 = inst_20005;
var inst_19989 = (0);
var state_20024__$1 = (function (){var statearr_20036 = state_20024;
(statearr_20036[(7)] = inst_19989);

(statearr_20036[(8)] = inst_19988);

(statearr_20036[(10)] = inst_20004);

return statearr_20036;
})();
var statearr_20037_20067 = state_20024__$1;
(statearr_20037_20067[(2)] = null);

(statearr_20037_20067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20025 === (9))){
var inst_19988 = (state_20024[(8)]);
var inst_20002 = cljs.core.vec.call(null,inst_19988);
var state_20024__$1 = state_20024;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20024__$1,(11),out,inst_20002);
} else {
if((state_val_20025 === (5))){
var inst_19989 = (state_20024[(7)]);
var inst_19992 = (state_20024[(9)]);
var inst_19988 = (state_20024[(8)]);
var inst_19997 = (state_20024[(11)]);
var inst_19996 = (inst_19988[inst_19989] = inst_19992);
var inst_19997__$1 = (inst_19989 + (1));
var inst_19998 = (inst_19997__$1 < n);
var state_20024__$1 = (function (){var statearr_20038 = state_20024;
(statearr_20038[(12)] = inst_19996);

(statearr_20038[(11)] = inst_19997__$1);

return statearr_20038;
})();
if(cljs.core.truth_(inst_19998)){
var statearr_20039_20068 = state_20024__$1;
(statearr_20039_20068[(1)] = (8));

} else {
var statearr_20040_20069 = state_20024__$1;
(statearr_20040_20069[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20025 === (14))){
var inst_20017 = (state_20024[(2)]);
var inst_20018 = cljs.core.async.close_BANG_.call(null,out);
var state_20024__$1 = (function (){var statearr_20042 = state_20024;
(statearr_20042[(13)] = inst_20017);

return statearr_20042;
})();
var statearr_20043_20070 = state_20024__$1;
(statearr_20043_20070[(2)] = inst_20018);

(statearr_20043_20070[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20025 === (10))){
var inst_20008 = (state_20024[(2)]);
var state_20024__$1 = state_20024;
var statearr_20044_20071 = state_20024__$1;
(statearr_20044_20071[(2)] = inst_20008);

(statearr_20044_20071[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20025 === (8))){
var inst_19988 = (state_20024[(8)]);
var inst_19997 = (state_20024[(11)]);
var tmp20041 = inst_19988;
var inst_19988__$1 = tmp20041;
var inst_19989 = inst_19997;
var state_20024__$1 = (function (){var statearr_20045 = state_20024;
(statearr_20045[(7)] = inst_19989);

(statearr_20045[(8)] = inst_19988__$1);

return statearr_20045;
})();
var statearr_20046_20072 = state_20024__$1;
(statearr_20046_20072[(2)] = null);

(statearr_20046_20072[(1)] = (2));


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
});})(c__17398__auto___20058,out))
;
return ((function (switch__17286__auto__,c__17398__auto___20058,out){
return (function() {
var cljs$core$async$state_machine__17287__auto__ = null;
var cljs$core$async$state_machine__17287__auto____0 = (function (){
var statearr_20050 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20050[(0)] = cljs$core$async$state_machine__17287__auto__);

(statearr_20050[(1)] = (1));

return statearr_20050;
});
var cljs$core$async$state_machine__17287__auto____1 = (function (state_20024){
while(true){
var ret_value__17288__auto__ = (function (){try{while(true){
var result__17289__auto__ = switch__17286__auto__.call(null,state_20024);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17289__auto__;
}
break;
}
}catch (e20051){if((e20051 instanceof Object)){
var ex__17290__auto__ = e20051;
var statearr_20052_20073 = state_20024;
(statearr_20052_20073[(5)] = ex__17290__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20024);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20051;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20074 = state_20024;
state_20024 = G__20074;
continue;
} else {
return ret_value__17288__auto__;
}
break;
}
});
cljs$core$async$state_machine__17287__auto__ = function(state_20024){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17287__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17287__auto____1.call(this,state_20024);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17287__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17287__auto____0;
cljs$core$async$state_machine__17287__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17287__auto____1;
return cljs$core$async$state_machine__17287__auto__;
})()
;})(switch__17286__auto__,c__17398__auto___20058,out))
})();
var state__17400__auto__ = (function (){var statearr_20053 = f__17399__auto__.call(null);
(statearr_20053[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17398__auto___20058);

return statearr_20053;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17400__auto__);
});})(c__17398__auto___20058,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args20075 = [];
var len__12956__auto___20149 = arguments.length;
var i__12957__auto___20150 = (0);
while(true){
if((i__12957__auto___20150 < len__12956__auto___20149)){
args20075.push((arguments[i__12957__auto___20150]));

var G__20151 = (i__12957__auto___20150 + (1));
i__12957__auto___20150 = G__20151;
continue;
} else {
}
break;
}

var G__20077 = args20075.length;
switch (G__20077) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20075.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__17398__auto___20153 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17398__auto___20153,out){
return (function (){
var f__17399__auto__ = (function (){var switch__17286__auto__ = ((function (c__17398__auto___20153,out){
return (function (state_20119){
var state_val_20120 = (state_20119[(1)]);
if((state_val_20120 === (7))){
var inst_20115 = (state_20119[(2)]);
var state_20119__$1 = state_20119;
var statearr_20121_20154 = state_20119__$1;
(statearr_20121_20154[(2)] = inst_20115);

(statearr_20121_20154[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20120 === (1))){
var inst_20078 = [];
var inst_20079 = inst_20078;
var inst_20080 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_20119__$1 = (function (){var statearr_20122 = state_20119;
(statearr_20122[(7)] = inst_20079);

(statearr_20122[(8)] = inst_20080);

return statearr_20122;
})();
var statearr_20123_20155 = state_20119__$1;
(statearr_20123_20155[(2)] = null);

(statearr_20123_20155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20120 === (4))){
var inst_20083 = (state_20119[(9)]);
var inst_20083__$1 = (state_20119[(2)]);
var inst_20084 = (inst_20083__$1 == null);
var inst_20085 = cljs.core.not.call(null,inst_20084);
var state_20119__$1 = (function (){var statearr_20124 = state_20119;
(statearr_20124[(9)] = inst_20083__$1);

return statearr_20124;
})();
if(inst_20085){
var statearr_20125_20156 = state_20119__$1;
(statearr_20125_20156[(1)] = (5));

} else {
var statearr_20126_20157 = state_20119__$1;
(statearr_20126_20157[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20120 === (15))){
var inst_20109 = (state_20119[(2)]);
var state_20119__$1 = state_20119;
var statearr_20127_20158 = state_20119__$1;
(statearr_20127_20158[(2)] = inst_20109);

(statearr_20127_20158[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20120 === (13))){
var state_20119__$1 = state_20119;
var statearr_20128_20159 = state_20119__$1;
(statearr_20128_20159[(2)] = null);

(statearr_20128_20159[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20120 === (6))){
var inst_20079 = (state_20119[(7)]);
var inst_20104 = inst_20079.length;
var inst_20105 = (inst_20104 > (0));
var state_20119__$1 = state_20119;
if(cljs.core.truth_(inst_20105)){
var statearr_20129_20160 = state_20119__$1;
(statearr_20129_20160[(1)] = (12));

} else {
var statearr_20130_20161 = state_20119__$1;
(statearr_20130_20161[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20120 === (3))){
var inst_20117 = (state_20119[(2)]);
var state_20119__$1 = state_20119;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20119__$1,inst_20117);
} else {
if((state_val_20120 === (12))){
var inst_20079 = (state_20119[(7)]);
var inst_20107 = cljs.core.vec.call(null,inst_20079);
var state_20119__$1 = state_20119;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20119__$1,(15),out,inst_20107);
} else {
if((state_val_20120 === (2))){
var state_20119__$1 = state_20119;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20119__$1,(4),ch);
} else {
if((state_val_20120 === (11))){
var inst_20083 = (state_20119[(9)]);
var inst_20087 = (state_20119[(10)]);
var inst_20097 = (state_20119[(2)]);
var inst_20098 = [];
var inst_20099 = inst_20098.push(inst_20083);
var inst_20079 = inst_20098;
var inst_20080 = inst_20087;
var state_20119__$1 = (function (){var statearr_20131 = state_20119;
(statearr_20131[(11)] = inst_20097);

(statearr_20131[(7)] = inst_20079);

(statearr_20131[(8)] = inst_20080);

(statearr_20131[(12)] = inst_20099);

return statearr_20131;
})();
var statearr_20132_20162 = state_20119__$1;
(statearr_20132_20162[(2)] = null);

(statearr_20132_20162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20120 === (9))){
var inst_20079 = (state_20119[(7)]);
var inst_20095 = cljs.core.vec.call(null,inst_20079);
var state_20119__$1 = state_20119;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20119__$1,(11),out,inst_20095);
} else {
if((state_val_20120 === (5))){
var inst_20083 = (state_20119[(9)]);
var inst_20087 = (state_20119[(10)]);
var inst_20080 = (state_20119[(8)]);
var inst_20087__$1 = f.call(null,inst_20083);
var inst_20088 = cljs.core._EQ_.call(null,inst_20087__$1,inst_20080);
var inst_20089 = cljs.core.keyword_identical_QMARK_.call(null,inst_20080,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_20090 = (inst_20088) || (inst_20089);
var state_20119__$1 = (function (){var statearr_20133 = state_20119;
(statearr_20133[(10)] = inst_20087__$1);

return statearr_20133;
})();
if(cljs.core.truth_(inst_20090)){
var statearr_20134_20163 = state_20119__$1;
(statearr_20134_20163[(1)] = (8));

} else {
var statearr_20135_20164 = state_20119__$1;
(statearr_20135_20164[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20120 === (14))){
var inst_20112 = (state_20119[(2)]);
var inst_20113 = cljs.core.async.close_BANG_.call(null,out);
var state_20119__$1 = (function (){var statearr_20137 = state_20119;
(statearr_20137[(13)] = inst_20112);

return statearr_20137;
})();
var statearr_20138_20165 = state_20119__$1;
(statearr_20138_20165[(2)] = inst_20113);

(statearr_20138_20165[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20120 === (10))){
var inst_20102 = (state_20119[(2)]);
var state_20119__$1 = state_20119;
var statearr_20139_20166 = state_20119__$1;
(statearr_20139_20166[(2)] = inst_20102);

(statearr_20139_20166[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20120 === (8))){
var inst_20083 = (state_20119[(9)]);
var inst_20079 = (state_20119[(7)]);
var inst_20087 = (state_20119[(10)]);
var inst_20092 = inst_20079.push(inst_20083);
var tmp20136 = inst_20079;
var inst_20079__$1 = tmp20136;
var inst_20080 = inst_20087;
var state_20119__$1 = (function (){var statearr_20140 = state_20119;
(statearr_20140[(14)] = inst_20092);

(statearr_20140[(7)] = inst_20079__$1);

(statearr_20140[(8)] = inst_20080);

return statearr_20140;
})();
var statearr_20141_20167 = state_20119__$1;
(statearr_20141_20167[(2)] = null);

(statearr_20141_20167[(1)] = (2));


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
});})(c__17398__auto___20153,out))
;
return ((function (switch__17286__auto__,c__17398__auto___20153,out){
return (function() {
var cljs$core$async$state_machine__17287__auto__ = null;
var cljs$core$async$state_machine__17287__auto____0 = (function (){
var statearr_20145 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20145[(0)] = cljs$core$async$state_machine__17287__auto__);

(statearr_20145[(1)] = (1));

return statearr_20145;
});
var cljs$core$async$state_machine__17287__auto____1 = (function (state_20119){
while(true){
var ret_value__17288__auto__ = (function (){try{while(true){
var result__17289__auto__ = switch__17286__auto__.call(null,state_20119);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17289__auto__;
}
break;
}
}catch (e20146){if((e20146 instanceof Object)){
var ex__17290__auto__ = e20146;
var statearr_20147_20168 = state_20119;
(statearr_20147_20168[(5)] = ex__17290__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20119);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20146;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20169 = state_20119;
state_20119 = G__20169;
continue;
} else {
return ret_value__17288__auto__;
}
break;
}
});
cljs$core$async$state_machine__17287__auto__ = function(state_20119){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17287__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17287__auto____1.call(this,state_20119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17287__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17287__auto____0;
cljs$core$async$state_machine__17287__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17287__auto____1;
return cljs$core$async$state_machine__17287__auto__;
})()
;})(switch__17286__auto__,c__17398__auto___20153,out))
})();
var state__17400__auto__ = (function (){var statearr_20148 = f__17399__auto__.call(null);
(statearr_20148[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17398__auto___20153);

return statearr_20148;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17400__auto__);
});})(c__17398__auto___20153,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1451058358894