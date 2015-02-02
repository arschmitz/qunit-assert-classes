QUnit.module( "qunit-assert-classes plugin unit tests" );

QUnit.test( "hasClasses", function( assert ) {
	QUnit.expect( 20 );
	var element = $( "#test" );
	assert.hasClasses( element, "one" );
	assert.hasClasses( element, "two" );
	assert.hasClasses( element, "three" );
	assert.hasClasses( element, "extra" );
	assert.hasClasses( element, "one two" );
	assert.hasClasses( element, "one two three" );
	assert.hasClasses( element, "one two three extra" );
	assert.hasClasses( element, "extra two" );
	assert.hasClasses( element, "one three" );
	assert.hasClasses( element, "extra two three" );
	assert.hasClasses( element, "one", "custom message" );
	assert.hasClasses( element, "two", "custom message" );
	assert.hasClasses( element, "three", "custom message" );
	assert.hasClasses( element, "extra", "custom message" );
	assert.hasClasses( element, "one two", "custom message" );
	assert.hasClasses( element, "one two three", "custom message" );
	assert.hasClasses( element, "one two three extra", "custom message" );
	assert.hasClasses( element, "extra two", "custom message" );
	assert.hasClasses( element, "one three", "custom message" );
	assert.hasClasses( element, "extra two three", "custom message" );
});

QUnit.test( "lacksClasses", function( assert ) {
	QUnit.expect( 5 );
	var element = $( "#test" );

	assert.lacksClasses( element, "one-x" );
	assert.lacksClasses( element, "two-x one-x" );
	assert.lacksClasses( element, "one-x", "custom message" );
	assert.lacksClasses( element, "one-x two-x", "custom message" );
	assert.lacksClasses( element, "partial", "does not allow partial matches" );
});

QUnit.test( "hasClasses - dom node", function( assert ) {
	QUnit.expect( 20 );
	var element = $( "#test" )[ 0 ];

	assert.hasClasses( element, "one" );
	assert.hasClasses( element, "two" );
	assert.hasClasses( element, "three" );
	assert.hasClasses( element, "extra" );
	assert.hasClasses( element, "one two" );
	assert.hasClasses( element, "one two three" );
	assert.hasClasses( element, "one two three extra" );
	assert.hasClasses( element, "extra two" );
	assert.hasClasses( element, "one three" );
	assert.hasClasses( element, "extra two three" );
	assert.hasClasses( element, "one", "custom message" );
	assert.hasClasses( element, "two", "custom message" );
	assert.hasClasses( element, "three", "custom message" );
	assert.hasClasses( element, "extra", "custom message" );
	assert.hasClasses( element, "one two", "custom message" );
	assert.hasClasses( element, "one two three", "custom message" );
	assert.hasClasses( element, "one two three extra", "custom message" );
	assert.hasClasses( element, "extra two", "custom message" );
	assert.hasClasses( element, "one three", "custom message" );
	assert.hasClasses( element, "extra two three", "custom message" );
});

QUnit.test( "lacksClasses - dom node", function( assert ) {
	QUnit.expect( 5 );
	var element = $( "#test" )[ 0 ];

	assert.lacksClasses( element, "one-x" );
	assert.lacksClasses( element, "two-x one-x" );
	assert.lacksClasses( element, "one-x", "custom message" );
	assert.lacksClasses( element, "one-x two-x", "custom message" );
	assert.lacksClasses( element, "partial", "does not allow partial matches" );
});