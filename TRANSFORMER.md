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

A transformer could be "torrential" or not. If torrential, _\_transform_ is called, or else _transformAll_. Then both return a promise object. The key difference is, whether your files should be transformed together. For example, transform a file independently

Base transformer is defined in [panto-transformer](https://github.com/pantojs/panto-transformer).