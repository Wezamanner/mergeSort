import {mergsort}  from "./script";

test(`to be sorted by merg sort`,()=>{
    expect(mergsort([]) ).toEqual([]);
})
test(`to be sorted by merg sort`,()=>{
    expect(mergsort(mergsort([73])) ).toEqual([73]);
})
test(`to be sorted by merg sort`,()=>{
    expect(mergsort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
})
test(`to be sorted by merg sort`,()=>{
    expect(mergsort([3, 2, 1, 13, 8, 5, 0, 1])).toEqual([0, 1, 1, 2, 3, 5, 8, 13]
);
})
test(`to be sorted by merg sort`,()=>{
    expect(mergsort([105, 79, 100, 110])).toEqual([79, 100, 105, 110]);
})