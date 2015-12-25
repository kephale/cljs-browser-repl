// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs_browser_repl.net.gist');
goog.require('cljs.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('cljs.pprint');
goog.require('cljs_browser_repl.state');
goog.require('cljs.reader');
/**
 * Retrieves a gist by id. Returns a channel that will be filled with a clj-http
 *   response {:success true :body ...}
 */
cljs_browser_repl.net.gist.get_BANG_ = (function cljs_browser_repl$net$gist$get_BANG_(id){
return cljs_http.client.get.call(null,[cljs.core.str("https://api.github.com/gists/"),cljs.core.str(id)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),false], null));
});
cljs_browser_repl.net.gist.invalid_gist = (function cljs_browser_repl$net$gist$invalid_gist(gist,err){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_browser_repl.state.to_repl_error.call(null,[cljs.core.str(err),cljs.core.str("\n\n"),cljs.core.str((function (){var sb__12872__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_22585_22587 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_22586_22588 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_22585_22587,_STAR_print_fn_STAR_22586_22588,sb__12872__auto__){
return (function (x__12873__auto__){
return sb__12872__auto__.append(x__12873__auto__);
});})(_STAR_print_newline_STAR_22585_22587,_STAR_print_fn_STAR_22586_22588,sb__12872__auto__))
;

try{cljs.pprint.pprint.call(null,gist);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_22586_22588;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_22585_22587;
}
return [cljs.core.str(sb__12872__auto__)].join('');
})())].join(''))], null);
});
/**
 * Given a gist it will return a list of commands for the repl to run.
 *   The gist must not be truncated, must have an index.json file.
 */
cljs_browser_repl.net.gist.get_commands = (function cljs_browser_repl$net$gist$get_commands(gist,file_name){
var files = cljs.core.get_in.call(null,gist,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"files","files",-472457450)], null));
var file = (function (){var or__11897__auto__ = cljs.core.keyword.call(null,[cljs.core.str(file_name),cljs.core.str(".edn")].join('')).call(null,files);
if(cljs.core.truth_(or__11897__auto__)){
return or__11897__auto__;
} else {
return cljs.core.keyword.call(null,[cljs.core.str(file_name),cljs.core.str(".json")].join('')).call(null,files);
}
})();
if(cljs.core.truth_((function (){var and__11885__auto__ = file;
if(cljs.core.truth_(and__11885__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"truncated","truncated",298102102).cljs$core$IFn$_invoke$arity$1(file));
} else {
return and__11885__auto__;
}
})())){
var pred__22594 = cljs.core._EQ_;
var expr__22595 = new cljs.core.Keyword(null,"language","language",-1591107564).cljs$core$IFn$_invoke$arity$1(file);
if(cljs.core.truth_(pred__22594.call(null,"edn",expr__22595))){
return cljs.reader.read_string.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(file));
} else {
if(cljs.core.truth_(pred__22594.call(null,"JSON",expr__22595))){
try{return cljs.core.map.call(null,((function (pred__22594,expr__22595,files,file){
return (function (p1__22589_SHARP_){
return cljs.core.assoc.call(null,p1__22589_SHARP_,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.keyword.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__22589_SHARP_)));
});})(pred__22594,expr__22595,files,file))
,cljs.core.js__GT_clj.call(null,JSON.parse(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(file)),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
}catch (e22597){var e = e22597;
return cljs_browser_repl.net.gist.invalid_gist.call(null,gist,e);
}} else {
return cljs_browser_repl.net.gist.invalid_gist.call(null,gist,"Invalid gist contents.");
}
}
} else {
return null;
}
});

//# sourceMappingURL=gist.js.map?rel=1451058373262