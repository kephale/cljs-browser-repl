// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.compiler');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('cljs.tools.reader');
goog.require('cljs.env');
goog.require('cljs.analyzer');
goog.require('cljs.source_map');
goog.require('goog.string.StringBuffer');
goog.require('clojure.string');
cljs.compiler.js_reserved = cljs.analyzer.js_reserved;
cljs.compiler._STAR_recompiled_STAR_ = null;
cljs.compiler._STAR_inputs_STAR_ = null;
cljs.compiler._STAR_source_map_data_STAR_ = null;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.compiler.cljs_reserved_file_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["deps.cljs",null], null), null);
cljs.compiler.ns_first_segments = (function cljs$compiler$ns_first_segments(){
var get_first_ns_segment = (function cljs$compiler$ns_first_segments_$_get_first_ns_segment(ns){
return cljs.core.first.call(null,clojure.string.split.call(null,[cljs.core.str(ns)].join(''),/\./));
});
return cljs.core.map.call(null,get_first_ns_segment,cljs.core.keys.call(null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))));
});
cljs.compiler.shadow_depth = (function cljs$compiler$shadow_depth(s){
var map__14944 = s;
var map__14944__$1 = ((((!((map__14944 == null)))?((((map__14944.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14944.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14944):map__14944);
var name = cljs.core.get.call(null,map__14944__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__14944__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__14947 = info;
var map__14948 = G__14947;
var map__14948__$1 = ((((!((map__14948 == null)))?((((map__14948.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14948.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14948):map__14948);
var shadow = cljs.core.get.call(null,map__14948__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__14947__$1 = G__14947;
while(true){
var d__$2 = d__$1;
var map__14950 = G__14947__$1;
var map__14950__$1 = ((((!((map__14950 == null)))?((((map__14950.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14950.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14950):map__14950);
var shadow__$1 = cljs.core.get.call(null,map__14950__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__14952 = (d__$2 + (1));
var G__14953 = shadow__$1;
d__$1 = G__14952;
G__14947__$1 = G__14953;
continue;
} else {
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([[cljs.core.str(name)].join('')], true),cljs.compiler.ns_first_segments.call(null)))){
return (d__$2 + (1));
} else {
return d__$2;

}
}
break;
}
});
cljs.compiler.hash_scope = (function cljs$compiler$hash_scope(s){
return cljs.core.hash_combine.call(null,cljs.core._hash.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s)),cljs.compiler.shadow_depth.call(null,s));
});
cljs.compiler.munge;
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__14954){
var map__14959 = p__14954;
var map__14959__$1 = ((((!((map__14959 == null)))?((((map__14959.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14959.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14959):map__14959);
var name_var = map__14959__$1;
var name = cljs.core.get.call(null,map__14959__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__14959__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,[cljs.core.str(name)].join(''),"..","_DOT__DOT_");
var map__14961 = info;
var map__14961__$1 = ((((!((map__14961 == null)))?((((map__14961.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14961.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14961):map__14961);
var ns = cljs.core.get.call(null,map__14961__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__14961__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"_$_",cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.call(null,cljs.compiler.munge.call(null,[cljs.core.str(clojure.string.replace.call(null,[cljs.core.str(ns)].join(''),".","$")),cljs.core.str("$"),cljs.core.str(scoped_name)].join('')));
});
cljs.compiler.munge_reserved = (function cljs$compiler$munge_reserved(reserved){
return (function (s){
if(!((cljs.core.get.call(null,reserved,s) == null))){
return [cljs.core.str(s),cljs.core.str("$")].join('');
} else {
return s;
}
});
});
cljs.compiler.munge = (function cljs$compiler$munge(var_args){
var args14963 = [];
var len__12956__auto___14966 = arguments.length;
var i__12957__auto___14967 = (0);
while(true){
if((i__12957__auto___14967 < len__12956__auto___14966)){
args14963.push((arguments[i__12957__auto___14967]));

var G__14968 = (i__12957__auto___14967 + (1));
i__12957__auto___14967 = G__14968;
continue;
} else {
}
break;
}

var G__14965 = args14963.length;
switch (G__14965) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14963.length)].join('')));

}
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.compiler.munge.call(null,s,cljs.compiler.js_reserved);
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2 = (function (s,reserved){
if(cljs.analyzer.cljs_map_QMARK_.call(null,s)){
var name_var = s;
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(name_var);
var field = new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(name_var);
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(name_var);
if(!((new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531).cljs$core$IFn$_invoke$arity$1(info) == null))){
return cljs.compiler.fn_self_name.call(null,s);
} else {
var depth = cljs.compiler.shadow_depth.call(null,s);
var code = cljs.compiler.hash_scope.call(null,s);
var renamed = cljs.core.get.call(null,cljs.compiler._STAR_lexical_renames_STAR_,code);
var name__$1 = ((field === true)?[cljs.core.str("self__."),cljs.core.str(name)].join(''):((!((renamed == null)))?renamed:name
));
var munged_name = cljs.compiler.munge.call(null,name__$1,reserved);
if((field === true) || ((depth === (0)))){
return munged_name;
} else {
return cljs.core.symbol.call(null,[cljs.core.str(munged_name),cljs.core.str("__$"),cljs.core.str(depth)].join(''));
}
}
} else {
var ss = clojure.string.replace.call(null,[cljs.core.str(s)].join(''),"..","_DOT__DOT_");
var ss__$1 = clojure.string.replace.call(null,ss,(new RegExp("\\/(.)")),".$1");
var rf = cljs.compiler.munge_reserved.call(null,reserved);
var ss__$2 = cljs.core.map.call(null,rf,clojure.string.split.call(null,ss__$1,/\./));
var ss__$3 = clojure.string.join.call(null,".",ss__$2);
var ms = cljs.core.munge.call(null,ss__$3);
if((s instanceof cljs.core.Symbol)){
return cljs.core.symbol.call(null,ms);
} else {
return ms;
}
}
});

cljs.compiler.munge.cljs$lang$maxFixedArity = 2;
cljs.compiler.comma_sep = (function cljs$compiler$comma_sep(xs){
return cljs.core.interpose.call(null,",",xs);
});
cljs.compiler.escape_char = (function cljs$compiler$escape_char(c){
var cp = goog.string.hashCode(c);
var G__14971 = cp;
switch (G__14971) {
case (34):
return "\\\"";

break;
case (92):
return "\\\\";

break;
case (8):
return "\\b";

break;
case (12):
return "\\f";

break;
case (10):
return "\\n";

break;
case (13):
return "\\r";

break;
case (9):
return "\\t";

break;
default:
if((((31) < cp)) && ((cp < (127)))){
return c;
} else {
return [cljs.core.str("\\u"),cljs.core.str(cp.toString((16)))].join('');
}

}
});
cljs.compiler.escape_string = (function cljs$compiler$escape_string(s){
var sb = (new goog.string.StringBuffer());
var seq__14977_14981 = cljs.core.seq.call(null,s);
var chunk__14978_14982 = null;
var count__14979_14983 = (0);
var i__14980_14984 = (0);
while(true){
if((i__14980_14984 < count__14979_14983)){
var c_14985 = cljs.core._nth.call(null,chunk__14978_14982,i__14980_14984);
sb.append(cljs.compiler.escape_char.call(null,c_14985));

var G__14986 = seq__14977_14981;
var G__14987 = chunk__14978_14982;
var G__14988 = count__14979_14983;
var G__14989 = (i__14980_14984 + (1));
seq__14977_14981 = G__14986;
chunk__14978_14982 = G__14987;
count__14979_14983 = G__14988;
i__14980_14984 = G__14989;
continue;
} else {
var temp__4425__auto___14990 = cljs.core.seq.call(null,seq__14977_14981);
if(temp__4425__auto___14990){
var seq__14977_14991__$1 = temp__4425__auto___14990;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14977_14991__$1)){
var c__12701__auto___14992 = cljs.core.chunk_first.call(null,seq__14977_14991__$1);
var G__14993 = cljs.core.chunk_rest.call(null,seq__14977_14991__$1);
var G__14994 = c__12701__auto___14992;
var G__14995 = cljs.core.count.call(null,c__12701__auto___14992);
var G__14996 = (0);
seq__14977_14981 = G__14993;
chunk__14978_14982 = G__14994;
count__14979_14983 = G__14995;
i__14980_14984 = G__14996;
continue;
} else {
var c_14997 = cljs.core.first.call(null,seq__14977_14991__$1);
sb.append(cljs.compiler.escape_char.call(null,c_14997));

var G__14998 = cljs.core.next.call(null,seq__14977_14991__$1);
var G__14999 = null;
var G__15000 = (0);
var G__15001 = (0);
seq__14977_14981 = G__14998;
chunk__14978_14982 = G__14999;
count__14979_14983 = G__15000;
i__14980_14984 = G__15001;
continue;
}
} else {
}
}
break;
}

return sb.toString();
});
cljs.compiler.wrap_in_double_quotes = (function cljs$compiler$wrap_in_double_quotes(x){
return [cljs.core.str("\""),cljs.core.str(x),cljs.core.str("\"")].join('');
});
if(typeof cljs.compiler.emit_STAR_ !== 'undefined'){
} else {
cljs.compiler.emit_STAR_ = (function (){var method_table__12811__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__12812__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__12813__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__12814__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__12815__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__12815__auto__,method_table__12811__auto__,prefer_table__12812__auto__,method_cache__12813__auto__,cached_hierarchy__12814__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
var val__13511__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__13511__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.call(null);
} else {
}

try{if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__15007_15012 = ast;
var map__15007_15013__$1 = ((((!((map__15007_15012 == null)))?((((map__15007_15012.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15007_15012.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15007_15012):map__15007_15012);
var env_15014 = cljs.core.get.call(null,map__15007_15013__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_15014))){
var map__15009_15015 = env_15014;
var map__15009_15016__$1 = ((((!((map__15009_15015 == null)))?((((map__15009_15015.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15009_15015.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15009_15015):map__15009_15015);
var line_15017 = cljs.core.get.call(null,map__15009_15016__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_15018 = cljs.core.get.call(null,map__15009_15016__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__15009_15015,map__15009_15016__$1,line_15017,column_15018,map__15007_15012,map__15007_15013__$1,env_15014,val__13511__auto__){
return (function (m){
var minfo = (function (){var G__15011 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
var G__15011__$1 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"var","var",-769682797)))?cljs.core.assoc.call(null,G__15011,new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast)))].join('')):G__15011);
return G__15011__$1;
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_15017 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__15009_15015,map__15009_15016__$1,line_15017,column_15018,map__15007_15012,map__15007_15013__$1,env_15014,val__13511__auto__){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_15018)?(column_15018 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__15009_15015,map__15009_15016__$1,line_15017,column_15018,map__15007_15012,map__15007_15013__$1,env_15014,val__13511__auto__){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__15009_15015,map__15009_15016__$1,line_15017,column_15018,map__15007_15012,map__15007_15013__$1,env_15014,val__13511__auto__))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__15009_15015,map__15009_15016__$1,line_15017,column_15018,map__15007_15012,map__15007_15013__$1,env_15014,val__13511__auto__))
,cljs.core.sorted_map.call(null)));
});})(map__15009_15015,map__15009_15016__$1,line_15017,column_15018,map__15007_15012,map__15007_15013__$1,env_15014,val__13511__auto__))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
}finally {if((val__13511__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var args__12963__auto__ = [];
var len__12956__auto___15025 = arguments.length;
var i__12957__auto___15026 = (0);
while(true){
if((i__12957__auto___15026 < len__12956__auto___15025)){
args__12963__auto__.push((arguments[i__12957__auto___15026]));

var G__15027 = (i__12957__auto___15026 + (1));
i__12957__auto___15026 = G__15027;
continue;
} else {
}
break;
}

var argseq__12964__auto__ = ((((0) < args__12963__auto__.length))?(new cljs.core.IndexedSeq(args__12963__auto__.slice((0)),(0))):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(argseq__12964__auto__);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var seq__15021_15028 = cljs.core.seq.call(null,xs);
var chunk__15022_15029 = null;
var count__15023_15030 = (0);
var i__15024_15031 = (0);
while(true){
if((i__15024_15031 < count__15023_15030)){
var x_15032 = cljs.core._nth.call(null,chunk__15022_15029,i__15024_15031);
if((x_15032 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_15032)){
cljs.compiler.emit.call(null,x_15032);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_15032)){
cljs.core.apply.call(null,cljs.compiler.emits,x_15032);
} else {
if(goog.isFunction(x_15032)){
x_15032.call(null);
} else {
var s_15033 = cljs.core.print_str.call(null,x_15032);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__15021_15028,chunk__15022_15029,count__15023_15030,i__15024_15031,s_15033,x_15032){
return (function (p1__15019_SHARP_){
return (p1__15019_SHARP_ + cljs.core.count.call(null,s_15033));
});})(seq__15021_15028,chunk__15022_15029,count__15023_15030,i__15024_15031,s_15033,x_15032))
);
}

cljs.core.print.call(null,s_15033);

}
}
}
}

var G__15034 = seq__15021_15028;
var G__15035 = chunk__15022_15029;
var G__15036 = count__15023_15030;
var G__15037 = (i__15024_15031 + (1));
seq__15021_15028 = G__15034;
chunk__15022_15029 = G__15035;
count__15023_15030 = G__15036;
i__15024_15031 = G__15037;
continue;
} else {
var temp__4425__auto___15038 = cljs.core.seq.call(null,seq__15021_15028);
if(temp__4425__auto___15038){
var seq__15021_15039__$1 = temp__4425__auto___15038;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15021_15039__$1)){
var c__12701__auto___15040 = cljs.core.chunk_first.call(null,seq__15021_15039__$1);
var G__15041 = cljs.core.chunk_rest.call(null,seq__15021_15039__$1);
var G__15042 = c__12701__auto___15040;
var G__15043 = cljs.core.count.call(null,c__12701__auto___15040);
var G__15044 = (0);
seq__15021_15028 = G__15041;
chunk__15022_15029 = G__15042;
count__15023_15030 = G__15043;
i__15024_15031 = G__15044;
continue;
} else {
var x_15045 = cljs.core.first.call(null,seq__15021_15039__$1);
if((x_15045 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_15045)){
cljs.compiler.emit.call(null,x_15045);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_15045)){
cljs.core.apply.call(null,cljs.compiler.emits,x_15045);
} else {
if(goog.isFunction(x_15045)){
x_15045.call(null);
} else {
var s_15046 = cljs.core.print_str.call(null,x_15045);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__15021_15028,chunk__15022_15029,count__15023_15030,i__15024_15031,s_15046,x_15045,seq__15021_15039__$1,temp__4425__auto___15038){
return (function (p1__15019_SHARP_){
return (p1__15019_SHARP_ + cljs.core.count.call(null,s_15046));
});})(seq__15021_15028,chunk__15022_15029,count__15023_15030,i__15024_15031,s_15046,x_15045,seq__15021_15039__$1,temp__4425__auto___15038))
);
}

cljs.core.print.call(null,s_15046);

}
}
}
}

var G__15047 = cljs.core.next.call(null,seq__15021_15039__$1);
var G__15048 = null;
var G__15049 = (0);
var G__15050 = (0);
seq__15021_15028 = G__15047;
chunk__15022_15029 = G__15048;
count__15023_15030 = G__15049;
i__15024_15031 = G__15050;
continue;
}
} else {
}
}
break;
}

