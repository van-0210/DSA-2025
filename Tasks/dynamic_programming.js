// 1. Fibonacci

// function fibMemo(n, memo = {}) {
// if (n <= 1) return n;
// if (memo[n]) return memo[n]; 
// memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo); 
// return memo[n];
// }
// console.log(fibMemo(12));

// 2. Climbing Stairs

// function climbstairs(n) {
//     if (n === 1) {return 1}
//     if (n === 2) { return 2 }


//   let prev1 = 2
//   let prev2 = 1
//   let current;

//    for (let i = 3; i <= n; i++) {
//     current = prev1 + prev2
//     prev2 = prev1
//     prev1 = current 
//    }
//    return current
// }

// console.log(climbstairs(4));


// 3. 0/1 Knapsack

// function knapsack(weights , values ,W) {
//     let n =weights.length
//     let dp = Array.from({length : n+1}, () => Array(W + 1).fill(0));

//     for (let i = 1; i <= n ; i++) {
//         for (let w = 0; w <=W ; w++) {
//             if (weights [i-1]<= w) {
//                 dp[i][w] = Math.max(
//                     values[i-1] + dp [i-1][w - weights[i - 1]],
//                     dp[i-1][w]
//                 ) 
//             } else {
//                 dp[i][w] = dp[i - 1][w]


//             }
            
//         }
        
//     }
//     return dp[n][W];

// }

// console.log(knapsack([1, 3, 4, 5], [1, 4, 5, 7], 7));

// 4.  Minimum Coins 

// function minCoins(coins, amount) {
//     let dp = new Array(amount + 1).fill(Infinity);
//     dp[0] = 0; 

//     for (let coin of coins) {
//         for (let i = coin; i <= amount; i++) {
//             dp[i] = Math.min(dp[i], dp[i - coin] + 1);
//         }
//     }

//     return dp[amount] === Infinity ? -1 : dp[amount];
// }

// console.log(minCoins([1, 2, 5], 11)); 

// 5. Longest Common Subsequence (LCS) 

// function lcs(str1, str2) {
//     const m = str1.length;
//     const n = str2.length;
//     const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

//     for (let i = 1; i <= m; i++) {
//         for (let j = 1; j <= n; j++) {
//             if (str1[i - 1] === str2[j - 1]) {
//                 dp[i][j] = 1 + dp[i - 1][j - 1];
//             } else {
//                 dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
//             }
//         }
//     }

//     return dp[m][n];
// }


// console.log(lcs("abcde", "ace")); 

// 6.  Longest Increasing Subsequence

// function lengthOfLIS(nums) {
//     const dp = Array(nums.length).fill(1); 

//     for (let i = 1; i < nums.length; i++) {
//         for (let j = 0; j < i; j++) {
//             if (nums[i] > nums[j]) {
//                 dp[i] = Math.max(dp[i], dp[j] + 1);
//             }
//         }
//     }

//     return Math.max(...dp);
// }

// console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18, 25, 67])); 


// 7. Matrix Chain Multiplication 

// function matrixChainOrder(arr) {
//     const n = arr.length;
//     const dp = Array.from({ length: n }, () => Array(n).fill(0));

//     for (let l = 2; l < n; l++) {
//         for (let i = 1; i < n - l + 1; i++) {
//             let j = i + l - 1;
//             dp[i][j] = Infinity;

//             for (let k = i; k < j; k++) {
//                 let cost = dp[i][k] + dp[k + 1][j] + arr[i - 1] * arr[k] * arr[j];
//                 dp[i][j] = Math.min(dp[i][j], cost);
//             }
//         }
//     }

//     return dp[1][n - 1];
// }

// console.log(matrixChainOrder([40, 20, 30, 10, 30]));

// 8. Palindrome Partitioning 

// function minCut(s) {
//     const n = s.length;
//     const isPalindrome = Array.from({ length: n }, () => Array(n).fill(false));
//     const cuts = Array(n).fill(0);

    
//     for (let end = 0; end < n; end++) {
//         let minCut = end; 
//         for (let start = 0; start <= end; start++) {
//             if (s[start] === s[end] && (end - start <= 1 || isPalindrome[start + 1][end - 1])) {
//                 isPalindrome[start][end] = true;
                
//                 minCut = start === 0 ? 0 : Math.min(minCut, cuts[start - 1] + 1);
//             }
//         }
//         cuts[end] = minCut;
//     }

//     return cuts[n - 1];
// }

// console.log(minCut("aabb")); 

// 9.  Traveling Salesman Problem (TSP)

function tsp(dist) {
    const n = dist.length;
    const VISITED_ALL = (1 << n) - 1;
    const dp = Array.from({ length: 1 << n }, () => Array(n).fill(Infinity));

    
    dp[1][0] = 0;

    for (let mask = 1; mask < (1 << n); mask++) {
        for (let u = 0; u < n; u++) {
            if (!(mask & (1 << u))) 
                continue;

            for (let v = 0; v < n; v++) {
                if (mask & (1 << v)) 
                    continue;

                const nextMask = mask | (1 << v);
                dp[nextMask][v] = Math.min(dp[nextMask][v], dp[mask][u] + dist[u][v]);
            }
        }
    }

    let minCost = Infinity;
    for (let i = 1; i < n; i++) {
        minCost = Math.min(minCost, dp[VISITED_ALL][i] + dist[i][0]);
    }

    return minCost;
}


const dist = [
  [0, 10, 15, 20],
  [10, 0, 35, 25],
  [15, 35, 0, 30],
  [20, 25, 30, 0]
];

console.log(tsp(dist)); 


//done

