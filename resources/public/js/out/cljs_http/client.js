// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs_http.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs_http.core');
goog.require('cljs.core.async');
goog.require('no.en.core');
goog.require('cljs_http.util');
goog.require('clojure.string');
goog.require('cljs.reader');
cljs_http.client.if_pos = (function cljs_http$client$if_pos(v){
if(cljs.core.truth_((function (){var and__11885__auto__ = v;
if(cljs.core.truth_(and__11885__auto__)){
return (v > (0));
} else {
return and__11885__auto__;
}
})())){
return v;
} else {
return null;
}
});
/**
 * Parse `s` as query params and return a hash map.
 */
cljs_http.client.parse_query_params = (function cljs_http$client$parse_query_params(s){
if(!(clojure.string.blank_QMARK_.call(null,s))){
return cljs.core.reduce.call(null,(function (p1__22407_SHARP_,p2__22406_SHARP_){
var vec__22409 = clojure.string.split.call(null,p2__22406_SHARP_,/=/);
var k = cljs.core.nth.call(null,vec__22409,(0),null);
var v = cljs.core.nth.call(null,vec__22409,(1),null);
return cljs.core.assoc.call(null,p1__22407_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),no.en.core.url_decode.call(null,v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,[cljs.core.str(s)].join(''),/&/));
} else {
return null;
}
});
/**
 * Parse `url` into a hash map.
 */
cljs_http.client.parse_url = (function cljs_http$client$parse_url(url){
if(!(clojure.string.blank_QMARK_.call(null,url))){
var uri = goog.Uri.parse(url);
var query_data = uri.getQueryData();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"scheme","scheme",90199613),cljs.core.keyword.call(null,uri.getScheme()),new cljs.core.Keyword(null,"server-name","server-name",-1012104295),uri.getDomain(),new cljs.core.Keyword(null,"server-port","server-port",663745648),cljs_http.client.if_pos.call(null,uri.getPort()),new cljs.core.Keyword(null,"uri","uri",-774711847),uri.getPath(),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),((cljs.core.not.call(null,query_data.isEmpty()))?[cljs.core.str(query_data)].join(''):null),new cljs.core.Keyword(null,"query-params","query-params",900640534),((cljs.core.not.call(null,query_data.isEmpty()))?cljs_http.client.parse_query_params.call(null,[cljs.core.str(query_data)].join('')):null)], null);
} else {
return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function cljs_http$client$encode_val(k,v){
return [cljs.core.str(no.en.core.url_encode.call(null,cljs.core.name.call(null,k))),cljs.core.str("="),cljs.core.str(no.en.core.url_encode.call(null,[cljs.core.str(v)].join('')))].join('');
});
cljs_http.client.encode_vals = (function cljs_http$client$encode_vals(k,vs){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p1__22410_SHARP_){
return cljs_http.client.encode_val.call(null,k,p1__22410_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function cljs_http$client$encode_param(p__22411){
var vec__22413 = p__22411;
var k = cljs.core.nth.call(null,vec__22413,(0),null);
var v = cljs.core.nth.call(null,vec__22413,(1),null);
if(cljs.core.coll_QMARK_.call(null,v)){
return cljs_http.client.encode_vals.call(null,k,v);
} else {
return cljs_http.client.encode_val.call(null,k,v);
}
});
cljs_http.client.generate_query_string = (function cljs_http$client$generate_query_string(params){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,cljs_http.client.encode_param,params));
});
cljs_http.client.regex_char_esc_smap = (function (){var esc_chars = "()*&^%$#!+";
return cljs.core.zipmap.call(null,esc_chars,cljs.core.map.call(null,((function (esc_chars){
return (function (p1__22414_SHARP_){
return [cljs.core.str("\\"),cljs.core.str(p1__22414_SHARP_)].join('');
});})(esc_chars))
,esc_chars));
})();
/**
 * Escape special characters -- for content-type.
 */
cljs_http.client.escape_special = (function cljs_http$client$escape_special(string){
return cljs.core.reduce.call(null,cljs.core.str,cljs.core.replace.call(null,cljs_http.client.regex_char_esc_smap,string));
});
/**
 * Decocde the :body of `response` with `decode-fn` if the content type matches.
 */
