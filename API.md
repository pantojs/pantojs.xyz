# API

`panto` is a global variable.

## Stream

[panto-stream](https://github.com/pantojs/panto-stream)

E.g.

```js
new panto.Stream();
```

## options

An instance of [panto-options](https://github.com/pantojs/panto-options)

## file

An instance of [panto-file-utils](https://github.com/pantojs/panto-file-utils)

## log

[panto-logger](https://github.com/pantojs/panto-logger)

## _ or util

[lodash](https://www.npmjs.com/package/lodash)
 
## setOptions(object)

Setup options, most important options are:

 - cwd
 - src
 - output

## getOptions()

Query all options

## getOption(...args)

Query one option, alias for [options](https://github.com/pantojs/panto-options).get(...args)

## getFiles()

Fetch all files in `src` directory.

## reportDependencies(filename, ...dependencies)

Report a dependency relationship.

E.g.

```js
panto.reportDependencies('style/css/main.css', 'img/logo.png')
```

The _filename_ and _dependencies_ arguments must be paths below _cwd/src_.

## pick(pattern, isDormant) or $(pattern, isDormant)

Pick up some files and create a header stream without a transformer.

Being dormant makes this stream flows only once.

## rest()

Pick the files rest and create a header stream without a transformer.

E.g.

```js
panto.$('*.css')
panto.$('*.js')
panto.$('*.html')
panto.$('*.{png,jpg,gif}')
panto.rest()
```

## clear()

Reset panto. You don't have to use it directly in one building lifecycle.

## loadTransformer(name, transformer)

Import a transformer and bind to the prototype of Stream.

E.g.

```js
panto.loadTransformer('babel');// panto-transformer-babel
panto.loadTransformer('uglify', require('panto-transformer-uglify'));

panto.$('*.js').babel().uglify();
```

## build()

Startup building.

## watch()

Watch file changing, must be after _build()_.

E.g.

```js
panto.build().then(()=>{
    panto.watch();
})
```