return null;
});

cljs.compiler.emits.cljs$lang$maxFixedArity = (0);

cljs.compiler.emits.cljs$lang$applyTo = (function (seq15020){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15020));
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var args__12963__auto__ = [];
var len__12956__auto___15055 = arguments.length;
var i__12957__auto___15056 = (0);
while(true){
if((i__12957__auto___15056 < len__12956__auto___15055)){
args__12963__auto__.push((arguments[i__12957__auto___15056]));

var G__15057 = (i__12957__auto___15056 + (1));
i__12957__auto___15056 = G__15057;
continue;
} else {
}
break;
}

var argseq__12964__auto__ = ((((0) < args__12963__auto__.length))?(new cljs.core.IndexedSeq(args__12963__auto__.slice((0)),(0))):null);
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(argseq__12964__auto__);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
cljs.core.apply.call(null,cljs.compiler.emits,xs);

cljs.core.println.call(null);

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__15052){
var map__15053 = p__15052;
var map__15053__$1 = ((((!((map__15053 == null)))?((((map__15053.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15053.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15053):map__15053);
var m = map__15053__$1;
var gen_line = cljs.core.get.call(null,map__15053__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (0);

cljs.compiler.emitln.cljs$lang$applyTo = (function (seq15051){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15051));
});
cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__12872__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_15060_15062 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_15061_15063 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_15060_15062,_STAR_print_fn_STAR_15061_15063,sb__12872__auto__){
return (function (x__12873__auto__){
return sb__12872__auto__.append(x__12873__auto__);
});})(_STAR_print_newline_STAR_15060_15062,_STAR_print_fn_STAR_15061_15063,sb__12872__auto__))
;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_15061_15063;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_15060_15062;
}
return [cljs.core.str(sb__12872__auto__)].join('');
});
if(typeof cljs.compiler.emit_constant !== 'undefined'){
} else {
cljs.compiler.emit_constant = (function (){var method_table__12811__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__12812__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__12813__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__12814__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__12815__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit-constant"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__12815__auto__,method_table__12811__auto__,prefer_table__12812__auto__,method_cache__12813__auto__,cached_hierarchy__12814__auto__));
})();
}
cljs.core._add_method.call(null,cljs.compiler.emit_constant,null,(function (x){
return cljs.compiler.emits.call(null,"null");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Number,(function (x){
return cljs.compiler.emits.call(null,x);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,String,(function (x){
return cljs.compiler.emits.call(null,cljs.compiler.wrap_in_double_quotes.call(null,cljs.compiler.escape_string.call(null,x)));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Boolean,(function (x){
return cljs.compiler.emits.call(null,(cljs.core.truth_(x)?"true":"false"));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,RegExp,(function (x){
if(cljs.core._EQ_.call(null,"",[cljs.core.str(x)].join(''))){
return cljs.compiler.emits.call(null,"(new RegExp(\"\"))");
} else {
var vec__15064 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,[cljs.core.str(x)].join(''));
var _ = cljs.core.nth.call(null,vec__15064,(0),null);
var flags = cljs.core.nth.call(null,vec__15064,(1),null);
var pattern = cljs.core.nth.call(null,vec__15064,(2),null);
return cljs.compiler.emits.call(null,pattern);
}
}));
cljs.compiler.emits_keyword = (function cljs$compiler$emits_keyword(kw){
var ns = cljs.core.namespace.call(null,kw);
var name = cljs.core.name.call(null,kw);
cljs.compiler.emits.call(null,"new cljs.core.Keyword(");

cljs.compiler.emit_constant.call(null,ns);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,name);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,(cljs.core.truth_(ns)?[cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(name)].join(''):name));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,kw));

return cljs.compiler.emits.call(null,")");
});
cljs.compiler.emits_symbol = (function cljs$compiler$emits_symbol(sym){
var ns = cljs.core.namespace.call(null,sym);
var name = cljs.core.name.call(null,sym);
var symstr = ((!((ns == null)))?[cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(name)].join(''):name);
cljs.compiler.emits.call(null,"new cljs.core.Symbol(");

cljs.compiler.emit_constant.call(null,ns);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,name);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,symstr);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,sym));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,null);

return cljs.compiler.emits.call(null,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.Keyword,(function (x){
if(cljs.core.truth_(new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))))){
var value = x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_keyword.call(null,x);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.Symbol,(function (x){
if(cljs.core.truth_(new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))))){
var value = x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_symbol.call(null,x);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Date,(function (date){
return cljs.compiler.emits.call(null,"new Date(",date.getTime(),")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.UUID,(function (uuid){
var uuid_str = uuid.toString();
return cljs.compiler.emits.call(null,"new cljs.core.UUID(\"",uuid_str,"\", ",cljs.core.hash.call(null,uuid_str),")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var","var",-769682797),(function (p__15066){
var map__15067 = p__15066;
var map__15067__$1 = ((((!((map__15067 == null)))?((((map__15067.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15067.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15067):map__15067);
var arg = map__15067__$1;
var info = cljs.core.get.call(null,map__15067__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__15067__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__15067__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.call(null,cljs.core.namespace.call(null,var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name.call(null,var_name)], null));
var or__11897__auto__ = js_module_name;
if(cljs.core.truth_(or__11897__auto__)){
return or__11897__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})():info);
if(cljs.core.truth_(new cljs.core.Keyword(null,"binding-form?","binding-form?",1728940169).cljs$core$IFn$_invoke$arity$1(arg))){
return cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,arg));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__14928__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14928__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,(function (){var G__15069 = info__$1;
var G__15069__$1 = ((cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null)))?cljs.compiler.munge.call(null,G__15069):G__15069);
return G__15069__$1;
})());

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14928__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var-special","var-special",1131576802),(function (p__15070){
var map__15071 = p__15070;
var map__15071__$1 = ((((!((map__15071 == null)))?((((map__15071.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15071.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15071):map__15071);
var arg = map__15071__$1;
var env = cljs.core.get.call(null,map__15071__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__15071__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__15071__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__15071__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("ana","ast?","ana/ast?",1470128118,null),new cljs.core.Symbol(null,"sym","sym",195671222,null))))].join('')));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("ana","ast?","ana/ast?",1470128118,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null))))].join('')));
}

