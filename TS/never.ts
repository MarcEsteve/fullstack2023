function error(message: string): never {
    throw { message };
}
function infiniteLoop(): never {
    while (true) {}
}
// error porque esta función finaliza
// function returnFunction(): never { }
// error porque esta función finaliza
// function returnFunction(): never { return; }