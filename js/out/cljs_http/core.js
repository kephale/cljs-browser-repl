// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs_http.core');
goog.require('cljs.core');
goog.require('goog.net.ErrorCode');
goog.require('goog.net.EventType');
goog.require('cljs.core.async');
goog.require('cljs_http.util');
goog.require('goog.net.Jsonp');
goog.require('clojure.string');
goog.require('goog.net.XhrIo');
cljs_http.core.pending_requests = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__4425__auto__ = cljs.core.deref.call(null,cljs_http.core.pending_requests).call(null,channel);
if(cljs.core.truth_(temp__4425__auto__)){
var req = temp__4425__auto__;
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_.call(null,channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return new cljs.core.Keyword(null,"jsonp","jsonp",226119588).cljs$core$IFn$_invoke$arity$1(req).cancel(new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.call(null,xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var seq__20184 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs_http.util.camelize,cljs.core.keys.call(null,headers)));
var chunk__20189 = null;
var count__20190 = (0);
var i__20191 = (0);
while(true){
if((i__20191 < count__20190)){
var h_name = cljs.core._nth.call(null,chunk__20189,i__20191);
var seq__20192_20196 = cljs.core.seq.call(null,cljs.core.vals.call(null,headers));
var chunk__20193_20197 = null;
var count__20194_20198 = (0);
var i__20195_20199 = (0);
while(true){
if((i__20195_20199 < count__20194_20198)){
var h_val_20200 = cljs.core._nth.call(null,chunk__20193_20197,i__20195_20199);
xhr.headers.set(h_name,h_val_20200);

var G__20201 = seq__20192_20196;
var G__20202 = chunk__20193_20197;
var G__20203 = count__20194_20198;
var G__20204 = (i__20195_20199 + (1));
seq__20192_20196 = G__20201;
chunk__20193_20197 = G__20202;
count__20194_20198 = G__20203;
i__20195_20199 = G__20204;
continue;
} else {
var temp__4425__auto___20205 = cljs.core.seq.call(null,seq__20192_20196);
if(temp__4425__auto___20205){
var seq__20192_20206__$1 = temp__4425__auto___20205;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20192_20206__$1)){
var c__12701__auto___20207 = cljs.core.chunk_first.call(null,seq__20192_20206__$1);
var G__20208 = cljs.core.chunk_rest.call(null,seq__20192_20206__$1);
var G__20209 = c__12701__auto___20207;
var G__20210 = cljs.core.count.call(null,c__12701__auto___20207);
var G__20211 = (0);
seq__20192_20196 = G__20208;
chunk__20193_20197 = G__20209;
count__20194_20198 = G__20210;
i__20195_20199 = G__20211;
continue;
} else {
var h_val_20212 = cljs.core.first.call(null,seq__20192_20206__$1);
xhr.headers.set(h_name,h_val_20212);

var G__20213 = cljs.core.next.call(null,seq__20192_20206__$1);
var G__20214 = null;
var G__20215 = (0);
var G__20216 = (0);
seq__20192_20196 = G__20213;
chunk__20193_20197 = G__20214;
count__20194_20198 = G__20215;
i__20195_20199 = G__20216;
continue;
}
} else {
}
}
break;
}

var G__20217 = seq__20184;
var G__20218 = chunk__20189;
var G__20219 = count__20190;
var G__20220 = (i__20191 + (1));
seq__20184 = G__20217;
chunk__20189 = G__20218;
count__20190 = G__20219;
i__20191 = G__20220;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__20184);
if(temp__4425__auto__){
var seq__20184__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20184__$1)){
var c__12701__auto__ = cljs.core.chunk_first.call(null,seq__20184__$1);
var G__20221 = cljs.core.chunk_rest.call(null,seq__20184__$1);
var G__20222 = c__12701__auto__;
var G__20223 = cljs.core.count.call(null,c__12701__auto__);
var G__20224 = (0);
seq__20184 = G__20221;
chunk__20189 = G__20222;
count__20190 = G__20223;
i__20191 = G__20224;
continue;
} else {
var h_name = cljs.core.first.call(null,seq__20184__$1);
var seq__20185_20225 = cljs.core.seq.call(null,cljs.core.vals.call(null,headers));
var chunk__20186_20226 = null;
var count__20187_20227 = (0);
var i__20188_20228 = (0);
while(true){
if((i__20188_20228 < count__20187_20227)){
var h_val_20229 = cljs.core._nth.call(null,chunk__20186_20226,i__20188_20228);
xhr.headers.set(h_name,h_val_20229);

var G__20230 = seq__20185_20225;
var G__20231 = chunk__20186_20226;
var G__20232 = count__20187_20227;
var G__20233 = (i__20188_20228 + (1));
seq__20185_20225 = G__20230;
chunk__20186_20226 = G__20231;
count__20187_20227 = G__20232;
i__20188_20228 = G__20233;
continue;
} else {
var temp__4425__auto___20234__$1 = cljs.core.seq.call(null,seq__20185_20225);
if(temp__4425__auto___20234__$1){
var seq__20185_20235__$1 = temp__4425__auto___20234__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20185_20235__$1)){
var c__12701__auto___20236 = cljs.core.chunk_first.call(null,seq__20185_20235__$1);
var G__20237 = cljs.core.chunk_rest.call(null,seq__20185_20235__$1);
var G__20238 = c__12701__auto___20236;
var G__20239 = cljs.core.count.call(null,c__12701__auto___20236);
var G__20240 = (0);
seq__20185_20225 = G__20237;
chunk__20186_20226 = G__20238;
count__20187_20227 = G__20239;
i__20188_20228 = G__20240;
continue;
} else {
var h_val_20241 = cljs.core.first.call(null,seq__20185_20235__$1);
xhr.headers.set(h_name,h_val_20241);

var G__20242 = cljs.core.next.call(null,seq__20185_20235__$1);
var G__20243 = null;
var G__20244 = (0);
var G__20245 = (0);
seq__20185_20225 = G__20242;
chunk__20186_20226 = G__20243;
count__20187_20227 = G__20244;
i__20188_20228 = G__20245;
continue;
}
} else {
}
}
break;
}