cljs_http.client.decode_body = (function cljs_http$client$decode_body(response,decode_fn,content_type,request_method){
if(cljs.core.truth_((function (){var and__11885__auto__ = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"head","head",-771383919),request_method);
if(and__11885__auto__){
var and__11885__auto____$1 = cljs.core.not_EQ_.call(null,(204),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response));
if(and__11885__auto____$1){
return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,[cljs.core.str("(?i)"),cljs.core.str(cljs_http.client.escape_special.call(null,content_type))].join('')),[cljs.core.str(cljs.core.get.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(response),"content-type",""))].join(''));
} else {
return and__11885__auto____$1;
}
} else {
return and__11885__auto__;
}
})())){
return cljs.core.update_in.call(null,response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null),decode_fn);
} else {
return response;
}
});
/**
 * Encode :edn-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_edn_params = (function cljs_http$client$wrap_edn_params(client){
return (function (request){
var temp__4423__auto__ = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4423__auto__)){
var params = temp__4423__auto__;
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/edn"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"edn-params","edn-params",894273052)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.pr_str.call(null,params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/edn responses.
 */
cljs_http.client.wrap_edn_response = (function cljs_http$client$wrap_edn_response(client){
return (function (request){
return cljs.core.async.map.call(null,(function (p1__22415_SHARP_){
return cljs_http.client.decode_body.call(null,p1__22415_SHARP_,cljs.reader.read_string,"application/edn",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_default_headers = (function cljs_http$client$wrap_default_headers(var_args){
var args__12963__auto__ = [];
var len__12956__auto___22420 = arguments.length;
var i__12957__auto___22421 = (0);
while(true){
if((i__12957__auto___22421 < len__12956__auto___22420)){
args__12963__auto__.push((arguments[i__12957__auto___22421]));

var G__22422 = (i__12957__auto___22421 + (1));
i__12957__auto___22421 = G__22422;
continue;
} else {
}
break;
}

var argseq__12964__auto__ = ((((1) < args__12963__auto__.length))?(new cljs.core.IndexedSeq(args__12963__auto__.slice((1)),(0))):null);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12964__auto__);
});

cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__22418){
var vec__22419 = p__22418;
var default_headers = cljs.core.nth.call(null,vec__22419,(0),null);
return ((function (vec__22419,default_headers){
return (function (request){
var temp__4423__auto__ = (function (){var or__11897__auto__ = new cljs.core.Keyword(null,"default-headers","default-headers",-43146094).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__11897__auto__)){
return or__11897__auto__;
} else {
return default_headers;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var default_headers__$1 = temp__4423__auto__;
return client.call(null,cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094),default_headers__$1));
} else {
return client.call(null,request);
}
});
;})(vec__22419,default_headers))
});

cljs_http.client.wrap_default_headers.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_default_headers.cljs$lang$applyTo = (function (seq22416){
var G__22417 = cljs.core.first.call(null,seq22416);
var seq22416__$1 = cljs.core.next.call(null,seq22416);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic(G__22417,seq22416__$1);
});
cljs_http.client.wrap_accept = (function cljs_http$client$wrap_accept(var_args){
var args__12963__auto__ = [];
var len__12956__auto___22427 = arguments.length;
var i__12957__auto___22428 = (0);
while(true){
if((i__12957__auto___22428 < len__12956__auto___22427)){
args__12963__auto__.push((arguments[i__12957__auto___22428]));

var G__22429 = (i__12957__auto___22428 + (1));
i__12957__auto___22428 = G__22429;
continue;
} else {
}
break;
}

var argseq__12964__auto__ = ((((1) < args__12963__auto__.length))?(new cljs.core.IndexedSeq(args__12963__auto__.slice((1)),(0))):null);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12964__auto__);
});

cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__22425){
var vec__22426 = p__22425;
var accept = cljs.core.nth.call(null,vec__22426,(0),null);
return ((function (vec__22426,accept){
return (function (request){
var temp__4423__auto__ = (function (){var or__11897__auto__ = new cljs.core.Keyword(null,"accept","accept",1874130431).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__11897__auto__)){
return or__11897__auto__;
} else {
return accept;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var accept__$1 = temp__4423__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"accept"], null),accept__$1));
} else {
return client.call(null,request);
}
});
;})(vec__22426,accept))
});

