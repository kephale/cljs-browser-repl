// Compiled by ClojureScript 1.7.170 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__16227_16231 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__16228_16232 = null;
var count__16229_16233 = (0);
var i__16230_16234 = (0);
while(true){
if((i__16230_16234 < count__16229_16233)){
var k_16235 = cljs.core._nth.call(null,chunk__16228_16232,i__16230_16234);
var v_16236 = (b[k_16235]);
(a[k_16235] = v_16236);

var G__16237 = seq__16227_16231;
var G__16238 = chunk__16228_16232;
var G__16239 = count__16229_16233;
var G__16240 = (i__16230_16234 + (1));
seq__16227_16231 = G__16237;
chunk__16228_16232 = G__16238;
count__16229_16233 = G__16239;
i__16230_16234 = G__16240;
continue;
} else {
var temp__4425__auto___16241 = cljs.core.seq.call(null,seq__16227_16231);
if(temp__4425__auto___16241){
var seq__16227_16242__$1 = temp__4425__auto___16241;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16227_16242__$1)){
var c__12701__auto___16243 = cljs.core.chunk_first.call(null,seq__16227_16242__$1);
var G__16244 = cljs.core.chunk_rest.call(null,seq__16227_16242__$1);
var G__16245 = c__12701__auto___16243;
var G__16246 = cljs.core.count.call(null,c__12701__auto___16243);
var G__16247 = (0);
seq__16227_16231 = G__16244;
chunk__16228_16232 = G__16245;
count__16229_16233 = G__16246;
i__16230_16234 = G__16247;
continue;
} else {
var k_16248 = cljs.core.first.call(null,seq__16227_16242__$1);
var v_16249 = (b[k_16248]);
(a[k_16248] = v_16249);

var G__16250 = cljs.core.next.call(null,seq__16227_16242__$1);
var G__16251 = null;
var G__16252 = (0);
var G__16253 = (0);
seq__16227_16231 = G__16250;
chunk__16228_16232 = G__16251;
count__16229_16233 = G__16252;
i__16230_16234 = G__16253;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__12496__auto__,writer__12497__auto__,opt__12498__auto__){
return cljs.core._write.call(null,writer__12497__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__12496__auto__,writer__12497__auto__,opt__12498__auto__){
return cljs.core._write.call(null,writer__12497__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args16254 = [];
var len__12956__auto___16257 = arguments.length;
var i__12957__auto___16258 = (0);
while(true){
if((i__12957__auto___16258 < len__12956__auto___16257)){
args16254.push((arguments[i__12957__auto___16258]));

var G__16259 = (i__12957__auto___16258 + (1));
i__12957__auto___16258 = G__16259;
continue;
} else {
}
break;
}

var G__16256 = args16254.length;
switch (G__16256) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16254.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__16261 = (i + (2));
var G__16262 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__16261;
ret = G__16262;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;
/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__12496__auto__,writer__12497__auto__,opt__12498__auto__){
return cljs.core._write.call(null,writer__12497__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__12496__auto__,writer__12497__auto__,opt__12498__auto__){
return cljs.core._write.call(null,writer__12497__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__16263_16267 = cljs.core.seq.call(null,v);
var chunk__16264_16268 = null;
var count__16265_16269 = (0);
var i__16266_16270 = (0);
while(true){
if((i__16266_16270 < count__16265_16269)){
var x_16271 = cljs.core._nth.call(null,chunk__16264_16268,i__16266_16270);
ret.push(x_16271);

var G__16272 = seq__16263_16267;
var G__16273 = chunk__16264_16268;
var G__16274 = count__16265_16269;
var G__16275 = (i__16266_16270 + (1));
seq__16263_16267 = G__16272;
chunk__16264_16268 = G__16273;
count__16265_16269 = G__16274;
i__16266_16270 = G__16275;
continue;
} else {
var temp__4425__auto___16276 = cljs.core.seq.call(null,seq__16263_16267);
if(temp__4425__auto___16276){
var seq__16263_16277__$1 = temp__4425__auto___16276;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16263_16277__$1)){
var c__12701__auto___16278 = cljs.core.chunk_first.call(null,seq__16263_16277__$1);
var G__16279 = cljs.core.chunk_rest.call(null,seq__16263_16277__$1);
var G__16280 = c__12701__auto___16278;
var G__16281 = cljs.core.count.call(null,c__12701__auto___16278);
var G__16282 = (0);
seq__16263_16267 = G__16279;
chunk__16264_16268 = G__16280;
count__16265_16269 = G__16281;
i__16266_16270 = G__16282;
continue;
} else {
var x_16283 = cljs.core.first.call(null,seq__16263_16277__$1);
ret.push(x_16283);

var G__16284 = cljs.core.next.call(null,seq__16263_16277__$1);
var G__16285 = null;
var G__16286 = (0);
var G__16287 = (0);
seq__16263_16267 = G__16284;
chunk__16264_16268 = G__16285;
count__16265_16269 = G__16286;
i__16266_16270 = G__16287;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__12496__auto__,writer__12497__auto__,opt__12498__auto__){
return cljs.core._write.call(null,writer__12497__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__12496__auto__,writer__12497__auto__,opt__12498__auto__){
return cljs.core._write.call(null,writer__12497__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__16288_16292 = cljs.core.seq.call(null,v);
var chunk__16289_16293 = null;
var count__16290_16294 = (0);
var i__16291_16295 = (0);
while(true){
if((i__16291_16295 < count__16290_16294)){
var x_16296 = cljs.core._nth.call(null,chunk__16289_16293,i__16291_16295);
ret.push(x_16296);

var G__16297 = seq__16288_16292;
var G__16298 = chunk__16289_16293;
var G__16299 = count__16290_16294;
var G__16300 = (i__16291_16295 + (1));
seq__16288_16292 = G__16297;
chunk__16289_16293 = G__16298;
count__16290_16294 = G__16299;
i__16291_16295 = G__16300;
continue;
} else {
var temp__4425__auto___16301 = cljs.core.seq.call(null,seq__16288_16292);
if(temp__4425__auto___16301){
var seq__16288_16302__$1 = temp__4425__auto___16301;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16288_16302__$1)){
var c__12701__auto___16303 = cljs.core.chunk_first.call(null,seq__16288_16302__$1);
var G__16304 = cljs.core.chunk_rest.call(null,seq__16288_16302__$1);
var G__16305 = c__12701__auto___16303;
var G__16306 = cljs.core.count.call(null,c__12701__auto___16303);
var G__16307 = (0);
seq__16288_16292 = G__16304;
chunk__16289_16293 = G__16305;
count__16290_16294 = G__16306;
i__16291_16295 = G__16307;
continue;
} else {
var x_16308 = cljs.core.first.call(null,seq__16288_16302__$1);
ret.push(x_16308);

var G__16309 = cljs.core.next.call(null,seq__16288_16302__$1);
var G__16310 = null;
var G__16311 = (0);
var G__16312 = (0);
seq__16288_16292 = G__16309;
chunk__16289_16293 = G__16310;
count__16290_16294 = G__16311;
i__16291_16295 = G__16312;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__12496__auto__,writer__12497__auto__,opt__12498__auto__){
return cljs.core._write.call(null,writer__12497__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__16313_16317 = cljs.core.seq.call(null,v);
var chunk__16314_16318 = null;
var count__16315_16319 = (0);
var i__16316_16320 = (0);
while(true){
if((i__16316_16320 < count__16315_16319)){
var x_16321 = cljs.core._nth.call(null,chunk__16314_16318,i__16316_16320);
ret.push(x_16321);

var G__16322 = seq__16313_16317;
var G__16323 = chunk__16314_16318;
var G__16324 = count__16315_16319;
var G__16325 = (i__16316_16320 + (1));
seq__16313_16317 = G__16322;
chunk__16314_16318 = G__16323;
count__16315_16319 = G__16324;
i__16316_16320 = G__16325;
continue;
} else {
var temp__4425__auto___16326 = cljs.core.seq.call(null,seq__16313_16317);
if(temp__4425__auto___16326){
var seq__16313_16327__$1 = temp__4425__auto___16326;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16313_16327__$1)){
var c__12701__auto___16328 = cljs.core.chunk_first.call(null,seq__16313_16327__$1);
var G__16329 = cljs.core.chunk_rest.call(null,seq__16313_16327__$1);
var G__16330 = c__12701__auto___16328;
var G__16331 = cljs.core.count.call(null,c__12701__auto___16328);
var G__16332 = (0);
seq__16313_16317 = G__16329;
chunk__16314_16318 = G__16330;
count__16315_16319 = G__16331;
i__16316_16320 = G__16332;
continue;
} else {
var x_16333 = cljs.core.first.call(null,seq__16313_16327__$1);
ret.push(x_16333);

var G__16334 = cljs.core.next.call(null,seq__16313_16327__$1);
var G__16335 = null;
var G__16336 = (0);
var G__16337 = (0);
seq__16313_16317 = G__16334;
chunk__16314_16318 = G__16335;
count__16315_16319 = G__16336;
i__16316_16320 = G__16337;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__12496__auto__,writer__12497__auto__,opt__12498__auto__){
return cljs.core._write.call(null,writer__12497__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__12496__auto__,writer__12497__auto__,opt__12498__auto__){
return cljs.core._write.call(null,writer__12497__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args16338 = [];
var len__12956__auto___16349 = arguments.length;
var i__12957__auto___16350 = (0);
while(true){
if((i__12957__auto___16350 < len__12956__auto___16349)){
args16338.push((arguments[i__12957__auto___16350]));

var G__16351 = (i__12957__auto___16350 + (1));
i__12957__auto___16350 = G__16351;
continue;
} else {
}
break;
}

var G__16340 = args16338.length;
switch (G__16340) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16338.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__16341 = obj;
G__16341.push(kfn.call(null,k),vfn.call(null,v));

return G__16341;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x16342 = cljs.core.clone.call(null,handlers);
x16342.forEach = ((function (x16342,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__16343 = cljs.core.seq.call(null,coll);
var chunk__16344 = null;
var count__16345 = (0);
var i__16346 = (0);
while(true){
if((i__16346 < count__16345)){
var vec__16347 = cljs.core._nth.call(null,chunk__16344,i__16346);
var k = cljs.core.nth.call(null,vec__16347,(0),null);
var v = cljs.core.nth.call(null,vec__16347,(1),null);
f.call(null,v,k);

var G__16353 = seq__16343;
var G__16354 = chunk__16344;
var G__16355 = count__16345;
var G__16356 = (i__16346 + (1));
seq__16343 = G__16353;
chunk__16344 = G__16354;
count__16345 = G__16355;
i__16346 = G__16356;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__16343);
if(temp__4425__auto__){
var seq__16343__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16343__$1)){
var c__12701__auto__ = cljs.core.chunk_first.call(null,seq__16343__$1);
var G__16357 = cljs.core.chunk_rest.call(null,seq__16343__$1);
var G__16358 = c__12701__auto__;
var G__16359 = cljs.core.count.call(null,c__12701__auto__);
var G__16360 = (0);
seq__16343 = G__16357;
chunk__16344 = G__16358;
count__16345 = G__16359;
i__16346 = G__16360;
continue;
} else {
var vec__16348 = cljs.core.first.call(null,seq__16343__$1);
var k = cljs.core.nth.call(null,vec__16348,(0),null);
var v = cljs.core.nth.call(null,vec__16348,(1),null);
f.call(null,v,k);

var G__16361 = cljs.core.next.call(null,seq__16343__$1);
var G__16362 = null;
var G__16363 = (0);
var G__16364 = (0);
seq__16343 = G__16361;
chunk__16344 = G__16362;
count__16345 = G__16363;
i__16346 = G__16364;
continue;
}
} else {
return null;
}
}
break;
}
});})(x16342,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x16342;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;
/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args16365 = [];
var len__12956__auto___16371 = arguments.length;
var i__12957__auto___16372 = (0);
while(true){
if((i__12957__auto___16372 < len__12956__auto___16371)){
args16365.push((arguments[i__12957__auto___16372]));

var G__16373 = (i__12957__auto___16372 + (1));
i__12957__auto___16372 = G__16373;
continue;
} else {
}
break;
}

var G__16367 = args16365.length;
switch (G__16367) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16365.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit16368 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit16368 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta16369){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta16369 = meta16369;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit16368.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16370,meta16369__$1){
var self__ = this;
var _16370__$1 = this;
return (new cognitect.transit.t_cognitect$transit16368(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta16369__$1));
});

cognitect.transit.t_cognitect$transit16368.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16370){
var self__ = this;
var _16370__$1 = this;
return self__.meta16369;
});

cognitect.transit.t_cognitect$transit16368.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit16368.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit16368.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit16368.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit16368.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta16369","meta16369",1326844851,null)], null);
});

cognitect.transit.t_cognitect$transit16368.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit16368.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit16368";

cognitect.transit.t_cognitect$transit16368.cljs$lang$ctorPrWriter = (function (this__12496__auto__,writer__12497__auto__,opt__12498__auto__){
return cljs.core._write.call(null,writer__12497__auto__,"cognitect.transit/t_cognitect$transit16368");
});

cognitect.transit.__GT_t_cognitect$transit16368 = (function cognitect$transit$__GT_t_cognitect$transit16368(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta16369){
return (new cognitect.transit.t_cognitect$transit16368(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta16369));
});

}

return (new cognitect.transit.t_cognitect$transit16368(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;
/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
return com.cognitect.transit.types.isUUID.call(null,x);
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map?rel=1451058355939