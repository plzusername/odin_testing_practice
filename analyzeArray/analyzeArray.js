export function analyzeArray(array){
    const statistics = {
        length: array.length,
        min:array.sort((num1, num2) => num1 - num2)[0],
        max:array.sort((num1, num2) => num1 - num2)[array.length - 1],
    }
    for (let i = 1; i <= array.length; i++) {
        statistics.average = statistics.average + array[i - 1] || array[i - 1]
    }
    statistics.average /= statistics.length

    return statistics
}