// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.source_map');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.source_map.base64_vlq');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.call(null,(function (m,p__14254){
var vec__14255 = p__14254;
var i = cljs.core.nth.call(null,vec__14255,(0),null);
var v = cljs.core.nth.call(null,vec__14255,(1),null);
return cljs.core.assoc.call(null,m,v,i);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,(function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}),sources));
});
/**
 * Take a seq of source file names and return a comparator
 * that can be used to construct a sorted map. For reverse
 * source maps.
 */
cljs.source_map.source_compare = (function cljs$source_map$source_compare(sources){
var sources__$1 = cljs.source_map.indexed_sources.call(null,sources);
return ((function (sources__$1){
return (function (a,b){
return cljs.core.compare.call(null,sources__$1.call(null,a),sources__$1.call(null,b));
});
;})(sources__$1))
});
/**
 * Take a source map segment represented as a vector
 * and return a map.
 */
cljs.source_map.seg__GT_map = (function cljs$source_map$seg__GT_map(seg,source_map){
var vec__14257 = seg;
var gcol = cljs.core.nth.call(null,vec__14257,(0),null);
var source = cljs.core.nth.call(null,vec__14257,(1),null);
var line = cljs.core.nth.call(null,vec__14257,(2),null);
var col = cljs.core.nth.call(null,vec__14257,(3),null);
var name = cljs.core.nth.call(null,vec__14257,(4),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol,new cljs.core.Keyword(null,"source","source",-433931539),(goog.object.get(source_map,"sources")[source]),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"name","name",1843675177),(function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,seg));
if(cljs.core.truth_(temp__4425__auto__)){
var name__$1 = temp__4425__auto__;
return (goog.object.get(source_map,"names")[name__$1]);
} else {
return null;
}
})()], null);
});
/**
 * Combine a source map segment vector and a relative
 * source map segment vector and combine them to get
 * an absolute segment posititon information as a vector.
 */
cljs.source_map.seg_combine = (function cljs$source_map$seg_combine(seg,relseg){
var vec__14260 = seg;
var gcol = cljs.core.nth.call(null,vec__14260,(0),null);
var source = cljs.core.nth.call(null,vec__14260,(1),null);
var line = cljs.core.nth.call(null,vec__14260,(2),null);
var col = cljs.core.nth.call(null,vec__14260,(3),null);
var name = cljs.core.nth.call(null,vec__14260,(4),null);
var vec__14261 = relseg;
var rgcol = cljs.core.nth.call(null,vec__14261,(0),null);
var rsource = cljs.core.nth.call(null,vec__14261,(1),null);
var rline = cljs.core.nth.call(null,vec__14261,(2),null);
var rcol = cljs.core.nth.call(null,vec__14261,(3),null);
var rname = cljs.core.nth.call(null,vec__14261,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__11897__auto__ = source;
if(cljs.core.truth_(or__11897__auto__)){
return or__11897__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__11897__auto__ = line;
if(cljs.core.truth_(or__11897__auto__)){
return or__11897__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__11897__auto__ = col;
if(cljs.core.truth_(or__11897__auto__)){
return or__11897__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__11897__auto__ = name;
if(cljs.core.truth_(or__11897__auto__)){
return or__11897__auto__;
} else {
return (0);
}
})() + rname)], null);
if(cljs.core.truth_(name)){
return cljs.core.with_meta.call(null,nseg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),(name + rname)], null));
} else {
return nseg;
}
});
/**
 * Helper for decode-reverse. Take a reverse source map and
 *   update it with a segment map.
 */
