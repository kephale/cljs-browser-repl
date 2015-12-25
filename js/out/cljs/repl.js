// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__21875_21889 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__21876_21890 = null;
var count__21877_21891 = (0);
var i__21878_21892 = (0);
while(true){
if((i__21878_21892 < count__21877_21891)){
var f_21893 = cljs.core._nth.call(null,chunk__21876_21890,i__21878_21892);
cljs.core.println.call(null,"  ",f_21893);

var G__21894 = seq__21875_21889;
var G__21895 = chunk__21876_21890;
var G__21896 = count__21877_21891;
var G__21897 = (i__21878_21892 + (1));
seq__21875_21889 = G__21894;
chunk__21876_21890 = G__21895;
count__21877_21891 = G__21896;
i__21878_21892 = G__21897;
continue;
} else {
var temp__4425__auto___21898 = cljs.core.seq.call(null,seq__21875_21889);
if(temp__4425__auto___21898){
var seq__21875_21899__$1 = temp__4425__auto___21898;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21875_21899__$1)){
var c__12701__auto___21900 = cljs.core.chunk_first.call(null,seq__21875_21899__$1);
var G__21901 = cljs.core.chunk_rest.call(null,seq__21875_21899__$1);
var G__21902 = c__12701__auto___21900;
var G__21903 = cljs.core.count.call(null,c__12701__auto___21900);
var G__21904 = (0);
seq__21875_21889 = G__21901;
chunk__21876_21890 = G__21902;
count__21877_21891 = G__21903;
i__21878_21892 = G__21904;
continue;
} else {
var f_21905 = cljs.core.first.call(null,seq__21875_21899__$1);
cljs.core.println.call(null,"  ",f_21905);

var G__21906 = cljs.core.next.call(null,seq__21875_21899__$1);
var G__21907 = null;
var G__21908 = (0);
var G__21909 = (0);
seq__21875_21889 = G__21906;
chunk__21876_21890 = G__21907;
count__21877_21891 = G__21908;
i__21878_21892 = G__21909;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_21910 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__11897__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__11897__auto__)){
return or__11897__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_21910);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_21910)))?cljs.core.second.call(null,arglists_21910):arglists_21910));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__21879 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__21880 = null;
var count__21881 = (0);
var i__21882 = (0);
while(true){
if((i__21882 < count__21881)){
var vec__21883 = cljs.core._nth.call(null,chunk__21880,i__21882);
var name = cljs.core.nth.call(null,vec__21883,(0),null);
var map__21884 = cljs.core.nth.call(null,vec__21883,(1),null);
var map__21884__$1 = ((((!((map__21884 == null)))?((((map__21884.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21884.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21884):map__21884);
var doc = cljs.core.get.call(null,map__21884__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__21884__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__21911 = seq__21879;
var G__21912 = chunk__21880;
var G__21913 = count__21881;
var G__21914 = (i__21882 + (1));
seq__21879 = G__21911;
chunk__21880 = G__21912;
count__21881 = G__21913;
i__21882 = G__21914;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__21879);
if(temp__4425__auto__){
var seq__21879__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21879__$1)){
var c__12701__auto__ = cljs.core.chunk_first.call(null,seq__21879__$1);
var G__21915 = cljs.core.chunk_rest.call(null,seq__21879__$1);
var G__21916 = c__12701__auto__;
var G__21917 = cljs.core.count.call(null,c__12701__auto__);
var G__21918 = (0);
seq__21879 = G__21915;
chunk__21880 = G__21916;
count__21881 = G__21917;
i__21882 = G__21918;
continue;
} else {
var vec__21886 = cljs.core.first.call(null,seq__21879__$1);
var name = cljs.core.nth.call(null,vec__21886,(0),null);
var map__21887 = cljs.core.nth.call(null,vec__21886,(1),null);
var map__21887__$1 = ((((!((map__21887 == null)))?((((map__21887.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21887.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21887):map__21887);
var doc = cljs.core.get.call(null,map__21887__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__21887__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__21919 = cljs.core.next.call(null,seq__21879__$1);
var G__21920 = null;
var G__21921 = (0);
var G__21922 = (0);
seq__21879 = G__21919;
chunk__21880 = G__21920;
count__21881 = G__21921;
i__21882 = G__21922;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1451058371123