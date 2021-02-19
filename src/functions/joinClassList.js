export default (a, b) => {
    let join = [];

    if (a instanceof Array) {
        join = join.concat(a);
    } else {
        join.push(a);
    };


    if (b instanceof Array) {
        join = join.concat(b);
    } else {
        join.push(b);
    };

    return join;

};