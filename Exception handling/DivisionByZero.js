let a = 1;
let b = 0;
try {
    if (b === 0) {
        throw 'на ноль делить нельзя';
    }
} catch (error) {
    alert(error);
}
