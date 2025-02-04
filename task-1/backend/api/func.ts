export const is_Prime = function (n: number): boolean {
    if (n <= 1) {
        return false;
    }
    for (let i = 2, sqrt = Math.sqrt(n); i <= sqrt; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

export const is_perfect = function (n: number): boolean {
    let sum = 0
    for (let i = 1; i < n; i++){
        if (n % i === 0){
            sum += i
        }
    }
    return sum === n
}

export const is_armstrong = function (n: number): boolean {
    let sum = 0;
    let temp = n;
    let length = n.toString().length;
    while (temp > 0) {
        let remainder = temp % 10;
        sum += remainder ** length;
        temp = Math.floor(temp / 10);
    }
    return n === sum;
}

export const properties = function (n: number): string[] {
    let arr = [];
    n % 2 === 0 ? arr.push("even") : arr.push("odd"); 
    if (is_armstrong(n)) arr.push("armstrong");
    return arr;
}

export const digit_sum = function (n: number): number {
    let sum = 0;
    while (n > 0) {
        sum += n % 10;
        n = Math.floor(n / 10);
    }
    return sum;
}