cljs.source_map.update_reverse_result = (function cljs$source_map$update_reverse_result(result,segmap,gline){
var map__14264 = segmap;
var map__14264__$1 = ((((!((map__14264 == null)))?((((map__14264.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14264.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14264):map__14264);
var gcol = cljs.core.get.call(null,map__14264__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__14264__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__14264__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__14264__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__14264__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__14264,map__14264__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__14264,map__14264__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__14264,map__14264__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__14264,map__14264__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__14264,map__14264__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__14264,map__14264__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var args14266 = [];
var len__12956__auto___14270 = arguments.length;
var i__12957__auto___14271 = (0);
while(true){
if((i__12957__auto___14271 < len__12956__auto___14270)){
args14266.push((arguments[i__12957__auto___14271]));

var G__14272 = (i__12957__auto___14271 + (1));
i__12957__auto___14271 = G__14272;
continue;
} else {
}
break;
}

var G__14268 = args14266.length;
switch (G__14268) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14266.length)].join('')));

}
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode_reverse.call(null,goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.sorted_map_by.call(null,cljs.source_map.source_compare.call(null,sources));
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__14269 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__14274 = cljs.core.next.call(null,segs__$1);
var G__14275 = nrelseg;
var G__14276 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__14274;
relseg__$1 = G__14275;
result__$1 = G__14276;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__14269,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__14269,(1),null);
var G__14277 = (gline + (1));
var G__14278 = cljs.core.next.call(null,lines__$1);
var G__14279 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__14280 = result__$1;
gline = G__14277;
lines__$1 = G__14278;
relseg = G__14279;
result = G__14280;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode_reverse.cljs$lang$maxFixedArity = 2;
/**
 * Helper for decode. Take a source map and update it based on a
 *   segment map.
 */
cljs.source_map.update_result = (function cljs$source_map$update_result(result,segmap,gline){
var map__14284 = segmap;
var map__14284__$1 = ((((!((map__14284 == null)))?((((map__14284.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14284.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14284):map__14284);
var gcol = cljs.core.get.call(null,map__14284__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__14284__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__14284__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__14284__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__14284__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__14284,map__14284__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__14284,map__14284__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__14281_SHARP_){
return cljs.core.conj.call(null,p1__14281_SHARP_,d__$1);
});})(map__14284,map__14284__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__14284,map__14284__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var args14286 = [];
var len__12956__auto___14290 = arguments.length;
var i__12957__auto___14291 = (0);
while(true){
if((i__12957__auto___14291 < len__12956__auto___14290)){
args14286.push((arguments[i__12957__auto___14291]));

var G__14292 = (i__12957__auto___14291 + (1));
i__12957__auto___14291 = G__14292;
continue;
} else {
}
break;
}

var G__14288 = args14286.length;
switch (G__14288) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14286.length)].join('')));

}
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode.call(null,goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__14289 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__14294 = cljs.core.next.call(null,segs__$1);
var G__14295 = nrelseg;
var G__14296 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__14294;
relseg__$1 = G__14295;
result__$1 = G__14296;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__14289,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__14289,(1),null);
var G__14297 = (gline + (1));
var G__14298 = cljs.core.next.call(null,lines__$1);
var G__14299 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__14300 = result__$1;
gline = G__14297;
lines__$1 = G__14298;
relseg = G__14299;
result = G__14300;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode.cljs$lang$maxFixedArity = 2;
/**
 * Take a nested sorted map encoding line and column information
 * for a file and return a vector of vectors of encoded segments.
 * Each vector represents a line, and the internal vectors are segments
 * representing the contents of the line.
 */
cljs.source_map.lines__GT_segs = (function cljs$source_map$lines__GT_segs(lines){
var relseg = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null));
return cljs.core.reduce.call(null,((function (relseg){
return (function (segs,cols){
cljs.core.swap_BANG_.call(null,relseg,((function (relseg){
return (function (p__14307){
var vec__14308 = p__14307;
var _ = cljs.core.nth.call(null,vec__14308,(0),null);
var source = cljs.core.nth.call(null,vec__14308,(1),null);
var line = cljs.core.nth.call(null,vec__14308,(2),null);
var col = cljs.core.nth.call(null,vec__14308,(3),null);
var name = cljs.core.nth.call(null,vec__14308,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__14309){
var vec__14310 = p__14309;
var gcol = cljs.core.nth.call(null,vec__14310,(0),null);
var sidx = cljs.core.nth.call(null,vec__14310,(1),null);
var line = cljs.core.nth.call(null,vec__14310,(2),null);
var col = cljs.core.nth.call(null,vec__14310,(3),null);
var name = cljs.core.nth.call(null,vec__14310,(4),null);
var seg = vec__14310;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__14310,gcol,sidx,line,col,name,seg,relseg){
return (function (p__14311){
var vec__14312 = p__14311;
var _ = cljs.core.nth.call(null,vec__14312,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__14312,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__14312,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__14312,(3),null);
var lname = cljs.core.nth.call(null,vec__14312,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__11897__auto__ = name;
if(cljs.core.truth_(or__11897__auto__)){
return or__11897__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__14310,gcol,sidx,line,col,name,seg,relseg))
);

return cljs.core.conj.call(null,cols__$1,cljs.source_map.base64_vlq.encode.call(null,offset));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,cols));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,lines);
});
/**
 * Take an internal source map representation represented as nested
 * sorted maps of file, line, column and return a source map v3 JSON
 * string.
 */
cljs.source_map.encode = (function cljs$source_map$encode(m,opts){
var lines = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));
var names__GT_idx = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var name_idx = cljs.core.atom.call(null,(0));
var preamble_lines = cljs.core.take.call(null,(function (){var or__11897__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__11897__auto__)){
return or__11897__auto__;
} else {
return (0);
}
})(),cljs.core.repeat.call(null,cljs.core.PersistentVector.EMPTY));
var info__GT_segv = ((function (lines,names__GT_idx,name_idx,preamble_lines){
return (function (info,source_idx,line,col){
var segv = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gcol","gcol",309250807).cljs$core$IFn$_invoke$arity$1(info),source_idx,line,col], null);
var temp__4423__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(temp__4423__auto__)){
var name = temp__4423__auto__;
var idx = (function (){var temp__4423__auto____$1 = cljs.core.get.call(null,cljs.core.deref.call(null,names__GT_idx),name);
if(cljs.core.truth_(temp__4423__auto____$1)){
var idx = temp__4423__auto____$1;
return idx;
} else {
var cidx = cljs.core.deref.call(null,name_idx);
cljs.core.swap_BANG_.call(null,names__GT_idx,cljs.core.assoc,name,cidx);

cljs.core.swap_BANG_.call(null,name_idx,cljs.core.inc);

return cidx;
}
})();
return cljs.core.conj.call(null,segv,idx);
} else {
return segv;
}
});})(lines,names__GT_idx,name_idx,preamble_lines))
;
var encode_cols = ((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (infos,source_idx,line,col){
var seq__14366 = cljs.core.seq.call(null,infos);
var chunk__14367 = null;
var count__14368 = (0);
var i__14369 = (0);
while(true){
if((i__14369 < count__14368)){
var info = cljs.core._nth.call(null,chunk__14367,i__14369);
var segv_14416 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_14417 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_14418 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_14417 > (lc_14418 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__14366,chunk__14367,count__14368,i__14369,segv_14416,gline_14417,lc_14418,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_14417 - (lc_14418 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_14416], null));
});})(seq__14366,chunk__14367,count__14368,i__14369,segv_14416,gline_14417,lc_14418,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__14366,chunk__14367,count__14368,i__14369,segv_14416,gline_14417,lc_14418,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_14417], null),cljs.core.conj,segv_14416);
});})(seq__14366,chunk__14367,count__14368,i__14369,segv_14416,gline_14417,lc_14418,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__14419 = seq__14366;
var G__14420 = chunk__14367;
var G__14421 = count__14368;
var G__14422 = (i__14369 + (1));
seq__14366 = G__14419;
chunk__14367 = G__14420;
count__14368 = G__14421;
i__14369 = G__14422;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__14366);
if(temp__4425__auto__){
var seq__14366__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14366__$1)){
var c__12701__auto__ = cljs.core.chunk_first.call(null,seq__14366__$1);
var G__14423 = cljs.core.chunk_rest.call(null,seq__14366__$1);
var G__14424 = c__12701__auto__;
var G__14425 = cljs.core.count.call(null,c__12701__auto__);
var G__14426 = (0);
seq__14366 = G__14423;
chunk__14367 = G__14424;
count__14368 = G__14425;
i__14369 = G__14426;
continue;
} else {
var info = cljs.core.first.call(null,seq__14366__$1);
var segv_14427 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_14428 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_14429 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_14428 > (lc_14429 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__14366,chunk__14367,count__14368,i__14369,segv_14427,gline_14428,lc_14429,info,seq__14366__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_14428 - (lc_14429 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_14427], null));
});})(seq__14366,chunk__14367,count__14368,i__14369,segv_14427,gline_14428,lc_14429,info,seq__14366__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__14366,chunk__14367,count__14368,i__14369,segv_14427,gline_14428,lc_14429,info,seq__14366__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_14428], null),cljs.core.conj,segv_14427);
});})(seq__14366,chunk__14367,count__14368,i__14369,segv_14427,gline_14428,lc_14429,info,seq__14366__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__14430 = cljs.core.next.call(null,seq__14366__$1);
var G__14431 = null;
var G__14432 = (0);
var G__14433 = (0);
seq__14366 = G__14430;
chunk__14367 = G__14431;
count__14368 = G__14432;
i__14369 = G__14433;
continue;
}
} else {
return null;
}
}
break;
}
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
;
var seq__14370_14434 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__14371_14435 = null;
var count__14372_14436 = (0);
var i__14373_14437 = (0);
while(true){
if((i__14373_14437 < count__14372_14436)){
var vec__14374_14438 = cljs.core._nth.call(null,chunk__14371_14435,i__14373_14437);
var source_idx_14439 = cljs.core.nth.call(null,vec__14374_14438,(0),null);
var vec__14375_14440 = cljs.core.nth.call(null,vec__14374_14438,(1),null);
var __14441 = cljs.core.nth.call(null,vec__14375_14440,(0),null);
var lines_14442__$1 = cljs.core.nth.call(null,vec__14375_14440,(1),null);
var seq__14376_14443 = cljs.core.seq.call(null,lines_14442__$1);
var chunk__14377_14444 = null;
var count__14378_14445 = (0);
var i__14379_14446 = (0);
while(true){
if((i__14379_14446 < count__14378_14445)){
var vec__14380_14447 = cljs.core._nth.call(null,chunk__14377_14444,i__14379_14446);
var line_14448 = cljs.core.nth.call(null,vec__14380_14447,(0),null);
var cols_14449 = cljs.core.nth.call(null,vec__14380_14447,(1),null);
var seq__14381_14450 = cljs.core.seq.call(null,cols_14449);
var chunk__14382_14451 = null;
var count__14383_14452 = (0);
var i__14384_14453 = (0);
while(true){
if((i__14384_14453 < count__14383_14452)){
var vec__14385_14454 = cljs.core._nth.call(null,chunk__14382_14451,i__14384_14453);
var col_14455 = cljs.core.nth.call(null,vec__14385_14454,(0),null);
var infos_14456 = cljs.core.nth.call(null,vec__14385_14454,(1),null);
encode_cols.call(null,infos_14456,source_idx_14439,line_14448,col_14455);

var G__14457 = seq__14381_14450;
var G__14458 = chunk__14382_14451;
var G__14459 = count__14383_14452;
var G__14460 = (i__14384_14453 + (1));
seq__14381_14450 = G__14457;
chunk__14382_14451 = G__14458;
count__14383_14452 = G__14459;
i__14384_14453 = G__14460;
continue;
} else {
var temp__4425__auto___14461 = cljs.core.seq.call(null,seq__14381_14450);
if(temp__4425__auto___14461){
var seq__14381_14462__$1 = temp__4425__auto___14461;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14381_14462__$1)){
var c__12701__auto___14463 = cljs.core.chunk_first.call(null,seq__14381_14462__$1);
var G__14464 = cljs.core.chunk_rest.call(null,seq__14381_14462__$1);
var G__14465 = c__12701__auto___14463;
var G__14466 = cljs.core.count.call(null,c__12701__auto___14463);
var G__14467 = (0);
seq__14381_14450 = G__14464;
chunk__14382_14451 = G__14465;
count__14383_14452 = G__14466;
i__14384_14453 = G__14467;
continue;
} else {
var vec__14386_14468 = cljs.core.first.call(null,seq__14381_14462__$1);
var col_14469 = cljs.core.nth.call(null,vec__14386_14468,(0),null);
var infos_14470 = cljs.core.nth.call(null,vec__14386_14468,(1),null);
encode_cols.call(null,infos_14470,source_idx_14439,line_14448,col_14469);

var G__14471 = cljs.core.next.call(null,seq__14381_14462__$1);
var G__14472 = null;
var G__14473 = (0);
var G__14474 = (0);
seq__14381_14450 = G__14471;
chunk__14382_14451 = G__14472;
count__14383_14452 = G__14473;
i__14384_14453 = G__14474;
continue;
}
} else {
}
}
break;
}

var G__14475 = seq__14376_14443;
var G__14476 = chunk__14377_14444;
var G__14477 = count__14378_14445;
var G__14478 = (i__14379_14446 + (1));
seq__14376_14443 = G__14475;
chunk__14377_14444 = G__14476;
count__14378_14445 = G__14477;
i__14379_14446 = G__14478;
continue;
} else {
var temp__4425__auto___14479 = cljs.core.seq.call(null,seq__14376_14443);
if(temp__4425__auto___14479){
var seq__14376_14480__$1 = temp__4425__auto___14479;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14376_14480__$1)){
var c__12701__auto___14481 = cljs.core.chunk_first.call(null,seq__14376_14480__$1);
var G__14482 = cljs.core.chunk_rest.call(null,seq__14376_14480__$1);
var G__14483 = c__12701__auto___14481;
var G__14484 = cljs.core.count.call(null,c__12701__auto___14481);
var G__14485 = (0);
seq__14376_14443 = G__14482;
chunk__14377_14444 = G__14483;
count__14378_14445 = G__14484;
i__14379_14446 = G__14485;
continue;
} else {
var vec__14387_14486 = cljs.core.first.call(null,seq__14376_14480__$1);
var line_14487 = cljs.core.nth.call(null,vec__14387_14486,(0),null);
var cols_14488 = cljs.core.nth.call(null,vec__14387_14486,(1),null);
var seq__14388_14489 = cljs.core.seq.call(null,cols_14488);
var chunk__14389_14490 = null;
var count__14390_14491 = (0);
var i__14391_14492 = (0);
while(true){
if((i__14391_14492 < count__14390_14491)){
var vec__14392_14493 = cljs.core._nth.call(null,chunk__14389_14490,i__14391_14492);
var col_14494 = cljs.core.nth.call(null,vec__14392_14493,(0),null);
var infos_14495 = cljs.core.nth.call(null,vec__14392_14493,(1),null);
encode_cols.call(null,infos_14495,source_idx_14439,line_14487,col_14494);

var G__14496 = seq__14388_14489;
var G__14497 = chunk__14389_14490;
var G__14498 = count__14390_14491;
var G__14499 = (i__14391_14492 + (1));
seq__14388_14489 = G__14496;
chunk__14389_14490 = G__14497;
count__14390_14491 = G__14498;
i__14391_14492 = G__14499;
continue;
} else {
var temp__4425__auto___14500__$1 = cljs.core.seq.call(null,seq__14388_14489);
if(temp__4425__auto___14500__$1){
var seq__14388_14501__$1 = temp__4425__auto___14500__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14388_14501__$1)){
var c__12701__auto___14502 = cljs.core.chunk_first.call(null,seq__14388_14501__$1);
var G__14503 = cljs.core.chunk_rest.call(null,seq__14388_14501__$1);
var G__14504 = c__12701__auto___14502;
var G__14505 = cljs.core.count.call(null,c__12701__auto___14502);
var G__14506 = (0);
seq__14388_14489 = G__14503;
chunk__14389_14490 = G__14504;
count__14390_14491 = G__14505;
i__14391_14492 = G__14506;
continue;
} else {
var vec__14393_14507 = cljs.core.first.call(null,seq__14388_14501__$1);
var col_14508 = cljs.core.nth.call(null,vec__14393_14507,(0),null);
var infos_14509 = cljs.core.nth.call(null,vec__14393_14507,(1),null);
encode_cols.call(null,infos_14509,source_idx_14439,line_14487,col_14508);

var G__14510 = cljs.core.next.call(null,seq__14388_14501__$1);
var G__14511 = null;
var G__14512 = (0);
var G__14513 = (0);
seq__14388_14489 = G__14510;
chunk__14389_14490 = G__14511;
count__14390_14491 = G__14512;
i__14391_14492 = G__14513;
continue;
}
} else {
}
}
break;
}

