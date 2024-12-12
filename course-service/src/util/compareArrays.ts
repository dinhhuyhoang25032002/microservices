export const compareArrays = (arr1: Array<string>, arr2: Array<string>) => {
    if (arr1.length !== arr2.length) return false;
    
    return arr1.every((item, index) => item === arr2[index])
}