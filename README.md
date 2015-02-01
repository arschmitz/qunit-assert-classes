[![Build Status](https://travis-ci.org/arschmitz/qunit-assert-classes.png)](https://travis-ci.org/arschmitz/qunit-assert-classes) [![NPM version](https://badge.fury.io/js/qunit-assert-classes.png)](https://www.npmjs.com/package/qunit-assert-classes)


# QUnit Classes assertion plugin

A set of assertions for checking thats an element has ( or does not have ) any number of classes. The check is order independent and gives a diff of the expected classes. Accepts either a single Dom node or a jQuery object containing exactly one element.

### NOTE: While this accepts jQuery objects it has no dependency on jQuery

## Usage

```js
assert.hasClasses( element, classes [, message] );
assert.lacksClasses( element, classes [, message] );
```

Where:
 - `element`: a jQuery object or DOM Element ( must be a single element, collections not allowed )
 - `classes`: a space seperated string of classes
 - `message`: a custom message to replace default message of "Element must (not) have classes"

## Examples

### Example 1: hasClasses with DOM Element
```js
QUnit.test('Example hasClasses unit test', function( assert ) {
  var element = document.getElementById( "test" );
  assert.hasClasses( element, "class1 class2" );
  assert.hasClasses( element, "class1 class2", "custom message" );
});
```

### Example 2: lacksClasses with jQuery object
```js
QUnit.test('Example lacksClasses unit test', function( assert ) {
  var element = $( "#test" );
  assert.lacksClasses( element, "missing-class" );
  assert.lacksClasses( element, "missing-class missing-class-2", "custom message" );
});