var G__14514 = cljs.core.next.call(null,seq__14376_14480__$1);
var G__14515 = null;
var G__14516 = (0);
var G__14517 = (0);
seq__14376_14443 = G__14514;
chunk__14377_14444 = G__14515;
count__14378_14445 = G__14516;
i__14379_14446 = G__14517;
continue;
}
} else {
}
}
break;
}

var G__14518 = seq__14370_14434;
var G__14519 = chunk__14371_14435;
var G__14520 = count__14372_14436;
var G__14521 = (i__14373_14437 + (1));
seq__14370_14434 = G__14518;
chunk__14371_14435 = G__14519;
count__14372_14436 = G__14520;
i__14373_14437 = G__14521;
continue;
} else {
var temp__4425__auto___14522 = cljs.core.seq.call(null,seq__14370_14434);
if(temp__4425__auto___14522){
var seq__14370_14523__$1 = temp__4425__auto___14522;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14370_14523__$1)){
var c__12701__auto___14524 = cljs.core.chunk_first.call(null,seq__14370_14523__$1);
var G__14525 = cljs.core.chunk_rest.call(null,seq__14370_14523__$1);
var G__14526 = c__12701__auto___14524;
var G__14527 = cljs.core.count.call(null,c__12701__auto___14524);
var G__14528 = (0);
seq__14370_14434 = G__14525;
chunk__14371_14435 = G__14526;
count__14372_14436 = G__14527;
i__14373_14437 = G__14528;
continue;
} else {
var vec__14394_14529 = cljs.core.first.call(null,seq__14370_14523__$1);
var source_idx_14530 = cljs.core.nth.call(null,vec__14394_14529,(0),null);
var vec__14395_14531 = cljs.core.nth.call(null,vec__14394_14529,(1),null);
var __14532 = cljs.core.nth.call(null,vec__14395_14531,(0),null);
var lines_14533__$1 = cljs.core.nth.call(null,vec__14395_14531,(1),null);
var seq__14396_14534 = cljs.core.seq.call(null,lines_14533__$1);
var chunk__14397_14535 = null;
var count__14398_14536 = (0);
var i__14399_14537 = (0);
while(true){
if((i__14399_14537 < count__14398_14536)){
var vec__14400_14538 = cljs.core._nth.call(null,chunk__14397_14535,i__14399_14537);
var line_14539 = cljs.core.nth.call(null,vec__14400_14538,(0),null);
var cols_14540 = cljs.core.nth.call(null,vec__14400_14538,(1),null);
var seq__14401_14541 = cljs.core.seq.call(null,cols_14540);
var chunk__14402_14542 = null;
var count__14403_14543 = (0);
var i__14404_14544 = (0);
while(true){
if((i__14404_14544 < count__14403_14543)){
var vec__14405_14545 = cljs.core._nth.call(null,chunk__14402_14542,i__14404_14544);
var col_14546 = cljs.core.nth.call(null,vec__14405_14545,(0),null);
var infos_14547 = cljs.core.nth.call(null,vec__14405_14545,(1),null);
encode_cols.call(null,infos_14547,source_idx_14530,line_14539,col_14546);

var G__14548 = seq__14401_14541;
var G__14549 = chunk__14402_14542;
var G__14550 = count__14403_14543;
var G__14551 = (i__14404_14544 + (1));
seq__14401_14541 = G__14548;
chunk__14402_14542 = G__14549;
count__14403_14543 = G__14550;
i__14404_14544 = G__14551;
continue;
} else {
var temp__4425__auto___14552__$1 = cljs.core.seq.call(null,seq__14401_14541);
if(temp__4425__auto___14552__$1){
var seq__14401_14553__$1 = temp__4425__auto___14552__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14401_14553__$1)){
var c__12701__auto___14554 = cljs.core.chunk_first.call(null,seq__14401_14553__$1);
var G__14555 = cljs.core.chunk_rest.call(null,seq__14401_14553__$1);
var G__14556 = c__12701__auto___14554;
var G__14557 = cljs.core.count.call(null,c__12701__auto___14554);
var G__14558 = (0);
seq__14401_14541 = G__14555;
chunk__14402_14542 = G__14556;
count__14403_14543 = G__14557;
i__14404_14544 = G__14558;
continue;
} else {
var vec__14406_14559 = cljs.core.first.call(null,seq__14401_14553__$1);
var col_14560 = cljs.core.nth.call(null,vec__14406_14559,(0),null);
var infos_14561 = cljs.core.nth.call(null,vec__14406_14559,(1),null);
encode_cols.call(null,infos_14561,source_idx_14530,line_14539,col_14560);

var G__14562 = cljs.core.next.call(null,seq__14401_14553__$1);
var G__14563 = null;
var G__14564 = (0);
var G__14565 = (0);
seq__14401_14541 = G__14562;
chunk__14402_14542 = G__14563;
count__14403_14543 = G__14564;
i__14404_14544 = G__14565;
continue;
}
} else {
}
}
break;
}

var G__14566 = seq__14396_14534;
var G__14567 = chunk__14397_14535;
var G__14568 = count__14398_14536;
var G__14569 = (i__14399_14537 + (1));
seq__14396_14534 = G__14566;
chunk__14397_14535 = G__14567;
count__14398_14536 = G__14568;
i__14399_14537 = G__14569;
continue;
} else {
var temp__4425__auto___14570__$1 = cljs.core.seq.call(null,seq__14396_14534);
if(temp__4425__auto___14570__$1){
var seq__14396_14571__$1 = temp__4425__auto___14570__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14396_14571__$1)){
var c__12701__auto___14572 = cljs.core.chunk_first.call(null,seq__14396_14571__$1);
var G__14573 = cljs.core.chunk_rest.call(null,seq__14396_14571__$1);
var G__14574 = c__12701__auto___14572;
var G__14575 = cljs.core.count.call(null,c__12701__auto___14572);
var G__14576 = (0);
seq__14396_14534 = G__14573;
chunk__14397_14535 = G__14574;
count__14398_14536 = G__14575;
i__14399_14537 = G__14576;
continue;
} else {
var vec__14407_14577 = cljs.core.first.call(null,seq__14396_14571__$1);
var line_14578 = cljs.core.nth.call(null,vec__14407_14577,(0),null);
var cols_14579 = cljs.core.nth.call(null,vec__14407_14577,(1),null);
var seq__14408_14580 = cljs.core.seq.call(null,cols_14579);
var chunk__14409_14581 = null;
var count__14410_14582 = (0);
var i__14411_14583 = (0);
while(true){
if((i__14411_14583 < count__14410_14582)){
var vec__14412_14584 = cljs.core._nth.call(null,chunk__14409_14581,i__14411_14583);
var col_14585 = cljs.core.nth.call(null,vec__14412_14584,(0),null);
var infos_14586 = cljs.core.nth.call(null,vec__14412_14584,(1),null);
encode_cols.call(null,infos_14586,source_idx_14530,line_14578,col_14585);

var G__14587 = seq__14408_14580;
var G__14588 = chunk__14409_14581;
var G__14589 = count__14410_14582;
var G__14590 = (i__14411_14583 + (1));
seq__14408_14580 = G__14587;
chunk__14409_14581 = G__14588;
count__14410_14582 = G__14589;
i__14411_14583 = G__14590;
continue;
} else {
var temp__4425__auto___14591__$2 = cljs.core.seq.call(null,seq__14408_14580);
if(temp__4425__auto___14591__$2){
var seq__14408_14592__$1 = temp__4425__auto___14591__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14408_14592__$1)){
var c__12701__auto___14593 = cljs.core.chunk_first.call(null,seq__14408_14592__$1);
var G__14594 = cljs.core.chunk_rest.call(null,seq__14408_14592__$1);
var G__14595 = c__12701__auto___14593;
var G__14596 = cljs.core.count.call(null,c__12701__auto___14593);
var G__14597 = (0);
seq__14408_14580 = G__14594;
chunk__14409_14581 = G__14595;
count__14410_14582 = G__14596;
i__14411_14583 = G__14597;
continue;
} else {
var vec__14413_14598 = cljs.core.first.call(null,seq__14408_14592__$1);
var col_14599 = cljs.core.nth.call(null,vec__14413_14598,(0),null);
var infos_14600 = cljs.core.nth.call(null,vec__14413_14598,(1),null);
encode_cols.call(null,infos_14600,source_idx_14530,line_14578,col_14599);

var G__14601 = cljs.core.next.call(null,seq__14408_14592__$1);
var G__14602 = null;
var G__14603 = (0);
var G__14604 = (0);
seq__14408_14580 = G__14601;
chunk__14409_14581 = G__14602;
count__14410_14582 = G__14603;
i__14411_14583 = G__14604;
continue;
}
} else {
}
}
break;
}

