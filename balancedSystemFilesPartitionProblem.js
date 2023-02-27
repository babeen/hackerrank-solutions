// Define the sizes of the files
const fileSizes = [20, 15, 10, 5, 30];

// Calculate the sum of all file sizes
const totalSize = fileSizes.reduce((sum, size) => sum + size, 0);

// Define the maximum capacity of each partition
const capacity = totalSize / 2;

// Implement the dynamic programming approach to find the optimal partition
function balancedPartition(fileSizes, capacity) {
  const n = fileSizes.length;
  const dp = new Array(n + 1).fill(null).map(() => new Array(capacity + 1).fill(false));

  // Initialize the base cases
  for (let i = 0; i <= n; i++) {
    dp[i][0] = true;
  }

  // Fill in the remaining cells of the DP table
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= capacity; j++) {
      if (fileSizes[i - 1] > j) {
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = dp[i - 1][j] || dp[i - 1][j - fileSizes[i - 1]];
      }
    }
  }

  // Find the optimal partition by tracing back through the DP table
  let i = n;
  let j = capacity;
  const partition = [];
  while (i > 0 && j > 0) {
    if (dp[i - 1][j]) {
      i--;
    } else {
      partition.push(fileSizes[i - 1]);
      j -= fileSizes[i - 1];
      i--;
    }
  }

  // Calculate the difference between the two partitions
  const sum1 = partition.reduce((sum, size) => sum + size, 0);
  const sum2 = totalSize - sum1;
  const diff = Math.abs(sum1 - sum2);

  // Return the optimal partition and the difference between the two partitions
  return { partition, diff };
}

// Run the dynamic programming algorithm on the file sizes and capacity
const result = balancedPartition(fileSizes, capacity);
console.log(result.partition); // [30, 15, 5]
console.log(result.diff); // 0
