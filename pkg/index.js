const js = import("./wasm_add.js");
js.then(js => {
  js.alert_add(3,2);
});
