// Compiled by ClojureScript 1.7.170 {}
goog.provide('replumb.load');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('replumb.common');
/**
 * This load function just calls:
 *   (cb {:lang   :js
 *     :source ""})
 */
replumb.load.fake_load_fn_BANG_ = (function replumb$load$fake_load_fn_BANG_(_,cb){
return cb.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),""], null));
});
/**
 * Mimics "Resource not found" as it just calls: (cb nil)
 */
replumb.load.no_resource_load_fn_BANG_ = (function replumb$load$no_resource_load_fn_BANG_(_,cb){
return cb.call(null,null);
});
/**
 * Converts a filename to a lang keyword by inspecting the file
 *   extension.
 */
replumb.load.filename__GT_lang = (function replumb$load$filename__GT_lang(file_name){
if(clojure.string.ends_with_QMARK_.call(null,file_name,".js")){
return new cljs.core.Keyword(null,"js","js",1768080579);
} else {
return new cljs.core.Keyword(null,"clj","clj",-660495428);
}
});
/**
 * Loop on the file-names using a supplied read-file-fn (fn [file-name
 *   src-cb] ...), calling back cb upon first successful read, otherwise
 *   calling back with nil.
 */
replumb.load.read_files_and_callback_BANG_ = (function replumb$load$read_files_and_callback_BANG_(verbose_QMARK_,file_names,read_file_fn,load_fn_cb){
var temp__4423__auto__ = cljs.core.first.call(null,file_names);
if(cljs.core.truth_(temp__4423__auto__)){
var name = temp__4423__auto__;
if(cljs.core.truth_(verbose_QMARK_)){
replumb.common.debug_prn.call(null,"Reading",name,"...");
} else {
}

return read_file_fn.call(null,name,((function (name,temp__4423__auto__){
return (function (source){
if(cljs.core.truth_(source)){
return load_fn_cb.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lang","lang",-1819677104),replumb.load.filename__GT_lang.call(null,name),new cljs.core.Keyword(null,"source","source",-433931539),source], null));
} else {
if(cljs.core.truth_(verbose_QMARK_)){
replumb.common.debug_prn.call(null,"No source found...");
} else {
}

return replumb$load$read_files_and_callback_BANG_.call(null,verbose_QMARK_,cljs.core.rest.call(null,file_names),read_file_fn,load_fn_cb);
}
});})(name,temp__4423__auto__))
);
} else {
return load_fn_cb.call(null,null);
}
});
/**
 * Produces a sequence of filenames to try reading, in the
 *   order they should be tried.
 */
replumb.load.file_paths_to_try = (function replumb$load$file_paths_to_try(src_paths,macros,file_path){
var extensions = (cljs.core.truth_(macros)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".clj",".cljc"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [".cljs",".cljc",".js"], null));
var iter__12669__auto__ = ((function (extensions){
return (function replumb$load$file_paths_to_try_$_iter__13026(s__13027){
return (new cljs.core.LazySeq(null,((function (extensions){
return (function (){
var s__13027__$1 = s__13027;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__13027__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var extension = cljs.core.first.call(null,xs__4977__auto__);
var iterys__12665__auto__ = ((function (s__13027__$1,extension,xs__4977__auto__,temp__4425__auto__,extensions){
return (function replumb$load$file_paths_to_try_$_iter__13026_$_iter__13028(s__13029){
return (new cljs.core.LazySeq(null,((function (s__13027__$1,extension,xs__4977__auto__,temp__4425__auto__,extensions){
return (function (){
var s__13029__$1 = s__13029;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__13029__$1);
if(temp__4425__auto____$1){
var s__13029__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13029__$2)){
var c__12667__auto__ = cljs.core.chunk_first.call(null,s__13029__$2);
var size__12668__auto__ = cljs.core.count.call(null,c__12667__auto__);
var b__13031 = cljs.core.chunk_buffer.call(null,size__12668__auto__);
if((function (){var i__13030 = (0);
while(true){
if((i__13030 < size__12668__auto__)){
var src_path = cljs.core._nth.call(null,c__12667__auto__,i__13030);
cljs.core.chunk_append.call(null,b__13031,[cljs.core.str(replumb.common.normalize_path.call(null,src_path)),cljs.core.str(file_path),cljs.core.str(extension)].join(''));

var G__13032 = (i__13030 + (1));
i__13030 = G__13032;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13031),replumb$load$file_paths_to_try_$_iter__13026_$_iter__13028.call(null,cljs.core.chunk_rest.call(null,s__13029__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13031),null);
}
} else {
var src_path = cljs.core.first.call(null,s__13029__$2);
return cljs.core.cons.call(null,[cljs.core.str(replumb.common.normalize_path.call(null,src_path)),cljs.core.str(file_path),cljs.core.str(extension)].join(''),replumb$load$file_paths_to_try_$_iter__13026_$_iter__13028.call(null,cljs.core.rest.call(null,s__13029__$2)));
}
} else {
return null;
}
break;
}
});})(s__13027__$1,extension,xs__4977__auto__,temp__4425__auto__,extensions))
,null,null));
});})(s__13027__$1,extension,xs__4977__auto__,temp__4425__auto__,extensions))
;
var fs__12666__auto__ = cljs.core.seq.call(null,iterys__12665__auto__.call(null,src_paths));
if(fs__12666__auto__){
return cljs.core.concat.call(null,fs__12666__auto__,replumb$load$file_paths_to_try_$_iter__13026.call(null,cljs.core.rest.call(null,s__13027__$1)));
} else {
var G__13033 = cljs.core.rest.call(null,s__13027__$1);
s__13027__$1 = G__13033;
continue;
}
} else {
return null;
}
break;
}
});})(extensions))
,null,null));
});})(extensions))
;
return iter__12669__auto__.call(null,extensions);
});
/**
 * Given the symbol of a namespace produces all possibile file names
 *   in which given ns could be found.
 */
