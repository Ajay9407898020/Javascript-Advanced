const a = {
    say() {
        console.log("a", this);
    },
};
a.say();
const b = {
    say() {
        return function () {
            console.log("b", this);
        };
    },
};
b.say()();
const c = {
    say() {
        return () => {
            console.log("c", this);
        };
    },
};
c.say()();
