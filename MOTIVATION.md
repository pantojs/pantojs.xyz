# Motivation

The process of building a project can be very much more complicated than you can imagine. Look at the following graph:

![topo](img/topo.png)

This could exist in reality.

## Now

Grunt's tasks require reading/writing files, which bring tedious directory-making/removing and heavy disk IO. And it's difficult to tell a specific executing process from _gruntfile.js_.

Gulp is much better, file contents are transmited in [Stream](https://nodejs.org/dist/latest-v6.x/docs/api/stream.html) from plugin to plugin. Chained process definition is much more intelligible, but:
 
#### 1. Gulp cannot make sure a file is read once at most in a building lifecycle

That means _index.js_ will be read twice:

```js
gulp.src('*.js')
gulp.src('index.js')
```

This should be optimized.

#### 2. Gulp caches results in tasks but not files, which leads to many meaningless work

Developers always use _[gulp-watch](https://www.npmjs.com/package/gulp-watch)_ to execute an **increment building**.

```js
watch('**/*.js', function() {
    gulp.src('**/*.js')
});
```

All _js_ files will be rebuild.

#### 3. Gulp do not snap the "left" files, which are hard to selected


_gulp.src()_ can only select known file types. Apparently, you will not use _gulp.src('*')_.

#### 4. Last but not least, we need more powerful functions to support almost any building process

We will see.

## Improvement

 `Panto` is trying to fixed these issues, in the following ways:

#### 1. Process described by [directed acyclic graph](https://en.wikipedia.org/wiki/Directed_acyclic_graph)

This is the exact way to describe a building process, with universality.

#### 2. Cache by hash of file content

If file content is not changed, result will not change either.

#### 3. Reading into a shared file object

Will not read a file more than once.

#### 4. Builtin dependencies graph

Minimum incremental building.