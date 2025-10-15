export interface Problem {
  id: string;
  title: string;
  description: string;
  input_format: string;
  output_format: string;
  test_case: string;
  answer: string;
  solved: boolean;
}

//Example of Questions stored in db
export type ProblemsMap = {
  [key: string]: Problem[];
};

// 3. The actual data
export const problem: ProblemsMap = {
  '800': [
    {
  "id": "p800-1",
  "title": "A. Halloumi Boxes",
  "description": "Theofanis is busy after his last contest, as now, he has to deliver many halloumis all over the world. He stored them inside n boxes and each of which has some number aᵢ written on it. He wants to sort them in non-decreasing order based on their number, however, his machine works in a strange way. It can only reverse any subarray of boxes with length at most k. Find if it's possible to sort the boxes using any number of reverses.",
  "input_format": "The first line contains a single integer t (1 ≤ t ≤ 100) — the number of test cases.\nEach test case consists of two lines:\nFirst line: two integers n and k (1 ≤ k ≤ n ≤ 100)\nSecond line: n integers a₁, a₂, ..., aₙ (1 ≤ aᵢ ≤ 10⁹)",
  "output_format": "For each test case, print YES (case-insensitive), if the array can be sorted in non-decreasing order, or NO (case-insensitive) otherwise.",
  "test_case": "5\n3 2\n1 2 3\n3 1\n9 9 9\n4 4\n6 4 2 1\n4 3\n10 3 830 14\n2 1\n3 1",
  "answer": "YES\nYES\nYES\nYES\nNO",
  "solved": false
}
,
    {
  "id": "p800-2",
  "title": "Be Positive",
  "description": "Given an array a of n elements where each element is equal to -1, 0 or 1. In one operation, you can choose an index i and increase a_i by 1. Operations can be performed any number of times, choosingany indices. The goal is to make the product of all elements in the array strictly positive with the minimum number of operations. Find the minimum number of operations",
  "input_format": "The first line contains a single integer t (1 ≤ t ≤ 10000) — the number of test cases.\nEach test case consists of two lines:\nFirst line: two integers n (1 ≤ n ≤ 8) \nSecond line: n integers a₁, a₂, ..., aₙ (-1 ≤ aᵢ ≤ 1)",
  "output_format": "For each test case, output one integer - the minimum number of operations required to make the product of the elements in the array strictly positive",
  "test_case": "3\n3\n-1 0 1\n4\n-1 -1 0 1\n5\n-1 -1 -1 0 0",
  "answer": "3\n1\n4",
  "solved": false 
},
{
  "id": "p800-3",
  "title": "Degree of Polynomial",
  "description": "In mathematics, the degree of polynomials in one variable is the highest power of the variable in the algebraic expression with non-zero coefficient. Chef has a variable a polynomial in one variable x with N terms. Find the degree of the polynomial",
  "input_format": "The first line contains a single integer t — the number of test cases (1 ≤ t ≤ 100).\nEach test case consists of two lines:\nFirst line: Single integer n (1 ≤ n ≤ 1000)\nSecond line: n space-separated integers - the ith integer A_i-1 corresponds to the coefficient of x^(i-1)",
  "output_format": "For each test case, output in a single line, the degree of the polynomial",
  "test_case": "4\n1\n5\n2\n-3 3\n3\n0 0 5\n4\n1 2 4 0",
  "answer": "0\n1\n2\n2",
  "solved": false
},
{
  "id": "p800-4",
  "title": "Good Kid",
  "description": "Slavic is preparing a present for a friend's birthday. He has an array a of n digits and the present will be the product of all these digits. Because Slavic is a good kid who wants to make the biggest product possible, he wants to add 1 to exactly one of his digits. What is the maximum product Slavic can make?",
  "input_format": "The first line contains a single integer t — the number of test cases (1 ≤ t ≤ 10000).\nEach test case consists of two lines:\nFirst line: Single integer n (1 ≤ n ≤ 9)\nSecond line: n space-separated integers - the digits in the array",
  "output_format": "For each test case, output a single integer - the maximum possible product Slavic can make, by adding 1 to exactly one of his digits",
  "test_case": "4\n4\n2 2 1 2\n3\n0 1 2\n5\n4 3 2 3 4\n9\n9 9 9 9 9 9 9 9 9",
  "answer": "16\n2\n432\n43067210",
  "solved": false
}
    {
  "id": "p800-5",
  "title": "All lengths Subtraction",
  "description": "You are given a permutation p of length n. You must perform exactly one operation for each integer k from 1 up to n in that order:\nChoose a subarray of p of length exactly k and subtract 1 from every element in that subarray. After completing all n operations, your goal is to have all elements of the array equal to zero. Determine whether it is possible to achieve this",
  "input_format": "The first line contains a single integer t — the number of test cases (1 ≤ t ≤ 100).\nEach test case consists of two lines:\nFirst line: Single integer n (1 ≤ n ≤ 100)\nSecond line: n space-separated integers - the permutation itself",
  "output_format": "For each test case, print YES (case-insensitive), if it is possible to make all elements of the array p equal to 0, or NO (case-insensitive) otherwise",
  "test_case": "4\n4\n1 3 4 2\n5\n1 5 2 4 3\n5\n2 4 5 3 1\n3\n3 1 2",
  "answer": "YES\nNO\nYES\nNO",
  "solved": false
}
  ],
  1200 : [
  {
  "id": "p1200-2",
  "title": "A. Line Trip",
  "description": "You are located at point 0 on a number line and want to travel to point x and return to 0. Your car consumes 1 liter of fuel per unit of distance. There are n gas stations at specific points, and you can only refuel at these gas stations. Compute the minimum tank capacity required to make the round trip.",
  "input_format": "The first line contains a single integer t — the number of test cases (1 ≤ t ≤ 1000).\nEach test case consists of two lines:\nFirst line: two integers n and x (1 ≤ n ≤ 50; 2 ≤ x ≤ 100)\nSecond line: n space-separated integers a1, a2, ..., an such that 0 < a1 < a2 < ... < an < x",
  "output_format": "For each test case, print one integer — the minimum possible fuel tank capacity (in liters) needed to complete the trip.",
  "test_case": "3\n3 7\n1 2 5\n3 6\n1 2 5\n1 10\n7",
  "answer": "4\n3\n7",
  "solved": false
},
    {
  "id": "p1200-3",
  "title": "Trace of a matrix",
  "description": "Chef is learning linear algebra. Recently, he learnt that for a square matrix M, trace(M) is defined as the sum of all elements on the main diagonal of M(an element lies on a main diagonal if its row index and column index are same). Now, Chef wants to solve some exercises related to this new quantity, so he wrote down a square matrix A with size N * N. A square submatrix of A with size l * l is a contiguos block of l * l elements of A",
  "input_format": "The first line contains a single integer t — the number of test cases (1 ≤ t ≤ 100).\nFirst line: single integer n (2 ≤ n ≤ 100)\nN lines follow. For each i, the ith of these line contains N space-seperated integers denoting the ith row of the matrix A",
  "output_format": "For each test case, print one integer — the minimum possible fuel tank capacity (in liters) needed to complete the trip.",
  "test_case": "1\n3\n1 2 5\n6 3 4\n2 7 1",
  "answer": "13",
  "solved": false
}
  ]
};
