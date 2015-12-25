// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__11897__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__11897__auto__){
return or__11897__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__11897__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__11897__auto__)){
return or__11897__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__24169_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__24169_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__24174 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__24175 = null;
var count__24176 = (0);
var i__24177 = (0);
while(true){
if((i__24177 < count__24176)){
var n = cljs.core._nth.call(null,chunk__24175,i__24177);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__24178 = seq__24174;
var G__24179 = chunk__24175;
var G__24180 = count__24176;
var G__24181 = (i__24177 + (1));
seq__24174 = G__24178;
chunk__24175 = G__24179;
count__24176 = G__24180;
i__24177 = G__24181;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24174);
if(temp__4425__auto__){
var seq__24174__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24174__$1)){
var c__12701__auto__ = cljs.core.chunk_first.call(null,seq__24174__$1);
var G__24182 = cljs.core.chunk_rest.call(null,seq__24174__$1);
var G__24183 = c__12701__auto__;
var G__24184 = cljs.core.count.call(null,c__12701__auto__);
var G__24185 = (0);
seq__24174 = G__24182;
chunk__24175 = G__24183;
count__24176 = G__24184;
i__24177 = G__24185;
continue;
} else {
var n = cljs.core.first.call(null,seq__24174__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__24186 = cljs.core.next.call(null,seq__24174__$1);
var G__24187 = null;
var G__24188 = (0);
var G__24189 = (0);
seq__24174 = G__24186;
chunk__24175 = G__24187;
count__24176 = G__24188;
i__24177 = G__24189;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__24228_24235 = cljs.core.seq.call(null,deps);
var chunk__24229_24236 = null;
var count__24230_24237 = (0);
var i__24231_24238 = (0);
while(true){
if((i__24231_24238 < count__24230_24237)){
var dep_24239 = cljs.core._nth.call(null,chunk__24229_24236,i__24231_24238);
topo_sort_helper_STAR_.call(null,dep_24239,(depth + (1)),state);

var G__24240 = seq__24228_24235;
var G__24241 = chunk__24229_24236;
var G__24242 = count__24230_24237;
var G__24243 = (i__24231_24238 + (1));
seq__24228_24235 = G__24240;
chunk__24229_24236 = G__24241;
count__24230_24237 = G__24242;
i__24231_24238 = G__24243;
continue;
} else {
var temp__4425__auto___24244 = cljs.core.seq.call(null,seq__24228_24235);
if(temp__4425__auto___24244){
var seq__24228_24245__$1 = temp__4425__auto___24244;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24228_24245__$1)){
var c__12701__auto___24246 = cljs.core.chunk_first.call(null,seq__24228_24245__$1);
var G__24247 = cljs.core.chunk_rest.call(null,seq__24228_24245__$1);
var G__24248 = c__12701__auto___24246;
var G__24249 = cljs.core.count.call(null,c__12701__auto___24246);
var G__24250 = (0);
seq__24228_24235 = G__24247;
chunk__24229_24236 = G__24248;
count__24230_24237 = G__24249;
i__24231_24238 = G__24250;
continue;
} else {
var dep_24251 = cljs.core.first.call(null,seq__24228_24245__$1);
topo_sort_helper_STAR_.call(null,dep_24251,(depth + (1)),state);

var G__24252 = cljs.core.next.call(null,seq__24228_24245__$1);
var G__24253 = null;
var G__24254 = (0);
var G__24255 = (0);
seq__24228_24235 = G__24252;
chunk__24229_24236 = G__24253;
count__24230_24237 = G__24254;
i__24231_24238 = G__24255;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__24232){
var vec__24234 = p__24232;
var x = cljs.core.nth.call(null,vec__24234,(0),null);
var xs = cljs.core.nthnext.call(null,vec__24234,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__24234,x,xs,get_deps__$1){
return (function (p1__24190_SHARP_){
return clojure.set.difference.call(null,p1__24190_SHARP_,x);
});})(vec__24234,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__24268 = cljs.core.seq.call(null,provides);
var chunk__24269 = null;
var count__24270 = (0);
var i__24271 = (0);
while(true){
if((i__24271 < count__24270)){
var prov = cljs.core._nth.call(null,chunk__24269,i__24271);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__24272_24280 = cljs.core.seq.call(null,requires);
var chunk__24273_24281 = null;
var count__24274_24282 = (0);
var i__24275_24283 = (0);
while(true){
if((i__24275_24283 < count__24274_24282)){
var req_24284 = cljs.core._nth.call(null,chunk__24273_24281,i__24275_24283);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24284,prov);

var G__24285 = seq__24272_24280;
var G__24286 = chunk__24273_24281;
var G__24287 = count__24274_24282;
var G__24288 = (i__24275_24283 + (1));
seq__24272_24280 = G__24285;
chunk__24273_24281 = G__24286;
count__24274_24282 = G__24287;
i__24275_24283 = G__24288;
continue;
} else {
var temp__4425__auto___24289 = cljs.core.seq.call(null,seq__24272_24280);
if(temp__4425__auto___24289){
var seq__24272_24290__$1 = temp__4425__auto___24289;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24272_24290__$1)){
var c__12701__auto___24291 = cljs.core.chunk_first.call(null,seq__24272_24290__$1);
var G__24292 = cljs.core.chunk_rest.call(null,seq__24272_24290__$1);
var G__24293 = c__12701__auto___24291;
var G__24294 = cljs.core.count.call(null,c__12701__auto___24291);
var G__24295 = (0);
seq__24272_24280 = G__24292;
chunk__24273_24281 = G__24293;
count__24274_24282 = G__24294;
i__24275_24283 = G__24295;
continue;
} else {
var req_24296 = cljs.core.first.call(null,seq__24272_24290__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24296,prov);

var G__24297 = cljs.core.next.call(null,seq__24272_24290__$1);
var G__24298 = null;
var G__24299 = (0);
var G__24300 = (0);
seq__24272_24280 = G__24297;
chunk__24273_24281 = G__24298;
count__24274_24282 = G__24299;
i__24275_24283 = G__24300;
continue;
}
} else {
}
}
break;
}

var G__24301 = seq__24268;
var G__24302 = chunk__24269;
var G__24303 = count__24270;
var G__24304 = (i__24271 + (1));
seq__24268 = G__24301;
chunk__24269 = G__24302;
count__24270 = G__24303;
i__24271 = G__24304;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24268);
if(temp__4425__auto__){
var seq__24268__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24268__$1)){
var c__12701__auto__ = cljs.core.chunk_first.call(null,seq__24268__$1);
var G__24305 = cljs.core.chunk_rest.call(null,seq__24268__$1);
var G__24306 = c__12701__auto__;
var G__24307 = cljs.core.count.call(null,c__12701__auto__);
var G__24308 = (0);
seq__24268 = G__24305;
chunk__24269 = G__24306;
count__24270 = G__24307;
i__24271 = G__24308;
continue;
} else {
var prov = cljs.core.first.call(null,seq__24268__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__24276_24309 = cljs.core.seq.call(null,requires);
var chunk__24277_24310 = null;
var count__24278_24311 = (0);
var i__24279_24312 = (0);
while(true){
if((i__24279_24312 < count__24278_24311)){
var req_24313 = cljs.core._nth.call(null,chunk__24277_24310,i__24279_24312);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24313,prov);

var G__24314 = seq__24276_24309;
var G__24315 = chunk__24277_24310;
var G__24316 = count__24278_24311;
var G__24317 = (i__24279_24312 + (1));
seq__24276_24309 = G__24314;
chunk__24277_24310 = G__24315;
count__24278_24311 = G__24316;
i__24279_24312 = G__24317;
continue;
} else {
var temp__4425__auto___24318__$1 = cljs.core.seq.call(null,seq__24276_24309);
if(temp__4425__auto___24318__$1){
var seq__24276_24319__$1 = temp__4425__auto___24318__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24276_24319__$1)){
var c__12701__auto___24320 = cljs.core.chunk_first.call(null,seq__24276_24319__$1);
var G__24321 = cljs.core.chunk_rest.call(null,seq__24276_24319__$1);
var G__24322 = c__12701__auto___24320;
var G__24323 = cljs.core.count.call(null,c__12701__auto___24320);
var G__24324 = (0);
seq__24276_24309 = G__24321;
chunk__24277_24310 = G__24322;
count__24278_24311 = G__24323;
i__24279_24312 = G__24324;
continue;
} else {
var req_24325 = cljs.core.first.call(null,seq__24276_24319__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24325,prov);

var G__24326 = cljs.core.next.call(null,seq__24276_24319__$1);
var G__24327 = null;
var G__24328 = (0);
var G__24329 = (0);
seq__24276_24309 = G__24326;
chunk__24277_24310 = G__24327;
count__24278_24311 = G__24328;
i__24279_24312 = G__24329;
continue;
}
} else {
}
}
break;
}

var G__24330 = cljs.core.next.call(null,seq__24268__$1);
var G__24331 = null;
var G__24332 = (0);
var G__24333 = (0);
seq__24268 = G__24330;
chunk__24269 = G__24331;
count__24270 = G__24332;
i__24271 = G__24333;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__24338_24342 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__24339_24343 = null;
var count__24340_24344 = (0);
var i__24341_24345 = (0);
while(true){
if((i__24341_24345 < count__24340_24344)){
var ns_24346 = cljs.core._nth.call(null,chunk__24339_24343,i__24341_24345);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_24346);

var G__24347 = seq__24338_24342;
var G__24348 = chunk__24339_24343;
var G__24349 = count__24340_24344;
var G__24350 = (i__24341_24345 + (1));
seq__24338_24342 = G__24347;
chunk__24339_24343 = G__24348;
count__24340_24344 = G__24349;
i__24341_24345 = G__24350;
continue;
} else {
var temp__4425__auto___24351 = cljs.core.seq.call(null,seq__24338_24342);
if(temp__4425__auto___24351){
var seq__24338_24352__$1 = temp__4425__auto___24351;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24338_24352__$1)){
var c__12701__auto___24353 = cljs.core.chunk_first.call(null,seq__24338_24352__$1);
var G__24354 = cljs.core.chunk_rest.call(null,seq__24338_24352__$1);
var G__24355 = c__12701__auto___24353;
var G__24356 = cljs.core.count.call(null,c__12701__auto___24353);
var G__24357 = (0);
seq__24338_24342 = G__24354;
chunk__24339_24343 = G__24355;
count__24340_24344 = G__24356;
i__24341_24345 = G__24357;
continue;
} else {
var ns_24358 = cljs.core.first.call(null,seq__24338_24352__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_24358);

var G__24359 = cljs.core.next.call(null,seq__24338_24352__$1);
var G__24360 = null;
var G__24361 = (0);
var G__24362 = (0);
seq__24338_24342 = G__24359;
chunk__24339_24343 = G__24360;
count__24340_24344 = G__24361;
i__24341_24345 = G__24362;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__11897__auto__ = goog.require__;
if(cljs.core.truth_(or__11897__auto__)){
return or__11897__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__24363__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__24363 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24364__i = 0, G__24364__a = new Array(arguments.length -  0);
while (G__24364__i < G__24364__a.length) {G__24364__a[G__24364__i] = arguments[G__24364__i + 0]; ++G__24364__i;}
  args = new cljs.core.IndexedSeq(G__24364__a,0);
} 
return G__24363__delegate.call(this,args);};
G__24363.cljs$lang$maxFixedArity = 0;
G__24363.cljs$lang$applyTo = (function (arglist__24365){
var args = cljs.core.seq(arglist__24365);
return G__24363__delegate(args);
});
G__24363.cljs$core$IFn$_invoke$arity$variadic = G__24363__delegate;
return G__24363;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__24367 = cljs.core._EQ_;
var expr__24368 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__24367.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__24368))){
var path_parts = ((function (pred__24367,expr__24368){
return (function (p1__24366_SHARP_){
return clojure.string.split.call(null,p1__24366_SHARP_,/[\/\\]/);
});})(pred__24367,expr__24368))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__24367,expr__24368){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e24370){if((e24370 instanceof Error)){
var e = e24370;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e24370;

}
}})());
});
;})(path_parts,sep,root,pred__24367,expr__24368))
} else {
if(cljs.core.truth_(pred__24367.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__24368))){
return ((function (pred__24367,expr__24368){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__24367,expr__24368){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__24367,expr__24368))
);

return deferred.addErrback(((function (deferred,pred__24367,expr__24368){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__24367,expr__24368))
);
});
;})(pred__24367,expr__24368))
} else {
return ((function (pred__24367,expr__24368){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__24367,expr__24368))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__24371,callback){
var map__24374 = p__24371;
var map__24374__$1 = ((((!((map__24374 == null)))?((((map__24374.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24374.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24374):map__24374);
var file_msg = map__24374__$1;
var request_url = cljs.core.get.call(null,map__24374__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__24374,map__24374__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__24374,map__24374__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__17398__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17398__auto__){
return (function (){
var f__17399__auto__ = (function (){var switch__17286__auto__ = ((function (c__17398__auto__){
return (function (state_24398){
var state_val_24399 = (state_24398[(1)]);
if((state_val_24399 === (7))){
var inst_24394 = (state_24398[(2)]);
var state_24398__$1 = state_24398;
var statearr_24400_24420 = state_24398__$1;
(statearr_24400_24420[(2)] = inst_24394);

(statearr_24400_24420[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24399 === (1))){
var state_24398__$1 = state_24398;
var statearr_24401_24421 = state_24398__$1;
(statearr_24401_24421[(2)] = null);

(statearr_24401_24421[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24399 === (4))){
var inst_24378 = (state_24398[(7)]);
var inst_24378__$1 = (state_24398[(2)]);
var state_24398__$1 = (function (){var statearr_24402 = state_24398;
(statearr_24402[(7)] = inst_24378__$1);

return statearr_24402;
})();
if(cljs.core.truth_(inst_24378__$1)){
var statearr_24403_24422 = state_24398__$1;
(statearr_24403_24422[(1)] = (5));

} else {
var statearr_24404_24423 = state_24398__$1;
(statearr_24404_24423[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24399 === (6))){
var state_24398__$1 = state_24398;
var statearr_24405_24424 = state_24398__$1;
(statearr_24405_24424[(2)] = null);

(statearr_24405_24424[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24399 === (3))){
var inst_24396 = (state_24398[(2)]);
var state_24398__$1 = state_24398;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24398__$1,inst_24396);
} else {
if((state_val_24399 === (2))){
var state_24398__$1 = state_24398;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24398__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_24399 === (11))){
var inst_24390 = (state_24398[(2)]);
var state_24398__$1 = (function (){var statearr_24406 = state_24398;
(statearr_24406[(8)] = inst_24390);

return statearr_24406;
})();
var statearr_24407_24425 = state_24398__$1;
(statearr_24407_24425[(2)] = null);

(statearr_24407_24425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24399 === (9))){
var inst_24384 = (state_24398[(9)]);
var inst_24382 = (state_24398[(10)]);
var inst_24386 = inst_24384.call(null,inst_24382);
var state_24398__$1 = state_24398;
var statearr_24408_24426 = state_24398__$1;
(statearr_24408_24426[(2)] = inst_24386);

(statearr_24408_24426[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24399 === (5))){
var inst_24378 = (state_24398[(7)]);
var inst_24380 = figwheel.client.file_reloading.blocking_load.call(null,inst_24378);
var state_24398__$1 = state_24398;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24398__$1,(8),inst_24380);
} else {
if((state_val_24399 === (10))){
var inst_24382 = (state_24398[(10)]);
var inst_24388 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_24382);
var state_24398__$1 = state_24398;
var statearr_24409_24427 = state_24398__$1;
(statearr_24409_24427[(2)] = inst_24388);

(statearr_24409_24427[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24399 === (8))){
var inst_24384 = (state_24398[(9)]);
var inst_24378 = (state_24398[(7)]);
var inst_24382 = (state_24398[(2)]);
var inst_24383 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_24384__$1 = cljs.core.get.call(null,inst_24383,inst_24378);
var state_24398__$1 = (function (){var statearr_24410 = state_24398;
(statearr_24410[(9)] = inst_24384__$1);

(statearr_24410[(10)] = inst_24382);

return statearr_24410;
})();
if(cljs.core.truth_(inst_24384__$1)){
var statearr_24411_24428 = state_24398__$1;
(statearr_24411_24428[(1)] = (9));

} else {
var statearr_24412_24429 = state_24398__$1;
(statearr_24412_24429[(1)] = (10));

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
});})(c__17398__auto__))
;
return ((function (switch__17286__auto__,c__17398__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__17287__auto__ = null;
var figwheel$client$file_reloading$state_machine__17287__auto____0 = (function (){
var statearr_24416 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24416[(0)] = figwheel$client$file_reloading$state_machine__17287__auto__);

(statearr_24416[(1)] = (1));

return statearr_24416;
});
var figwheel$client$file_reloading$state_machine__17287__auto____1 = (function (state_24398){
while(true){
var ret_value__17288__auto__ = (function (){try{while(true){
var result__17289__auto__ = switch__17286__auto__.call(null,state_24398);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17289__auto__;
}
break;
}
}catch (e24417){if((e24417 instanceof Object)){
var ex__17290__auto__ = e24417;
var statearr_24418_24430 = state_24398;
(statearr_24418_24430[(5)] = ex__17290__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24398);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24417;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24431 = state_24398;
state_24398 = G__24431;
continue;
} else {
return ret_value__17288__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__17287__auto__ = function(state_24398){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__17287__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__17287__auto____1.call(this,state_24398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__17287__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__17287__auto____0;
figwheel$client$file_reloading$state_machine__17287__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__17287__auto____1;
return figwheel$client$file_reloading$state_machine__17287__auto__;
})()
;})(switch__17286__auto__,c__17398__auto__))
})();
var state__17400__auto__ = (function (){var statearr_24419 = f__17399__auto__.call(null);
(statearr_24419[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17398__auto__);

return statearr_24419;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17400__auto__);
});})(c__17398__auto__))
);

return c__17398__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__24432,callback){
var map__24435 = p__24432;
var map__24435__$1 = ((((!((map__24435 == null)))?((((map__24435.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24435.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24435):map__24435);
var file_msg = map__24435__$1;
var namespace = cljs.core.get.call(null,map__24435__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__24435,map__24435__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__24435,map__24435__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__24437){
var map__24440 = p__24437;
var map__24440__$1 = ((((!((map__24440 == null)))?((((map__24440.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24440.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24440):map__24440);
var file_msg = map__24440__$1;
var namespace = cljs.core.get.call(null,map__24440__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__11885__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__11885__auto__){
var or__11897__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__11897__auto__)){
return or__11897__auto__;
} else {
var or__11897__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__11897__auto____$1)){
return or__11897__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__11885__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__24442,callback){
var map__24445 = p__24442;
var map__24445__$1 = ((((!((map__24445 == null)))?((((map__24445.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24445.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24445):map__24445);
var file_msg = map__24445__$1;
var request_url = cljs.core.get.call(null,map__24445__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__24445__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__17398__auto___24533 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17398__auto___24533,out){
return (function (){
var f__17399__auto__ = (function (){var switch__17286__auto__ = ((function (c__17398__auto___24533,out){
return (function (state_24515){
var state_val_24516 = (state_24515[(1)]);
if((state_val_24516 === (1))){
var inst_24493 = cljs.core.nth.call(null,files,(0),null);
var inst_24494 = cljs.core.nthnext.call(null,files,(1));
var inst_24495 = files;
var state_24515__$1 = (function (){var statearr_24517 = state_24515;
(statearr_24517[(7)] = inst_24494);

(statearr_24517[(8)] = inst_24495);

(statearr_24517[(9)] = inst_24493);

return statearr_24517;
})();
var statearr_24518_24534 = state_24515__$1;
(statearr_24518_24534[(2)] = null);

(statearr_24518_24534[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24516 === (2))){
var inst_24498 = (state_24515[(10)]);
var inst_24495 = (state_24515[(8)]);
var inst_24498__$1 = cljs.core.nth.call(null,inst_24495,(0),null);
var inst_24499 = cljs.core.nthnext.call(null,inst_24495,(1));
var inst_24500 = (inst_24498__$1 == null);
var inst_24501 = cljs.core.not.call(null,inst_24500);
var state_24515__$1 = (function (){var statearr_24519 = state_24515;
(statearr_24519[(10)] = inst_24498__$1);

(statearr_24519[(11)] = inst_24499);

return statearr_24519;
})();
if(inst_24501){
var statearr_24520_24535 = state_24515__$1;
(statearr_24520_24535[(1)] = (4));

} else {
var statearr_24521_24536 = state_24515__$1;
(statearr_24521_24536[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24516 === (3))){
var inst_24513 = (state_24515[(2)]);
var state_24515__$1 = state_24515;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24515__$1,inst_24513);
} else {
if((state_val_24516 === (4))){
var inst_24498 = (state_24515[(10)]);
var inst_24503 = figwheel.client.file_reloading.reload_js_file.call(null,inst_24498);
var state_24515__$1 = state_24515;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24515__$1,(7),inst_24503);
} else {
if((state_val_24516 === (5))){
var inst_24509 = cljs.core.async.close_BANG_.call(null,out);
var state_24515__$1 = state_24515;
var statearr_24522_24537 = state_24515__$1;
(statearr_24522_24537[(2)] = inst_24509);

(statearr_24522_24537[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24516 === (6))){
var inst_24511 = (state_24515[(2)]);
var state_24515__$1 = state_24515;
var statearr_24523_24538 = state_24515__$1;
(statearr_24523_24538[(2)] = inst_24511);

(statearr_24523_24538[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24516 === (7))){
var inst_24499 = (state_24515[(11)]);
var inst_24505 = (state_24515[(2)]);
var inst_24506 = cljs.core.async.put_BANG_.call(null,out,inst_24505);
var inst_24495 = inst_24499;
var state_24515__$1 = (function (){var statearr_24524 = state_24515;
(statearr_24524[(8)] = inst_24495);

(statearr_24524[(12)] = inst_24506);

return statearr_24524;
})();
var statearr_24525_24539 = state_24515__$1;
(statearr_24525_24539[(2)] = null);

(statearr_24525_24539[(1)] = (2));


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
});})(c__17398__auto___24533,out))
;
return ((function (switch__17286__auto__,c__17398__auto___24533,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__17287__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__17287__auto____0 = (function (){
var statearr_24529 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24529[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__17287__auto__);

(statearr_24529[(1)] = (1));

return statearr_24529;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__17287__auto____1 = (function (state_24515){
while(true){
var ret_value__17288__auto__ = (function (){try{while(true){
var result__17289__auto__ = switch__17286__auto__.call(null,state_24515);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17289__auto__;
}
break;
}
}catch (e24530){if((e24530 instanceof Object)){
var ex__17290__auto__ = e24530;
var statearr_24531_24540 = state_24515;
(statearr_24531_24540[(5)] = ex__17290__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24515);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24530;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24541 = state_24515;
state_24515 = G__24541;
continue;
} else {
return ret_value__17288__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__17287__auto__ = function(state_24515){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__17287__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__17287__auto____1.call(this,state_24515);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__17287__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__17287__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__17287__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__17287__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__17287__auto__;
})()
;})(switch__17286__auto__,c__17398__auto___24533,out))
})();
var state__17400__auto__ = (function (){var statearr_24532 = f__17399__auto__.call(null);
(statearr_24532[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17398__auto___24533);

return statearr_24532;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17400__auto__);
});})(c__17398__auto___24533,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__24542,opts){
var map__24546 = p__24542;
var map__24546__$1 = ((((!((map__24546 == null)))?((((map__24546.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24546.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24546):map__24546);
var eval_body__$1 = cljs.core.get.call(null,map__24546__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__24546__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__11885__auto__ = eval_body__$1;
if(cljs.core.truth_(and__11885__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__11885__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e24548){var e = e24548;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__24549_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__24549_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__24554){
var vec__24555 = p__24554;
var k = cljs.core.nth.call(null,vec__24555,(0),null);
var v = cljs.core.nth.call(null,vec__24555,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__24556){
var vec__24557 = p__24556;
var k = cljs.core.nth.call(null,vec__24557,(0),null);
var v = cljs.core.nth.call(null,vec__24557,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__24561,p__24562){
var map__24809 = p__24561;
var map__24809__$1 = ((((!((map__24809 == null)))?((((map__24809.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24809.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24809):map__24809);
var opts = map__24809__$1;
var before_jsload = cljs.core.get.call(null,map__24809__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__24809__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__24809__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__24810 = p__24562;
var map__24810__$1 = ((((!((map__24810 == null)))?((((map__24810.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24810.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24810):map__24810);
var msg = map__24810__$1;
var files = cljs.core.get.call(null,map__24810__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__24810__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__24810__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__17398__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17398__auto__,map__24809,map__24809__$1,opts,before_jsload,on_jsload,reload_dependents,map__24810,map__24810__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__17399__auto__ = (function (){var switch__17286__auto__ = ((function (c__17398__auto__,map__24809,map__24809__$1,opts,before_jsload,on_jsload,reload_dependents,map__24810,map__24810__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_24963){
var state_val_24964 = (state_24963[(1)]);
if((state_val_24964 === (7))){
var inst_24827 = (state_24963[(7)]);
var inst_24825 = (state_24963[(8)]);
var inst_24826 = (state_24963[(9)]);
var inst_24824 = (state_24963[(10)]);
var inst_24832 = cljs.core._nth.call(null,inst_24825,inst_24827);
var inst_24833 = figwheel.client.file_reloading.eval_body.call(null,inst_24832,opts);
var inst_24834 = (inst_24827 + (1));
var tmp24965 = inst_24825;
var tmp24966 = inst_24826;
var tmp24967 = inst_24824;
var inst_24824__$1 = tmp24967;
var inst_24825__$1 = tmp24965;
var inst_24826__$1 = tmp24966;
var inst_24827__$1 = inst_24834;
var state_24963__$1 = (function (){var statearr_24968 = state_24963;
(statearr_24968[(7)] = inst_24827__$1);

(statearr_24968[(8)] = inst_24825__$1);

(statearr_24968[(9)] = inst_24826__$1);

(statearr_24968[(11)] = inst_24833);

(statearr_24968[(10)] = inst_24824__$1);

return statearr_24968;
})();
var statearr_24969_25055 = state_24963__$1;
(statearr_24969_25055[(2)] = null);

(statearr_24969_25055[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24964 === (20))){
var inst_24867 = (state_24963[(12)]);
var inst_24875 = figwheel.client.file_reloading.sort_files.call(null,inst_24867);
var state_24963__$1 = state_24963;
var statearr_24970_25056 = state_24963__$1;
(statearr_24970_25056[(2)] = inst_24875);

(statearr_24970_25056[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24964 === (27))){
var state_24963__$1 = state_24963;
var statearr_24971_25057 = state_24963__$1;
(statearr_24971_25057[(2)] = null);

(statearr_24971_25057[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24964 === (1))){
var inst_24816 = (state_24963[(13)]);
var inst_24813 = before_jsload.call(null,files);
var inst_24814 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_24815 = (function (){return ((function (inst_24816,inst_24813,inst_24814,state_val_24964,c__17398__auto__,map__24809,map__24809__$1,opts,before_jsload,on_jsload,reload_dependents,map__24810,map__24810__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__24558_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__24558_SHARP_);
});
;})(inst_24816,inst_24813,inst_24814,state_val_24964,c__17398__auto__,map__24809,map__24809__$1,opts,before_jsload,on_jsload,reload_dependents,map__24810,map__24810__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24816__$1 = cljs.core.filter.call(null,inst_24815,files);
var inst_24817 = cljs.core.not_empty.call(null,inst_24816__$1);
var state_24963__$1 = (function (){var statearr_24972 = state_24963;
(statearr_24972[(14)] = inst_24814);

(statearr_24972[(13)] = inst_24816__$1);

(statearr_24972[(15)] = inst_24813);

return statearr_24972;
})();
if(cljs.core.truth_(inst_24817)){
var statearr_24973_25058 = state_24963__$1;
(statearr_24973_25058[(1)] = (2));

} else {
var statearr_24974_25059 = state_24963__$1;
(statearr_24974_25059[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24964 === (24))){
var state_24963__$1 = state_24963;
var statearr_24975_25060 = state_24963__$1;
(statearr_24975_25060[(2)] = null);

(statearr_24975_25060[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24964 === (39))){
var inst_24917 = (state_24963[(16)]);
var state_24963__$1 = state_24963;
var statearr_24976_25061 = state_24963__$1;
(statearr_24976_25061[(2)] = inst_24917);

(statearr_24976_25061[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24964 === (46))){
var inst_24958 = (state_24963[(2)]);
var state_24963__$1 = state_24963;
var statearr_24977_25062 = state_24963__$1;
(statearr_24977_25062[(2)] = inst_24958);

(statearr_24977_25062[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24964 === (4))){
var inst_24861 = (state_24963[(2)]);
var inst_24862 = cljs.core.List.EMPTY;
var inst_24863 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_24862);
var inst_24864 = (function (){return ((function (inst_24861,inst_24862,inst_24863,state_val_24964,c__17398__auto__,map__24809,map__24809__$1,opts,before_jsload,on_jsload,reload_dependents,map__24810,map__24810__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__24559_SHARP_){
var and__11885__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__24559_SHARP_);
if(cljs.core.truth_(and__11885__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__24559_SHARP_));
} else {
return and__11885__auto__;
}
});
;})(inst_24861,inst_24862,inst_24863,state_val_24964,c__17398__auto__,map__24809,map__24809__$1,opts,before_jsload,on_jsload,reload_dependents,map__24810,map__24810__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24865 = cljs.core.filter.call(null,inst_24864,files);
var inst_24866 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_24867 = cljs.core.concat.call(null,inst_24865,inst_24866);
var state_24963__$1 = (function (){var statearr_24978 = state_24963;
(statearr_24978[(12)] = inst_24867);

(statearr_24978[(17)] = inst_24863);

(statearr_24978[(18)] = inst_24861);

return statearr_24978;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_24979_25063 = state_24963__$1;
(statearr_24979_25063[(1)] = (16));

} else {
var statearr_24980_25064 = state_24963__$1;
(statearr_24980_25064[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24964 === (15))){
var inst_24851 = (state_24963[(2)]);
var state_24963__$1 = state_24963;
var statearr_24981_25065 = state_24963__$1;
(statearr_24981_25065[(2)] = inst_24851);

(statearr_24981_25065[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24964 === (21))){
var inst_24877 = (state_24963[(19)]);
var inst_24877__$1 = (state_24963[(2)]);
var inst_24878 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_24877__$1);
var state_24963__$1 = (function (){var statearr_24982 = state_24963;
(statearr_24982[(19)] = inst_24877__$1);

return statearr_24982;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24963__$1,(22),inst_24878);
} else {
if((state_val_24964 === (31))){
var inst_24961 = (state_24963[(2)]);
var state_24963__$1 = state_24963;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24963__$1,inst_24961);
} else {
if((state_val_24964 === (32))){
var inst_24917 = (state_24963[(16)]);
var inst_24922 = inst_24917.cljs$lang$protocol_mask$partition0$;
var inst_24923 = (inst_24922 & (64));
var inst_24924 = inst_24917.cljs$core$ISeq$;
var inst_24925 = (inst_24923) || (inst_24924);
var state_24963__$1 = state_24963;
if(cljs.core.truth_(inst_24925)){
var statearr_24983_25066 = state_24963__$1;
(statearr_24983_25066[(1)] = (35));

} else {
var statearr_24984_25067 = state_24963__$1;
(statearr_24984_25067[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24964 === (40))){
var inst_24938 = (state_24963[(20)]);
var inst_24937 = (state_24963[(2)]);
var inst_24938__$1 = cljs.core.get.call(null,inst_24937,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_24939 = cljs.core.get.call(null,inst_24937,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_24940 = cljs.core.not_empty.call(null,inst_24938__$1);
var state_24963__$1 = (function (){var statearr_24985 = state_24963;
(statearr_24985[(21)] = inst_24939);

(statearr_24985[(20)] = inst_24938__$1);

return statearr_24985;
})();
if(cljs.core.truth_(inst_24940)){
var statearr_24986_25068 = state_24963__$1;
(statearr_24986_25068[(1)] = (41));

} else {
var statearr_24987_25069 = state_24963__$1;
(statearr_24987_25069[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24964 === (33))){
var state_24963__$1 = state_24963;
var statearr_24988_25070 = state_24963__$1;
(statearr_24988_25070[(2)] = false);

(statearr_24988_25070[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24964 === (13))){
var inst_24837 = (state_24963[(22)]);
var inst_24841 = cljs.core.chunk_first.call(null,inst_24837);
var inst_24842 = cljs.core.chunk_rest.call(null,inst_24837);
var inst_24843 = cljs.core.count.call(null,inst_24841);
var inst_24824 = inst_24842;
var inst_24825 = inst_24841;
var inst_24826 = inst_24843;
var inst_24827 = (0);
var state_24963__$1 = (function (){var statearr_24989 = state_24963;
(statearr_24989[(7)] = inst_24827);

(statearr_24989[(8)] = inst_24825);

(statearr_24989[(9)] = inst_24826);

(statearr_24989[(10)] = inst_24824);

return statearr_24989;
})();
var statearr_24990_25071 = state_24963__$1;
(statearr_24990_25071[(2)] = null);

(statearr_24990_25071[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24964 === (22))){
var inst_24885 = (state_24963[(23)]);
var inst_24880 = (state_24963[(24)]);
var inst_24881 = (state_24963[(25)]);
var inst_24877 = (state_24963[(19)]);
var inst_24880__$1 = (state_24963[(2)]);
var inst_24881__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_24880__$1);
var inst_24882 = (function (){var all_files = inst_24877;
var res_SINGLEQUOTE_ = inst_24880__$1;
var res = inst_24881__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_24885,inst_24880,inst_24881,inst_24877,inst_24880__$1,inst_24881__$1,state_val_24964,c__17398__auto__,map__24809,map__24809__$1,opts,before_jsload,on_jsload,reload_dependents,map__24810,map__24810__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__24560_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__24560_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_24885,inst_24880,inst_24881,inst_24877,inst_24880__$1,inst_24881__$1,state_val_24964,c__17398__auto__,map__24809,map__24809__$1,opts,before_jsload,on_jsload,reload_dependents,map__24810,map__24810__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24883 = cljs.core.filter.call(null,inst_24882,inst_24880__$1);
var inst_24884 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_24885__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_24884);
var inst_24886 = cljs.core.not_empty.call(null,inst_24885__$1);
var state_24963__$1 = (function (){var statearr_24991 = state_24963;
(statearr_24991[(23)] = inst_24885__$1);

(statearr_24991[(24)] = inst_24880__$1);

(statearr_24991[(25)] = inst_24881__$1);

(statearr_24991[(26)] = inst_24883);

return statearr_24991;
})();
if(cljs.core.truth_(inst_24886)){
var statearr_24992_25072 = state_24963__$1;
(statearr_24992_25072[(1)] = (23));

} else {
var statearr_24993_25073 = state_24963__$1;
(statearr_24993_25073[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24964 === (36))){
var state_24963__$1 = state_24963;
var statearr_24994_25074 = state_24963__$1;
(statearr_24994_25074[(2)] = false);

(statearr_24994_25074[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24964 === (41))){
var inst_24938 = (state_24963[(20)]);
var inst_24942 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_24943 = cljs.core.map.call(null,inst_24942,inst_24938);
var inst_24944 = cljs.core.pr_str.call(null,inst_24943);
var inst_24945 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_24944)].join('');
var inst_24946 = figwheel.client.utils.log.call(null,inst_24945);
var state_24963__$1 = state_24963;
var statearr_24995_25075 = state_24963__$1;
(statearr_24995_25075[(2)] = inst_24946);

(statearr_24995_25075[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24964 === (43))){
var inst_24939 = (state_24963[(21)]);
var inst_24949 = (state_24963[(2)]);
var inst_24950 = cljs.core.not_empty.call(null,inst_24939);
var state_24963__$1 = (function (){var statearr_24996 = state_24963;
(statearr_24996[(27)] = inst_24949);

return statearr_24996;
})();
if(cljs.core.truth_(inst_24950)){
var statearr_24997_25076 = state_24963__$1;
(statearr_24997_25076[(1)] = (44));

} else {
var statearr_24998_25077 = state_24963__$1;
(statearr_24998_25077[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24964 === (29))){
var inst_24885 = (state_24963[(23)]);
var inst_24880 = (state_24963[(24)]);
var inst_24881 = (state_24963[(25)]);
var inst_24883 = (state_24963[(26)]);
var inst_24917 = (state_24963[(16)]);
var inst_24877 = (state_24963[(19)]);
var inst_24913 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_24916 = (function (){var all_files = inst_24877;
var res_SINGLEQUOTE_ = inst_24880;
var res = inst_24881;
var files_not_loaded = inst_24883;
var dependencies_that_loaded = inst_24885;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24885,inst_24880,inst_24881,inst_24883,inst_24917,inst_24877,inst_24913,state_val_24964,c__17398__auto__,map__24809,map__24809__$1,opts,before_jsload,on_jsload,reload_dependents,map__24810,map__24810__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__24915){
var map__24999 = p__24915;
var map__24999__$1 = ((((!((map__24999 == null)))?((((map__24999.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24999.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24999):map__24999);
var namespace = cljs.core.get.call(null,map__24999__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24885,inst_24880,inst_24881,inst_24883,inst_24917,inst_24877,inst_24913,state_val_24964,c__17398__auto__,map__24809,map__24809__$1,opts,before_jsload,on_jsload,reload_dependents,map__24810,map__24810__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24917__$1 = cljs.core.group_by.call(null,inst_24916,inst_24883);
var inst_24919 = (inst_24917__$1 == null);
var inst_24920 = cljs.core.not.call(null,inst_24919);
var state_24963__$1 = (function (){var statearr_25001 = state_24963;
(statearr_25001[(28)] = inst_24913);

(statearr_25001[(16)] = inst_24917__$1);

return statearr_25001;
})();
if(inst_24920){
var statearr_25002_25078 = state_24963__$1;
(statearr_25002_25078[(1)] = (32));

} else {
var statearr_25003_25079 = state_24963__$1;
(statearr_25003_25079[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24964 === (44))){
var inst_24939 = (state_24963[(21)]);
var inst_24952 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_24939);
var inst_24953 = cljs.core.pr_str.call(null,inst_24952);
var inst_24954 = [cljs.core.str("not required: "),cljs.core.str(inst_24953)].join('');
var inst_24955 = figwheel.client.utils.log.call(null,inst_24954);
var state_24963__$1 = state_24963;
var statearr_25004_25080 = state_24963__$1;
(statearr_25004_25080[(2)] = inst_24955);

(statearr_25004_25080[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24964 === (6))){
var inst_24858 = (state_24963[(2)]);
var state_24963__$1 = state_24963;
var statearr_25005_25081 = state_24963__$1;
(statearr_25005_25081[(2)] = inst_24858);

(statearr_25005_25081[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24964 === (28))){
var inst_24883 = (state_24963[(26)]);
var inst_24910 = (state_24963[(2)]);
var inst_24911 = cljs.core.not_empty.call(null,inst_24883);
var state_24963__$1 = (function (){var statearr_25006 = state_24963;
(statearr_25006[(29)] = inst_24910);

return statearr_25006;
})();
if(cljs.core.truth_(inst_24911)){
var statearr_25007_25082 = state_24963__$1;
(statearr_25007_25082[(1)] = (29));

} else {
var statearr_25008_25083 = state_24963__$1;
(statearr_25008_25083[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24964 === (25))){
var inst_24881 = (state_24963[(25)]);
var inst_24897 = (state_24963[(2)]);
var inst_24898 = cljs.core.not_empty.call(null,inst_24881);
var state_24963__$1 = (function (){var statearr_25009 = state_24963;
(statearr_25009[(30)] = inst_24897);

return statearr_25009;
})();
if(cljs.core.truth_(inst_24898)){
var statearr_25010_25084 = state_24963__$1;
(statearr_25010_25084[(1)] = (26));

} else {
var statearr_25011_25085 = state_24963__$1;
(statearr_25011_25085[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24964 === (34))){
var inst_24932 = (state_24963[(2)]);
var state_24963__$1 = state_24963;
if(cljs.core.truth_(inst_24932)){
var statearr_25012_25086 = state_24963__$1;
(statearr_25012_25086[(1)] = (38));

} else {
var statearr_25013_25087 = state_24963__$1;
(statearr_25013_25087[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24964 === (17))){
var state_24963__$1 = state_24963;
var statearr_25014_25088 = state_24963__$1;
(statearr_25014_25088[(2)] = recompile_dependents);

(statearr_25014_25088[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24964 === (3))){
var state_24963__$1 = state_24963;
var statearr_25015_25089 = state_24963__$1;
(statearr_25015_25089[(2)] = null);

(statearr_25015_25089[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24964 === (12))){
var inst_24854 = (state_24963[(2)]);
var state_24963__$1 = state_24963;
var statearr_25016_25090 = state_24963__$1;
(statearr_25016_25090[(2)] = inst_24854);

(statearr_25016_25090[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24964 === (2))){
var inst_24816 = (state_24963[(13)]);
var inst_24823 = cljs.core.seq.call(null,inst_24816);
var inst_24824 = inst_24823;
var inst_24825 = null;
var inst_24826 = (0);
var inst_24827 = (0);
var state_24963__$1 = (function (){var statearr_25017 = state_24963;
(statearr_25017[(7)] = inst_24827);

(statearr_25017[(8)] = inst_24825);

(statearr_25017[(9)] = inst_24826);

(statearr_25017[(10)] = inst_24824);

return statearr_25017;
})();
var statearr_25018_25091 = state_24963__$1;
(statearr_25018_25091[(2)] = null);

(statearr_25018_25091[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24964 === (23))){
var inst_24885 = (state_24963[(23)]);
var inst_24880 = (state_24963[(24)]);
var inst_24881 = (state_24963[(25)]);
var inst_24883 = (state_24963[(26)]);
var inst_24877 = (state_24963[(19)]);
var inst_24888 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_24890 = (function (){var all_files = inst_24877;
var res_SINGLEQUOTE_ = inst_24880;
var res = inst_24881;
var files_not_loaded = inst_24883;
var dependencies_that_loaded = inst_24885;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24885,inst_24880,inst_24881,inst_24883,inst_24877,inst_24888,state_val_24964,c__17398__auto__,map__24809,map__24809__$1,opts,before_jsload,on_jsload,reload_dependents,map__24810,map__24810__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__24889){
var map__25019 = p__24889;
var map__25019__$1 = ((((!((map__25019 == null)))?((((map__25019.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25019.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25019):map__25019);
var request_url = cljs.core.get.call(null,map__25019__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24885,inst_24880,inst_24881,inst_24883,inst_24877,inst_24888,state_val_24964,c__17398__auto__,map__24809,map__24809__$1,opts,before_jsload,on_jsload,reload_dependents,map__24810,map__24810__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24891 = cljs.core.reverse.call(null,inst_24885);
var inst_24892 = cljs.core.map.call(null,inst_24890,inst_24891);
var inst_24893 = cljs.core.pr_str.call(null,inst_24892);
var inst_24894 = figwheel.client.utils.log.call(null,inst_24893);
var state_24963__$1 = (function (){var statearr_25021 = state_24963;
(statearr_25021[(31)] = inst_24888);

return statearr_25021;
})();
var statearr_25022_25092 = state_24963__$1;
(statearr_25022_25092[(2)] = inst_24894);

(statearr_25022_25092[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24964 === (35))){
var state_24963__$1 = state_24963;
var statearr_25023_25093 = state_24963__$1;
(statearr_25023_25093[(2)] = true);

(statearr_25023_25093[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24964 === (19))){
var inst_24867 = (state_24963[(12)]);
var inst_24873 = figwheel.client.file_reloading.expand_files.call(null,inst_24867);
var state_24963__$1 = state_24963;
var statearr_25024_25094 = state_24963__$1;
(statearr_25024_25094[(2)] = inst_24873);

(statearr_25024_25094[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24964 === (11))){
var state_24963__$1 = state_24963;
var statearr_25025_25095 = state_24963__$1;
(statearr_25025_25095[(2)] = null);

(statearr_25025_25095[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24964 === (9))){
var inst_24856 = (state_24963[(2)]);
var state_24963__$1 = state_24963;
var statearr_25026_25096 = state_24963__$1;
(statearr_25026_25096[(2)] = inst_24856);

(statearr_25026_25096[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24964 === (5))){
var inst_24827 = (state_24963[(7)]);
var inst_24826 = (state_24963[(9)]);
var inst_24829 = (inst_24827 < inst_24826);
var inst_24830 = inst_24829;
var state_24963__$1 = state_24963;
if(cljs.core.truth_(inst_24830)){
var statearr_25027_25097 = state_24963__$1;
(statearr_25027_25097[(1)] = (7));

} else {
var statearr_25028_25098 = state_24963__$1;
(statearr_25028_25098[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24964 === (14))){
var inst_24837 = (state_24963[(22)]);
var inst_24846 = cljs.core.first.call(null,inst_24837);
var inst_24847 = figwheel.client.file_reloading.eval_body.call(null,inst_24846,opts);
var inst_24848 = cljs.core.next.call(null,inst_24837);
var inst_24824 = inst_24848;
var inst_24825 = null;
var inst_24826 = (0);
var inst_24827 = (0);
var state_24963__$1 = (function (){var statearr_25029 = state_24963;
(statearr_25029[(7)] = inst_24827);

(statearr_25029[(8)] = inst_24825);

(statearr_25029[(9)] = inst_24826);

(statearr_25029[(32)] = inst_24847);

(statearr_25029[(10)] = inst_24824);

return statearr_25029;
})();
var statearr_25030_25099 = state_24963__$1;
(statearr_25030_25099[(2)] = null);

(statearr_25030_25099[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24964 === (45))){
var state_24963__$1 = state_24963;
var statearr_25031_25100 = state_24963__$1;
(statearr_25031_25100[(2)] = null);

(statearr_25031_25100[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24964 === (26))){
var inst_24885 = (state_24963[(23)]);
var inst_24880 = (state_24963[(24)]);
var inst_24881 = (state_24963[(25)]);
var inst_24883 = (state_24963[(26)]);
var inst_24877 = (state_24963[(19)]);
var inst_24900 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_24902 = (function (){var all_files = inst_24877;
var res_SINGLEQUOTE_ = inst_24880;
var res = inst_24881;
var files_not_loaded = inst_24883;
var dependencies_that_loaded = inst_24885;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24885,inst_24880,inst_24881,inst_24883,inst_24877,inst_24900,state_val_24964,c__17398__auto__,map__24809,map__24809__$1,opts,before_jsload,on_jsload,reload_dependents,map__24810,map__24810__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__24901){
var map__25032 = p__24901;
var map__25032__$1 = ((((!((map__25032 == null)))?((((map__25032.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25032.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25032):map__25032);
var namespace = cljs.core.get.call(null,map__25032__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__25032__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24885,inst_24880,inst_24881,inst_24883,inst_24877,inst_24900,state_val_24964,c__17398__auto__,map__24809,map__24809__$1,opts,before_jsload,on_jsload,reload_dependents,map__24810,map__24810__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24903 = cljs.core.map.call(null,inst_24902,inst_24881);
var inst_24904 = cljs.core.pr_str.call(null,inst_24903);
var inst_24905 = figwheel.client.utils.log.call(null,inst_24904);
var inst_24906 = (function (){var all_files = inst_24877;
var res_SINGLEQUOTE_ = inst_24880;
var res = inst_24881;
var files_not_loaded = inst_24883;
var dependencies_that_loaded = inst_24885;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24885,inst_24880,inst_24881,inst_24883,inst_24877,inst_24900,inst_24902,inst_24903,inst_24904,inst_24905,state_val_24964,c__17398__auto__,map__24809,map__24809__$1,opts,before_jsload,on_jsload,reload_dependents,map__24810,map__24810__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24885,inst_24880,inst_24881,inst_24883,inst_24877,inst_24900,inst_24902,inst_24903,inst_24904,inst_24905,state_val_24964,c__17398__auto__,map__24809,map__24809__$1,opts,before_jsload,on_jsload,reload_dependents,map__24810,map__24810__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24907 = setTimeout(inst_24906,(10));
var state_24963__$1 = (function (){var statearr_25034 = state_24963;
(statearr_25034[(33)] = inst_24905);

(statearr_25034[(34)] = inst_24900);

return statearr_25034;
})();
var statearr_25035_25101 = state_24963__$1;
(statearr_25035_25101[(2)] = inst_24907);

(statearr_25035_25101[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24964 === (16))){
var state_24963__$1 = state_24963;
var statearr_25036_25102 = state_24963__$1;
(statearr_25036_25102[(2)] = reload_dependents);

(statearr_25036_25102[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24964 === (38))){
var inst_24917 = (state_24963[(16)]);
var inst_24934 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24917);
var state_24963__$1 = state_24963;
var statearr_25037_25103 = state_24963__$1;
(statearr_25037_25103[(2)] = inst_24934);

(statearr_25037_25103[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24964 === (30))){
var state_24963__$1 = state_24963;
var statearr_25038_25104 = state_24963__$1;
(statearr_25038_25104[(2)] = null);

(statearr_25038_25104[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24964 === (10))){
var inst_24837 = (state_24963[(22)]);
var inst_24839 = cljs.core.chunked_seq_QMARK_.call(null,inst_24837);
var state_24963__$1 = state_24963;
if(inst_24839){
var statearr_25039_25105 = state_24963__$1;
(statearr_25039_25105[(1)] = (13));

} else {
var statearr_25040_25106 = state_24963__$1;
(statearr_25040_25106[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24964 === (18))){
var inst_24871 = (state_24963[(2)]);
var state_24963__$1 = state_24963;
if(cljs.core.truth_(inst_24871)){
var statearr_25041_25107 = state_24963__$1;
(statearr_25041_25107[(1)] = (19));

} else {
var statearr_25042_25108 = state_24963__$1;
(statearr_25042_25108[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24964 === (42))){
var state_24963__$1 = state_24963;
var statearr_25043_25109 = state_24963__$1;
(statearr_25043_25109[(2)] = null);

(statearr_25043_25109[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24964 === (37))){
var inst_24929 = (state_24963[(2)]);
var state_24963__$1 = state_24963;
var statearr_25044_25110 = state_24963__$1;
(statearr_25044_25110[(2)] = inst_24929);

(statearr_25044_25110[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24964 === (8))){
var inst_24824 = (state_24963[(10)]);
var inst_24837 = (state_24963[(22)]);
var inst_24837__$1 = cljs.core.seq.call(null,inst_24824);
var state_24963__$1 = (function (){var statearr_25045 = state_24963;
(statearr_25045[(22)] = inst_24837__$1);

return statearr_25045;
})();
if(inst_24837__$1){
var statearr_25046_25111 = state_24963__$1;
(statearr_25046_25111[(1)] = (10));

} else {
var statearr_25047_25112 = state_24963__$1;
(statearr_25047_25112[(1)] = (11));

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
}
});})(c__17398__auto__,map__24809,map__24809__$1,opts,before_jsload,on_jsload,reload_dependents,map__24810,map__24810__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__17286__auto__,c__17398__auto__,map__24809,map__24809__$1,opts,before_jsload,on_jsload,reload_dependents,map__24810,map__24810__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__17287__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__17287__auto____0 = (function (){
var statearr_25051 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25051[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__17287__auto__);

(statearr_25051[(1)] = (1));

return statearr_25051;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__17287__auto____1 = (function (state_24963){
while(true){
var ret_value__17288__auto__ = (function (){try{while(true){
var result__17289__auto__ = switch__17286__auto__.call(null,state_24963);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17289__auto__;
}
break;
}
}catch (e25052){if((e25052 instanceof Object)){
var ex__17290__auto__ = e25052;
var statearr_25053_25113 = state_24963;
(statearr_25053_25113[(5)] = ex__17290__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24963);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25052;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25114 = state_24963;
state_24963 = G__25114;
continue;
} else {
return ret_value__17288__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__17287__auto__ = function(state_24963){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__17287__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__17287__auto____1.call(this,state_24963);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__17287__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__17287__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__17287__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__17287__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__17287__auto__;
})()
;})(switch__17286__auto__,c__17398__auto__,map__24809,map__24809__$1,opts,before_jsload,on_jsload,reload_dependents,map__24810,map__24810__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__17400__auto__ = (function (){var statearr_25054 = f__17399__auto__.call(null);
(statearr_25054[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17398__auto__);

return statearr_25054;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17400__auto__);
});})(c__17398__auto__,map__24809,map__24809__$1,opts,before_jsload,on_jsload,reload_dependents,map__24810,map__24810__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__17398__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__25117,link){
var map__25120 = p__25117;
var map__25120__$1 = ((((!((map__25120 == null)))?((((map__25120.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25120.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25120):map__25120);
var file = cljs.core.get.call(null,map__25120__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__25120,map__25120__$1,file){
return (function (p1__25115_SHARP_,p2__25116_SHARP_){
if(cljs.core._EQ_.call(null,p1__25115_SHARP_,p2__25116_SHARP_)){
return p1__25115_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__25120,map__25120__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__25126){
var map__25127 = p__25126;
var map__25127__$1 = ((((!((map__25127 == null)))?((((map__25127.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25127.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25127):map__25127);
var match_length = cljs.core.get.call(null,map__25127__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__25127__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__25122_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__25122_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args25129 = [];
var len__12956__auto___25132 = arguments.length;
var i__12957__auto___25133 = (0);
while(true){
if((i__12957__auto___25133 < len__12956__auto___25132)){
args25129.push((arguments[i__12957__auto___25133]));

var G__25134 = (i__12957__auto___25133 + (1));
i__12957__auto___25133 = G__25134;
continue;
} else {
}
break;
}

var G__25131 = args25129.length;
switch (G__25131) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25129.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__25136_SHARP_,p2__25137_SHARP_){
return cljs.core.assoc.call(null,p1__25136_SHARP_,cljs.core.get.call(null,p2__25137_SHARP_,key),p2__25137_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__25138){
var map__25141 = p__25138;
var map__25141__$1 = ((((!((map__25141 == null)))?((((map__25141.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25141.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25141):map__25141);
var f_data = map__25141__$1;
var file = cljs.core.get.call(null,map__25141__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__25143,files_msg){
var map__25150 = p__25143;
var map__25150__$1 = ((((!((map__25150 == null)))?((((map__25150.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25150.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25150):map__25150);
var opts = map__25150__$1;
var on_cssload = cljs.core.get.call(null,map__25150__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__25152_25156 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__25153_25157 = null;
var count__25154_25158 = (0);
var i__25155_25159 = (0);
while(true){
if((i__25155_25159 < count__25154_25158)){
var f_25160 = cljs.core._nth.call(null,chunk__25153_25157,i__25155_25159);
figwheel.client.file_reloading.reload_css_file.call(null,f_25160);

var G__25161 = seq__25152_25156;
var G__25162 = chunk__25153_25157;
var G__25163 = count__25154_25158;
var G__25164 = (i__25155_25159 + (1));
seq__25152_25156 = G__25161;
chunk__25153_25157 = G__25162;
count__25154_25158 = G__25163;
i__25155_25159 = G__25164;
continue;
} else {
var temp__4425__auto___25165 = cljs.core.seq.call(null,seq__25152_25156);
if(temp__4425__auto___25165){
var seq__25152_25166__$1 = temp__4425__auto___25165;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25152_25166__$1)){
var c__12701__auto___25167 = cljs.core.chunk_first.call(null,seq__25152_25166__$1);
var G__25168 = cljs.core.chunk_rest.call(null,seq__25152_25166__$1);
var G__25169 = c__12701__auto___25167;
var G__25170 = cljs.core.count.call(null,c__12701__auto___25167);
var G__25171 = (0);
seq__25152_25156 = G__25168;
chunk__25153_25157 = G__25169;
count__25154_25158 = G__25170;
i__25155_25159 = G__25171;
continue;
} else {
var f_25172 = cljs.core.first.call(null,seq__25152_25166__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_25172);

var G__25173 = cljs.core.next.call(null,seq__25152_25166__$1);
var G__25174 = null;
var G__25175 = (0);
var G__25176 = (0);
seq__25152_25156 = G__25173;
chunk__25153_25157 = G__25174;
count__25154_25158 = G__25175;
i__25155_25159 = G__25176;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__25150,map__25150__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__25150,map__25150__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1451058380011