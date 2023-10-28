# Complex Algorithms

- Every complex project require knowledge of complexity analysis and big o notation.
- Misunderstanding of complexity analysis can lead to serious loss of algorithms performance.
- Understand complexity analysis in order to distinguish and be able to correct inefficient code.

# Mathematical Function

$$
y = x + 1
$$

There is a dependency between x and y, if x change y will change too.

So, y depends on x value, this is a function.

> Function is a mathematical object that produces an output according to some predefined rule, when giving an input.
> 

$$
G(F, K) = (N + K) / 2
$$

$$
G(1, 3) = 2
$$

$$
G(2, 4) = 3
$$

### **Example**: Transfer a file depends on its size.

$$
F(N) = dependecy formula
$$

**Transfer file over the network**: the more bytes the longer it takes to transfer:

$$
F1(N) = N
$$

**Transfer file by a plane**: the file size don’t affect plane speed:

$$
F2(N) = 1
$$

![Captura de Tela 2023-10-27 às 14.16.57.png](Complex%20Algorithms%20424846f6c1d847ee8c71f828685e472c/Captura_de_Tela_2023-10-27_as_14.16.57.png)

# Algorithms complexities comparison

Consist of two factors:

**Time complexity**: the amount of time required for the algorithm to complete.

**Space complexity**: the amount of memory required fot the algorithm to complete.

## Time Complexity

All algorithms will be executed on computers of Princeton Architecture.

We can measure algorithm running time in processor operations instead of seconds, know as DTIME.

```java
int foo(int i) {
	int temp = i + 1;
	return temp / 2;
}
```

In this code, there are 4 processor operations: var initialization, addition, division and return value.

$$
F(I) = 1 + 1 + 1 + 1 = 4
$$

So the function don't depends on I value.

```java
int foo(int n) {
	int x = 0; // 1
	
	for(int i = 1; i <= n; i++) { // 1, N * 1, N * 1
		x++; // N * 1
	}
	return x; // 1 
}
```

In this code, there are 5 processor operations: var initialization of x, var initialization of i, comparison, addition on i, addition on x, return value. But `i ≤ n` , `i++` and `x++` operations depends on N value:

$$
F(I) = 1 + 1 + N * 1 + N * 1 + N * 1 + 1
$$

$$
F(I) = 3 + 3 * N
$$

Simplifying, the loop formula is `1 * N` where N is the number of iterations.

### Complexities Comparison

$$
T1(N) = 2 *  N² + 2 * N + 55
$$

$$
T2(N) = 999 * N + 3 + log10 N
$$

The greater N is, the longer algorithm takes to compete.

### How compare functions when N tends to toward infinity?

$$
F(N) = N
$$

F(100) = 100

F(101) = 101 

F(102) = 102

$$
F(N) = N²
$$

F(100) = 10.000

F(101) = 10201

F(102) = 10404

When comparing functions of different therms like N x N², consider the table that contains typical functions sorted by their orders in descending order:

| N! |
| --- |
| 2^n |
| N² |
| N * log2N |
| N |
| √N |
| log2N |
| 1 |

Dealing with functions that has many orders, the value of resulting function is defined by the term with the biggest order.
So find the leading term of each function, find their positions in table: functions with lower position will take smaller values as N grows, if the position are the same, functions with lower constants will take smaller value as N grows.

There is already a formal way to denote an order of a functions, its called **Big O Notation**.
