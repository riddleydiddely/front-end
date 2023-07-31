export function generateRandomIntegers(min: number, max: number, count: number): number[] {
    let result: number[] = [];
    let multiplier = 1
    for(let i = 0; i < count; i++) {
        let randomInt = Math.floor(Math.random() * (max - min + 1) * multiplier) + min;
        result.push(randomInt);
        multiplier = multiplier + 0.2
    }

    return result;
}
