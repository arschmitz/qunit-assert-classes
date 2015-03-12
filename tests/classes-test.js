QUnit.module( "qunit-assert-classes plugin unit tests" );

QUnit.test( "hasClasses", function( assert ) {
	QUnit.expect( 10 );
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
});

QUnit.test( "hasClasses - custom message", function( assert ) {
	QUnit.expect( 10 );
	var element = $( "#test" );
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
	QUnit.expect( 6 );
	var element = $( "#test" );

	assert.lacksClasses( element, "one-x" );
	assert.lacksClasses( element, "two-x one-x" );
	assert.lacksClasses( element, "one-x", "custom message" );
	assert.lacksClasses( element, "one-x two-x", "custom message" );
	assert.lacksClasses( element, "partial", "does not allow partial matches" );
	assert.lacksClasses( element, "test", "missing class attribute does not throw error" );
});

QUnit.test( "hasClassesStrict", function( assert ) {
	QUnit.expect( 2 );
	var element = $( "#test" );

	assert.hasClassesStrict( element, "one two three extra partial-match" );
	assert.hasClassesStrict( element, "one two three extra partial-match", "custom message" );
});

QUnit.test( "hasClassRegex", function( assert ) {
	QUnit.expect( 2 );
	var element = $( "#test" );

	assert.hasClassRegex( element, /^par([a-z]){4}-(match)$/ );
	assert.hasClassRegex( element, /^par([a-z]){4}-(match)$/, "custom message" );
});

QUnit.test( "lacksClassRegex", function( assert ) {
	QUnit.expect( 2 );
	var element = $( "#test" );

	assert.lacksClassRegex( element, /^par([a-z]){4}-(mabtch)$/ );
	assert.lacksClassRegex( element, /^par([a-z]){4}-(mabtch)$/, "custom message" );
});

QUnit.test( "hasClassStart", function( assert ) {
	QUnit.expect( 2 );
	var element = $( "#test" );

	assert.hasClassStart( element, "partial-" );
	assert.hasClassStart( element, "partial-", "custom message" );
});

QUnit.test( "lacksClassStart", function( assert ) {
	QUnit.expect( 2 );
	var element = $( "#test" );

	assert.lacksClassStart( element, "partiald-" );
	assert.lacksClassStart( element, "partiald-", "custom message" );
});

QUnit.test( "hasClassPartial", function( assert ) {
	QUnit.expect( 2 );
	var element = $( "#test" );

	assert.hasClassPartial( element, "ial-" );
	assert.hasClassPartial( element, "ial-", "custom message" );
});

QUnit.test( "lacksClassPartial", function( assert ) {
	QUnit.expect( 2 );
	var element = $( "#test" );

	assert.lacksClassPartial( element, "iald-" );
	assert.lacksClassPartial( element, "iald-", "custom message" );
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
	QUnit.expect( 6 );
	var element = $( "#test" )[ 0 ];

	assert.lacksClasses( element, "one-x" );
	assert.lacksClasses( element, "two-x one-x" );
	assert.lacksClasses( element, "one-x", "custom message" );
	assert.lacksClasses( element, "one-x two-x", "custom message" );
	assert.lacksClasses( element, "partial", "does not allow partial matches" );
	assert.lacksClasses( element, "test", "missing class attribute does not throw error" );
});

QUnit.test( "hasClassesStrict - dom node", function( assert ) {
	QUnit.expect( 2 );
	var element = $( "#test" )[ 0 ];

	assert.hasClassesStrict( element, "one two three extra partial-match" );
	assert.hasClassesStrict( element, "one two three extra partial-match", "custom message" );
});

QUnit.test( "hasClassRegex - dom node", function( assert ) {
	QUnit.expect( 2 );
	var element = $( "#test" )[ 0 ];

	assert.hasClassRegex( element, /^par([a-z]){4}-(match)$/ );
	assert.hasClassRegex( element, /^par([a-z]){4}-(match)$/, "custom message" );
});

QUnit.test( "lacksClassRegex - dom node", function( assert ) {
	QUnit.expect( 2 );
	var element = $( "#test" )[ 0 ];

	assert.lacksClassRegex( element, /^par([a-z]){4}-(mabtch)$/ );
	assert.lacksClassRegex( element, /^par([a-z]){4}-(mabtch)$/, "custom message" );
});

