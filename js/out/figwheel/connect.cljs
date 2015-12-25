(ns figwheel.connect (:require [figwheel.client] [figwheel.client.utils] [cljs-browser-repl.core]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/cljs-browser-repl.core.on-js-reload (apply js/cljs-browser-repl.core.on-js-reload x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'cljs-browser-repl.core/on-js-reload' is missing"))), :build-id "dev", :websocket-url "ws://localhost:3449/figwheel-ws"})