var G__14605 = cljs.core.next.call(null,seq__14396_14571__$1);
var G__14606 = null;
var G__14607 = (0);
var G__14608 = (0);
seq__14396_14534 = G__14605;
chunk__14397_14535 = G__14606;
count__14398_14536 = G__14607;
i__14399_14537 = G__14608;
continue;
}
} else {
}
}
break;
}

var G__14609 = cljs.core.next.call(null,seq__14370_14523__$1);
var G__14610 = null;
var G__14611 = (0);
var G__14612 = (0);
seq__14370_14434 = G__14609;
chunk__14371_14435 = G__14610;
count__14372_14436 = G__14611;
i__14373_14437 = G__14612;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__14414 = {"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__14313_SHARP_){
return [cljs.core.str(p1__14313_SHARP_),cljs.core.str("?rel="),cljs.core.str((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__14314_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__14314_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__14315_SHARP_){
return clojure.string.join.call(null,",",p1__14315_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))};
var G__14414__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))?(function (){var G__14415 = G__14414;
goog.object.set(G__14415,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__14415;
})():G__14414);
return G__14414__$1;
})();
return JSON.stringify(source_map_file_contents);
});
/**
 * Merge an internal source map representation of a single
 * ClojureScript file mapping original to generated with a
 * second source map mapping original JS to generated JS.
 * The is to support source maps that work through multiple
 * compilation steps like Google Closure optimization passes.
 */