var map__15073 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__15073__$1 = ((((!((map__15073 == null)))?((((map__15073.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15073.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15073):map__15073);
var name = cljs.core.get.call(null,map__15073__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__14928__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14928__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14928__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"meta","meta",1499536964),(function (p__15075){
var map__15076 = p__15075;
var map__15076__$1 = ((((!((map__15076 == null)))?((((map__15076.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15076.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15076):map__15076);
var expr = cljs.core.get.call(null,map__15076__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__15076__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__15076__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__14928__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14928__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14928__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.array_map_threshold = (8);
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
return (cljs.core.every_QMARK_.call(null,(function (p1__15078_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__15078_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),keys)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__15079){
var map__15080 = p__15079;
var map__15080__$1 = ((((!((map__15080 == null)))?((((map__15080.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15080.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15080):map__15080);
var env = cljs.core.get.call(null,map__15080__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__15080__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__15080__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__14928__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14928__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if((cljs.core.count.call(null,keys) === (0))){
cljs.compiler.emits.call(null,"cljs.core.PersistentArrayMap.EMPTY");
} else {
if((cljs.core.count.call(null,keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_(cljs.compiler.distinct_keys_QMARK_.call(null,keys))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentArrayMap(null, ",cljs.core.count.call(null,keys),", [",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,keys,vals)),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentArrayMap.fromArray([",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,keys,vals)),"], true, false)");
}
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentHashMap.fromArrays([",cljs.compiler.comma_sep.call(null,keys),"],[",cljs.compiler.comma_sep.call(null,vals),"])");

}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14928__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"list","list",765357683),(function (p__15082){
var map__15083 = p__15082;
var map__15083__$1 = ((((!((map__15083 == null)))?((((map__15083.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15083.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15083):map__15083);
var items = cljs.core.get.call(null,map__15083__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__15083__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__14928__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14928__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.List.EMPTY");
} else {
cljs.compiler.emits.call(null,"cljs.core.list(",cljs.compiler.comma_sep.call(null,items),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14928__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__15085){
var map__15086 = p__15085;
var map__15086__$1 = ((((!((map__15086 == null)))?((((map__15086.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15086.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15086):map__15086);
var items = cljs.core.get.call(null,map__15086__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__15086__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__14928__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14928__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.EMPTY");
} else {
var cnt_15088 = cljs.core.count.call(null,items);
if((cnt_15088 < (32))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentVector(null, ",cnt_15088,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",cljs.compiler.comma_sep.call(null,items),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.fromArray([",cljs.compiler.comma_sep.call(null,items),"], true)");
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14928__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
return (cljs.core.every_QMARK_.call(null,(function (p1__15089_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__15089_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),items)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,items)),cljs.core.count.call(null,items)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__15090){
var map__15091 = p__15090;
var map__15091__$1 = ((((!((map__15091 == null)))?((((map__15091.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15091.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15091):map__15091);
var items = cljs.core.get.call(null,map__15091__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__15091__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__14928__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14928__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.EMPTY");
} else {
if(cljs.core.truth_(cljs.compiler.distinct_constants_QMARK_.call(null,items))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count.call(null,items),", [",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,items,cljs.core.repeat.call(null,"null"))),"], null), null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.fromArray([",cljs.compiler.comma_sep.call(null,items),"], true)");

}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14928__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-value","js-value",-758336661),(function (p__15093){
var map__15094 = p__15093;
var map__15094__$1 = ((((!((map__15094 == null)))?((((map__15094.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15094.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15094):map__15094);
var items = cljs.core.get.call(null,map__15094__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var js_type = cljs.core.get.call(null,map__15094__$1,new cljs.core.Keyword(null,"js-type","js-type",539386702));
var env = cljs.core.get.call(null,map__15094__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__14928__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14928__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core._EQ_.call(null,js_type,new cljs.core.Keyword(null,"object","object",1474613949))){
cljs.compiler.emits.call(null,"{");

var temp__4425__auto___15104 = cljs.core.seq.call(null,items);
if(temp__4425__auto___15104){
var items_15105__$1 = temp__4425__auto___15104;
var vec__15096_15106 = items_15105__$1;
var vec__15097_15107 = cljs.core.nth.call(null,vec__15096_15106,(0),null);
var k_15108 = cljs.core.nth.call(null,vec__15097_15107,(0),null);
var v_15109 = cljs.core.nth.call(null,vec__15097_15107,(1),null);
var r_15110 = cljs.core.nthnext.call(null,vec__15096_15106,(1));
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_15108),"\": ",v_15109);

var seq__15098_15111 = cljs.core.seq.call(null,r_15110);
var chunk__15099_15112 = null;
var count__15100_15113 = (0);
var i__15101_15114 = (0);
while(true){
if((i__15101_15114 < count__15100_15113)){
var vec__15102_15115 = cljs.core._nth.call(null,chunk__15099_15112,i__15101_15114);
var k_15116__$1 = cljs.core.nth.call(null,vec__15102_15115,(0),null);
var v_15117__$1 = cljs.core.nth.call(null,vec__15102_15115,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_15116__$1),"\": ",v_15117__$1);

var G__15118 = seq__15098_15111;
var G__15119 = chunk__15099_15112;
var G__15120 = count__15100_15113;
var G__15121 = (i__15101_15114 + (1));
seq__15098_15111 = G__15118;
chunk__15099_15112 = G__15119;
count__15100_15113 = G__15120;
i__15101_15114 = G__15121;
continue;
} else {
var temp__4425__auto___15122__$1 = cljs.core.seq.call(null,seq__15098_15111);
if(temp__4425__auto___15122__$1){
var seq__15098_15123__$1 = temp__4425__auto___15122__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15098_15123__$1)){
var c__12701__auto___15124 = cljs.core.chunk_first.call(null,seq__15098_15123__$1);
var G__15125 = cljs.core.chunk_rest.call(null,seq__15098_15123__$1);
var G__15126 = c__12701__auto___15124;
var G__15127 = cljs.core.count.call(null,c__12701__auto___15124);
var G__15128 = (0);
seq__15098_15111 = G__15125;
chunk__15099_15112 = G__15126;
count__15100_15113 = G__15127;
i__15101_15114 = G__15128;
continue;
} else {
var vec__15103_15129 = cljs.core.first.call(null,seq__15098_15123__$1);
var k_15130__$1 = cljs.core.nth.call(null,vec__15103_15129,(0),null);
var v_15131__$1 = cljs.core.nth.call(null,vec__15103_15129,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_15130__$1),"\": ",v_15131__$1);

var G__15132 = cljs.core.next.call(null,seq__15098_15123__$1);
var G__15133 = null;
var G__15134 = (0);
var G__15135 = (0);
seq__15098_15111 = G__15132;
chunk__15099_15112 = G__15133;
count__15100_15113 = G__15134;
i__15101_15114 = G__15135;
continue;
}
} else {
}
}
break;
}
} else {
}

cljs.compiler.emits.call(null,"}");
} else {
cljs.compiler.emits.call(null,"[",cljs.compiler.comma_sep.call(null,items),"]");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14928__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"constant","constant",-379609303),(function (p__15136){
var map__15137 = p__15136;
var map__15137__$1 = ((((!((map__15137 == null)))?((((map__15137.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15137.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15137):map__15137);
var form = cljs.core.get.call(null,map__15137__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__15137__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__14928__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14928__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14928__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(p__15139){
var map__15142 = p__15139;
var map__15142__$1 = ((((!((map__15142 == null)))?((((map__15142.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15142.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15142):map__15142);
var op = cljs.core.get.call(null,map__15142__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__15142__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var and__11885__auto__ = cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303));
if(and__11885__auto__){
var and__11885__auto____$1 = form;
if(cljs.core.truth_(and__11885__auto____$1)){
return !(((typeof form === 'string') && (cljs.core._EQ_.call(null,form,""))) || ((typeof form === 'number') && ((form === (0)))));
} else {
return and__11885__auto____$1;
}
} else {
return and__11885__auto__;
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(p__15144){
var map__15147 = p__15144;
var map__15147__$1 = ((((!((map__15147 == null)))?((((map__15147.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15147.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15147):map__15147);
var op = cljs.core.get.call(null,map__15147__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__15147__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
return (cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303))) && ((form === false) || ((form == null)));
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag.call(null,env,e);
var or__11897__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,tag);
if(cljs.core.truth_(or__11897__auto__)){
return or__11897__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_.call(null,e);
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__15149){
var map__15150 = p__15149;
var map__15150__$1 = ((((!((map__15150 == null)))?((((map__15150.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15150.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15150):map__15150);
var test = cljs.core.get.call(null,map__15150__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__15150__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__15150__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__15150__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__15150__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not.call(null,(function (){var or__11897__auto__ = unchecked;
if(cljs.core.truth_(or__11897__auto__)){
return or__11897__auto__;
} else {
return cljs.compiler.safe_test_QMARK_.call(null,env,test);
}
})());
if(cljs.core.truth_(cljs.compiler.truthy_constant_QMARK_.call(null,test))){
return cljs.compiler.emitln.call(null,then);
} else {
if(cljs.core.truth_(cljs.compiler.falsey_constant_QMARK_.call(null,test))){
return cljs.compiler.emitln.call(null,else$);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"(",((checked)?"cljs.core.truth_":null),"(",test,")?",then,":",else$,")");
} else {
if(checked){
cljs.compiler.emitln.call(null,"if(cljs.core.truth_(",test,")){");
} else {
cljs.compiler.emitln.call(null,"if(",test,"){");
}

cljs.compiler.emitln.call(null,then,"} else {");

return cljs.compiler.emitln.call(null,else$,"}");
}

}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case*","case*",716180697),(function (p__15152){
var map__15153 = p__15152;
var map__15153__$1 = ((((!((map__15153 == null)))?((((map__15153.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15153.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15153):map__15153);
var v = cljs.core.get.call(null,map__15153__$1,new cljs.core.Keyword(null,"v","v",21465059));
var tests = cljs.core.get.call(null,map__15153__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var thens = cljs.core.get.call(null,map__15153__$1,new cljs.core.Keyword(null,"thens","thens",226631442));
var default$ = cljs.core.get.call(null,map__15153__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__15153__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"expr","expr",745722291))){
cljs.compiler.emitln.call(null,"(function(){");
} else {
}

var gs = cljs.core.gensym.call(null,"caseval__");
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"var ",gs,";");
} else {
}

cljs.compiler.emitln.call(null,"switch (",v,") {");

var seq__15155_15169 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,tests,thens)));
var chunk__15156_15170 = null;
var count__15157_15171 = (0);
var i__15158_15172 = (0);
while(true){
if((i__15158_15172 < count__15157_15171)){
var vec__15159_15173 = cljs.core._nth.call(null,chunk__15156_15170,i__15158_15172);
var ts_15174 = cljs.core.nth.call(null,vec__15159_15173,(0),null);
var then_15175 = cljs.core.nth.call(null,vec__15159_15173,(1),null);
var seq__15160_15176 = cljs.core.seq.call(null,ts_15174);
var chunk__15161_15177 = null;
var count__15162_15178 = (0);
var i__15163_15179 = (0);
while(true){
if((i__15163_15179 < count__15162_15178)){
var test_15180 = cljs.core._nth.call(null,chunk__15161_15177,i__15163_15179);
cljs.compiler.emitln.call(null,"case ",test_15180,":");

var G__15181 = seq__15160_15176;
var G__15182 = chunk__15161_15177;
var G__15183 = count__15162_15178;
var G__15184 = (i__15163_15179 + (1));
seq__15160_15176 = G__15181;
chunk__15161_15177 = G__15182;
count__15162_15178 = G__15183;
i__15163_15179 = G__15184;
continue;
} else {
var temp__4425__auto___15185 = cljs.core.seq.call(null,seq__15160_15176);
if(temp__4425__auto___15185){
var seq__15160_15186__$1 = temp__4425__auto___15185;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15160_15186__$1)){
var c__12701__auto___15187 = cljs.core.chunk_first.call(null,seq__15160_15186__$1);
var G__15188 = cljs.core.chunk_rest.call(null,seq__15160_15186__$1);
var G__15189 = c__12701__auto___15187;
var G__15190 = cljs.core.count.call(null,c__12701__auto___15187);
var G__15191 = (0);
seq__15160_15176 = G__15188;
chunk__15161_15177 = G__15189;
count__15162_15178 = G__15190;
i__15163_15179 = G__15191;
continue;
} else {
var test_15192 = cljs.core.first.call(null,seq__15160_15186__$1);
cljs.compiler.emitln.call(null,"case ",test_15192,":");

var G__15193 = cljs.core.next.call(null,seq__15160_15186__$1);
var G__15194 = null;
var G__15195 = (0);
var G__15196 = (0);
seq__15160_15176 = G__15193;
chunk__15161_15177 = G__15194;
count__15162_15178 = G__15195;
i__15163_15179 = G__15196;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_15175);
} else {
cljs.compiler.emitln.call(null,then_15175);
}

cljs.compiler.emitln.call(null,"break;");

var G__15197 = seq__15155_15169;
var G__15198 = chunk__15156_15170;
var G__15199 = count__15157_15171;
var G__15200 = (i__15158_15172 + (1));
seq__15155_15169 = G__15197;
chunk__15156_15170 = G__15198;
count__15157_15171 = G__15199;
i__15158_15172 = G__15200;
continue;
} else {
var temp__4425__auto___15201 = cljs.core.seq.call(null,seq__15155_15169);
if(temp__4425__auto___15201){
var seq__15155_15202__$1 = temp__4425__auto___15201;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15155_15202__$1)){
var c__12701__auto___15203 = cljs.core.chunk_first.call(null,seq__15155_15202__$1);
var G__15204 = cljs.core.chunk_rest.call(null,seq__15155_15202__$1);
var G__15205 = c__12701__auto___15203;
var G__15206 = cljs.core.count.call(null,c__12701__auto___15203);
var G__15207 = (0);
seq__15155_15169 = G__15204;
chunk__15156_15170 = G__15205;
count__15157_15171 = G__15206;
i__15158_15172 = G__15207;
continue;
} else {
var vec__15164_15208 = cljs.core.first.call(null,seq__15155_15202__$1);
var ts_15209 = cljs.core.nth.call(null,vec__15164_15208,(0),null);
var then_15210 = cljs.core.nth.call(null,vec__15164_15208,(1),null);
var seq__15165_15211 = cljs.core.seq.call(null,ts_15209);
var chunk__15166_15212 = null;
var count__15167_15213 = (0);
var i__15168_15214 = (0);
while(true){
if((i__15168_15214 < count__15167_15213)){
var test_15215 = cljs.core._nth.call(null,chunk__15166_15212,i__15168_15214);
cljs.compiler.emitln.call(null,"case ",test_15215,":");

var G__15216 = seq__15165_15211;
var G__15217 = chunk__15166_15212;
var G__15218 = count__15167_15213;
var G__15219 = (i__15168_15214 + (1));
seq__15165_15211 = G__15216;
chunk__15166_15212 = G__15217;
count__15167_15213 = G__15218;
i__15168_15214 = G__15219;
continue;
} else {
var temp__4425__auto___15220__$1 = cljs.core.seq.call(null,seq__15165_15211);
if(temp__4425__auto___15220__$1){
var seq__15165_15221__$1 = temp__4425__auto___15220__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15165_15221__$1)){
var c__12701__auto___15222 = cljs.core.chunk_first.call(null,seq__15165_15221__$1);
var G__15223 = cljs.core.chunk_rest.call(null,seq__15165_15221__$1);
var G__15224 = c__12701__auto___15222;
var G__15225 = cljs.core.count.call(null,c__12701__auto___15222);
var G__15226 = (0);
seq__15165_15211 = G__15223;
chunk__15166_15212 = G__15224;
count__15167_15213 = G__15225;
i__15168_15214 = G__15226;
continue;
} else {
var test_15227 = cljs.core.first.call(null,seq__15165_15221__$1);
cljs.compiler.emitln.call(null,"case ",test_15227,":");

var G__15228 = cljs.core.next.call(null,seq__15165_15221__$1);
var G__15229 = null;
var G__15230 = (0);
var G__15231 = (0);
seq__15165_15211 = G__15228;
chunk__15166_15212 = G__15229;
count__15167_15213 = G__15230;
i__15168_15214 = G__15231;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_15210);
} else {
cljs.compiler.emitln.call(null,then_15210);
}

cljs.compiler.emitln.call(null,"break;");

var G__15232 = cljs.core.next.call(null,seq__15155_15202__$1);
var G__15233 = null;
var G__15234 = (0);
var G__15235 = (0);
seq__15155_15169 = G__15232;
chunk__15156_15170 = G__15233;
count__15157_15171 = G__15234;
i__15158_15172 = G__15235;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(default$)){
cljs.compiler.emitln.call(null,"default:");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",default$);
} else {
cljs.compiler.emitln.call(null,default$);
}
} else {
}

cljs.compiler.emitln.call(null,"}");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"return ",gs,";})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__15236){
var map__15237 = p__15236;
var map__15237__$1 = ((((!((map__15237 == null)))?((((map__15237.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15237.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15237):map__15237);
var throw$ = cljs.core.get.call(null,map__15237__$1,new cljs.core.Keyword(null,"throw","throw",-1044625833));
var env = cljs.core.get.call(null,map__15237__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emits.call(null,"(function(){throw ",throw$,"})()");
} else {
return cljs.compiler.emitln.call(null,"throw ",throw$,";");
}
}));
cljs.compiler.base_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, ["boolean",null,"object",null,"*",null,"string",null,"Object",null,"Number",null,"null",null,"Date",null,"number",null,"String",null,"RegExp",null,"...*",null,"Array",null,"array",null,"Boolean",null], null), null);
cljs.compiler.mapped_types = new cljs.core.PersistentArrayMap(null, 1, ["nil","null"], null);
cljs.compiler.resolve_type = (function cljs$compiler$resolve_type(env,t){
if(cljs.core.truth_(cljs.core.get.call(null,cljs.compiler.base_types,t))){
return t;
} else {
if(cljs.core.truth_(cljs.core.get.call(null,cljs.compiler.mapped_types,t))){
return cljs.core.get.call(null,cljs.compiler.mapped_types,t);
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"!"))){
return [cljs.core.str("!"),cljs.core.str(cljs$compiler$resolve_type.call(null,env,cljs.core.subs.call(null,t,(1))))].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__15242 = ((!(((-1) === idx)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__15242,(0),null);
var rstr = cljs.core.nth.call(null,vec__15242,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs$compiler$resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__15242,fstr,rstr,ret_t,axstr){
return (function (p1__15239_SHARP_){
return cljs$compiler$resolve_type.call(null,env,p1__15239_SHARP_);
});})(idx,vec__15242,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__15243 = [cljs.core.str("function("),cljs.core.str(clojure.string.join.call(null,",",args_ts)),cljs.core.str(")")].join('');
var G__15243__$1 = (cljs.core.truth_(ret_t)?[cljs.core.str(G__15243),cljs.core.str(":"),cljs.core.str(ret_t)].join(''):G__15243);
return G__15243__$1;
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str(cljs$compiler$resolve_type.call(null,env,cljs.core.subs.call(null,t,(0),(cljs.core.count.call(null,t) - (1))))),cljs.core.str("=")].join('');
} else {
return cljs.compiler.munge.call(null,[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,env,cljs.core.symbol.call(null,t))))].join(''));

}
}
}
}
}
}
});
cljs.compiler.resolve_types = (function cljs$compiler$resolve_types(env,ts){
var ts__$1 = cljs.core.subs.call(null,clojure.string.trim.call(null,ts),(1),(cljs.core.count.call(null,ts) - (1)));
var xs = clojure.string.split.call(null,ts__$1,/\|/);
return [cljs.core.str("{"),cljs.core.str(clojure.string.join.call(null,"|",cljs.core.map.call(null,((function (ts__$1,xs){
return (function (p1__15244_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__15244_SHARP_);
});})(ts__$1,xs))
,xs))),cljs.core.str("}")].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__15247 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var p = cljs.core.nth.call(null,vec__15247,(0),null);
var ts = cljs.core.nth.call(null,vec__15247,(1),null);
var n = cljs.core.nth.call(null,vec__15247,(2),null);
var xs = cljs.core.nthnext.call(null,vec__15247,(3));
if(cljs.core.truth_((function (){var and__11885__auto__ = cljs.core._EQ_.call(null,"@param",p);
if(and__11885__auto__){
var and__11885__auto____$1 = ts;
if(cljs.core.truth_(and__11885__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__11885__auto____$1;
}
} else {
return and__11885__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts),cljs.compiler.munge.call(null,n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find.call(null,/@return/,line))){
var vec__15248 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var p = cljs.core.nth.call(null,vec__15248,(0),null);
var ts = cljs.core.nth.call(null,vec__15248,(1),null);
var xs = cljs.core.nthnext.call(null,vec__15248,(2));
if(cljs.core.truth_((function (){var and__11885__auto__ = cljs.core._EQ_.call(null,"@return",p);
if(and__11885__auto__){
var and__11885__auto____$1 = ts;
if(cljs.core.truth_(and__11885__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__11885__auto____$1;
}
} else {
return and__11885__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts)], null),xs));
} else {
return line;
}
} else {
return line;

}
}
});
cljs.compiler.checking_types_QMARK_ = (function cljs$compiler$checking_types_QMARK_(){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warn","warn",-436710552),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null).call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"closure-warnings","closure-warnings",1362834211),new cljs.core.Keyword(null,"check-types","check-types",-833794607)], null)));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var args15250 = [];
var len__12956__auto___15277 = arguments.length;
var i__12957__auto___15278 = (0);
while(true){
if((i__12957__auto___15278 < len__12956__auto___15277)){
args15250.push((arguments[i__12957__auto___15278]));

var G__15279 = (i__12957__auto___15278 + (1));
i__12957__auto___15278 = G__15279;
continue;
} else {
}
break;
}

var G__15252 = args15250.length;
switch (G__15252) {
case 2:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15250.length)].join('')));

}
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2 = (function (doc,jsdoc){
return cljs.compiler.emit_comment.call(null,null,doc,jsdoc);
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3 = (function (env,doc,jsdoc){
var docs = (cljs.core.truth_(doc)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc], null):null);
var docs__$1 = (cljs.core.truth_(jsdoc)?cljs.core.concat.call(null,docs,jsdoc):docs);
var docs__$2 = cljs.core.remove.call(null,cljs.core.nil_QMARK_,docs__$1);
var print_comment_lines = ((function (docs,docs__$1,docs__$2){
return (function cljs$compiler$print_comment_lines(e){
var vec__15268 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__15249_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__15249_SHARP_);
} else {
return p1__15249_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var x = cljs.core.nth.call(null,vec__15268,(0),null);
var ys = cljs.core.nthnext.call(null,vec__15268,(1));
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__15269 = cljs.core.seq.call(null,ys);
var chunk__15270 = null;
var count__15271 = (0);
var i__15272 = (0);
while(true){
if((i__15272 < count__15271)){
var next_line = cljs.core._nth.call(null,chunk__15270,i__15272);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__15281 = seq__15269;
var G__15282 = chunk__15270;
var G__15283 = count__15271;
var G__15284 = (i__15272 + (1));
seq__15269 = G__15281;
chunk__15270 = G__15282;
count__15271 = G__15283;
i__15272 = G__15284;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__15269);
if(temp__4425__auto__){
var seq__15269__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15269__$1)){
var c__12701__auto__ = cljs.core.chunk_first.call(null,seq__15269__$1);
var G__15285 = cljs.core.chunk_rest.call(null,seq__15269__$1);
var G__15286 = c__12701__auto__;
var G__15287 = cljs.core.count.call(null,c__12701__auto__);
var G__15288 = (0);
seq__15269 = G__15285;
chunk__15270 = G__15286;
count__15271 = G__15287;
i__15272 = G__15288;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__15269__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__15289 = cljs.core.next.call(null,seq__15269__$1);
var G__15290 = null;
var G__15291 = (0);
var G__15292 = (0);
seq__15269 = G__15289;
chunk__15270 = G__15290;
count__15271 = G__15291;
i__15272 = G__15292;
continue;
}
} else {
return null;
}
}
break;
}
});})(docs,docs__$1,docs__$2))
;
if(cljs.core.seq.call(null,docs__$2)){
cljs.compiler.emitln.call(null,"/**");

var seq__15273_15293 = cljs.core.seq.call(null,docs__$2);
var chunk__15274_15294 = null;
var count__15275_15295 = (0);
var i__15276_15296 = (0);
while(true){
if((i__15276_15296 < count__15275_15295)){
var e_15297 = cljs.core._nth.call(null,chunk__15274_15294,i__15276_15296);
if(cljs.core.truth_(e_15297)){
print_comment_lines.call(null,e_15297);
} else {
}

var G__15298 = seq__15273_15293;
var G__15299 = chunk__15274_15294;
var G__15300 = count__15275_15295;
var G__15301 = (i__15276_15296 + (1));
seq__15273_15293 = G__15298;
chunk__15274_15294 = G__15299;
count__15275_15295 = G__15300;
i__15276_15296 = G__15301;
continue;
} else {
var temp__4425__auto___15302 = cljs.core.seq.call(null,seq__15273_15293);
if(temp__4425__auto___15302){
var seq__15273_15303__$1 = temp__4425__auto___15302;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15273_15303__$1)){
var c__12701__auto___15304 = cljs.core.chunk_first.call(null,seq__15273_15303__$1);
var G__15305 = cljs.core.chunk_rest.call(null,seq__15273_15303__$1);
var G__15306 = c__12701__auto___15304;
var G__15307 = cljs.core.count.call(null,c__12701__auto___15304);
var G__15308 = (0);
seq__15273_15293 = G__15305;
chunk__15274_15294 = G__15306;
count__15275_15295 = G__15307;
i__15276_15296 = G__15308;
continue;
} else {
var e_15309 = cljs.core.first.call(null,seq__15273_15303__$1);
if(cljs.core.truth_(e_15309)){
print_comment_lines.call(null,e_15309);
} else {
}

var G__15310 = cljs.core.next.call(null,seq__15273_15303__$1);
var G__15311 = null;
var G__15312 = (0);
var G__15313 = (0);
seq__15273_15293 = G__15310;
chunk__15274_15294 = G__15311;
count__15275_15295 = G__15312;
i__15276_15296 = G__15313;
continue;
}
} else {
}
}
break;
}

return cljs.compiler.emitln.call(null," */");
} else {
return null;
}
});

cljs.compiler.emit_comment.cljs$lang$maxFixedArity = 3;
cljs.compiler.valid_define_value_QMARK_ = (function cljs$compiler$valid_define_value_QMARK_(x){
return (typeof x === 'string') || (x === true) || (x === false) || (typeof x === 'number');
});
cljs.compiler.get_define = (function cljs$compiler$get_define(mname,jsdoc){
var opts = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword(null,"options","options",99638489));
var and__11885__auto__ = cljs.core.some.call(null,((function (opts){
return (function (p1__15315_SHARP_){
return goog.string.startsWith(p1__15315_SHARP_,"@define");
});})(opts))
,jsdoc);
if(cljs.core.truth_(and__11885__auto__)){
var and__11885__auto____$1 = opts;
if(cljs.core.truth_(and__11885__auto____$1)){
var and__11885__auto____$2 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"none","none",1333468478));
if(and__11885__auto____$2){
var define = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),[cljs.core.str(mname)].join('')], null));
if(cljs.core.truth_(cljs.compiler.valid_define_value_QMARK_.call(null,define))){
return cljs.core.pr_str.call(null,define);
} else {
return null;
}
} else {
return and__11885__auto____$2;
}
} else {
return and__11885__auto____$1;
}
} else {
return and__11885__auto__;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__15316){
var map__15317 = p__15316;
var map__15317__$1 = ((((!((map__15317 == null)))?((((map__15317.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15317.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15317):map__15317);
var name = cljs.core.get.call(null,map__15317__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var var$ = cljs.core.get.call(null,map__15317__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var init = cljs.core.get.call(null,map__15317__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var env = cljs.core.get.call(null,map__15317__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var doc = cljs.core.get.call(null,map__15317__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__15317__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var export$ = cljs.core.get.call(null,map__15317__$1,new cljs.core.Keyword(null,"export","export",214356590));
var test = cljs.core.get.call(null,map__15317__$1,new cljs.core.Keyword(null,"test","test",577538877));
var var_ast = cljs.core.get.call(null,map__15317__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
var mname = cljs.compiler.munge.call(null,name);
cljs.compiler.emit_comment.call(null,env,doc,cljs.core.concat.call(null,jsdoc,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516).cljs$core$IFn$_invoke$arity$1(init)));

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"return (");
} else {
}

cljs.compiler.emitln.call(null,"(function (){");
} else {
}

cljs.compiler.emits.call(null,var$);

if(cljs.core.truth_(init)){
cljs.compiler.emits.call(null," = ",(function (){var temp__4423__auto__ = cljs.compiler.get_define.call(null,mname,jsdoc);
if(cljs.core.truth_(temp__4423__auto__)){
var define = temp__4423__auto__;
return define;
} else {
return init;
}
})());
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"; return (");

cljs.compiler.emits.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"var-special","var-special",1131576802),new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291))], null),var_ast));

cljs.compiler.emitln.call(null,");})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,")");
} else {
}
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emitln.call(null,";");
}

if(cljs.core.truth_(export$)){
cljs.compiler.emitln.call(null,"goog.exportSymbol('",cljs.compiler.munge.call(null,export$),"', ",mname,");");
} else {
}

if(cljs.core.truth_((function (){var and__11885__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(cljs.core.truth_(and__11885__auto__)){
return test;
} else {
return and__11885__auto__;
}
})())){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,";");
} else {
}

return cljs.compiler.emitln.call(null,var$,".cljs$lang$test = ",test,";");
} else {
return null;
}
}));
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__15319){
var map__15336 = p__15319;
var map__15336__$1 = ((((!((map__15336 == null)))?((((map__15336.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15336.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15336):map__15336);
var name = cljs.core.get.call(null,map__15336__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__15336__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__15336__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str(cljs.compiler.munge.call(null,name)),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__15338_15352 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__15339_15353 = null;
var count__15340_15354 = (0);
var i__15341_15355 = (0);
while(true){
if((i__15341_15355 < count__15340_15354)){
var vec__15342_15356 = cljs.core._nth.call(null,chunk__15339_15353,i__15341_15355);
var i_15357 = cljs.core.nth.call(null,vec__15342_15356,(0),null);
var param_15358 = cljs.core.nth.call(null,vec__15342_15356,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_15358);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__15359 = seq__15338_15352;
var G__15360 = chunk__15339_15353;
var G__15361 = count__15340_15354;
var G__15362 = (i__15341_15355 + (1));
seq__15338_15352 = G__15359;
chunk__15339_15353 = G__15360;
count__15340_15354 = G__15361;
i__15341_15355 = G__15362;
continue;
} else {
var temp__4425__auto___15363 = cljs.core.seq.call(null,seq__15338_15352);
if(temp__4425__auto___15363){
var seq__15338_15364__$1 = temp__4425__auto___15363;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15338_15364__$1)){
var c__12701__auto___15365 = cljs.core.chunk_first.call(null,seq__15338_15364__$1);
var G__15366 = cljs.core.chunk_rest.call(null,seq__15338_15364__$1);
var G__15367 = c__12701__auto___15365;
var G__15368 = cljs.core.count.call(null,c__12701__auto___15365);
var G__15369 = (0);
seq__15338_15352 = G__15366;
chunk__15339_15353 = G__15367;
count__15340_15354 = G__15368;
i__15341_15355 = G__15369;
continue;
} else {
var vec__15343_15370 = cljs.core.first.call(null,seq__15338_15364__$1);
var i_15371 = cljs.core.nth.call(null,vec__15343_15370,(0),null);
var param_15372 = cljs.core.nth.call(null,vec__15343_15370,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_15372);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__15373 = cljs.core.next.call(null,seq__15338_15364__$1);
var G__15374 = null;
var G__15375 = (0);
var G__15376 = (0);
seq__15338_15352 = G__15373;
chunk__15339_15353 = G__15374;
count__15340_15354 = G__15375;
i__15341_15355 = G__15376;
continue;
}
} else {
}
}
break;
}

if(((1) < cljs.core.count.call(null,params))){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,cljs.core.butlast.call(null,params)));

cljs.compiler.emitln.call(null," = cljs.core.first(",arglist,");");

cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = cljs.core.rest(",arglist,");");

cljs.compiler.emits.call(null,"return ",delegate_name,"(");

var seq__15344_15377 = cljs.core.seq.call(null,params);
var chunk__15345_15378 = null;
var count__15346_15379 = (0);
var i__15347_15380 = (0);
while(true){
if((i__15347_15380 < count__15346_15379)){
var param_15381 = cljs.core._nth.call(null,chunk__15345_15378,i__15347_15380);
cljs.compiler.emit.call(null,param_15381);

if(cljs.core._EQ_.call(null,param_15381,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__15382 = seq__15344_15377;
var G__15383 = chunk__15345_15378;
var G__15384 = count__15346_15379;
var G__15385 = (i__15347_15380 + (1));
seq__15344_15377 = G__15382;
chunk__15345_15378 = G__15383;
count__15346_15379 = G__15384;
i__15347_15380 = G__15385;
continue;
} else {
var temp__4425__auto___15386 = cljs.core.seq.call(null,seq__15344_15377);
if(temp__4425__auto___15386){
var seq__15344_15387__$1 = temp__4425__auto___15386;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15344_15387__$1)){
var c__12701__auto___15388 = cljs.core.chunk_first.call(null,seq__15344_15387__$1);
var G__15389 = cljs.core.chunk_rest.call(null,seq__15344_15387__$1);
var G__15390 = c__12701__auto___15388;
var G__15391 = cljs.core.count.call(null,c__12701__auto___15388);
var G__15392 = (0);
seq__15344_15377 = G__15389;
chunk__15345_15378 = G__15390;
count__15346_15379 = G__15391;
i__15347_15380 = G__15392;
continue;
} else {
var param_15393 = cljs.core.first.call(null,seq__15344_15387__$1);
cljs.compiler.emit.call(null,param_15393);

if(cljs.core._EQ_.call(null,param_15393,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__15394 = cljs.core.next.call(null,seq__15344_15387__$1);
var G__15395 = null;
var G__15396 = (0);
var G__15397 = (0);
seq__15344_15377 = G__15394;
chunk__15345_15378 = G__15395;
count__15346_15379 = G__15396;
i__15347_15380 = G__15397;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,");");
} else {
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = cljs.core.seq(",arglist,");");

cljs.compiler.emits.call(null,"return ",delegate_name,"(");

var seq__15348_15398 = cljs.core.seq.call(null,params);
var chunk__15349_15399 = null;
var count__15350_15400 = (0);
var i__15351_15401 = (0);
while(true){
if((i__15351_15401 < count__15350_15400)){
var param_15402 = cljs.core._nth.call(null,chunk__15349_15399,i__15351_15401);
cljs.compiler.emit.call(null,param_15402);

if(cljs.core._EQ_.call(null,param_15402,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__15403 = seq__15348_15398;
var G__15404 = chunk__15349_15399;
var G__15405 = count__15350_15400;
var G__15406 = (i__15351_15401 + (1));
seq__15348_15398 = G__15403;
chunk__15349_15399 = G__15404;
count__15350_15400 = G__15405;
i__15351_15401 = G__15406;
continue;
} else {
var temp__4425__auto___15407 = cljs.core.seq.call(null,seq__15348_15398);
if(temp__4425__auto___15407){
var seq__15348_15408__$1 = temp__4425__auto___15407;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15348_15408__$1)){
var c__12701__auto___15409 = cljs.core.chunk_first.call(null,seq__15348_15408__$1);
var G__15410 = cljs.core.chunk_rest.call(null,seq__15348_15408__$1);
var G__15411 = c__12701__auto___15409;
var G__15412 = cljs.core.count.call(null,c__12701__auto___15409);
var G__15413 = (0);
seq__15348_15398 = G__15410;
chunk__15349_15399 = G__15411;
count__15350_15400 = G__15412;
i__15351_15401 = G__15413;
continue;
} else {
var param_15414 = cljs.core.first.call(null,seq__15348_15408__$1);
cljs.compiler.emit.call(null,param_15414);

if(cljs.core._EQ_.call(null,param_15414,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__15415 = cljs.core.next.call(null,seq__15348_15408__$1);
var G__15416 = null;
var G__15417 = (0);
var G__15418 = (0);
seq__15348_15398 = G__15415;
chunk__15349_15399 = G__15416;
count__15350_15400 = G__15417;
i__15351_15401 = G__15418;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,");");
}

return cljs.compiler.emits.call(null,"})");
});
cljs.compiler.emit_fn_params = (function cljs$compiler$emit_fn_params(params){
var seq__15423 = cljs.core.seq.call(null,params);
var chunk__15424 = null;
var count__15425 = (0);
var i__15426 = (0);
while(true){
if((i__15426 < count__15425)){
var param = cljs.core._nth.call(null,chunk__15424,i__15426);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__15427 = seq__15423;
var G__15428 = chunk__15424;
var G__15429 = count__15425;
var G__15430 = (i__15426 + (1));
seq__15423 = G__15427;
chunk__15424 = G__15428;
count__15425 = G__15429;
i__15426 = G__15430;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__15423);
if(temp__4425__auto__){
var seq__15423__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15423__$1)){
var c__12701__auto__ = cljs.core.chunk_first.call(null,seq__15423__$1);
var G__15431 = cljs.core.chunk_rest.call(null,seq__15423__$1);
var G__15432 = c__12701__auto__;
var G__15433 = cljs.core.count.call(null,c__12701__auto__);
var G__15434 = (0);
seq__15423 = G__15431;
chunk__15424 = G__15432;
count__15425 = G__15433;
i__15426 = G__15434;
continue;
} else {
var param = cljs.core.first.call(null,seq__15423__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__15435 = cljs.core.next.call(null,seq__15423__$1);
var G__15436 = null;
var G__15437 = (0);
var G__15438 = (0);
seq__15423 = G__15435;
chunk__15424 = G__15436;
count__15425 = G__15437;
i__15426 = G__15438;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__15439){
var map__15442 = p__15439;
var map__15442__$1 = ((((!((map__15442 == null)))?((((map__15442.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15442.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15442):map__15442);
var type = cljs.core.get.call(null,map__15442__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__15442__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__15442__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__15442__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__15442__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__15442__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__15442__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__15442__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__14928__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14928__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(function ",cljs.compiler.munge.call(null,name),"(");

cljs.compiler.emit_fn_params.call(null,params);

cljs.compiler.emitln.call(null,"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}

cljs.compiler.emits.call(null,"})");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14928__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
/**
 * Emit code that copies function arguments into an array starting at an index.
 *   Returns name of var holding the array.
 */
cljs.compiler.emit_arguments_to_array = (function cljs$compiler$emit_arguments_to_array(startslice){
if(((startslice >= (0))) && (cljs.core.integer_QMARK_.call(null,startslice))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"startslice","startslice",1404029423,null),(0)),cljs.core.list(new cljs.core.Symbol(null,"integer?","integer?",1303791671,null),new cljs.core.Symbol(null,"startslice","startslice",1404029423,null)))))].join('')));
}

var mname = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
var i = [cljs.core.str(mname),cljs.core.str("__i")].join('');
var a = [cljs.core.str(mname),cljs.core.str("__a")].join('');
cljs.compiler.emitln.call(null,"var ",i," = 0, ",a," = new Array(arguments.length -  ",startslice,");");

cljs.compiler.emitln.call(null,"while (",i," < ",a,".length) {",a,"[",i,"] = arguments[",i," + ",startslice,"]; ++",i,";}");

return a;
});
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__15444){
var map__15455 = p__15444;
var map__15455__$1 = ((((!((map__15455 == null)))?((((map__15455.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15455.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15455):map__15455);
var f = map__15455__$1;
var type = cljs.core.get.call(null,map__15455__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__15455__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__15455__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__15455__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__15455__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__15455__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__15455__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__15455__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__14928__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14928__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_15465__$1 = (function (){var or__11897__auto__ = name;
if(cljs.core.truth_(or__11897__auto__)){
return or__11897__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_15466 = cljs.compiler.munge.call(null,name_15465__$1);
var delegate_name_15467 = [cljs.core.str(mname_15466),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_15467," = function (");

var seq__15457_15468 = cljs.core.seq.call(null,params);
var chunk__15458_15469 = null;
var count__15459_15470 = (0);
var i__15460_15471 = (0);
while(true){
if((i__15460_15471 < count__15459_15470)){
var param_15472 = cljs.core._nth.call(null,chunk__15458_15469,i__15460_15471);
cljs.compiler.emit.call(null,param_15472);

if(cljs.core._EQ_.call(null,param_15472,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__15473 = seq__15457_15468;
var G__15474 = chunk__15458_15469;
var G__15475 = count__15459_15470;
var G__15476 = (i__15460_15471 + (1));
seq__15457_15468 = G__15473;
chunk__15458_15469 = G__15474;
count__15459_15470 = G__15475;
i__15460_15471 = G__15476;
continue;
} else {
var temp__4425__auto___15477 = cljs.core.seq.call(null,seq__15457_15468);
if(temp__4425__auto___15477){
var seq__15457_15478__$1 = temp__4425__auto___15477;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15457_15478__$1)){
var c__12701__auto___15479 = cljs.core.chunk_first.call(null,seq__15457_15478__$1);
var G__15480 = cljs.core.chunk_rest.call(null,seq__15457_15478__$1);
var G__15481 = c__12701__auto___15479;
var G__15482 = cljs.core.count.call(null,c__12701__auto___15479);
var G__15483 = (0);
seq__15457_15468 = G__15480;
chunk__15458_15469 = G__15481;
count__15459_15470 = G__15482;
i__15460_15471 = G__15483;
continue;
} else {
var param_15484 = cljs.core.first.call(null,seq__15457_15478__$1);
cljs.compiler.emit.call(null,param_15484);

if(cljs.core._EQ_.call(null,param_15484,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__15485 = cljs.core.next.call(null,seq__15457_15478__$1);
var G__15486 = null;
var G__15487 = (0);
var G__15488 = (0);
seq__15457_15468 = G__15485;
chunk__15458_15469 = G__15486;
count__15459_15470 = G__15487;
i__15460_15471 = G__15488;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"){");

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,"var ",mname_15466," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_15489 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_15489,",0);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_15467,".call(this,");

var seq__15461_15490 = cljs.core.seq.call(null,params);
var chunk__15462_15491 = null;
var count__15463_15492 = (0);
var i__15464_15493 = (0);
while(true){
if((i__15464_15493 < count__15463_15492)){
var param_15494 = cljs.core._nth.call(null,chunk__15462_15491,i__15464_15493);
cljs.compiler.emit.call(null,param_15494);

if(cljs.core._EQ_.call(null,param_15494,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__15495 = seq__15461_15490;
var G__15496 = chunk__15462_15491;
var G__15497 = count__15463_15492;
var G__15498 = (i__15464_15493 + (1));
seq__15461_15490 = G__15495;
chunk__15462_15491 = G__15496;
count__15463_15492 = G__15497;
i__15464_15493 = G__15498;
continue;
} else {
var temp__4425__auto___15499 = cljs.core.seq.call(null,seq__15461_15490);
if(temp__4425__auto___15499){
var seq__15461_15500__$1 = temp__4425__auto___15499;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15461_15500__$1)){
var c__12701__auto___15501 = cljs.core.chunk_first.call(null,seq__15461_15500__$1);
var G__15502 = cljs.core.chunk_rest.call(null,seq__15461_15500__$1);
var G__15503 = c__12701__auto___15501;
var G__15504 = cljs.core.count.call(null,c__12701__auto___15501);
var G__15505 = (0);
seq__15461_15490 = G__15502;
chunk__15462_15491 = G__15503;
count__15463_15492 = G__15504;
i__15464_15493 = G__15505;
continue;
} else {
var param_15506 = cljs.core.first.call(null,seq__15461_15500__$1);
cljs.compiler.emit.call(null,param_15506);

if(cljs.core._EQ_.call(null,param_15506,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__15507 = cljs.core.next.call(null,seq__15461_15500__$1);
var G__15508 = null;
var G__15509 = (0);
var G__15510 = (0);
seq__15461_15490 = G__15507;
chunk__15462_15491 = G__15508;
count__15463_15492 = G__15509;
i__15464_15493 = G__15510;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_15466,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_15466,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_15465__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_15466,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_15467,";");

cljs.compiler.emitln.call(null,"return ",mname_15466,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14928__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__15514){
var map__15515 = p__15514;
var map__15515__$1 = ((((!((map__15515 == null)))?((((map__15515.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15515.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15515):map__15515);
var name = cljs.core.get.call(null,map__15515__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__15515__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__15515__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__15515__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var variadic = cljs.core.get.call(null,map__15515__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var recur_frames = cljs.core.get.call(null,map__15515__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__15515__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__15515,map__15515__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__15511_SHARP_){
var and__11885__auto__ = p1__15511_SHARP_;
if(cljs.core.truth_(and__11885__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__15511_SHARP_));
} else {
return and__11885__auto__;
}
});})(map__15515,map__15515__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,recur_frames)),cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),loop_lets))));
if(loop_locals){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"((function (",cljs.compiler.comma_sep.call(null,cljs.core.map.call(null,cljs.compiler.munge,loop_locals)),"){");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emits.call(null,"return ");
}
} else {
}

if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,methods$))){
if(cljs.core.truth_(variadic)){
cljs.compiler.emit_variadic_fn_method.call(null,cljs.core.assoc.call(null,cljs.core.first.call(null,methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
} else {
cljs.compiler.emit_fn_method.call(null,cljs.core.assoc.call(null,cljs.core.first.call(null,methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
}
} else {
var name_15536__$1 = (function (){var or__11897__auto__ = name;
if(cljs.core.truth_(or__11897__auto__)){
return or__11897__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_15537 = cljs.compiler.munge.call(null,name_15536__$1);
var maxparams_15538 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_15539 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_15536__$1,mname_15537,maxparams_15538,loop_locals,map__15515,map__15515__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str(mname_15537),cljs.core.str("__"),cljs.core.str(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_15536__$1,mname_15537,maxparams_15538,loop_locals,map__15515,map__15515__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,methods$));
var ms_15540 = cljs.core.sort_by.call(null,((function (name_15536__$1,mname_15537,maxparams_15538,mmap_15539,loop_locals,map__15515,map__15515__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__15512_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__15512_SHARP_)));
});})(name_15536__$1,mname_15537,maxparams_15538,mmap_15539,loop_locals,map__15515,map__15515__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_15539));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_15537," = null;");

var seq__15517_15541 = cljs.core.seq.call(null,ms_15540);
var chunk__15518_15542 = null;
var count__15519_15543 = (0);
var i__15520_15544 = (0);
while(true){
if((i__15520_15544 < count__15519_15543)){
var vec__15521_15545 = cljs.core._nth.call(null,chunk__15518_15542,i__15520_15544);
var n_15546 = cljs.core.nth.call(null,vec__15521_15545,(0),null);
var meth_15547 = cljs.core.nth.call(null,vec__15521_15545,(1),null);
cljs.compiler.emits.call(null,"var ",n_15546," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_15547))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_15547);
} else {
cljs.compiler.emit_fn_method.call(null,meth_15547);
}

cljs.compiler.emitln.call(null,";");

var G__15548 = seq__15517_15541;
var G__15549 = chunk__15518_15542;
var G__15550 = count__15519_15543;
var G__15551 = (i__15520_15544 + (1));
seq__15517_15541 = G__15548;
chunk__15518_15542 = G__15549;
count__15519_15543 = G__15550;
i__15520_15544 = G__15551;
continue;
} else {
var temp__4425__auto___15552 = cljs.core.seq.call(null,seq__15517_15541);
if(temp__4425__auto___15552){
var seq__15517_15553__$1 = temp__4425__auto___15552;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15517_15553__$1)){
var c__12701__auto___15554 = cljs.core.chunk_first.call(null,seq__15517_15553__$1);
var G__15555 = cljs.core.chunk_rest.call(null,seq__15517_15553__$1);
var G__15556 = c__12701__auto___15554;
var G__15557 = cljs.core.count.call(null,c__12701__auto___15554);
var G__15558 = (0);
seq__15517_15541 = G__15555;
chunk__15518_15542 = G__15556;
count__15519_15543 = G__15557;
i__15520_15544 = G__15558;
continue;
} else {
var vec__15522_15559 = cljs.core.first.call(null,seq__15517_15553__$1);
var n_15560 = cljs.core.nth.call(null,vec__15522_15559,(0),null);
var meth_15561 = cljs.core.nth.call(null,vec__15522_15559,(1),null);
cljs.compiler.emits.call(null,"var ",n_15560," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_15561))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_15561);
} else {
cljs.compiler.emit_fn_method.call(null,meth_15561);
}

cljs.compiler.emitln.call(null,";");

var G__15562 = cljs.core.next.call(null,seq__15517_15553__$1);
var G__15563 = null;
var G__15564 = (0);
var G__15565 = (0);
seq__15517_15541 = G__15562;
chunk__15518_15542 = G__15563;
count__15519_15543 = G__15564;
i__15520_15544 = G__15565;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_15537," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_15538),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_15538)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_15538));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__15523_15566 = cljs.core.seq.call(null,ms_15540);
var chunk__15524_15567 = null;
var count__15525_15568 = (0);
var i__15526_15569 = (0);
while(true){
if((i__15526_15569 < count__15525_15568)){
var vec__15527_15570 = cljs.core._nth.call(null,chunk__15524_15567,i__15526_15569);
var n_15571 = cljs.core.nth.call(null,vec__15527_15570,(0),null);
var meth_15572 = cljs.core.nth.call(null,vec__15527_15570,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_15572))){
cljs.compiler.emitln.call(null,"default:");

var restarg_15573 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_15573," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_15574 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_15573," = new cljs.core.IndexedSeq(",a_15574,",0);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_15571,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_15538)),(((cljs.core.count.call(null,maxparams_15538) > (1)))?", ":null),restarg_15573,");");
} else {
var pcnt_15575 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_15572));
cljs.compiler.emitln.call(null,"case ",pcnt_15575,":");

cljs.compiler.emitln.call(null,"return ",n_15571,".call(this",(((pcnt_15575 === (0)))?null:cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_15575,maxparams_15538))),",")),");");
}

var G__15576 = seq__15523_15566;
var G__15577 = chunk__15524_15567;
var G__15578 = count__15525_15568;
var G__15579 = (i__15526_15569 + (1));
seq__15523_15566 = G__15576;
chunk__15524_15567 = G__15577;
count__15525_15568 = G__15578;
i__15526_15569 = G__15579;
continue;
} else {
var temp__4425__auto___15580 = cljs.core.seq.call(null,seq__15523_15566);
if(temp__4425__auto___15580){
var seq__15523_15581__$1 = temp__4425__auto___15580;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15523_15581__$1)){
var c__12701__auto___15582 = cljs.core.chunk_first.call(null,seq__15523_15581__$1);
var G__15583 = cljs.core.chunk_rest.call(null,seq__15523_15581__$1);
var G__15584 = c__12701__auto___15582;
var G__15585 = cljs.core.count.call(null,c__12701__auto___15582);
var G__15586 = (0);
seq__15523_15566 = G__15583;
chunk__15524_15567 = G__15584;
count__15525_15568 = G__15585;
i__15526_15569 = G__15586;
continue;
} else {
var vec__15528_15587 = cljs.core.first.call(null,seq__15523_15581__$1);
var n_15588 = cljs.core.nth.call(null,vec__15528_15587,(0),null);
var meth_15589 = cljs.core.nth.call(null,vec__15528_15587,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_15589))){
cljs.compiler.emitln.call(null,"default:");

var restarg_15590 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_15590," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_15591 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_15590," = new cljs.core.IndexedSeq(",a_15591,",0);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_15588,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_15538)),(((cljs.core.count.call(null,maxparams_15538) > (1)))?", ":null),restarg_15590,");");
} else {
var pcnt_15592 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_15589));
cljs.compiler.emitln.call(null,"case ",pcnt_15592,":");

cljs.compiler.emitln.call(null,"return ",n_15588,".call(this",(((pcnt_15592 === (0)))?null:cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_15592,maxparams_15538))),",")),");");
}

var G__15593 = cljs.core.next.call(null,seq__15523_15581__$1);
var G__15594 = null;
var G__15595 = (0);
var G__15596 = (0);
seq__15523_15566 = G__15593;
chunk__15524_15567 = G__15594;
count__15525_15568 = G__15595;
i__15526_15569 = G__15596;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"throw(new Error('Invalid arity: ' + arguments.length));");

cljs.compiler.emitln.call(null,"};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.call(null,mname_15537,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_15537,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_15536__$1,mname_15537,maxparams_15538,mmap_15539,ms_15540,loop_locals,map__15515,map__15515__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__15513_SHARP_){
var vec__15529 = p1__15513_SHARP_;
var n = cljs.core.nth.call(null,vec__15529,(0),null);
var m = cljs.core.nth.call(null,vec__15529,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_15536__$1,mname_15537,maxparams_15538,mmap_15539,ms_15540,loop_locals,map__15515,map__15515__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,ms_15540),".cljs$lang$applyTo;");
} else {
}

var seq__15530_15597 = cljs.core.seq.call(null,ms_15540);
var chunk__15531_15598 = null;
var count__15532_15599 = (0);
var i__15533_15600 = (0);
while(true){
if((i__15533_15600 < count__15532_15599)){
var vec__15534_15601 = cljs.core._nth.call(null,chunk__15531_15598,i__15533_15600);
var n_15602 = cljs.core.nth.call(null,vec__15534_15601,(0),null);
var meth_15603 = cljs.core.nth.call(null,vec__15534_15601,(1),null);
var c_15604 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_15603));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_15603))){
cljs.compiler.emitln.call(null,mname_15537,".cljs$core$IFn$_invoke$arity$variadic = ",n_15602,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_15537,".cljs$core$IFn$_invoke$arity$",c_15604," = ",n_15602,";");
}

var G__15605 = seq__15530_15597;
var G__15606 = chunk__15531_15598;
var G__15607 = count__15532_15599;
var G__15608 = (i__15533_15600 + (1));
seq__15530_15597 = G__15605;
chunk__15531_15598 = G__15606;
count__15532_15599 = G__15607;
i__15533_15600 = G__15608;
continue;
} else {
var temp__4425__auto___15609 = cljs.core.seq.call(null,seq__15530_15597);
if(temp__4425__auto___15609){
var seq__15530_15610__$1 = temp__4425__auto___15609;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15530_15610__$1)){
var c__12701__auto___15611 = cljs.core.chunk_first.call(null,seq__15530_15610__$1);
var G__15612 = cljs.core.chunk_rest.call(null,seq__15530_15610__$1);
var G__15613 = c__12701__auto___15611;
var G__15614 = cljs.core.count.call(null,c__12701__auto___15611);
var G__15615 = (0);
seq__15530_15597 = G__15612;
chunk__15531_15598 = G__15613;
count__15532_15599 = G__15614;
i__15533_15600 = G__15615;
continue;
} else {
var vec__15535_15616 = cljs.core.first.call(null,seq__15530_15610__$1);
var n_15617 = cljs.core.nth.call(null,vec__15535_15616,(0),null);
var meth_15618 = cljs.core.nth.call(null,vec__15535_15616,(1),null);
var c_15619 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_15618));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_15618))){
cljs.compiler.emitln.call(null,mname_15537,".cljs$core$IFn$_invoke$arity$variadic = ",n_15617,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_15537,".cljs$core$IFn$_invoke$arity$",c_15619," = ",n_15617,";");
}

var G__15620 = cljs.core.next.call(null,seq__15530_15610__$1);
var G__15621 = null;
var G__15622 = (0);
var G__15623 = (0);
seq__15530_15597 = G__15620;
chunk__15531_15598 = G__15621;
count__15532_15599 = G__15622;
i__15533_15600 = G__15623;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_15537,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__15624){
var map__15625 = p__15624;
var map__15625__$1 = ((((!((map__15625 == null)))?((((map__15625.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15625.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15625):map__15625);
var statements = cljs.core.get.call(null,map__15625__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__15625__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__15625__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var and__11885__auto__ = statements;
if(cljs.core.truth_(and__11885__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__11885__auto__;
}
})())){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__15627_15631 = cljs.core.seq.call(null,statements);
var chunk__15628_15632 = null;
var count__15629_15633 = (0);
var i__15630_15634 = (0);
while(true){
if((i__15630_15634 < count__15629_15633)){
var s_15635 = cljs.core._nth.call(null,chunk__15628_15632,i__15630_15634);
cljs.compiler.emitln.call(null,s_15635);

var G__15636 = seq__15627_15631;
var G__15637 = chunk__15628_15632;
var G__15638 = count__15629_15633;
var G__15639 = (i__15630_15634 + (1));
seq__15627_15631 = G__15636;
chunk__15628_15632 = G__15637;
count__15629_15633 = G__15638;
i__15630_15634 = G__15639;
continue;
} else {
var temp__4425__auto___15640 = cljs.core.seq.call(null,seq__15627_15631);
if(temp__4425__auto___15640){
var seq__15627_15641__$1 = temp__4425__auto___15640;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15627_15641__$1)){
var c__12701__auto___15642 = cljs.core.chunk_first.call(null,seq__15627_15641__$1);
var G__15643 = cljs.core.chunk_rest.call(null,seq__15627_15641__$1);
var G__15644 = c__12701__auto___15642;
var G__15645 = cljs.core.count.call(null,c__12701__auto___15642);
var G__15646 = (0);
seq__15627_15631 = G__15643;
chunk__15628_15632 = G__15644;
count__15629_15633 = G__15645;
i__15630_15634 = G__15646;
continue;
} else {
var s_15647 = cljs.core.first.call(null,seq__15627_15641__$1);
cljs.compiler.emitln.call(null,s_15647);

var G__15648 = cljs.core.next.call(null,seq__15627_15641__$1);
var G__15649 = null;
var G__15650 = (0);
var G__15651 = (0);
seq__15627_15631 = G__15648;
chunk__15628_15632 = G__15649;
count__15629_15633 = G__15650;
i__15630_15634 = G__15651;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit.call(null,ret);

if(cljs.core.truth_((function (){var and__11885__auto__ = statements;
if(cljs.core.truth_(and__11885__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__11885__auto__;
}
})())){
return cljs.compiler.emitln.call(null,"})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__15652){
var map__15653 = p__15652;
var map__15653__$1 = ((((!((map__15653 == null)))?((((map__15653.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15653.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15653):map__15653);
var env = cljs.core.get.call(null,map__15653__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var try$ = cljs.core.get.call(null,map__15653__$1,new cljs.core.Keyword(null,"try","try",1380742522));
var catch$ = cljs.core.get.call(null,map__15653__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__15653__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__15653__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__11897__auto__ = name;
if(cljs.core.truth_(or__11897__auto__)){
return or__11897__auto__;
} else {
return finally$;
}
})())){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

cljs.compiler.emits.call(null,"try{",try$,"}");

if(cljs.core.truth_(name)){
cljs.compiler.emits.call(null,"catch (",cljs.compiler.munge.call(null,name),"){",catch$,"}");
} else {
}

if(cljs.core.truth_(finally$)){
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(finally$))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("finally block cannot contain constant"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Keyword(null,"constant","constant",-379609303),cljs.core.list(new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"finally","finally",-1065347064,null)))))].join('')));
}

cljs.compiler.emits.call(null,"finally {",finally$,"}");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
} else {
return cljs.compiler.emits.call(null,try$);
}
}));
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__15655,is_loop){
var map__15667 = p__15655;
var map__15667__$1 = ((((!((map__15667 == null)))?((((map__15667.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15667.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15667):map__15667);
var bindings = cljs.core.get.call(null,map__15667__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__15667__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__15667__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR_15669_15678 = cljs.compiler._STAR_lexical_renames_STAR_;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR_15669_15678,context,map__15667,map__15667__$1,bindings,expr,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str(name),cljs.core.str("-")].join(''))],null));
});})(_STAR_lexical_renames_STAR_15669_15678,context,map__15667,map__15667__$1,bindings,expr,env))
,bindings):null));

try{var seq__15670_15679 = cljs.core.seq.call(null,bindings);
var chunk__15671_15680 = null;
var count__15672_15681 = (0);
var i__15673_15682 = (0);
while(true){
if((i__15673_15682 < count__15672_15681)){
var map__15674_15683 = cljs.core._nth.call(null,chunk__15671_15680,i__15673_15682);
var map__15674_15684__$1 = ((((!((map__15674_15683 == null)))?((((map__15674_15683.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15674_15683.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15674_15683):map__15674_15683);
var binding_15685 = map__15674_15684__$1;
var init_15686 = cljs.core.get.call(null,map__15674_15684__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_15685);

cljs.compiler.emitln.call(null," = ",init_15686,";");

var G__15687 = seq__15670_15679;
var G__15688 = chunk__15671_15680;
var G__15689 = count__15672_15681;
var G__15690 = (i__15673_15682 + (1));
seq__15670_15679 = G__15687;
chunk__15671_15680 = G__15688;
count__15672_15681 = G__15689;
i__15673_15682 = G__15690;
continue;
} else {
var temp__4425__auto___15691 = cljs.core.seq.call(null,seq__15670_15679);
if(temp__4425__auto___15691){
var seq__15670_15692__$1 = temp__4425__auto___15691;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15670_15692__$1)){
var c__12701__auto___15693 = cljs.core.chunk_first.call(null,seq__15670_15692__$1);
var G__15694 = cljs.core.chunk_rest.call(null,seq__15670_15692__$1);
var G__15695 = c__12701__auto___15693;
var G__15696 = cljs.core.count.call(null,c__12701__auto___15693);
var G__15697 = (0);
seq__15670_15679 = G__15694;
chunk__15671_15680 = G__15695;
count__15672_15681 = G__15696;
i__15673_15682 = G__15697;
continue;
} else {
var map__15676_15698 = cljs.core.first.call(null,seq__15670_15692__$1);
var map__15676_15699__$1 = ((((!((map__15676_15698 == null)))?((((map__15676_15698.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15676_15698.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15676_15698):map__15676_15698);
var binding_15700 = map__15676_15699__$1;
var init_15701 = cljs.core.get.call(null,map__15676_15699__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_15700);

cljs.compiler.emitln.call(null," = ",init_15701,";");

var G__15702 = cljs.core.next.call(null,seq__15670_15692__$1);
var G__15703 = null;
var G__15704 = (0);
var G__15705 = (0);
seq__15670_15679 = G__15702;
chunk__15671_15680 = G__15703;
count__15672_15681 = G__15704;
i__15673_15682 = G__15705;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR_15669_15678;
}
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"let","let",-1282412701),(function (ast){
return cljs.compiler.emit_let.call(null,ast,false);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"loop","loop",-395552849),(function (ast){
return cljs.compiler.emit_let.call(null,ast,true);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__15706){
var map__15707 = p__15706;
var map__15707__$1 = ((((!((map__15707 == null)))?((((map__15707.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15707.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15707):map__15707);
var frame = cljs.core.get.call(null,map__15707__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__15707__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__15707__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__12801__auto___15709 = cljs.core.count.call(null,exprs);
var i_15710 = (0);
while(true){
if((i_15710 < n__12801__auto___15709)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_15710)," = ",exprs.call(null,i_15710),";");

var G__15711 = (i_15710 + (1));
i_15710 = G__15711;
continue;
} else {
}
break;
}

var n__12801__auto___15712 = cljs.core.count.call(null,exprs);
var i_15713 = (0);
while(true){
if((i_15713 < n__12801__auto___15712)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_15713))," = ",temps.call(null,i_15713),";");

var G__15714 = (i_15713 + (1));
i_15713 = G__15714;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__15715){
var map__15716 = p__15715;
var map__15716__$1 = ((((!((map__15716 == null)))?((((map__15716.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15716.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15716):map__15716);
var bindings = cljs.core.get.call(null,map__15716__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__15716__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__15716__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__15718_15726 = cljs.core.seq.call(null,bindings);
var chunk__15719_15727 = null;
var count__15720_15728 = (0);
var i__15721_15729 = (0);
while(true){
if((i__15721_15729 < count__15720_15728)){
var map__15722_15730 = cljs.core._nth.call(null,chunk__15719_15727,i__15721_15729);
var map__15722_15731__$1 = ((((!((map__15722_15730 == null)))?((((map__15722_15730.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15722_15730.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15722_15730):map__15722_15730);
var binding_15732 = map__15722_15731__$1;
var init_15733 = cljs.core.get.call(null,map__15722_15731__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_15732)," = ",init_15733,";");

var G__15734 = seq__15718_15726;
var G__15735 = chunk__15719_15727;
var G__15736 = count__15720_15728;
var G__15737 = (i__15721_15729 + (1));
seq__15718_15726 = G__15734;
chunk__15719_15727 = G__15735;
count__15720_15728 = G__15736;
i__15721_15729 = G__15737;
continue;
} else {
var temp__4425__auto___15738 = cljs.core.seq.call(null,seq__15718_15726);
if(temp__4425__auto___15738){
var seq__15718_15739__$1 = temp__4425__auto___15738;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15718_15739__$1)){
var c__12701__auto___15740 = cljs.core.chunk_first.call(null,seq__15718_15739__$1);
var G__15741 = cljs.core.chunk_rest.call(null,seq__15718_15739__$1);
var G__15742 = c__12701__auto___15740;
var G__15743 = cljs.core.count.call(null,c__12701__auto___15740);
var G__15744 = (0);
seq__15718_15726 = G__15741;
chunk__15719_15727 = G__15742;
count__15720_15728 = G__15743;
i__15721_15729 = G__15744;
continue;
} else {
var map__15724_15745 = cljs.core.first.call(null,seq__15718_15739__$1);
var map__15724_15746__$1 = ((((!((map__15724_15745 == null)))?((((map__15724_15745.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15724_15745.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15724_15745):map__15724_15745);
var binding_15747 = map__15724_15746__$1;
var init_15748 = cljs.core.get.call(null,map__15724_15746__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_15747)," = ",init_15748,";");

var G__15749 = cljs.core.next.call(null,seq__15718_15739__$1);
var G__15750 = null;
var G__15751 = (0);
var G__15752 = (0);
seq__15718_15726 = G__15749;
chunk__15719_15727 = G__15750;
count__15720_15728 = G__15751;
i__15721_15729 = G__15752;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,expr);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
}));
cljs.compiler.protocol_prefix = (function cljs$compiler$protocol_prefix(psym){
return cljs.core.symbol.call(null,[cljs.core.str([cljs.core.str(psym)].join('').replace((new RegExp("\\.","g")),"$").replace("/","$")),cljs.core.str("$")].join(''));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__15755){
var map__15756 = p__15755;
var map__15756__$1 = ((((!((map__15756 == null)))?((((map__15756.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15756.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15756):map__15756);
var expr = map__15756__$1;
var f = cljs.core.get.call(null,map__15756__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var args = cljs.core.get.call(null,map__15756__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__15756__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__11885__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__11885__auto__)){
var and__11885__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info));
if(and__11885__auto____$1){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__11885__auto____$1;
}
} else {
return and__11885__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__11885__auto__ = protocol;
if(cljs.core.truth_(and__11885__auto__)){
var and__11885__auto____$1 = tag;
if(cljs.core.truth_(and__11885__auto____$1)){
var or__11897__auto__ = (function (){var and__11885__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__11885__auto____$2)){
var and__11885__auto____$3 = protocol;
if(cljs.core.truth_(and__11885__auto____$3)){
return cljs.core._EQ_.call(null,tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
} else {
return and__11885__auto____$3;
}
} else {
return and__11885__auto____$2;
}
})();
if(cljs.core.truth_(or__11897__auto__)){
return or__11897__auto__;
} else {
var and__11885__auto____$2 = (function (){var or__11897__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(or__11897__auto____$1)){
return or__11897__auto____$1;
} else {
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__11885__auto____$2)){
var or__11897__auto____$1 = cljs.core._EQ_.call(null,protocol,tag);
if(or__11897__auto____$1){
return or__11897__auto____$1;
} else {
var and__11885__auto____$3 = !(cljs.core.set_QMARK_.call(null,tag));
if(and__11885__auto____$3){
var and__11885__auto____$4 = cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"clj","clj",980036099,null),null,new cljs.core.Symbol(null,"any","any",-948528346,null),null,new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),null], null), null).call(null,tag));
if(and__11885__auto____$4){
var temp__4425__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),tag));
if(cljs.core.truth_(temp__4425__auto__)){
var ps = temp__4425__auto__;
return ps.call(null,protocol);
} else {
return null;
}
} else {
return and__11885__auto____$4;
}
} else {
return and__11885__auto____$3;
}
}
} else {
return and__11885__auto____$2;
}
}
} else {
return and__11885__auto____$1;
}
} else {
return and__11885__auto__;
}
})();
var opt_not_QMARK_ = (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.call(null,cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr))),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var js_QMARK_ = (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"js","js",-886355190,null))) || (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null)));
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__11897__auto__ = cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__11897__auto__){
return or__11897__auto__;
} else {
var temp__4425__auto__ = [cljs.core.str(ns)].join('');
if(cljs.core.truth_(temp__4425__auto__)){
var ns_str = temp__4425__auto__;
return cljs.core._EQ_.call(null,cljs.core.get.call(null,clojure.string.split.call(null,ns_str,/\./),(0),null),"goog");
} else {
return null;
}
}
})():null);
var keyword_QMARK_ = (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f),new cljs.core.Keyword(null,"constant","constant",-379609303))) && ((new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(f) instanceof cljs.core.Keyword));
var vec__15758 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if((cljs.core.not.call(null,variadic_QMARK_)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,mps),(1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__11885__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__11885__auto__)){
return (arity > mfa);
} else {
return and__11885__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__15756,map__15756__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str(cljs.compiler.munge.call(null,info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$variadic")].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__15756,map__15756__$1,expr,f,args,env){
return (function (p1__15753_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__15753_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__15756,map__15756__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__15756,map__15756__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([arity], true),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__15756,map__15756__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str(cljs.compiler.munge.call(null,info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__15756,map__15756__$1,expr,f,args,env){
return (function (p1__15754_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__15754_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__15756,map__15756__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__15756,map__15756__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__15758,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__15758,(1),null);
var env__14928__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14928__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"!(",cljs.core.first.call(null,args),")");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_15759 = [cljs.core.str(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_15759,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_15760 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_15760,args)),(((mfa_15760 === (0)))?null:","),"cljs.core.array_seq([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_15760,args)),"], 0))");
} else {
if(cljs.core.truth_((function (){var or__11897__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__11897__auto__)){
return or__11897__auto__;
} else {
var or__11897__auto____$1 = js_QMARK_;
if(or__11897__auto____$1){
return or__11897__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_((function (){var and__11885__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__11885__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"var","var",-769682797));
} else {
return and__11885__auto__;
}
})())){
var fprop_15761 = [cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,"(",f__$1,fprop_15761," ? ",f__$1,fprop_15761,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14928__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__15762){
var map__15763 = p__15762;
var map__15763__$1 = ((((!((map__15763 == null)))?((((map__15763.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15763.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15763):map__15763);
var ctor = cljs.core.get.call(null,map__15763__$1,new cljs.core.Keyword(null,"ctor","ctor",1750864802));
var args = cljs.core.get.call(null,map__15763__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__15763__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__14928__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14928__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14928__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__15765){
var map__15766 = p__15765;
var map__15766__$1 = ((((!((map__15766 == null)))?((((map__15766.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15766.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15766):map__15766);
var target = cljs.core.get.call(null,map__15766__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__15766__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__15766__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__14928__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14928__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14928__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads){
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set();");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set();");
} else {
}

var seq__15772_15776 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.distinct.call(null,cljs.core.vals.call(null,libs))));
var chunk__15773_15777 = null;
var count__15774_15778 = (0);
var i__15775_15779 = (0);
while(true){
if((i__15775_15779 < count__15774_15778)){
var lib_15780 = cljs.core._nth.call(null,chunk__15773_15777,i__15775_15779);
if(cljs.core.truth_((function (){var or__11897__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__11897__auto__)){
return or__11897__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_15780),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_15780),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__11897__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__11897__auto__)){
return or__11897__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_15780),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_15780),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_15780),"');");

}
}

var G__15781 = seq__15772_15776;
var G__15782 = chunk__15773_15777;
var G__15783 = count__15774_15778;
var G__15784 = (i__15775_15779 + (1));
seq__15772_15776 = G__15781;
chunk__15773_15777 = G__15782;
count__15774_15778 = G__15783;
i__15775_15779 = G__15784;
continue;
} else {
var temp__4425__auto___15785 = cljs.core.seq.call(null,seq__15772_15776);
if(temp__4425__auto___15785){
var seq__15772_15786__$1 = temp__4425__auto___15785;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15772_15786__$1)){
var c__12701__auto___15787 = cljs.core.chunk_first.call(null,seq__15772_15786__$1);
var G__15788 = cljs.core.chunk_rest.call(null,seq__15772_15786__$1);
var G__15789 = c__12701__auto___15787;
var G__15790 = cljs.core.count.call(null,c__12701__auto___15787);
var G__15791 = (0);
seq__15772_15776 = G__15788;
chunk__15773_15777 = G__15789;
count__15774_15778 = G__15790;
i__15775_15779 = G__15791;
continue;
} else {
var lib_15792 = cljs.core.first.call(null,seq__15772_15786__$1);
if(cljs.core.truth_((function (){var or__11897__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__11897__auto__)){
return or__11897__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_15792),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_15792),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__11897__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__11897__auto__)){
return or__11897__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_15792),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_15792),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_15792),"');");

}
}

var G__15793 = cljs.core.next.call(null,seq__15772_15786__$1);
var G__15794 = null;
var G__15795 = (0);
var G__15796 = (0);
seq__15772_15776 = G__15793;
chunk__15773_15777 = G__15794;
count__15774_15778 = G__15795;
i__15775_15779 = G__15796;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
return cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.into(",loaded_libs_temp,", ",loaded_libs,");");
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__15797){
var map__15798 = p__15797;
var map__15798__$1 = ((((!((map__15798 == null)))?((((map__15798.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15798.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15798):map__15798);
var name = cljs.core.get.call(null,map__15798__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__15798__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__15798__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__15798__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__15798__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__15798__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,name),"');");

if(cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('cljs.core');");
}

cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads));

return cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype*","deftype*",-677871637),(function (p__15800){
var map__15801 = p__15800;
var map__15801__$1 = ((((!((map__15801 == null)))?((((map__15801.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15801.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15801):map__15801);
var t = cljs.core.get.call(null,map__15801__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__15801__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__15801__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__15801__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__15801__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__15803_15817 = cljs.core.seq.call(null,protocols);
var chunk__15804_15818 = null;
var count__15805_15819 = (0);
var i__15806_15820 = (0);
while(true){
if((i__15806_15820 < count__15805_15819)){
var protocol_15821 = cljs.core._nth.call(null,chunk__15804_15818,i__15806_15820);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_15821)].join('')),"}");

var G__15822 = seq__15803_15817;
var G__15823 = chunk__15804_15818;
var G__15824 = count__15805_15819;
var G__15825 = (i__15806_15820 + (1));
seq__15803_15817 = G__15822;
chunk__15804_15818 = G__15823;
count__15805_15819 = G__15824;
i__15806_15820 = G__15825;
continue;
} else {
var temp__4425__auto___15826 = cljs.core.seq.call(null,seq__15803_15817);
if(temp__4425__auto___15826){
var seq__15803_15827__$1 = temp__4425__auto___15826;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15803_15827__$1)){
var c__12701__auto___15828 = cljs.core.chunk_first.call(null,seq__15803_15827__$1);
var G__15829 = cljs.core.chunk_rest.call(null,seq__15803_15827__$1);
var G__15830 = c__12701__auto___15828;
var G__15831 = cljs.core.count.call(null,c__12701__auto___15828);
var G__15832 = (0);
seq__15803_15817 = G__15829;
chunk__15804_15818 = G__15830;
count__15805_15819 = G__15831;
i__15806_15820 = G__15832;
continue;
} else {
var protocol_15833 = cljs.core.first.call(null,seq__15803_15827__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_15833)].join('')),"}");

var G__15834 = cljs.core.next.call(null,seq__15803_15827__$1);
var G__15835 = null;
var G__15836 = (0);
var G__15837 = (0);
seq__15803_15817 = G__15834;
chunk__15804_15818 = G__15835;
count__15805_15819 = G__15836;
i__15806_15820 = G__15837;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__15807_15838 = cljs.core.seq.call(null,fields__$1);
var chunk__15808_15839 = null;
var count__15809_15840 = (0);
var i__15810_15841 = (0);
while(true){
if((i__15810_15841 < count__15809_15840)){
var fld_15842 = cljs.core._nth.call(null,chunk__15808_15839,i__15810_15841);
cljs.compiler.emitln.call(null,"this.",fld_15842," = ",fld_15842,";");

var G__15843 = seq__15807_15838;
var G__15844 = chunk__15808_15839;
var G__15845 = count__15809_15840;
var G__15846 = (i__15810_15841 + (1));
seq__15807_15838 = G__15843;
chunk__15808_15839 = G__15844;
count__15809_15840 = G__15845;
i__15810_15841 = G__15846;
continue;
} else {
var temp__4425__auto___15847 = cljs.core.seq.call(null,seq__15807_15838);
if(temp__4425__auto___15847){
var seq__15807_15848__$1 = temp__4425__auto___15847;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15807_15848__$1)){
var c__12701__auto___15849 = cljs.core.chunk_first.call(null,seq__15807_15848__$1);
var G__15850 = cljs.core.chunk_rest.call(null,seq__15807_15848__$1);
var G__15851 = c__12701__auto___15849;
var G__15852 = cljs.core.count.call(null,c__12701__auto___15849);
var G__15853 = (0);
seq__15807_15838 = G__15850;
chunk__15808_15839 = G__15851;
count__15809_15840 = G__15852;
i__15810_15841 = G__15853;
continue;
} else {
var fld_15854 = cljs.core.first.call(null,seq__15807_15848__$1);
cljs.compiler.emitln.call(null,"this.",fld_15854," = ",fld_15854,";");

var G__15855 = cljs.core.next.call(null,seq__15807_15848__$1);
var G__15856 = null;
var G__15857 = (0);
var G__15858 = (0);
seq__15807_15838 = G__15855;
chunk__15808_15839 = G__15856;
count__15809_15840 = G__15857;
i__15810_15841 = G__15858;
continue;
}
} else {
}
}
break;
}

var seq__15811_15859 = cljs.core.seq.call(null,pmasks);
var chunk__15812_15860 = null;
var count__15813_15861 = (0);
var i__15814_15862 = (0);
while(true){
if((i__15814_15862 < count__15813_15861)){
var vec__15815_15863 = cljs.core._nth.call(null,chunk__15812_15860,i__15814_15862);
var pno_15864 = cljs.core.nth.call(null,vec__15815_15863,(0),null);
var pmask_15865 = cljs.core.nth.call(null,vec__15815_15863,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_15864,"$ = ",pmask_15865,";");

var G__15866 = seq__15811_15859;
var G__15867 = chunk__15812_15860;
var G__15868 = count__15813_15861;
var G__15869 = (i__15814_15862 + (1));
seq__15811_15859 = G__15866;
chunk__15812_15860 = G__15867;
count__15813_15861 = G__15868;
i__15814_15862 = G__15869;
continue;
} else {
var temp__4425__auto___15870 = cljs.core.seq.call(null,seq__15811_15859);
if(temp__4425__auto___15870){
var seq__15811_15871__$1 = temp__4425__auto___15870;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15811_15871__$1)){
var c__12701__auto___15872 = cljs.core.chunk_first.call(null,seq__15811_15871__$1);
var G__15873 = cljs.core.chunk_rest.call(null,seq__15811_15871__$1);
var G__15874 = c__12701__auto___15872;
var G__15875 = cljs.core.count.call(null,c__12701__auto___15872);
var G__15876 = (0);
seq__15811_15859 = G__15873;
chunk__15812_15860 = G__15874;
count__15813_15861 = G__15875;
i__15814_15862 = G__15876;
continue;
} else {
var vec__15816_15877 = cljs.core.first.call(null,seq__15811_15871__$1);
var pno_15878 = cljs.core.nth.call(null,vec__15816_15877,(0),null);
var pmask_15879 = cljs.core.nth.call(null,vec__15816_15877,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_15878,"$ = ",pmask_15879,";");

var G__15880 = cljs.core.next.call(null,seq__15811_15871__$1);
var G__15881 = null;
var G__15882 = (0);
var G__15883 = (0);
seq__15811_15859 = G__15880;
chunk__15812_15860 = G__15881;
count__15813_15861 = G__15882;
i__15814_15862 = G__15883;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"})");

return cljs.compiler.emit.call(null,body);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord*","defrecord*",718069562),(function (p__15884){
var map__15885 = p__15884;
var map__15885__$1 = ((((!((map__15885 == null)))?((((map__15885.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15885.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15885):map__15885);
var t = cljs.core.get.call(null,map__15885__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__15885__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__15885__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__15885__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__15885__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__15887_15901 = cljs.core.seq.call(null,protocols);
var chunk__15888_15902 = null;
var count__15889_15903 = (0);
var i__15890_15904 = (0);
while(true){
if((i__15890_15904 < count__15889_15903)){
var protocol_15905 = cljs.core._nth.call(null,chunk__15888_15902,i__15890_15904);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_15905)].join('')),"}");

var G__15906 = seq__15887_15901;
var G__15907 = chunk__15888_15902;
var G__15908 = count__15889_15903;
var G__15909 = (i__15890_15904 + (1));
seq__15887_15901 = G__15906;
chunk__15888_15902 = G__15907;
count__15889_15903 = G__15908;
i__15890_15904 = G__15909;
continue;
} else {
var temp__4425__auto___15910 = cljs.core.seq.call(null,seq__15887_15901);
if(temp__4425__auto___15910){
var seq__15887_15911__$1 = temp__4425__auto___15910;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15887_15911__$1)){
var c__12701__auto___15912 = cljs.core.chunk_first.call(null,seq__15887_15911__$1);
var G__15913 = cljs.core.chunk_rest.call(null,seq__15887_15911__$1);
var G__15914 = c__12701__auto___15912;
var G__15915 = cljs.core.count.call(null,c__12701__auto___15912);
var G__15916 = (0);
seq__15887_15901 = G__15913;
chunk__15888_15902 = G__15914;
count__15889_15903 = G__15915;
i__15890_15904 = G__15916;
continue;
} else {
var protocol_15917 = cljs.core.first.call(null,seq__15887_15911__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_15917)].join('')),"}");

var G__15918 = cljs.core.next.call(null,seq__15887_15911__$1);
var G__15919 = null;
var G__15920 = (0);
var G__15921 = (0);
seq__15887_15901 = G__15918;
chunk__15888_15902 = G__15919;
count__15889_15903 = G__15920;
i__15890_15904 = G__15921;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__15891_15922 = cljs.core.seq.call(null,fields__$1);
var chunk__15892_15923 = null;
var count__15893_15924 = (0);
var i__15894_15925 = (0);
while(true){
if((i__15894_15925 < count__15893_15924)){
var fld_15926 = cljs.core._nth.call(null,chunk__15892_15923,i__15894_15925);
cljs.compiler.emitln.call(null,"this.",fld_15926," = ",fld_15926,";");

var G__15927 = seq__15891_15922;
var G__15928 = chunk__15892_15923;
var G__15929 = count__15893_15924;
var G__15930 = (i__15894_15925 + (1));
seq__15891_15922 = G__15927;
chunk__15892_15923 = G__15928;
count__15893_15924 = G__15929;
i__15894_15925 = G__15930;
continue;
} else {
var temp__4425__auto___15931 = cljs.core.seq.call(null,seq__15891_15922);
if(temp__4425__auto___15931){
var seq__15891_15932__$1 = temp__4425__auto___15931;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15891_15932__$1)){
var c__12701__auto___15933 = cljs.core.chunk_first.call(null,seq__15891_15932__$1);
var G__15934 = cljs.core.chunk_rest.call(null,seq__15891_15932__$1);
var G__15935 = c__12701__auto___15933;
var G__15936 = cljs.core.count.call(null,c__12701__auto___15933);
var G__15937 = (0);
seq__15891_15922 = G__15934;
chunk__15892_15923 = G__15935;
count__15893_15924 = G__15936;
i__15894_15925 = G__15937;
continue;
} else {
var fld_15938 = cljs.core.first.call(null,seq__15891_15932__$1);
cljs.compiler.emitln.call(null,"this.",fld_15938," = ",fld_15938,";");

var G__15939 = cljs.core.next.call(null,seq__15891_15932__$1);
var G__15940 = null;
var G__15941 = (0);
var G__15942 = (0);
seq__15891_15922 = G__15939;
chunk__15892_15923 = G__15940;
count__15893_15924 = G__15941;
i__15894_15925 = G__15942;
continue;
}
} else {
}
}
break;
}

var seq__15895_15943 = cljs.core.seq.call(null,pmasks);
var chunk__15896_15944 = null;
var count__15897_15945 = (0);
var i__15898_15946 = (0);
while(true){
if((i__15898_15946 < count__15897_15945)){
var vec__15899_15947 = cljs.core._nth.call(null,chunk__15896_15944,i__15898_15946);
var pno_15948 = cljs.core.nth.call(null,vec__15899_15947,(0),null);
var pmask_15949 = cljs.core.nth.call(null,vec__15899_15947,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_15948,"$ = ",pmask_15949,";");

var G__15950 = seq__15895_15943;
var G__15951 = chunk__15896_15944;
var G__15952 = count__15897_15945;
var G__15953 = (i__15898_15946 + (1));
seq__15895_15943 = G__15950;
chunk__15896_15944 = G__15951;
count__15897_15945 = G__15952;
i__15898_15946 = G__15953;
continue;
} else {
var temp__4425__auto___15954 = cljs.core.seq.call(null,seq__15895_15943);
if(temp__4425__auto___15954){
var seq__15895_15955__$1 = temp__4425__auto___15954;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15895_15955__$1)){
var c__12701__auto___15956 = cljs.core.chunk_first.call(null,seq__15895_15955__$1);
var G__15957 = cljs.core.chunk_rest.call(null,seq__15895_15955__$1);
var G__15958 = c__12701__auto___15956;
var G__15959 = cljs.core.count.call(null,c__12701__auto___15956);
var G__15960 = (0);
seq__15895_15943 = G__15957;
chunk__15896_15944 = G__15958;
count__15897_15945 = G__15959;
i__15898_15946 = G__15960;
continue;
} else {
var vec__15900_15961 = cljs.core.first.call(null,seq__15895_15955__$1);
var pno_15962 = cljs.core.nth.call(null,vec__15900_15961,(0),null);
var pmask_15963 = cljs.core.nth.call(null,vec__15900_15961,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_15962,"$ = ",pmask_15963,";");

var G__15964 = cljs.core.next.call(null,seq__15895_15955__$1);
var G__15965 = null;
var G__15966 = (0);
var G__15967 = (0);
seq__15895_15943 = G__15964;
chunk__15896_15944 = G__15965;
count__15897_15945 = G__15966;
i__15898_15946 = G__15967;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"})");

return cljs.compiler.emit.call(null,body);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"dot","dot",1442709401),(function (p__15968){
var map__15969 = p__15968;
var map__15969__$1 = ((((!((map__15969 == null)))?((((map__15969.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15969.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15969):map__15969);
var target = cljs.core.get.call(null,map__15969__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__15969__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__15969__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__15969__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__15969__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__14928__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14928__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14928__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__15971){
var map__15972 = p__15971;
var map__15972__$1 = ((((!((map__15972 == null)))?((((map__15972.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15972.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15972):map__15972);
var op = cljs.core.get.call(null,map__15972__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__15972__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__15972__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__15972__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__15972__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__11885__auto__ = code;
if(cljs.core.truth_(and__11885__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__11885__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__14928__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14928__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14928__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.build_affecting_options = (function cljs$compiler$build_affecting_options(opts){
return cljs.core.select_keys.call(null,opts,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),new cljs.core.Keyword(null,"optimize-constants","optimize-constants",232704518),new cljs.core.Keyword(null,"elide-asserts","elide-asserts",537063272),new cljs.core.Keyword(null,"target","target",253001721)], null));
});
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
var seq__15982 = cljs.core.seq.call(null,table);
var chunk__15983 = null;
var count__15984 = (0);
var i__15985 = (0);
while(true){
if((i__15985 < count__15984)){
var vec__15986 = cljs.core._nth.call(null,chunk__15983,i__15985);
var sym = cljs.core.nth.call(null,vec__15986,(0),null);
var value = cljs.core.nth.call(null,vec__15986,(1),null);
var ns_15988 = cljs.core.namespace.call(null,sym);
var name_15989 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot emit constant for type "),cljs.core.str(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471)], null));

}
}

cljs.compiler.emits.call(null,";\n");

var G__15990 = seq__15982;
var G__15991 = chunk__15983;
var G__15992 = count__15984;
var G__15993 = (i__15985 + (1));
seq__15982 = G__15990;
chunk__15983 = G__15991;
count__15984 = G__15992;
i__15985 = G__15993;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__15982);
if(temp__4425__auto__){
var seq__15982__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15982__$1)){
var c__12701__auto__ = cljs.core.chunk_first.call(null,seq__15982__$1);
var G__15994 = cljs.core.chunk_rest.call(null,seq__15982__$1);
var G__15995 = c__12701__auto__;
var G__15996 = cljs.core.count.call(null,c__12701__auto__);
var G__15997 = (0);
seq__15982 = G__15994;
chunk__15983 = G__15995;
count__15984 = G__15996;
i__15985 = G__15997;
continue;
} else {
var vec__15987 = cljs.core.first.call(null,seq__15982__$1);
var sym = cljs.core.nth.call(null,vec__15987,(0),null);
var value = cljs.core.nth.call(null,vec__15987,(1),null);
var ns_15998 = cljs.core.namespace.call(null,sym);
var name_15999 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot emit constant for type "),cljs.core.str(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471)], null));

}
}

cljs.compiler.emits.call(null,";\n");

var G__16000 = cljs.core.next.call(null,seq__15982__$1);
var G__16001 = null;
var G__16002 = (0);
var G__16003 = (0);
seq__15982 = G__16000;
chunk__15983 = G__16001;
count__15984 = G__16002;
i__15985 = G__16003;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=compiler.js.map?rel=1451058354640