(ns replumb.core
  (:require-macros [cljs.env.macros :refer [with-compiler-env]])
  (:require [cljs.js :as cljs]
            [replumb.repl :as repl]
            [replumb.common :as common]
            [replumb.target :as target]
            [replumb.target.nodejs :as nodejs]))

(defn ^:export read-eval-call
  "Reads, evaluates and calls back with the evaluation result.

  The first parameter is a map of configuration options, currently
  supporting:

  * `:verbose` will enable the the evaluation logging, defaults to false
  * `:target` `:nodejs` and `:default` supported, the latter used if missing
  * `:init-fn!` user provided initialization function, it will be passed a
  map:

          :form   ;; the form to evaluate, as data
          :ns     ;; the current namespace, as symbol
          :target ;; the current target

  * `:load-fn!` will override ClojureScript's default `cljs.js/*load-fn*`:

      > Each runtime environment provides a different way to load a library.
      > Whatever function `*load-fn*` is bound to will be passed two arguments
      > - a map and a callback function: The map will have the following keys:
      >
      >     :name   - the name of the library (a symbol)
      >     :macros - modifier signaling a macros namespace load
      >     :path   - munged relative library path (a string)
      >
      > The callback cb, upon resolution, will need to pass the same map:
      >
      >     :lang       - the language, :clj or :js
      >     :source     - the source of the library (a string)
      >     :cache      - optional, if a :clj namespace has been precompiled to
      >                   :js, can give an analysis cache for faster loads.
      >     :source-map - optional, if a :clj namespace has been precompiled
      >                   to :js, can give a V3 source map JSON
      >
      > If the resource could not be resolved, the callback should be invoked with
      > nil.

  The second parameter, `callback`, should be a 1-arity function which receives
  the result map, whose result keys will be:

  ```
  :success?  ;; a boolean indicating if everything went right
  :value     ;; (if (success? result)) will contain the actual yield of the evaluation
  :error     ;; (if (not (success? result)) will contain a js/Error
  :form      ;; the evaluated form as data structure (not a string)
  ```

  It initializes the repl harness if necessary."
  ([callback source] (repl/read-eval-call {} callback source))
  ([opts callback source] (repl/read-eval-call opts callback source)))

(defn ^:export get-prompt
  "Retrieves the REPL prompt to display, according to the current
  namespace. Returns a string."
  []
  (str (repl/current-ns) "=> "))

(defn ^:export error->str
  "Return the message string of the input `js/Error`."
  ([error] (common/extract-message error))
  ([error print-stack?] (common/extract-message error print-stack?)))

(defn ^:export unwrap-result
  "Unwraps the result of an evaluation.

  It returns the content of `:value` in case of success and the content
  of `:error` (a `js/Error`) in case of failure."
  [result-map]
  (if (:success? result-map)
    (:value result-map)
    (:error result-map)))

(defn ^:export success?
  "Given a `result-map`, tells whether the evaluation was successful."
  [result-map]
  (:success? result-map))

(defn ^:export result->string
  "Given a `result-map`, returns the result of an evaluation as string."
  ([result-map]
   (result->string result-map false))
  ([result-map print-stack?]
   (if (:success? result-map)
     (:value result-map)
     (common/extract-message (:error result-map) false print-stack?))))

(defn ^:export nodejs-options
  "Creates a Node.js option map for read-eval-call.

  The first param of the 2-arity signature plugs in a `load-fn!`. It
  needs the source paths and a 2-arity function `(fn [filename source-cb]
  ...)` where source-cb is itself a function `(fn [source] ...)` that needs
  to be called with the source of the library (as string) when ready.
  The no-arity signature does not add any `load-fn!` to the option map.

  The attached `load-fn!` is akin to `cljs.js/*load-fn*`:

  > Each runtime environment provides a different way to load a library.
  > Whatever function `*load-fn*` is bound to will be passed two arguments - a
  > map and a callback function: The map will have the following keys:
  >
  >     :name   - the name of the library (a symbol)
  >     :macros - modifier signaling a macros namespace load
  >     :path   - munged relative library path (a string)
  >
  > The callback cb, upon resolution, will need to pass the same map:
  >
  >     :lang       - the language, :clj or :js
  >     :source     - the source of the library (a string)
  >     :cache      - optional, if a :clj namespace has been precompiled to :js, can
  >                   give an analysis cache for faster loads.
  >     :source-map - optional, if a :clj namespace has been precompiled to :js, can
  >                   give a V3 source map JSON
  >
  > If the resource could not be resolved, the callback should be invoked with
  > nil."
  ([] {:target :nodejs})
  ([src-paths read-file-fn]
   {:target :nodejs
    :load-fn! (nodejs/make-load-fn src-paths read-file-fn)}))
