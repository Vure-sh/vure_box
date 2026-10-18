# vure_box
a small tool for things i deal with daily. made this because postman takes way too long to open just to test an endpoint

- notes (saves to localstorage)
- json formatter & minifier
- base64 encode/decode
- fetch (test requests and pipe response straight to json tab)

*(heads up: endpoints need to allow CORS since this runs 100% client-side in the browser)*

### how to run
- live demo: https://vure-sh.github.io/vure_box/
- locally: clone the repo and open `index.html` in any browser

### dev notes & tooling
- coded manually in vscode (html/css/vanilla js)
- used gemini as a rubber duck to debug some fetch header parsing and look up base64 functions (`btoa`/`atob`)

### who is json?
a guy that gets sent with each call //sorry for the bad joke lol
