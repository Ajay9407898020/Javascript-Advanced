const a = {
    say() {
        console.log("a", this);
    },
};
a.say();  //{ say: Function }
const b = {
    say() {
        return function () {
            console.log("b", this);
        };
    },
};
b.say()();  // Window Object
const c = {
    say() {
        return () => {
            console.log("c", this);
        };
    },
};
c.say()();  //{ say: Function }
