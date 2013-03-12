# work-slave!

```
npm install work-slave
```

A TINY MODULE THAT TURNS STRINGS OF JAVASCRIPT INTO WEB WORKERS SO YOU DONT HAVE TO DO A SCRIPT TAG THING

Use with [browserify](http://github.com/substack/browserify) and [brfs](http://github.com/substack/brfs).


```js
var  fs = require('fs')
var  enslave = require('work-slave')
,    worker = fs.readFileSync('./my-worker-script-source.js')
;

var slave = enslave(worker)
slave.onmessage = function(msgEvent){
	...
};

slave.postMessage({
	message: 'There is a discrepancy in the camelCase.'
});
```

where 'my-worker-script.source.js' looks like this

```js
this.onmessage = function(msg){
	this.postMessage({message: 'Is that the last straw?'})
}
```