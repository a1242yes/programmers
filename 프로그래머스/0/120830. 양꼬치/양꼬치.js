function solution(n, k) {
    var answer =  parseInt(n/10);
    var sum = 2000 * answer;
    
    return n*12000 + k*2000 - sum;
}