replumb.load.file_paths_to_try_from_ns_symbol = (function replumb$load$file_paths_to_try_from_ns_symbol(ns_sym,src_paths){
var without_extension = clojure.string.replace.call(null,clojure.string.replace.call(null,cljs.core.name.call(null,ns_sym),/\./,"/"),/-/,"_");
return replumb.load.file_paths_to_try.call(null,src_paths,false,without_extension);
});
/**
 * Produces a sequence of filenames to try reading crafted for goog
 *   libraries, in the order they should be tried.
 */
replumb.load.goog_file_paths_to_try = (function replumb$load$goog_file_paths_to_try(src_paths,goog_path){
var iter__12669__auto__ = (function replumb$load$goog_file_paths_to_try_$_iter__13038(s__13039){
return (new cljs.core.LazySeq(null,(function (){
var s__13039__$1 = s__13039;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__13039__$1);
if(temp__4425__auto__){
var s__13039__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13039__$2)){
var c__12667__auto__ = cljs.core.chunk_first.call(null,s__13039__$2);
var size__12668__auto__ = cljs.core.count.call(null,c__12667__auto__);
var b__13041 = cljs.core.chunk_buffer.call(null,size__12668__auto__);
if((function (){var i__13040 = (0);
while(true){
if((i__13040 < size__12668__auto__)){
var src_path = cljs.core._nth.call(null,c__12667__auto__,i__13040);
cljs.core.chunk_append.call(null,b__13041,[cljs.core.str(replumb.common.normalize_path.call(null,src_path)),cljs.core.str(goog_path),cljs.core.str(".js")].join(''));

var G__13042 = (i__13040 + (1));
i__13040 = G__13042;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13041),replumb$load$goog_file_paths_to_try_$_iter__13038.call(null,cljs.core.chunk_rest.call(null,s__13039__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13041),null);
}
} else {
var src_path = cljs.core.first.call(null,s__13039__$2);
return cljs.core.cons.call(null,[cljs.core.str(replumb.common.normalize_path.call(null,src_path)),cljs.core.str(goog_path),cljs.core.str(".js")].join(''),replumb$load$goog_file_paths_to_try_$_iter__13038.call(null,cljs.core.rest.call(null,s__13039__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__12669__auto__.call(null,src_paths);
});
replumb.load.skip_load_QMARK_ = (function replumb$load$skip_load_QMARK_(p__13043){
var map__13046 = p__13043;
var map__13046__$1 = ((((!((map__13046 == null)))?((((map__13046.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13046.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13046):map__13046);
var name = cljs.core.get.call(null,map__13046__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var macros = cljs.core.get.call(null,map__13046__$1,new cljs.core.Keyword(null,"macros","macros",811339431));
var or__11897__auto__ = cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null));
if(or__11897__auto__){
return or__11897__auto__;
} else {
var or__11897__auto____$1 = cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.analyzer","cljs.analyzer",1897881911,null));
if(or__11897__auto____$1){
return or__11897__auto____$1;
} else {
var or__11897__auto____$2 = (function (){var and__11885__auto__ = cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",-966900911,null));
if(and__11885__auto__){
return macros;
} else {
return and__11885__auto__;
}
})();
if(cljs.core.truth_(or__11897__auto____$2)){
return or__11897__auto____$2;
} else {
var or__11897__auto____$3 = (function (){var and__11885__auto__ = cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.test","cljs.test",884805483,null));
if(and__11885__auto__){
return macros;
} else {
return and__11885__auto__;
}
})();
if(cljs.core.truth_(or__11897__auto____$3)){
return or__11897__auto____$3;
} else {
var and__11885__auto__ = cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"clojure.template","clojure.template",-1162325089,null));
if(and__11885__auto__){
return macros;
} else {
return and__11885__auto__;
}
}
}
}
}
});

//# sourceMappingURL=load.js.map?rel=1451063202118