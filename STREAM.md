# Stream

Streams constitute the building topology graph, and define how the building works. Treat it as a node.

## How does it work

A stream involves a transformer.

```js
new Stream(new Transformer())
```

Setup a building topology graph whatever you want:

```js
stream1.connect(stream2).connect(stream3)
stream2.connect(stream4).connect(stream5)
```

The codes above constitute a graph:

```
stream1---------stream2---------stream3
                   |
                   |
                   |
                stream4---------stream5
```

Or you can just pipe a transformer without a stream wrapper:

```js
stream1.pipe(transformer2).pipe(transformer3)
```

Startup the building:

```js
stream1.freeze().flow(files)
```

In most cases you don't have to use it directly.

Stream is defined in <https://github.com/pantojs/panto-stream>.