QUnit.test( "hasClassStart", function( assert ) {
	QUnit.expect( 2 );
	var element = $( "#test" )[ 0 ];

	assert.hasClassStart( element, "partial-" );
	assert.hasClassStart( element, "partial-", "custom message" );
});

QUnit.test( "lacksClassStart", function( assert ) {
	QUnit.expect( 2 );
	var element = $( "#test" )[ 0 ];

	assert.lacksClassStart( element, "partiald-" );
	assert.lacksClassStart( element, "partiald-", "custom message" );
});

QUnit.test( "hasClassPartial", function( assert ) {
	QUnit.expect( 2 );
	var element = $( "#test" )[ 0 ];

	assert.hasClassPartial( element, "ial-" );
	assert.hasClassPartial( element, "ial-", "custom message" );
});

QUnit.test( "lacksClassPartial", function( assert ) {
	QUnit.expect( 2 );
	var element = $( "#test" )[ 0 ];

	assert.lacksClassPartial( element, "iald-" );
	assert.lacksClassPartial( element, "iald-", "custom message" );
});

QUnit.module( "Qunit-assert-classes ensure failures", {
	beforeEach: function( assert ) {
		var originalPush = assert.push;

		assert.push = function( result, actual, expected, message ) {

			// inverts the result so we can test failing assertions
			originalPush( !result, actual, expected, message );
		};
	}
});

QUnit.test( "hasClasses - failures", function( assert ) {
	QUnit.expect( 2 );

	var element = $( "#test" );

	assert.hasClasses( element, "missing-class", "hasClasses fails when non existent class is passed" );
	assert.hasClasses( element, "one missing-class", "hasClasses fails when mix of existing and missing classes passed" );
});

QUnit.test( "lacksClasses - failures", function( assert ) {
	QUnit.expect( 2 );

	var element = $( "#test" );

	assert.lacksClasses( element, "one", "lacksClasses fails when non existen class is passed" );
	assert.lacksClasses( element, "one missing-class", "lacksClasses fails whencmix of existing and missing classes passed" );
});

QUnit.test( "hasClassesStrict - failures", function( assert ) {
	QUnit.expect( 2 );
	var element = $( "#test" );

	assert.hasClassesStrict( element, "one" );
	assert.hasClassesStrict( element, "one two", "custom message" );
});

QUnit.test( "hasClassRegex - failures", function( assert ) {
	QUnit.expect( 2 );
	var element = $( "#test" );

	assert.hasClassRegex( element, /^par([a-z]){4}-(mabtch)$/ );
	assert.hasClassRegex( element, /^par([a-z]){4}-(mabtch)$/, "custom message" );
});

QUnit.test( "hasClassRegex - failures", function( assert ) {
	QUnit.expect( 2 );
	var element = $( "#test" );

	assert.lacksClassRegex( element, /^par([a-z]){4}-(match)$/ );
	assert.lacksClassRegex( element, /^par([a-z]){4}-(match)$/, "custom message" );
});

QUnit.test( "hasClassStart - failures", function( assert ) {
	QUnit.expect( 2 );
	var element = $( "#test" )[ 0 ];

	assert.hasClassStart( element, "partiald-" );
	assert.hasClassStart( element, "partiald-", "custom message" );
});

QUnit.test( "lacksClassStart - failures", function( assert ) {
	QUnit.expect( 2 );
	var element = $( "#test" )[ 0 ];

	assert.lacksClassStart( element, "partial-" );
	assert.lacksClassStart( element, "partial-", "custom message" );
});

QUnit.test( "hasClassPartial - failures", function( assert ) {
	QUnit.expect( 2 );
	var element = $( "#test" );

	assert.hasClassPartial( element, "iald-" );
	assert.hasClassPartial( element, "iald-", "custom message" );
});

QUnit.test( "lacksClassPartial - failures", function( assert ) {
	QUnit.expect( 2 );
	var element = $( "#test" );

	assert.lacksClassPartial( element, "ial-" );
	assert.lacksClassPartial( element, "ial-", "custom message" );
});
