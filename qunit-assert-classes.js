( function( QUnit ) {
	var classTest = {
			check: function( element, classes, stateVal, message ) {
				var result,
					classArray = classes.split( " " ),
					missing = [],
					found = [];

				message = message || "Element must " + ( stateVal ? "" : "not " ) + "have classes";
				classArray.forEach( function( value ) {
					if ( !element.hasClass( value ) ) {
						missing.push( value );
					} else {
						found.push( value );
					}
				});
				result = stateVal ? !missing.length : !found.length;
				QUnit.push( result, classes, result ? classes : found.join( " " ), message );
			},
			has: function( element, classes, message ) {
				classTest.check( element, classes, true, message );
			},
			lacks: function( element, classes, message ) {
				classTest.check( element, classes, false, message );
			}
		};
	QUnit.extend( QUnit.assert, {
		hasClasses: classTest.has,
		lacksClasses: classTest.lacks
	});
})( QUnit );