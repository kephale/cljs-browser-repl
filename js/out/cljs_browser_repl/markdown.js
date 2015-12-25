// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs_browser_repl.markdown');
goog.require('cljs.core');
if(typeof cljs_browser_repl.markdown.cm !== 'undefined'){
} else {
cljs_browser_repl.markdown.cm = window.commonmark;
}
if(typeof cljs_browser_repl.markdown.Parser !== 'undefined'){
} else {
cljs_browser_repl.markdown.Parser = cljs_browser_repl.markdown.cm.Parser;
}
if(typeof cljs_browser_repl.markdown.HtmlRenderer !== 'undefined'){
} else {
cljs_browser_repl.markdown.HtmlRenderer = cljs_browser_repl.markdown.cm.HtmlRenderer;
}
if(typeof cljs_browser_repl.markdown.reader !== 'undefined'){
} else {
cljs_browser_repl.markdown.reader = (new cljs_browser_repl.markdown.Parser());
}
if(typeof cljs_browser_repl.markdown.writer !== 'undefined'){
} else {
cljs_browser_repl.markdown.writer = (new cljs_browser_repl.markdown.HtmlRenderer());
}
cljs_browser_repl.markdown.render = (function cljs_browser_repl$markdown$render(md){
return cljs_browser_repl.markdown.writer.render(cljs_browser_repl.markdown.reader.parse(md));
});

//# sourceMappingURL=markdown.js.map?rel=1451058378921