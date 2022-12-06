// <ams-product></ams-product>

var componentProto = Object.create(HTMLElement.prototype);

// Lifecycle callbacks
componentProto.createdCallback = function() {
};
componentProto.attachedCallback = function() {
    // called when element is inserted into the DOM
    // good place to add event listeners
};
componentProto.detachedCallback = function() {
    // called when element is removed from the DOM
    // good place to remove event listeners
};
componentProto.attributeChangedCallback = function(name, oldVal, newVal) {
    // make changes based on attribute changes
};

// Add a public method
componentProto.doSomething = function() { ... };

document.registerElement('ams-product', {prototype: componentProto});