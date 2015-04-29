[![Build Status](https://travis-ci.org/arschmitz/qunit-assert-classes.png)](https://travis-ci.org/arschmitz/qunit-assert-classes) [![NPM version](https://badge.fury.io/js/qunit-assert-classes.png)](https://www.npmjs.com/package/qunit-assert-classes)


# QUnit Classes assertion plugin

A set of assertions for checking thats an element has ( or does not have ) any number of classes. The check is order independent and gives a diff of the expected classes. Accepts either a single Dom node or a jQuery object containing exactly one element.

### NOTE: While this accepts jQuery objects it has no dependency on jQuery

## Usage

```js
assert.hasClasses( element, classes [, message] );
assert.lacksClasses( element, classes [, message] );

assert.hasClassesStrict( element, classes [, message] );

assert.hasClassRegex( element, RexExp [, message] );
assert.lacksClassRegex( element, RexExp [, message] );

assert.hasClassStart( element, start [, message] );
assert.lacksClassStart( element, start [, message] );

assert.hasClassPartial( element, partial [, message] );
assert.lacksClassPartial( element, partial [, message] );

assert.lacksAllClasses( element [, message] );
assert.hasSomeClass( element [, message] );

```

Where:
 - `element`: a jQuery object or DOM Element ( must be a single element, collections not allowed )
 - `classes`: a space seperated string of classes
 - `message`: a custom message to replace default message of "Element must (not) have classes"
 - `RegExp`: a valid regular expression to be used to match against individual class names
 - `start`: a string that should match the begining of any class
 - `partial`: a string of a partial class name that should be matched against any of the classes

## Examples

### Example 1: hasClasses with DOM Element
```html
<div class="class1 class2"></div>
```

```js
QUnit.test('Example hasClasses unit test', function( assert ) {
  var element = document.getElementById( "test" );

  assert.hasClasses( element, "class1 class2" ); // Passes
  assert.hasClasses( element, "class3", "custom message" ); // Fails
});
```

### Example 2: lacksClasses with jQuery object
```html
<div class="class1 class2"></div>
```

```js
QUnit.test('Example lacksClasses unit test', function( assert ) {
  var element = $( "#test" );

  assert.lacksClasses( element, "missing-class" ); // Passes
  assert.lacksClasses( element, "class1 missing-class-2", "custom message" ); // Fails
});
```

### Example 3: hasClassesStrict
```html
<div class="class1 class2"></div>
```

```js
QUnit.test('Example hasClassesStrict unit test', function( assert ) {
  var element = document.getElementById( "test" );

  assert.hasClassesStrict( element, "class1 class2" ); // Passes
  assert.hasClassesStrict( element, "class1", "custom message" ); // Fails
});
```

### Example 4: hasClassRegex
```html
<div class="class1 class2"></div>
```

```js
QUnit.test('Example hasClassesRegex unit test', function( assert ) {
  var element = document.getElementById( "test" );

  assert.hasClassRegex( element, /^(clas)([a-z]){1}([0-9])$/ ); // Passes

  // Fails this only matches against individual classes
  assert.hasClassRegex( element, /^(([a-z]){5}([0-9]|[0-9]\s)){2}$/, "custom message" );
});
```

### Example 5: lacksClassRegex
```html
<div class="class1 class2"></div>
```

```js
QUnit.test('Example hasClassesRegex unit test', function( assert ) {
  var element = document.getElementById( "test" );

  assert.lacksClassRegex( element, /boom/ ); // Passes
  assert.lacksClassRegex( element, /^(class)/, "custom message" ); // Fails
});
```

### Example 6: hasClassStart
```html
<div class="class1 class2"></div>
```

```js
QUnit.test('Example hasClassStart unit test', function( assert ) {
  var element = document.getElementById( "test" );

  assert.hasClassStart( element, "cla" ); // Passes
  assert.hasClassStart( element, "lass", "custom message" ); // Fails
});
```
### Example 7: lacksClassStart
```html
<div class="class1 class2"></div>
```

```js
QUnit.test('Example lacksClassStart unit test', function( assert ) {
  var element = document.getElementById( "test" );

  assert.lacksClassStart( element, "foo" ); // Passes
  assert.lacksClassStart( element, "cla", "custom message" ); // Fails
});
```
### Example 8: hasClassPartial
```html
<div class="class1 class2"></div>
```

```js
QUnit.test('Example hasClassPartial unit test', function( assert ) {
  var element = document.getElementById( "test" );

  assert.hasClassPartial( element, "lass" ); // Passes
  assert.hasClassPartial( element, "foo", "custom message" ); // Fails
});
```
### Example 9: lacksClassPartial
```html
<div class="class1 class2"></div>
```

```js
QUnit.test('Example lacksClassStart unit test', function( assert ) {
  var element = document.getElementById( "test" );

  assert.lacksClassPartial( element, "foo" ); // Passes
  assert.lacksClassPartial( element, "lass", "custom message" ); // Fails
});
```
### Example 10: lacksAllClasses - checks to make sure an element contains no classes
```html
<div class=""></div>
```

```js
QUnit.test('Example lacksAllClasses unit test', function( assert ) {
  var element = document.getElementById( "test" );

  assert.lacksAllClasses( element ); // Passes
  assert.lacksAllClasses( element, "custom message" ); // Fails
});
```
### Example 10: hasSomeClass - checks to make sure an element has some class does not matter what
```html
<div class="class1 class2"></div>
```

```js
QUnit.test('Example hasSomeClass unit test', function( assert ) {
  var element = document.getElementById( "test" );

  assert.hasSomeClass( element ); // Passes
  assert.hasSomeClass( element, "custom message" ); // Fails
});
```