cljs_http.client.wrap_accept.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_accept.cljs$lang$applyTo = (function (seq22423){
var G__22424 = cljs.core.first.call(null,seq22423);
var seq22423__$1 = cljs.core.next.call(null,seq22423);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic(G__22424,seq22423__$1);
});
cljs_http.client.wrap_content_type = (function cljs_http$client$wrap_content_type(var_args){
var args__12963__auto__ = [];
var len__12956__auto___22434 = arguments.length;
var i__12957__auto___22435 = (0);
while(true){
if((i__12957__auto___22435 < len__12956__auto___22434)){
args__12963__auto__.push((arguments[i__12957__auto___22435]));

var G__22436 = (i__12957__auto___22435 + (1));
i__12957__auto___22435 = G__22436;
continue;
} else {
}
break;
}

var argseq__12964__auto__ = ((((1) < args__12963__auto__.length))?(new cljs.core.IndexedSeq(args__12963__auto__.slice((1)),(0))):null);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12964__auto__);
});

cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__22432){
var vec__22433 = p__22432;
var content_type = cljs.core.nth.call(null,vec__22433,(0),null);
return ((function (vec__22433,content_type){
return (function (request){
var temp__4423__auto__ = (function (){var or__11897__auto__ = new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__11897__auto__)){
return or__11897__auto__;
} else {
return content_type;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var content_type__$1 = temp__4423__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),content_type__$1));
} else {
return client.call(null,request);
}
});
;})(vec__22433,content_type))
});

cljs_http.client.wrap_content_type.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_content_type.cljs$lang$applyTo = (function (seq22430){
var G__22431 = cljs.core.first.call(null,seq22430);
var seq22430__$1 = cljs.core.next.call(null,seq22430);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic(G__22431,seq22430__$1);
});
cljs_http.client.default_transit_opts = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"decoding","decoding",-568180903),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140),cljs.core.PersistentArrayMap.EMPTY], null);
/**
 * Encode :transit-params in the `request` :body and set the appropriate
 *   Content Type header.
 * 
 *   A :transit-opts map can be optionally provided with the following keys:
 * 
 *   :encoding                #{:json, :json-verbose}
 *   :decoding                #{:json, :json-verbose}
 *   :encoding/decoding-opts  appropriate map of options to be passed to
 *                         transit writer/reader, respectively.
 */
