# Transformer

A transformer is a class that transforms file or files.

## How to define a transformer

Extend the base transformer, and override _\_transform_ and _transformAll_.

```js
class CustomTransformer extends Transformer {
    _transform(file) {

    }
    transformAll(files) {

    }
}
```

An options argument is passed to the constructor, access to it with _this.options_:

```js
new CustomTransformer({}).options
```

> `panto` is a global variable, you can access to it anywhere.

## Torrential(or not)

A transformer could be "torrential" or not. If torrential, _\_transform_ is called, or else _transformAll_. Then both return a promise object. The key difference is, whether your files should be transformed together or independently.

Most transformers are not torrential, e.g. `uglify`:

```js
const uglify = require('./uglify');

class UglifyTransformer extends Transformer {
    _transform(file) {
        const {filename, content} = file;
        const {uglifyOptions} = this.options;
        return new Promise((resolve) => {
                resolve(panto._.extend(file, {content: uglify(content, uglifyOptions)}))
        });
    }
    isTorrential() {
        return false;
    }
}
```

`browserify` is a typical torrential transformer:

```js
const browserify = require('./browserify');

class BrowserifyTransformer extends Transformer {
    transformAll(files) {
        const {browserifyOptions} = this.options;
        const {entry, bundle} = browserifyOptions;
        return new Promise((resolve) => {
                resolve({
                    filename: bundle,
                    entry,
                    content: browserify(files)
                });
        });
    }
    isTorrential() {
        return true;
    }
}
```

See that difference? Actually the non-torrential transformers could be torrential too, but is highly not suggested. 

## Cacheable(or not)

In a transformer, being idempotent to content means that the files with same contents generate the same output.

This characteristic can be used for caching. Define a _isCacheable()_ to declare:

```js
class CustomTransformer extends Transformer {
    isCacheable() {
        return !!this.options.isCacheable;
    }
}
```

If options or anything else beyond content affect the output, your transformer MUST BE not cacheable. By default, it depends on `isCacheable` in options.

Base transformer is defined in [panto-transformer](https://github.com/pantojs/panto-transformer).