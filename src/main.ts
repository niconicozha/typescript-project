function* range(from: number, to: number, step: number = 1) {
    for (let i = Math.ceil(from); i < to; i += step) {
        yield i;
    }
}

for (const n of range(1, 11)) {
    console.log(n);
}

for (const n of range(1, 11, 2)) {
    console.log(n);
}
