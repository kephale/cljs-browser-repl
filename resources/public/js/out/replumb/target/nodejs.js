// Compiled by ClojureScript 1.7.170 {}
goog.provide('replumb.target.nodejs');
goog.require('cljs.core');
goog.require('clojure.string');
replumb.target.nodejs.init_fn_BANG_ = (function replumb$target$nodejs$init_fn_BANG_(){
return global.cljs.user = {};
});
/**
 * Converts a filename to a lang keyword by inspecting the file
 *   extension.
 */
replumb.target.nodejs.filename__GT_lang = (function replumb$target$nodejs$filename__GT_lang(filename){
if(clojure.string.ends_with_QMARK_.call(null,filename,".js")){
return new cljs.core.Keyword(null,"js","js",1768080579);
} else {
return new cljs.core.Keyword(null,"clj","clj",-660495428);
}
});
/**
 * Reads the first filename in a sequence of supplied filenames,
 *   using a supplied read-file-fn, calling back upon first successful
 *   read, otherwise calling back with nil.
 */
replumb.target.nodejs.read_some = (function replumb$target$nodejs$read_some(p__13057,read_file_fn,cb){
var vec__13059 = p__13057;
var filename = cljs.core.nth.call(null,vec__13059,(0),null);
var more_filenames = cljs.core.nthnext.call(null,vec__13059,(1));
if(cljs.core.truth_(filename)){
return read_file_fn.call(null,filename,((function (vec__13059,filename,more_filenames){
return (function (source){
if(cljs.core.truth_(source)){
return cb.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lang","lang",-1819677104),replumb.target.nodejs.filename__GT_lang.call(null,filename),new cljs.core.Keyword(null,"source","source",-433931539),source], null));
} else {
return replumb$target$nodejs$read_some.call(null,more_filenames,read_file_fn,cb);
}
});})(vec__13059,filename,more_filenames))
);
} else {
return cb.call(null,null);
}
});
/**
 * Produces a sequence of filenames to try reading, in the
 *   order they should be tried.
 */
replumb.target.nodejs.filenames_to_try = (function replumb$target$nodejs$filenames_to_try(src_paths,macros,path){
var extensions = (cljs.core.truth_(macros)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".clj",".cljc"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [".cljs",".cljc",".js"], null));
var iter__12670__auto__ = ((function (extensions){
return (function replumb$target$nodejs$filenames_to_try_$_iter__13066(s__13067){
return (new cljs.core.LazySeq(null,((function (extensions){
return (function (){
var s__13067__$1 = s__13067;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__13067__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var extension = cljs.core.first.call(null,xs__4977__auto__);
var iterys__12666__auto__ = ((function (s__13067__$1,extension,xs__4977__auto__,temp__4425__auto__,extensions){
return (function replumb$target$nodejs$filenames_to_try_$_iter__13066_$_iter__13068(s__13069){
return (new cljs.core.LazySeq(null,((function (s__13067__$1,extension,xs__4977__auto__,temp__4425__auto__,extensions){
return (function (){
var s__13069__$1 = s__13069;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__13069__$1);
if(temp__4425__auto____$1){
var s__13069__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13069__$2)){
var c__12668__auto__ = cljs.core.chunk_first.call(null,s__13069__$2);
var size__12669__auto__ = cljs.core.count.call(null,c__12668__auto__);
var b__13071 = cljs.core.chunk_buffer.call(null,size__12669__auto__);
if((function (){var i__13070 = (0);
while(true){
if((i__13070 < size__12669__auto__)){
var src_path = cljs.core._nth.call(null,c__12668__auto__,i__13070);
cljs.core.chunk_append.call(null,b__13071,[cljs.core.str(src_path),cljs.core.str("/"),cljs.core.str(path),cljs.core.str(extension)].join(''));

var G__13072 = (i__13070 + (1));
i__13070 = G__13072;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13071),replumb$target$nodejs$filenames_to_try_$_iter__13066_$_iter__13068.call(null,cljs.core.chunk_rest.call(null,s__13069__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13071),null);
}
} else {
var src_path = cljs.core.first.call(null,s__13069__$2);
return cljs.core.cons.call(null,[cljs.core.str(src_path),cljs.core.str("/"),cljs.core.str(path),cljs.core.str(extension)].join(''),replumb$target$nodejs$filenames_to_try_$_iter__13066_$_iter__13068.call(null,cljs.core.rest.call(null,s__13069__$2)));
}
} else {
return null;
}
break;
}
});})(s__13067__$1,extension,xs__4977__auto__,temp__4425__auto__,extensions))
,null,null));
});})(s__13067__$1,extension,xs__4977__auto__,temp__4425__auto__,extensions))
;
var fs__12667__auto__ = cljs.core.seq.call(null,iterys__12666__auto__.call(null,src_paths));
if(fs__12667__auto__){
return cljs.core.concat.call(null,fs__12667__auto__,replumb$target$nodejs$filenames_to_try_$_iter__13066.call(null,cljs.core.rest.call(null,s__13067__$1)));
} else {
var G__13073 = cljs.core.rest.call(null,s__13067__$1);
s__13067__$1 = G__13073;
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
return iter__12670__auto__.call(null,extensions);
});
/**
 * Makes a load function that will read from a sequence of src-paths
 *   using a supplied read-file-fn. It returns a cljs.js-compatible
 *   *load-fn*.
 * 
 *   Read-file-fn is a 2-arity function (fn [filename source-cb] ...) where
 *   source-cb is itself a function (fn [source] ...) that needs to be called
 *   with the source of the library (as string).
 */
replumb.target.nodejs.make_load_fn = (function replumb$target$nodejs$make_load_fn(src_paths,read_file_fn){
return (function (p__13077,cb){
var map__13078 = p__13077;
var map__13078__$1 = ((((!((map__13078 == null)))?((((map__13078.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13078.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13078):map__13078);
var macros = cljs.core.get.call(null,map__13078__$1,new cljs.core.Keyword(null,"macros","macros",811339431));
var path = cljs.core.get.call(null,map__13078__$1,new cljs.core.Keyword(null,"path","path",-188191168));
return replumb.target.nodejs.read_some.call(null,replumb.target.nodejs.filenames_to_try.call(null,src_paths,macros,path),read_file_fn,cb);
});
});

//# sourceMappingURL=nodejs.js.map?rel=1451058349264