cljs.source_map.merge_source_maps = (function cljs$source_map$merge_source_maps(cljs_map,js_map){
var line_map_seq = cljs.core.seq.call(null,cljs_map);
var new_lines = cljs.core.sorted_map.call(null);
while(true){
if(line_map_seq){
var vec__14618 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__14618,(0),null);
var col_map = cljs.core.nth.call(null,vec__14618,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__14619 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__14619,(0),null);
var infos = cljs.core.nth.call(null,vec__14619,(1),null);
var G__14623 = cljs.core.next.call(null,col_map_seq);
var G__14624 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__14619,col,infos,vec__14618,line,col_map){
return (function (v,p__14620){
var map__14621 = p__14620;
var map__14621__$1 = ((((!((map__14621 == null)))?((((map__14621.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14621.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14621):map__14621);
var gline = cljs.core.get.call(null,map__14621__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__14621__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__14619,col,infos,vec__14618,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__14623;
new_cols = G__14624;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__14625 = cljs.core.next.call(null,line_map_seq);
var G__14626 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__14625;
new_lines = G__14626;
continue;
} else {
return new_lines;
}
break;
}
});
/**
 * Given a ClojureScript to JavaScript source map, invert it. Useful when
 * mapping JavaScript stack traces when environment support is unavailable.
 */
cljs.source_map.invert_reverse_map = (function cljs$source_map$invert_reverse_map(reverse_map){
var inverted = cljs.core.atom.call(null,cljs.core.sorted_map.call(null));
var seq__14677_14727 = cljs.core.seq.call(null,reverse_map);
var chunk__14678_14728 = null;
var count__14679_14729 = (0);
var i__14680_14730 = (0);
while(true){
if((i__14680_14730 < count__14679_14729)){
var vec__14681_14731 = cljs.core._nth.call(null,chunk__14678_14728,i__14680_14730);
var line_14732 = cljs.core.nth.call(null,vec__14681_14731,(0),null);
var columns_14733 = cljs.core.nth.call(null,vec__14681_14731,(1),null);
var seq__14682_14734 = cljs.core.seq.call(null,columns_14733);
var chunk__14683_14735 = null;
var count__14684_14736 = (0);
var i__14685_14737 = (0);
while(true){
if((i__14685_14737 < count__14684_14736)){
var vec__14686_14738 = cljs.core._nth.call(null,chunk__14683_14735,i__14685_14737);
var column_14739 = cljs.core.nth.call(null,vec__14686_14738,(0),null);
var column_info_14740 = cljs.core.nth.call(null,vec__14686_14738,(1),null);
var seq__14687_14741 = cljs.core.seq.call(null,column_info_14740);
var chunk__14688_14742 = null;
var count__14689_14743 = (0);
var i__14690_14744 = (0);
while(true){
if((i__14690_14744 < count__14689_14743)){
var map__14691_14745 = cljs.core._nth.call(null,chunk__14688_14742,i__14690_14744);
var map__14691_14746__$1 = ((((!((map__14691_14745 == null)))?((((map__14691_14745.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14691_14745.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14691_14745):map__14691_14745);
var gline_14747 = cljs.core.get.call(null,map__14691_14746__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_14748 = cljs.core.get.call(null,map__14691_14746__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_14749 = cljs.core.get.call(null,map__14691_14746__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_14747], null),cljs.core.fnil.call(null,((function (seq__14687_14741,chunk__14688_14742,count__14689_14743,i__14690_14744,seq__14682_14734,chunk__14683_14735,count__14684_14736,i__14685_14737,seq__14677_14727,chunk__14678_14728,count__14679_14729,i__14680_14730,map__14691_14745,map__14691_14746__$1,gline_14747,gcol_14748,name_14749,vec__14686_14738,column_14739,column_info_14740,vec__14681_14731,line_14732,columns_14733,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_14739], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_14732,new cljs.core.Keyword(null,"col","col",-1959363084),column_14739,new cljs.core.Keyword(null,"name","name",1843675177),name_14749], null));
});})(seq__14687_14741,chunk__14688_14742,count__14689_14743,i__14690_14744,seq__14682_14734,chunk__14683_14735,count__14684_14736,i__14685_14737,seq__14677_14727,chunk__14678_14728,count__14679_14729,i__14680_14730,map__14691_14745,map__14691_14746__$1,gline_14747,gcol_14748,name_14749,vec__14686_14738,column_14739,column_info_14740,vec__14681_14731,line_14732,columns_14733,inverted))
,cljs.core.sorted_map.call(null)));

var G__14750 = seq__14687_14741;
var G__14751 = chunk__14688_14742;
var G__14752 = count__14689_14743;
var G__14753 = (i__14690_14744 + (1));
seq__14687_14741 = G__14750;
chunk__14688_14742 = G__14751;
count__14689_14743 = G__14752;
i__14690_14744 = G__14753;
continue;
} else {
var temp__4425__auto___14754 = cljs.core.seq.call(null,seq__14687_14741);
if(temp__4425__auto___14754){
var seq__14687_14755__$1 = temp__4425__auto___14754;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14687_14755__$1)){
var c__12701__auto___14756 = cljs.core.chunk_first.call(null,seq__14687_14755__$1);
var G__14757 = cljs.core.chunk_rest.call(null,seq__14687_14755__$1);
var G__14758 = c__12701__auto___14756;
var G__14759 = cljs.core.count.call(null,c__12701__auto___14756);
var G__14760 = (0);
seq__14687_14741 = G__14757;
chunk__14688_14742 = G__14758;
count__14689_14743 = G__14759;
i__14690_14744 = G__14760;
continue;
} else {
var map__14693_14761 = cljs.core.first.call(null,seq__14687_14755__$1);
var map__14693_14762__$1 = ((((!((map__14693_14761 == null)))?((((map__14693_14761.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14693_14761.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14693_14761):map__14693_14761);
var gline_14763 = cljs.core.get.call(null,map__14693_14762__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_14764 = cljs.core.get.call(null,map__14693_14762__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_14765 = cljs.core.get.call(null,map__14693_14762__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_14763], null),cljs.core.fnil.call(null,((function (seq__14687_14741,chunk__14688_14742,count__14689_14743,i__14690_14744,seq__14682_14734,chunk__14683_14735,count__14684_14736,i__14685_14737,seq__14677_14727,chunk__14678_14728,count__14679_14729,i__14680_14730,map__14693_14761,map__14693_14762__$1,gline_14763,gcol_14764,name_14765,seq__14687_14755__$1,temp__4425__auto___14754,vec__14686_14738,column_14739,column_info_14740,vec__14681_14731,line_14732,columns_14733,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_14739], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_14732,new cljs.core.Keyword(null,"col","col",-1959363084),column_14739,new cljs.core.Keyword(null,"name","name",1843675177),name_14765], null));
});})(seq__14687_14741,chunk__14688_14742,count__14689_14743,i__14690_14744,seq__14682_14734,chunk__14683_14735,count__14684_14736,i__14685_14737,seq__14677_14727,chunk__14678_14728,count__14679_14729,i__14680_14730,map__14693_14761,map__14693_14762__$1,gline_14763,gcol_14764,name_14765,seq__14687_14755__$1,temp__4425__auto___14754,vec__14686_14738,column_14739,column_info_14740,vec__14681_14731,line_14732,columns_14733,inverted))
,cljs.core.sorted_map.call(null)));

var G__14766 = cljs.core.next.call(null,seq__14687_14755__$1);
var G__14767 = null;
var G__14768 = (0);
var G__14769 = (0);
seq__14687_14741 = G__14766;
chunk__14688_14742 = G__14767;
count__14689_14743 = G__14768;
i__14690_14744 = G__14769;
continue;
}
} else {
}
}
break;
}

var G__14770 = seq__14682_14734;
var G__14771 = chunk__14683_14735;
var G__14772 = count__14684_14736;
var G__14773 = (i__14685_14737 + (1));
seq__14682_14734 = G__14770;
chunk__14683_14735 = G__14771;
count__14684_14736 = G__14772;
i__14685_14737 = G__14773;
continue;
} else {
var temp__4425__auto___14774 = cljs.core.seq.call(null,seq__14682_14734);
if(temp__4425__auto___14774){
var seq__14682_14775__$1 = temp__4425__auto___14774;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14682_14775__$1)){
var c__12701__auto___14776 = cljs.core.chunk_first.call(null,seq__14682_14775__$1);
var G__14777 = cljs.core.chunk_rest.call(null,seq__14682_14775__$1);
var G__14778 = c__12701__auto___14776;
var G__14779 = cljs.core.count.call(null,c__12701__auto___14776);
var G__14780 = (0);
seq__14682_14734 = G__14777;
chunk__14683_14735 = G__14778;
count__14684_14736 = G__14779;
i__14685_14737 = G__14780;
continue;
} else {
var vec__14695_14781 = cljs.core.first.call(null,seq__14682_14775__$1);
var column_14782 = cljs.core.nth.call(null,vec__14695_14781,(0),null);
var column_info_14783 = cljs.core.nth.call(null,vec__14695_14781,(1),null);
var seq__14696_14784 = cljs.core.seq.call(null,column_info_14783);
var chunk__14697_14785 = null;
var count__14698_14786 = (0);
var i__14699_14787 = (0);
while(true){
if((i__14699_14787 < count__14698_14786)){
var map__14700_14788 = cljs.core._nth.call(null,chunk__14697_14785,i__14699_14787);
var map__14700_14789__$1 = ((((!((map__14700_14788 == null)))?((((map__14700_14788.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14700_14788.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14700_14788):map__14700_14788);
var gline_14790 = cljs.core.get.call(null,map__14700_14789__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_14791 = cljs.core.get.call(null,map__14700_14789__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_14792 = cljs.core.get.call(null,map__14700_14789__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_14790], null),cljs.core.fnil.call(null,((function (seq__14696_14784,chunk__14697_14785,count__14698_14786,i__14699_14787,seq__14682_14734,chunk__14683_14735,count__14684_14736,i__14685_14737,seq__14677_14727,chunk__14678_14728,count__14679_14729,i__14680_14730,map__14700_14788,map__14700_14789__$1,gline_14790,gcol_14791,name_14792,vec__14695_14781,column_14782,column_info_14783,seq__14682_14775__$1,temp__4425__auto___14774,vec__14681_14731,line_14732,columns_14733,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_14782], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_14732,new cljs.core.Keyword(null,"col","col",-1959363084),column_14782,new cljs.core.Keyword(null,"name","name",1843675177),name_14792], null));
});})(seq__14696_14784,chunk__14697_14785,count__14698_14786,i__14699_14787,seq__14682_14734,chunk__14683_14735,count__14684_14736,i__14685_14737,seq__14677_14727,chunk__14678_14728,count__14679_14729,i__14680_14730,map__14700_14788,map__14700_14789__$1,gline_14790,gcol_14791,name_14792,vec__14695_14781,column_14782,column_info_14783,seq__14682_14775__$1,temp__4425__auto___14774,vec__14681_14731,line_14732,columns_14733,inverted))
,cljs.core.sorted_map.call(null)));

var G__14793 = seq__14696_14784;
var G__14794 = chunk__14697_14785;
var G__14795 = count__14698_14786;
var G__14796 = (i__14699_14787 + (1));
seq__14696_14784 = G__14793;
chunk__14697_14785 = G__14794;
count__14698_14786 = G__14795;
i__14699_14787 = G__14796;
continue;
} else {
var temp__4425__auto___14797__$1 = cljs.core.seq.call(null,seq__14696_14784);
if(temp__4425__auto___14797__$1){
var seq__14696_14798__$1 = temp__4425__auto___14797__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14696_14798__$1)){
var c__12701__auto___14799 = cljs.core.chunk_first.call(null,seq__14696_14798__$1);
var G__14800 = cljs.core.chunk_rest.call(null,seq__14696_14798__$1);
var G__14801 = c__12701__auto___14799;
var G__14802 = cljs.core.count.call(null,c__12701__auto___14799);
var G__14803 = (0);
seq__14696_14784 = G__14800;
chunk__14697_14785 = G__14801;
count__14698_14786 = G__14802;
i__14699_14787 = G__14803;
continue;
} else {
var map__14702_14804 = cljs.core.first.call(null,seq__14696_14798__$1);
var map__14702_14805__$1 = ((((!((map__14702_14804 == null)))?((((map__14702_14804.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14702_14804.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14702_14804):map__14702_14804);
var gline_14806 = cljs.core.get.call(null,map__14702_14805__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_14807 = cljs.core.get.call(null,map__14702_14805__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_14808 = cljs.core.get.call(null,map__14702_14805__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_14806], null),cljs.core.fnil.call(null,((function (seq__14696_14784,chunk__14697_14785,count__14698_14786,i__14699_14787,seq__14682_14734,chunk__14683_14735,count__14684_14736,i__14685_14737,seq__14677_14727,chunk__14678_14728,count__14679_14729,i__14680_14730,map__14702_14804,map__14702_14805__$1,gline_14806,gcol_14807,name_14808,seq__14696_14798__$1,temp__4425__auto___14797__$1,vec__14695_14781,column_14782,column_info_14783,seq__14682_14775__$1,temp__4425__auto___14774,vec__14681_14731,line_14732,columns_14733,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_14782], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_14732,new cljs.core.Keyword(null,"col","col",-1959363084),column_14782,new cljs.core.Keyword(null,"name","name",1843675177),name_14808], null));
});})(seq__14696_14784,chunk__14697_14785,count__14698_14786,i__14699_14787,seq__14682_14734,chunk__14683_14735,count__14684_14736,i__14685_14737,seq__14677_14727,chunk__14678_14728,count__14679_14729,i__14680_14730,map__14702_14804,map__14702_14805__$1,gline_14806,gcol_14807,name_14808,seq__14696_14798__$1,temp__4425__auto___14797__$1,vec__14695_14781,column_14782,column_info_14783,seq__14682_14775__$1,temp__4425__auto___14774,vec__14681_14731,line_14732,columns_14733,inverted))
,cljs.core.sorted_map.call(null)));

var G__14809 = cljs.core.next.call(null,seq__14696_14798__$1);
var G__14810 = null;
var G__14811 = (0);
var G__14812 = (0);
seq__14696_14784 = G__14809;
chunk__14697_14785 = G__14810;
count__14698_14786 = G__14811;
i__14699_14787 = G__14812;
continue;
}
} else {
}
}
break;
}

var G__14813 = cljs.core.next.call(null,seq__14682_14775__$1);
var G__14814 = null;
var G__14815 = (0);
var G__14816 = (0);
seq__14682_14734 = G__14813;
chunk__14683_14735 = G__14814;
count__14684_14736 = G__14815;
i__14685_14737 = G__14816;
continue;
}
} else {
}
}
break;
}

var G__14817 = seq__14677_14727;
var G__14818 = chunk__14678_14728;
var G__14819 = count__14679_14729;
var G__14820 = (i__14680_14730 + (1));
seq__14677_14727 = G__14817;
chunk__14678_14728 = G__14818;
count__14679_14729 = G__14819;
i__14680_14730 = G__14820;
continue;
} else {
var temp__4425__auto___14821 = cljs.core.seq.call(null,seq__14677_14727);
if(temp__4425__auto___14821){
var seq__14677_14822__$1 = temp__4425__auto___14821;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14677_14822__$1)){
var c__12701__auto___14823 = cljs.core.chunk_first.call(null,seq__14677_14822__$1);
var G__14824 = cljs.core.chunk_rest.call(null,seq__14677_14822__$1);
var G__14825 = c__12701__auto___14823;
var G__14826 = cljs.core.count.call(null,c__12701__auto___14823);
var G__14827 = (0);
seq__14677_14727 = G__14824;
chunk__14678_14728 = G__14825;
count__14679_14729 = G__14826;
i__14680_14730 = G__14827;
continue;
} else {
var vec__14704_14828 = cljs.core.first.call(null,seq__14677_14822__$1);
var line_14829 = cljs.core.nth.call(null,vec__14704_14828,(0),null);
var columns_14830 = cljs.core.nth.call(null,vec__14704_14828,(1),null);
var seq__14705_14831 = cljs.core.seq.call(null,columns_14830);
var chunk__14706_14832 = null;
var count__14707_14833 = (0);
var i__14708_14834 = (0);
while(true){
if((i__14708_14834 < count__14707_14833)){
var vec__14709_14835 = cljs.core._nth.call(null,chunk__14706_14832,i__14708_14834);
var column_14836 = cljs.core.nth.call(null,vec__14709_14835,(0),null);
var column_info_14837 = cljs.core.nth.call(null,vec__14709_14835,(1),null);
var seq__14710_14838 = cljs.core.seq.call(null,column_info_14837);
var chunk__14711_14839 = null;
var count__14712_14840 = (0);
var i__14713_14841 = (0);
while(true){
if((i__14713_14841 < count__14712_14840)){
var map__14714_14842 = cljs.core._nth.call(null,chunk__14711_14839,i__14713_14841);
var map__14714_14843__$1 = ((((!((map__14714_14842 == null)))?((((map__14714_14842.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14714_14842.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14714_14842):map__14714_14842);
var gline_14844 = cljs.core.get.call(null,map__14714_14843__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_14845 = cljs.core.get.call(null,map__14714_14843__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_14846 = cljs.core.get.call(null,map__14714_14843__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_14844], null),cljs.core.fnil.call(null,((function (seq__14710_14838,chunk__14711_14839,count__14712_14840,i__14713_14841,seq__14705_14831,chunk__14706_14832,count__14707_14833,i__14708_14834,seq__14677_14727,chunk__14678_14728,count__14679_14729,i__14680_14730,map__14714_14842,map__14714_14843__$1,gline_14844,gcol_14845,name_14846,vec__14709_14835,column_14836,column_info_14837,vec__14704_14828,line_14829,columns_14830,seq__14677_14822__$1,temp__4425__auto___14821,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_14836], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_14829,new cljs.core.Keyword(null,"col","col",-1959363084),column_14836,new cljs.core.Keyword(null,"name","name",1843675177),name_14846], null));
});})(seq__14710_14838,chunk__14711_14839,count__14712_14840,i__14713_14841,seq__14705_14831,chunk__14706_14832,count__14707_14833,i__14708_14834,seq__14677_14727,chunk__14678_14728,count__14679_14729,i__14680_14730,map__14714_14842,map__14714_14843__$1,gline_14844,gcol_14845,name_14846,vec__14709_14835,column_14836,column_info_14837,vec__14704_14828,line_14829,columns_14830,seq__14677_14822__$1,temp__4425__auto___14821,inverted))
,cljs.core.sorted_map.call(null)));

var G__14847 = seq__14710_14838;
var G__14848 = chunk__14711_14839;
var G__14849 = count__14712_14840;
var G__14850 = (i__14713_14841 + (1));
seq__14710_14838 = G__14847;
chunk__14711_14839 = G__14848;
count__14712_14840 = G__14849;
i__14713_14841 = G__14850;
continue;
} else {
var temp__4425__auto___14851__$1 = cljs.core.seq.call(null,seq__14710_14838);
if(temp__4425__auto___14851__$1){
var seq__14710_14852__$1 = temp__4425__auto___14851__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14710_14852__$1)){
var c__12701__auto___14853 = cljs.core.chunk_first.call(null,seq__14710_14852__$1);
var G__14854 = cljs.core.chunk_rest.call(null,seq__14710_14852__$1);
var G__14855 = c__12701__auto___14853;
var G__14856 = cljs.core.count.call(null,c__12701__auto___14853);
var G__14857 = (0);
seq__14710_14838 = G__14854;
chunk__14711_14839 = G__14855;
count__14712_14840 = G__14856;
i__14713_14841 = G__14857;
continue;
} else {
var map__14716_14858 = cljs.core.first.call(null,seq__14710_14852__$1);
var map__14716_14859__$1 = ((((!((map__14716_14858 == null)))?((((map__14716_14858.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14716_14858.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14716_14858):map__14716_14858);
var gline_14860 = cljs.core.get.call(null,map__14716_14859__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_14861 = cljs.core.get.call(null,map__14716_14859__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_14862 = cljs.core.get.call(null,map__14716_14859__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_14860], null),cljs.core.fnil.call(null,((function (seq__14710_14838,chunk__14711_14839,count__14712_14840,i__14713_14841,seq__14705_14831,chunk__14706_14832,count__14707_14833,i__14708_14834,seq__14677_14727,chunk__14678_14728,count__14679_14729,i__14680_14730,map__14716_14858,map__14716_14859__$1,gline_14860,gcol_14861,name_14862,seq__14710_14852__$1,temp__4425__auto___14851__$1,vec__14709_14835,column_14836,column_info_14837,vec__14704_14828,line_14829,columns_14830,seq__14677_14822__$1,temp__4425__auto___14821,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_14836], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_14829,new cljs.core.Keyword(null,"col","col",-1959363084),column_14836,new cljs.core.Keyword(null,"name","name",1843675177),name_14862], null));
});})(seq__14710_14838,chunk__14711_14839,count__14712_14840,i__14713_14841,seq__14705_14831,chunk__14706_14832,count__14707_14833,i__14708_14834,seq__14677_14727,chunk__14678_14728,count__14679_14729,i__14680_14730,map__14716_14858,map__14716_14859__$1,gline_14860,gcol_14861,name_14862,seq__14710_14852__$1,temp__4425__auto___14851__$1,vec__14709_14835,column_14836,column_info_14837,vec__14704_14828,line_14829,columns_14830,seq__14677_14822__$1,temp__4425__auto___14821,inverted))
,cljs.core.sorted_map.call(null)));

var G__14863 = cljs.core.next.call(null,seq__14710_14852__$1);
var G__14864 = null;
var G__14865 = (0);
var G__14866 = (0);
seq__14710_14838 = G__14863;
chunk__14711_14839 = G__14864;
count__14712_14840 = G__14865;
i__14713_14841 = G__14866;
continue;
}
} else {
}
}
break;
}