var G__20246 = cljs.core.next.call(null,seq__20184__$1);
var G__20247 = null;
var G__20248 = (0);
var G__20249 = (0);
seq__20184 = G__20246;
chunk__20189 = G__20247;
count__20190 = G__20248;
i__20191 = G__20249;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__20251 = response_type;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__20251)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"blob","blob",1636965233),G__20251)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"document","document",-1329188687),G__20251)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),G__20251)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),G__20251)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.call(null,null,G__20251)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(response_type)].join('')));

}
}
}
}
}
}
})());
});
/**
 * Builds an XhrIo object from the request parameters.
 */
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__20252){
var map__20256 = p__20252;
var map__20256__$1 = ((((!((map__20256 == null)))?((((map__20256.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20256.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20256):map__20256);
var request = map__20256__$1;
var with_credentials_QMARK_ = cljs.core.get.call(null,map__20256__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.call(null,map__20256__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.call(null,map__20256__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__11897__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__11897__auto__)){
return or__11897__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__20258 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_.call(null,G__20258,default_headers);

cljs_http.core.apply_response_type_BANG_.call(null,G__20258,response_type);

G__20258.setTimeoutInterval(timeout);

G__20258.setWithCredentials(send_credentials);

return G__20258;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__20259){
var map__20286 = p__20259;
var map__20286__$1 = ((((!((map__20286 == null)))?((((map__20286.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20286.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20286):map__20286);
var request = map__20286__$1;
var request_method = cljs.core.get.call(null,map__20286__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__20286__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.call(null,map__20286__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var with_credentials_QMARK_ = cljs.core.get.call(null,map__20286__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var cancel = cljs.core.get.call(null,map__20286__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var channel = cljs.core.async.chan.call(null);
var request_url = cljs_http.util.build_url.call(null,request);
var method = cljs.core.name.call(null,(function (){var or__11897__auto__ = request_method;
if(cljs.core.truth_(or__11897__auto__)){
return or__11897__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var headers__$1 = cljs_http.util.build_headers.call(null,headers);
var xhr__$1 = cljs_http.core.build_xhr.call(null,request);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr__$1);

xhr__$1.listen(goog.net.EventType.COMPLETE,((function (channel,request_url,method,headers__$1,xhr__$1,map__20286,map__20286__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel){
return (function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"status","status",-1997798413),target.getStatus(),new cljs.core.Keyword(null,"success","success",1890645906),target.isSuccess(),new cljs.core.Keyword(null,"body","body",-2049205669),target.getResponse(),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs_http.util.parse_headers.call(null,target.getAllResponseHeaders()),new cljs.core.Keyword(null,"trace-redirects","trace-redirects",-1149427907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),new cljs.core.Keyword(null,"error-code","error-code",180497232),cljs_http.core.error_kw.call(null,target.getLastErrorCode()),new cljs.core.Keyword(null,"error-text","error-text",2021893718),target.getLastError()], null);
if(cljs.core.not.call(null,cljs_http.core.aborted_QMARK_.call(null,xhr__$1))){
cljs.core.async.put_BANG_.call(null,channel,response);
} else {
}

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,request_url,method,headers__$1,xhr__$1,map__20286,map__20286__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel))
);

xhr__$1.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__17398__auto___20312 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17398__auto___20312,channel,request_url,method,headers__$1,xhr__$1,map__20286,map__20286__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel){
return (function (){
var f__17399__auto__ = (function (){var switch__17286__auto__ = ((function (c__17398__auto___20312,channel,request_url,method,headers__$1,xhr__$1,map__20286,map__20286__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel){
return (function (state_20298){
var state_val_20299 = (state_20298[(1)]);
if((state_val_20299 === (1))){
var state_20298__$1 = state_20298;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20298__$1,(2),cancel);
} else {
if((state_val_20299 === (2))){
var inst_20289 = (state_20298[(2)]);
var inst_20290 = xhr__$1.isComplete();
var inst_20291 = cljs.core.not.call(null,inst_20290);
var state_20298__$1 = (function (){var statearr_20300 = state_20298;
(statearr_20300[(7)] = inst_20289);

return statearr_20300;
})();
if(inst_20291){
var statearr_20301_20313 = state_20298__$1;
(statearr_20301_20313[(1)] = (3));

} else {
var statearr_20302_20314 = state_20298__$1;
(statearr_20302_20314[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20299 === (3))){
var inst_20293 = xhr__$1.abort();
var state_20298__$1 = state_20298;
var statearr_20303_20315 = state_20298__$1;
(statearr_20303_20315[(2)] = inst_20293);

(statearr_20303_20315[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20299 === (4))){
var state_20298__$1 = state_20298;
var statearr_20304_20316 = state_20298__$1;
(statearr_20304_20316[(2)] = null);

(statearr_20304_20316[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20299 === (5))){
var inst_20296 = (state_20298[(2)]);
var state_20298__$1 = state_20298;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20298__$1,inst_20296);
} else {
return null;
}
}
}
}
}
});})(c__17398__auto___20312,channel,request_url,method,headers__$1,xhr__$1,map__20286,map__20286__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel))
;
return ((function (switch__17286__auto__,c__17398__auto___20312,channel,request_url,method,headers__$1,xhr__$1,map__20286,map__20286__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel){
return (function() {
var cljs_http$core$xhr_$_state_machine__17287__auto__ = null;
var cljs_http$core$xhr_$_state_machine__17287__auto____0 = (function (){
var statearr_20308 = [null,null,null,null,null,null,null,null];
(statearr_20308[(0)] = cljs_http$core$xhr_$_state_machine__17287__auto__);

(statearr_20308[(1)] = (1));

return statearr_20308;
});
var cljs_http$core$xhr_$_state_machine__17287__auto____1 = (function (state_20298){
while(true){
var ret_value__17288__auto__ = (function (){try{while(true){
var result__17289__auto__ = switch__17286__auto__.call(null,state_20298);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17289__auto__;
}
break;
}
}catch (e20309){if((e20309 instanceof Object)){
var ex__17290__auto__ = e20309;
var statearr_20310_20317 = state_20298;
(statearr_20310_20317[(5)] = ex__17290__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20298);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20309;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20318 = state_20298;
state_20298 = G__20318;
continue;
} else {
return ret_value__17288__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__17287__auto__ = function(state_20298){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__17287__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__17287__auto____1.call(this,state_20298);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__17287__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__17287__auto____0;
cljs_http$core$xhr_$_state_machine__17287__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__17287__auto____1;
return cljs_http$core$xhr_$_state_machine__17287__auto__;
})()
;})(switch__17286__auto__,c__17398__auto___20312,channel,request_url,method,headers__$1,xhr__$1,map__20286,map__20286__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel))
})();
var state__17400__auto__ = (function (){var statearr_20311 = f__17399__auto__.call(null);
(statearr_20311[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17398__auto___20312);

return statearr_20311;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17400__auto__);
});})(c__17398__auto___20312,channel,request_url,method,headers__$1,xhr__$1,map__20286,map__20286__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel))
);

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__20319){
var map__20336 = p__20319;
var map__20336__$1 = ((((!((map__20336 == null)))?((((map__20336.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20336.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20336):map__20336);
var request = map__20336__$1;
var timeout = cljs.core.get.call(null,map__20336__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.call(null,map__20336__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.call(null,map__20336__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var channel = cljs.core.async.chan.call(null);
var jsonp__$1 = (new goog.net.Jsonp(cljs_http.util.build_url.call(null,request),callback_name));
jsonp__$1.setRequestTimeout(timeout);

var req_20352 = jsonp__$1.send(null,((function (channel,jsonp__$1,map__20336,map__20336__$1,request,timeout,callback_name,cancel){
return (function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.js__GT_clj.call(null,data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true)], null);
cljs.core.async.put_BANG_.call(null,channel,response);

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,jsonp__$1,map__20336,map__20336__$1,request,timeout,callback_name,cancel))
,((function (channel,jsonp__$1,map__20336,map__20336__$1,request,timeout,callback_name,cancel){
return (function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,jsonp__$1,map__20336,map__20336__$1,request,timeout,callback_name,cancel))
);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp__$1,new cljs.core.Keyword(null,"request","request",1772954723),req_20352], null));

if(cljs.core.truth_(cancel)){
var c__17398__auto___20353 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17398__auto___20353,req_20352,channel,jsonp__$1,map__20336,map__20336__$1,request,timeout,callback_name,cancel){
return (function (){
var f__17399__auto__ = (function (){var switch__17286__auto__ = ((function (c__17398__auto___20353,req_20352,channel,jsonp__$1,map__20336,map__20336__$1,request,timeout,callback_name,cancel){
return (function (state_20342){
var state_val_20343 = (state_20342[(1)]);
if((state_val_20343 === (1))){
var state_20342__$1 = state_20342;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20342__$1,(2),cancel);
} else {
if((state_val_20343 === (2))){
var inst_20339 = (state_20342[(2)]);
var inst_20340 = jsonp__$1.cancel(req_20352);
var state_20342__$1 = (function (){var statearr_20344 = state_20342;
(statearr_20344[(7)] = inst_20339);

return statearr_20344;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20342__$1,inst_20340);
} else {
return null;
}
}
});})(c__17398__auto___20353,req_20352,channel,jsonp__$1,map__20336,map__20336__$1,request,timeout,callback_name,cancel))
;
return ((function (switch__17286__auto__,c__17398__auto___20353,req_20352,channel,jsonp__$1,map__20336,map__20336__$1,request,timeout,callback_name,cancel){
return (function() {
var cljs_http$core$jsonp_$_state_machine__17287__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__17287__auto____0 = (function (){
var statearr_20348 = [null,null,null,null,null,null,null,null];
(statearr_20348[(0)] = cljs_http$core$jsonp_$_state_machine__17287__auto__);

(statearr_20348[(1)] = (1));

return statearr_20348;
});
var cljs_http$core$jsonp_$_state_machine__17287__auto____1 = (function (state_20342){
while(true){
var ret_value__17288__auto__ = (function (){try{while(true){
var result__17289__auto__ = switch__17286__auto__.call(null,state_20342);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17289__auto__;
}
break;
}
}catch (e20349){if((e20349 instanceof Object)){
var ex__17290__auto__ = e20349;
var statearr_20350_20354 = state_20342;
(statearr_20350_20354[(5)] = ex__17290__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20342);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20349;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20355 = state_20342;
state_20342 = G__20355;
continue;
} else {
return ret_value__17288__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__17287__auto__ = function(state_20342){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__17287__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__17287__auto____1.call(this,state_20342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__17287__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__17287__auto____0;
cljs_http$core$jsonp_$_state_machine__17287__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__17287__auto____1;
return cljs_http$core$jsonp_$_state_machine__17287__auto__;
})()
;})(switch__17286__auto__,c__17398__auto___20353,req_20352,channel,jsonp__$1,map__20336,map__20336__$1,request,timeout,callback_name,cancel))
})();
var state__17400__auto__ = (function (){var statearr_20351 = f__17399__auto__.call(null);
(statearr_20351[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17398__auto___20353);

return statearr_20351;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17400__auto__);
});})(c__17398__auto___20353,req_20352,channel,jsonp__$1,map__20336,map__20336__$1,request,timeout,callback_name,cancel))
);

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__20356){
var map__20359 = p__20356;
var map__20359__$1 = ((((!((map__20359 == null)))?((((map__20359.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20359.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20359):map__20359);
var request__$1 = map__20359__$1;
var request_method = cljs.core.get.call(null,map__20359__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.call(null,request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp.call(null,request__$1);
} else {
return cljs_http.core.xhr.call(null,request__$1);
}
});

//# sourceMappingURL=core.js.map?rel=1451058359251