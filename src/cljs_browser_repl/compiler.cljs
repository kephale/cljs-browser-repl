(ns cljs-browser-repl.compiler
  ;(:require-macros [cljs.env.macros :refer [with-compiler-env]])
  (:require [replumb.core :as replumb]
            ;[replumb.browser.io :as io]
            [replumb.repl :refer [current-ns repl-read-string]]
            ;[cljs-mathbox.mathbox :as mathbox]
            ;cljsjs.mathbox
            )
  (:import goog.net.XhrIo))

; Original
#_(defn cljs-read-eval-print!
   [line cb]
   (try
     (replumb/read-eval-call cb line)
     (catch js/Error err
       (println "Caught js/Error during read-eval-print: " err)
       (cb {:error err :ns (current-ns)})
       )))  

(defn fetch-file!
  "Very simple implementation of XMLHttpRequests that given a file path
  calls src-cb with the string fetched of nil in case of error.
  See doc at https://developers.google.com/closure/library/docs/xhrio"
  [file-url src-cb]
  ;(js/alert "Fetching " (str file-url))
  (try
    (.send XhrIo file-url
           (fn [e]
             (if (.isSuccess (.-target e))
               (src-cb (.. e -target getResponseText))
               (src-cb nil))))
    (catch :default e
      (src-cb nil))))

(defn cljs-read-eval-print!
   [line cb]
   (try
     (replumb/read-eval-call #_{:read-file-fn! fetch-file!}
                             #_(replumb/browser-options ["resources/public/js/compiled/out" ] fetch-file!)
                             #_(replumb/browser-options ["resources/public/js/compiled/out" ] fetch-file!)
                             ;(replumb/browser-options ["resources/public/js/compiled/out" ] fetch-file!)
                             ;(replumb/browser-options ["http://kephale.github.io/cljs-browser-repl/js/out" ] fetch-file!)
                             (replumb/browser-options ["/src/cljs" "/js/vendor" "/js/compiled/out"]
                                                      fetch-file!
                                                     #_io/fetch-file!)
                             cb line)
     (catch js/Error err
       (println "Caught js/Error during read-eval-print: " err)
       (cb {:error err :ns (current-ns)})
       )))

(defn is-readable? [line]
  (try
    (repl-read-string line)
    true
    (catch :default _
      false)))