var G__14867 = seq__14705_14831;
var G__14868 = chunk__14706_14832;
var G__14869 = count__14707_14833;
var G__14870 = (i__14708_14834 + (1));
seq__14705_14831 = G__14867;
chunk__14706_14832 = G__14868;
count__14707_14833 = G__14869;
i__14708_14834 = G__14870;
continue;
} else {
var temp__4425__auto___14871__$1 = cljs.core.seq.call(null,seq__14705_14831);
if(temp__4425__auto___14871__$1){
var seq__14705_14872__$1 = temp__4425__auto___14871__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14705_14872__$1)){
var c__12701__auto___14873 = cljs.core.chunk_first.call(null,seq__14705_14872__$1);
var G__14874 = cljs.core.chunk_rest.call(null,seq__14705_14872__$1);
var G__14875 = c__12701__auto___14873;
var G__14876 = cljs.core.count.call(null,c__12701__auto___14873);
var G__14877 = (0);
seq__14705_14831 = G__14874;
chunk__14706_14832 = G__14875;
count__14707_14833 = G__14876;
i__14708_14834 = G__14877;
continue;
} else {
var vec__14718_14878 = cljs.core.first.call(null,seq__14705_14872__$1);
var column_14879 = cljs.core.nth.call(null,vec__14718_14878,(0),null);
var column_info_14880 = cljs.core.nth.call(null,vec__14718_14878,(1),null);
var seq__14719_14881 = cljs.core.seq.call(null,column_info_14880);
var chunk__14720_14882 = null;
var count__14721_14883 = (0);
var i__14722_14884 = (0);
while(true){
if((i__14722_14884 < count__14721_14883)){
var map__14723_14885 = cljs.core._nth.call(null,chunk__14720_14882,i__14722_14884);
var map__14723_14886__$1 = ((((!((map__14723_14885 == null)))?((((map__14723_14885.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14723_14885.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14723_14885):map__14723_14885);
var gline_14887 = cljs.core.get.call(null,map__14723_14886__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_14888 = cljs.core.get.call(null,map__14723_14886__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_14889 = cljs.core.get.call(null,map__14723_14886__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_14887], null),cljs.core.fnil.call(null,((function (seq__14719_14881,chunk__14720_14882,count__14721_14883,i__14722_14884,seq__14705_14831,chunk__14706_14832,count__14707_14833,i__14708_14834,seq__14677_14727,chunk__14678_14728,count__14679_14729,i__14680_14730,map__14723_14885,map__14723_14886__$1,gline_14887,gcol_14888,name_14889,vec__14718_14878,column_14879,column_info_14880,seq__14705_14872__$1,temp__4425__auto___14871__$1,vec__14704_14828,line_14829,columns_14830,seq__14677_14822__$1,temp__4425__auto___14821,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_14879], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_14829,new cljs.core.Keyword(null,"col","col",-1959363084),column_14879,new cljs.core.Keyword(null,"name","name",1843675177),name_14889], null));
});})(seq__14719_14881,chunk__14720_14882,count__14721_14883,i__14722_14884,seq__14705_14831,chunk__14706_14832,count__14707_14833,i__14708_14834,seq__14677_14727,chunk__14678_14728,count__14679_14729,i__14680_14730,map__14723_14885,map__14723_14886__$1,gline_14887,gcol_14888,name_14889,vec__14718_14878,column_14879,column_info_14880,seq__14705_14872__$1,temp__4425__auto___14871__$1,vec__14704_14828,line_14829,columns_14830,seq__14677_14822__$1,temp__4425__auto___14821,inverted))
,cljs.core.sorted_map.call(null)));

var G__14890 = seq__14719_14881;
var G__14891 = chunk__14720_14882;
var G__14892 = count__14721_14883;
var G__14893 = (i__14722_14884 + (1));
seq__14719_14881 = G__14890;
chunk__14720_14882 = G__14891;
count__14721_14883 = G__14892;
i__14722_14884 = G__14893;
continue;
} else {
var temp__4425__auto___14894__$2 = cljs.core.seq.call(null,seq__14719_14881);
if(temp__4425__auto___14894__$2){
var seq__14719_14895__$1 = temp__4425__auto___14894__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14719_14895__$1)){
var c__12701__auto___14896 = cljs.core.chunk_first.call(null,seq__14719_14895__$1);
var G__14897 = cljs.core.chunk_rest.call(null,seq__14719_14895__$1);
var G__14898 = c__12701__auto___14896;
var G__14899 = cljs.core.count.call(null,c__12701__auto___14896);
var G__14900 = (0);
seq__14719_14881 = G__14897;
chunk__14720_14882 = G__14898;
count__14721_14883 = G__14899;
i__14722_14884 = G__14900;
continue;
} else {
var map__14725_14901 = cljs.core.first.call(null,seq__14719_14895__$1);
var map__14725_14902__$1 = ((((!((map__14725_14901 == null)))?((((map__14725_14901.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14725_14901.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14725_14901):map__14725_14901);
var gline_14903 = cljs.core.get.call(null,map__14725_14902__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_14904 = cljs.core.get.call(null,map__14725_14902__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_14905 = cljs.core.get.call(null,map__14725_14902__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_14903], null),cljs.core.fnil.call(null,((function (seq__14719_14881,chunk__14720_14882,count__14721_14883,i__14722_14884,seq__14705_14831,chunk__14706_14832,count__14707_14833,i__14708_14834,seq__14677_14727,chunk__14678_14728,count__14679_14729,i__14680_14730,map__14725_14901,map__14725_14902__$1,gline_14903,gcol_14904,name_14905,seq__14719_14895__$1,temp__4425__auto___14894__$2,vec__14718_14878,column_14879,column_info_14880,seq__14705_14872__$1,temp__4425__auto___14871__$1,vec__14704_14828,line_14829,columns_14830,seq__14677_14822__$1,temp__4425__auto___14821,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_14879], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_14829,new cljs.core.Keyword(null,"col","col",-1959363084),column_14879,new cljs.core.Keyword(null,"name","name",1843675177),name_14905], null));
});})(seq__14719_14881,chunk__14720_14882,count__14721_14883,i__14722_14884,seq__14705_14831,chunk__14706_14832,count__14707_14833,i__14708_14834,seq__14677_14727,chunk__14678_14728,count__14679_14729,i__14680_14730,map__14725_14901,map__14725_14902__$1,gline_14903,gcol_14904,name_14905,seq__14719_14895__$1,temp__4425__auto___14894__$2,vec__14718_14878,column_14879,column_info_14880,seq__14705_14872__$1,temp__4425__auto___14871__$1,vec__14704_14828,line_14829,columns_14830,seq__14677_14822__$1,temp__4425__auto___14821,inverted))
,cljs.core.sorted_map.call(null)));

var G__14906 = cljs.core.next.call(null,seq__14719_14895__$1);
var G__14907 = null;
var G__14908 = (0);
var G__14909 = (0);
seq__14719_14881 = G__14906;
chunk__14720_14882 = G__14907;
count__14721_14883 = G__14908;
i__14722_14884 = G__14909;
continue;
}
} else {
}
}
break;
}

var G__14910 = cljs.core.next.call(null,seq__14705_14872__$1);
var G__14911 = null;
var G__14912 = (0);
var G__14913 = (0);
seq__14705_14831 = G__14910;
chunk__14706_14832 = G__14911;
count__14707_14833 = G__14912;
i__14708_14834 = G__14913;
continue;
}
} else {
}
}
break;
}

var G__14914 = cljs.core.next.call(null,seq__14677_14822__$1);
var G__14915 = null;
var G__14916 = (0);
var G__14917 = (0);
seq__14677_14727 = G__14914;
chunk__14678_14728 = G__14915;
count__14679_14729 = G__14916;
i__14680_14730 = G__14917;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,inverted);
});

//# sourceMappingURL=source_map.js.map?rel=1451058353457