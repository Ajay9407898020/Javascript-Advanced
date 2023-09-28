// Global level variale leakage

function a() {
    height = 20;
    console.log('Local scope height', height);
}
a();
console.log('Global Scope', height);

// To resolve this we should use at the very begining
"use strict"



// Another issue with JS
const globalScopeFunction = function localScopeFunction() {

    // We can call localScopeFunction function in its local scope becuase it is directly bound to it
    localScopeFunction();
    return 'Local'
}

// We can't call localScopeFunction here because it is not global
// localScopeFunction()

globalScopeFunction();