cljs_http.client.wrap_transit_params = (function cljs_http$client$wrap_transit_params(client){
return (function (request){
var temp__4423__auto__ = new cljs.core.Keyword(null,"transit-params","transit-params",357261095).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4423__auto__)){
var params = temp__4423__auto__;
var map__22439 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__22439__$1 = ((((!((map__22439 == null)))?((((map__22439.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22439.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22439):map__22439);
var encoding = cljs.core.get.call(null,map__22439__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272));
var encoding_opts = cljs.core.get.call(null,map__22439__$1,new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631));
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/transit+json"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"transit-params","transit-params",357261095)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.transit_encode.call(null,params,encoding,encoding_opts)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/transit+json responses.
 */
cljs_http.client.wrap_transit_response = (function cljs_http$client$wrap_transit_response(client){
return (function (request){
var map__22445 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__22445__$1 = ((((!((map__22445 == null)))?((((map__22445.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22445.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22445):map__22445);
var decoding = cljs.core.get.call(null,map__22445__$1,new cljs.core.Keyword(null,"decoding","decoding",-568180903));
var decoding_opts = cljs.core.get.call(null,map__22445__$1,new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140));
var transit_decode = ((function (map__22445,map__22445__$1,decoding,decoding_opts){
return (function (p1__22441_SHARP_){
return cljs_http.util.transit_decode.call(null,p1__22441_SHARP_,decoding,decoding_opts);
});})(map__22445,map__22445__$1,decoding,decoding_opts))
;
return cljs.core.async.map.call(null,((function (map__22445,map__22445__$1,decoding,decoding_opts,transit_decode){
return (function (p1__22442_SHARP_){
return cljs_http.client.decode_body.call(null,p1__22442_SHARP_,transit_decode,"application/transit+json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
});})(map__22445,map__22445__$1,decoding,decoding_opts,transit_decode))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
/**
 * Encode :json-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_json_params = (function cljs_http$client$wrap_json_params(client){
return (function (request){
var temp__4423__auto__ = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4423__auto__)){
var params = temp__4423__auto__;
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/json"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"json-params","json-params",-1112693596)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.json_encode.call(null,params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/json responses.
 */
cljs_http.client.wrap_json_response = (function cljs_http$client$wrap_json_response(client){
return (function (request){
return cljs.core.async.map.call(null,(function (p1__22447_SHARP_){
return cljs_http.client.decode_body.call(null,p1__22447_SHARP_,cljs_http.util.json_decode,"application/json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_query_params = (function cljs_http$client$wrap_query_params(client){
return (function (p__22451){
var map__22452 = p__22451;
var map__22452__$1 = ((((!((map__22452 == null)))?((((map__22452.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22452.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22452):map__22452);
var req = map__22452__$1;
var query_params = cljs.core.get.call(null,map__22452__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(query_params)){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string.call(null,query_params)));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_form_params = (function cljs_http$client$wrap_form_params(client){
return (function (p__22457){
var map__22458 = p__22457;
var map__22458__$1 = ((((!((map__22458 == null)))?((((map__22458.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22458.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22458):map__22458);
var request = map__22458__$1;
var form_params = cljs.core.get.call(null,map__22458__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));
var request_method = cljs.core.get.call(null,map__22458__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__22458__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
if(cljs.core.truth_((function (){var and__11885__auto__ = form_params;
if(cljs.core.truth_(and__11885__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__11885__auto__;
}
})())){
var headers__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/x-www-form-urlencoded"], null),headers);
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"form-params","form-params",1884296467)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_query_string.call(null,form_params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers__$1));
} else {
return client.call(null,request);
}
});
});
cljs_http.client.generate_form_data = (function cljs_http$client$generate_form_data(params){
var form_data = (new FormData());
var seq__22466_22472 = cljs.core.seq.call(null,params);
var chunk__22467_22473 = null;
var count__22468_22474 = (0);
var i__22469_22475 = (0);
while(true){
if((i__22469_22475 < count__22468_22474)){
var vec__22470_22476 = cljs.core._nth.call(null,chunk__22467_22473,i__22469_22475);
var k_22477 = cljs.core.nth.call(null,vec__22470_22476,(0),null);
var v_22478 = cljs.core.nth.call(null,vec__22470_22476,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_22478)){
form_data.append(cljs.core.name.call(null,k_22477),cljs.core.first.call(null,v_22478),cljs.core.second.call(null,v_22478));
} else {
form_data.append(cljs.core.name.call(null,k_22477),v_22478);
}

var G__22479 = seq__22466_22472;
var G__22480 = chunk__22467_22473;
var G__22481 = count__22468_22474;
var G__22482 = (i__22469_22475 + (1));
seq__22466_22472 = G__22479;
chunk__22467_22473 = G__22480;
count__22468_22474 = G__22481;
i__22469_22475 = G__22482;
continue;
} else {
var temp__4425__auto___22483 = cljs.core.seq.call(null,seq__22466_22472);
if(temp__4425__auto___22483){
var seq__22466_22484__$1 = temp__4425__auto___22483;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22466_22484__$1)){
var c__12701__auto___22485 = cljs.core.chunk_first.call(null,seq__22466_22484__$1);
var G__22486 = cljs.core.chunk_rest.call(null,seq__22466_22484__$1);
var G__22487 = c__12701__auto___22485;
var G__22488 = cljs.core.count.call(null,c__12701__auto___22485);
var G__22489 = (0);
seq__22466_22472 = G__22486;
chunk__22467_22473 = G__22487;
count__22468_22474 = G__22488;
i__22469_22475 = G__22489;
continue;
} else {
var vec__22471_22490 = cljs.core.first.call(null,seq__22466_22484__$1);
var k_22491 = cljs.core.nth.call(null,vec__22471_22490,(0),null);
var v_22492 = cljs.core.nth.call(null,vec__22471_22490,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_22492)){
form_data.append(cljs.core.name.call(null,k_22491),cljs.core.first.call(null,v_22492),cljs.core.second.call(null,v_22492));
} else {
form_data.append(cljs.core.name.call(null,k_22491),v_22492);
}

var G__22493 = cljs.core.next.call(null,seq__22466_22484__$1);
var G__22494 = null;
var G__22495 = (0);
var G__22496 = (0);
seq__22466_22472 = G__22493;
chunk__22467_22473 = G__22494;
count__22468_22474 = G__22495;
i__22469_22475 = G__22496;
continue;
}
} else {
}
}
break;
}

return form_data;
});
cljs_http.client.wrap_multipart_params = (function cljs_http$client$wrap_multipart_params(client){
return (function (p__22500){
var map__22501 = p__22500;
var map__22501__$1 = ((((!((map__22501 == null)))?((((map__22501.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22501.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22501):map__22501);
var request = map__22501__$1;
var multipart_params = cljs.core.get.call(null,map__22501__$1,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707));
var request_method = cljs.core.get.call(null,map__22501__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core.truth_((function (){var and__11885__auto__ = multipart_params;
if(cljs.core.truth_(and__11885__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__11885__auto__;
}
})())){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_form_data.call(null,multipart_params)));
} else {
return client.call(null,request);
}
});
});
cljs_http.client.wrap_method = (function cljs_http$client$wrap_method(client){
return (function (req){
var temp__4423__auto__ = new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4423__auto__)){
var m = temp__4423__auto__;
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"method","method",55703592)),new cljs.core.Keyword(null,"request-method","request-method",1764796830),m));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_server_name = (function cljs_http$client$wrap_server_name(client,server_name){
return (function (p1__22503_SHARP_){
return client.call(null,cljs.core.assoc.call(null,p1__22503_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name));
});
});
cljs_http.client.wrap_url = (function cljs_http$client$wrap_url(client){
return (function (p__22508){
var map__22509 = p__22508;
var map__22509__$1 = ((((!((map__22509 == null)))?((((map__22509.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22509.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22509):map__22509);
var req = map__22509__$1;
var query_params = cljs.core.get.call(null,map__22509__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var temp__4423__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__4423__auto__)){
var spec = temp__4423__auto__;
return client.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),((function (spec,temp__4423__auto__,map__22509,map__22509__$1,req,query_params){
return (function (p1__22504_SHARP_){
return cljs.core.merge.call(null,p1__22504_SHARP_,query_params);
});})(spec,temp__4423__auto__,map__22509,map__22509__$1,req,query_params))
));
} else {
return client.call(null,req);
}
});
});
/**
 * Middleware converting the :basic-auth option or `credentials` into
 *   an Authorization header.
 */
cljs_http.client.wrap_basic_auth = (function cljs_http$client$wrap_basic_auth(var_args){
var args__12963__auto__ = [];
var len__12956__auto___22515 = arguments.length;
var i__12957__auto___22516 = (0);
while(true){
if((i__12957__auto___22516 < len__12956__auto___22515)){
args__12963__auto__.push((arguments[i__12957__auto___22516]));

var G__22517 = (i__12957__auto___22516 + (1));
i__12957__auto___22516 = G__22517;
continue;
} else {
}
break;
}

var argseq__12964__auto__ = ((((1) < args__12963__auto__.length))?(new cljs.core.IndexedSeq(args__12963__auto__.slice((1)),(0))):null);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12964__auto__);
});

cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__22513){
var vec__22514 = p__22513;
var credentials = cljs.core.nth.call(null,vec__22514,(0),null);
return ((function (vec__22514,credentials){
return (function (req){
var credentials__$1 = (function (){var or__11897__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__11897__auto__)){
return or__11897__auto__;
} else {
return credentials;
}
})();
if(!(cljs.core.empty_QMARK_.call(null,credentials__$1))){
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),cljs_http.util.basic_auth.call(null,credentials__$1)));
} else {
return client.call(null,req);
}
});
;})(vec__22514,credentials))
});

cljs_http.client.wrap_basic_auth.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_basic_auth.cljs$lang$applyTo = (function (seq22511){
var G__22512 = cljs.core.first.call(null,seq22511);
var seq22511__$1 = cljs.core.next.call(null,seq22511);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic(G__22512,seq22511__$1);
});
/**
 * Middleware converting the :oauth-token option into an Authorization header.
 */
cljs_http.client.wrap_oauth = (function cljs_http$client$wrap_oauth(client){
return (function (req){
var temp__4423__auto__ = new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4423__auto__)){
var oauth_token = temp__4423__auto__;
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),[cljs.core.str("Bearer "),cljs.core.str(oauth_token)].join('')));
} else {
return client.call(null,req);
}
});
});
/**
 * Pipe the response-channel into the request-map's
 * custom channel (e.g. to enable transducers)
 */
cljs_http.client.wrap_channel_from_request_map = (function cljs_http$client$wrap_channel_from_request_map(client){
return (function (request){
var temp__4423__auto__ = new cljs.core.Keyword(null,"channel","channel",734187692).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4423__auto__)){
var custom_channel = temp__4423__auto__;
return cljs.core.async.pipe.call(null,client.call(null,request),custom_channel);
} else {
return client.call(null,request);
}
});
});
/**
 * Returns a batteries-included HTTP request function coresponding to the given
 * core client. See client/request
 */
cljs_http.client.wrap_request = (function cljs_http$client$wrap_request(request){
return cljs_http.client.wrap_default_headers.call(null,cljs_http.client.wrap_channel_from_request_map.call(null,cljs_http.client.wrap_url.call(null,cljs_http.client.wrap_method.call(null,cljs_http.client.wrap_oauth.call(null,cljs_http.client.wrap_basic_auth.call(null,cljs_http.client.wrap_query_params.call(null,cljs_http.client.wrap_content_type.call(null,cljs_http.client.wrap_json_response.call(null,cljs_http.client.wrap_json_params.call(null,cljs_http.client.wrap_transit_response.call(null,cljs_http.client.wrap_transit_params.call(null,cljs_http.client.wrap_edn_response.call(null,cljs_http.client.wrap_edn_params.call(null,cljs_http.client.wrap_multipart_params.call(null,cljs_http.client.wrap_form_params.call(null,cljs_http.client.wrap_accept.call(null,request)))))))))))))))));
});
/**
 * Executes the HTTP request corresponding to the given map and returns the
 * response map for corresponding to the resulting HTTP response.
 * 
 * In addition to the standard Ring request keys, the following keys are also
 * recognized:
 * * :url
 * * :method
 * * :query-params
 */
cljs_http.client.request = cljs_http.client.wrap_request.call(null,cljs_http.core.request);
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.delete$ = (function cljs_http$client$delete(var_args){
var args__12963__auto__ = [];
var len__12956__auto___22522 = arguments.length;
var i__12957__auto___22523 = (0);
while(true){
if((i__12957__auto___22523 < len__12956__auto___22522)){
args__12963__auto__.push((arguments[i__12957__auto___22523]));

var G__22524 = (i__12957__auto___22523 + (1));
i__12957__auto___22523 = G__22524;
continue;
} else {
}
break;
}

var argseq__12964__auto__ = ((((1) < args__12963__auto__.length))?(new cljs.core.IndexedSeq(args__12963__auto__.slice((1)),(0))):null);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12964__auto__);
});

cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__22520){
var vec__22521 = p__22520;
var req = cljs.core.nth.call(null,vec__22521,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.delete$.cljs$lang$maxFixedArity = (1);

cljs_http.client.delete$.cljs$lang$applyTo = (function (seq22518){
var G__22519 = cljs.core.first.call(null,seq22518);
var seq22518__$1 = cljs.core.next.call(null,seq22518);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic(G__22519,seq22518__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.get = (function cljs_http$client$get(var_args){
var args__12963__auto__ = [];
var len__12956__auto___22529 = arguments.length;
var i__12957__auto___22530 = (0);
while(true){
if((i__12957__auto___22530 < len__12956__auto___22529)){
args__12963__auto__.push((arguments[i__12957__auto___22530]));

var G__22531 = (i__12957__auto___22530 + (1));
i__12957__auto___22530 = G__22531;
continue;
} else {
}
break;
}

var argseq__12964__auto__ = ((((1) < args__12963__auto__.length))?(new cljs.core.IndexedSeq(args__12963__auto__.slice((1)),(0))):null);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12964__auto__);
});

cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__22527){
var vec__22528 = p__22527;
var req = cljs.core.nth.call(null,vec__22528,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.get.cljs$lang$maxFixedArity = (1);

cljs_http.client.get.cljs$lang$applyTo = (function (seq22525){
var G__22526 = cljs.core.first.call(null,seq22525);
var seq22525__$1 = cljs.core.next.call(null,seq22525);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(G__22526,seq22525__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.head = (function cljs_http$client$head(var_args){
var args__12963__auto__ = [];
var len__12956__auto___22536 = arguments.length;
var i__12957__auto___22537 = (0);
while(true){
if((i__12957__auto___22537 < len__12956__auto___22536)){
args__12963__auto__.push((arguments[i__12957__auto___22537]));

var G__22538 = (i__12957__auto___22537 + (1));
i__12957__auto___22537 = G__22538;
continue;
} else {
}
break;
}

var argseq__12964__auto__ = ((((1) < args__12963__auto__.length))?(new cljs.core.IndexedSeq(args__12963__auto__.slice((1)),(0))):null);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12964__auto__);
});

cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__22534){
var vec__22535 = p__22534;
var req = cljs.core.nth.call(null,vec__22535,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.head.cljs$lang$maxFixedArity = (1);

cljs_http.client.head.cljs$lang$applyTo = (function (seq22532){
var G__22533 = cljs.core.first.call(null,seq22532);
var seq22532__$1 = cljs.core.next.call(null,seq22532);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic(G__22533,seq22532__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.jsonp = (function cljs_http$client$jsonp(var_args){
var args__12963__auto__ = [];
var len__12956__auto___22543 = arguments.length;
var i__12957__auto___22544 = (0);
while(true){
if((i__12957__auto___22544 < len__12956__auto___22543)){
args__12963__auto__.push((arguments[i__12957__auto___22544]));

var G__22545 = (i__12957__auto___22544 + (1));
i__12957__auto___22544 = G__22545;
continue;
} else {
}
break;
}

var argseq__12964__auto__ = ((((1) < args__12963__auto__.length))?(new cljs.core.IndexedSeq(args__12963__auto__.slice((1)),(0))):null);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12964__auto__);
});

cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__22541){
var vec__22542 = p__22541;
var req = cljs.core.nth.call(null,vec__22542,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"jsonp","jsonp",226119588),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.jsonp.cljs$lang$maxFixedArity = (1);

cljs_http.client.jsonp.cljs$lang$applyTo = (function (seq22539){
var G__22540 = cljs.core.first.call(null,seq22539);
var seq22539__$1 = cljs.core.next.call(null,seq22539);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic(G__22540,seq22539__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.move = (function cljs_http$client$move(var_args){
var args__12963__auto__ = [];
var len__12956__auto___22550 = arguments.length;
var i__12957__auto___22551 = (0);
while(true){
if((i__12957__auto___22551 < len__12956__auto___22550)){
args__12963__auto__.push((arguments[i__12957__auto___22551]));

var G__22552 = (i__12957__auto___22551 + (1));
i__12957__auto___22551 = G__22552;
continue;
} else {
}
break;
}

var argseq__12964__auto__ = ((((1) < args__12963__auto__.length))?(new cljs.core.IndexedSeq(args__12963__auto__.slice((1)),(0))):null);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12964__auto__);
});

cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__22548){
var vec__22549 = p__22548;
var req = cljs.core.nth.call(null,vec__22549,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.move.cljs$lang$maxFixedArity = (1);

cljs_http.client.move.cljs$lang$applyTo = (function (seq22546){
var G__22547 = cljs.core.first.call(null,seq22546);
var seq22546__$1 = cljs.core.next.call(null,seq22546);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic(G__22547,seq22546__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.options = (function cljs_http$client$options(var_args){
var args__12963__auto__ = [];
var len__12956__auto___22557 = arguments.length;
var i__12957__auto___22558 = (0);
while(true){
if((i__12957__auto___22558 < len__12956__auto___22557)){
args__12963__auto__.push((arguments[i__12957__auto___22558]));

var G__22559 = (i__12957__auto___22558 + (1));
i__12957__auto___22558 = G__22559;
continue;
} else {
}
break;
}

var argseq__12964__auto__ = ((((1) < args__12963__auto__.length))?(new cljs.core.IndexedSeq(args__12963__auto__.slice((1)),(0))):null);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12964__auto__);
});

cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__22555){
var vec__22556 = p__22555;
var req = cljs.core.nth.call(null,vec__22556,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.options.cljs$lang$maxFixedArity = (1);

cljs_http.client.options.cljs$lang$applyTo = (function (seq22553){
var G__22554 = cljs.core.first.call(null,seq22553);
var seq22553__$1 = cljs.core.next.call(null,seq22553);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic(G__22554,seq22553__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.patch = (function cljs_http$client$patch(var_args){
var args__12963__auto__ = [];
var len__12956__auto___22564 = arguments.length;
var i__12957__auto___22565 = (0);
while(true){
if((i__12957__auto___22565 < len__12956__auto___22564)){
args__12963__auto__.push((arguments[i__12957__auto___22565]));

var G__22566 = (i__12957__auto___22565 + (1));
i__12957__auto___22565 = G__22566;
continue;
} else {
}
break;
}

var argseq__12964__auto__ = ((((1) < args__12963__auto__.length))?(new cljs.core.IndexedSeq(args__12963__auto__.slice((1)),(0))):null);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12964__auto__);
});

cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__22562){
var vec__22563 = p__22562;
var req = cljs.core.nth.call(null,vec__22563,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.patch.cljs$lang$maxFixedArity = (1);

cljs_http.client.patch.cljs$lang$applyTo = (function (seq22560){
var G__22561 = cljs.core.first.call(null,seq22560);
var seq22560__$1 = cljs.core.next.call(null,seq22560);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic(G__22561,seq22560__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.post = (function cljs_http$client$post(var_args){
var args__12963__auto__ = [];
var len__12956__auto___22571 = arguments.length;
var i__12957__auto___22572 = (0);
while(true){
if((i__12957__auto___22572 < len__12956__auto___22571)){
args__12963__auto__.push((arguments[i__12957__auto___22572]));

var G__22573 = (i__12957__auto___22572 + (1));
i__12957__auto___22572 = G__22573;
continue;
} else {
}
break;
}

var argseq__12964__auto__ = ((((1) < args__12963__auto__.length))?(new cljs.core.IndexedSeq(args__12963__auto__.slice((1)),(0))):null);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12964__auto__);
});

cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__22569){
var vec__22570 = p__22569;
var req = cljs.core.nth.call(null,vec__22570,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.post.cljs$lang$maxFixedArity = (1);

cljs_http.client.post.cljs$lang$applyTo = (function (seq22567){
var G__22568 = cljs.core.first.call(null,seq22567);
var seq22567__$1 = cljs.core.next.call(null,seq22567);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(G__22568,seq22567__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.put = (function cljs_http$client$put(var_args){
var args__12963__auto__ = [];
var len__12956__auto___22578 = arguments.length;
var i__12957__auto___22579 = (0);
while(true){
if((i__12957__auto___22579 < len__12956__auto___22578)){
args__12963__auto__.push((arguments[i__12957__auto___22579]));

var G__22580 = (i__12957__auto___22579 + (1));
i__12957__auto___22579 = G__22580;
continue;
} else {
}
break;
}

var argseq__12964__auto__ = ((((1) < args__12963__auto__.length))?(new cljs.core.IndexedSeq(args__12963__auto__.slice((1)),(0))):null);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12964__auto__);
});

cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__22576){
var vec__22577 = p__22576;
var req = cljs.core.nth.call(null,vec__22577,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.put.cljs$lang$maxFixedArity = (1);

cljs_http.client.put.cljs$lang$applyTo = (function (seq22574){
var G__22575 = cljs.core.first.call(null,seq22574);
var seq22574__$1 = cljs.core.next.call(null,seq22574);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic(G__22575,seq22574__$1);
});

//# sourceMappingURL=client.js.map?rel=1451058373184