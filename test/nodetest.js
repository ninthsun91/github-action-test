/**
 * 
 * 45656 계단수. 인접한 숫자의 차가 모두 1인 수
 * 길이가 N인 계단수의 개수
 * 
 * 1~N~100
 * 정답 / 10억 (10^9)
 * 
 * 1    > 9
 * 2    > 17 = 9*2 -1
 * 3    > 32 = 17*2 -2
 * 4    > 61 = 32*2 -3
 * 
 * dp[n] = dp[n-1]*2 - (n-1)
 * 
 */

// const rl = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// rl.on('line', (line) => {
//     const N = Number(line);

//     const dp = [0, 9];
//     for (let n=2; n<=N; n++) {
//         dp[n] = ( dp[n-1]*2 - (n - 1) ) % 10**9;
//     }

//     console.log(dp[N]);

//     rl.close();
// });


/**
 * 
 * 오답.
 * 채점 초반부터 틀렸다
 * 
 * N=4 > N=5로 갈 때 끝자리가 0 혹은 9인 수가 4개가 아닌 6개다.
 * 즉, 끝자리가 0 혹은 9인 수는 단순히 n-1개가 아니며, 이를 구하는 다른 방법이 필요하다.
 * 
 * N=5 > N=6 >> 10개
 * 
 * 
 * 1, 2, 3, 6, 10, 20, 33(?) ...
 * 전체합은 마땅한 규칙이 없어 보인다.
 * 
 * 하지만 끝자리를 기준으로 계산하니 조금 더 규칙성이 있다.
 * 길이가 N이면서 0이나 9로 끝나는 수의 개수는,
 * 길이가 N-1이면서 1이나 8로 끝나던 수의 개수와 같다.
 * 
 * 나머지 n(1~8)로 끝나는 수들은 모두 N-1에서 n-1, n+1로 끝나는 수의 개수의 합과 같다
 * 
 */

const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', (line) => {
    const N = Number(line);

    const dp = [ [], [0, 1, 1, 1, 1, 1, 1, 1, 1, 1] ];
    for (let i=2; i<(N+1); i++) {
        dp.push([])
        for(let n=0; n<10; n++) {
            switch(n){
                case 0:
                    dp[i][n] = ( dp[i-1][1] ) % 10**9;
                    break;
                case 9:
                    dp[i][n] = ( dp[i-1][8] ) % 10**9;
                    break;
                default:
                    dp[i][n] = ( dp[i-1][n-1] + dp[i-1][n+1] ) % 10**9;
                    break;
            }
        }
    }
    const result = dp[N].reduce((a,b)=>a+b, 0);
    console.log(result % 10**9);
    
    rl.close();
});