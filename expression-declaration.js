functionExpression();        // undefined
functionDeclaration();        // "Function declaration called."        

var functionExpression = function() {
    console.log('Function expression called.');
};

functionExpression();        // "Function expression called."
functionDeclaration();        // "Function declaration called."

function functionDeclaration() {
    console.log('Function declaration called.');
}

functionExpression();        // "Function expression called."
functionDeclaration();        // "Function declaration called."
