let a = 1;
let b;
try {
    if (a/b === infinity) {
        throw 'на ноль делить нельзя';
    }
} catch (error) {
    alert(error);
}
