/*******************************************************
    C++ MASTER SOLUTION FILE
    Problems 210 – 214 (All Approaches)
*******************************************************/

#include <bits/stdc++.h>
using namespace std;

/*******************************************************
210. SUM OF DIGITS
*******************************************************/

// Method 1: Brute Force (Iterative)
int sumOfDigits_iterative(int num) {
    int sum = 0;
    while (num > 0) {
        sum += num % 10;
        num /= 10;
    }
    return sum;
}

// Method 2: Recursive
int sumOfDigits_recursive(int num) {
    if (num == 0) return 0;
    return (num % 10) + sumOfDigits_recursive(num / 10);
}

// Method 3: Convert to string
int sumOfDigits_string(int num) {
    string s = to_string(num);
    int sum = 0;
    for (char c : s) sum += (c - '0');
    return sum;
}


/*******************************************************
211. SMALLEST DIGIT
*******************************************************/

// Method 1: Brute Force (extract all digits)
int smallestDigit_iterative(int num) {
    if (num == 0) return 0;
    int small = 9;
    while (num > 0) {
        small = min(small, num % 10);
        num /= 10;
    }
    return small;
}

// Method 2: Using string
int smallestDigit_string(int num) {
    string s = to_string(num);
    int small = 9;
    for (char c : s) {
        small = min(small, c - '0');
    }
    return small;
}


/*******************************************************
212. EVEN OR ODD
*******************************************************/

// Method 1: Using modulo
string checkEvenOdd_mod(int num) {
    return (num % 2 == 0) ? "Even" : "Odd";
}

// Method 2: Using bitwise AND
string checkEvenOdd_bitwise(int num) {
    return (num & 1) ? "Odd" : "Even";
}


/*******************************************************
213. REVERSE A NUMBER (POSITIVE ONLY)
*******************************************************/

// Method 1: Iterative reverse
int reverseNumber_iterative(int num) {
    int rev = 0;
    while (num > 0) {
        rev = rev * 10 + (num % 10);
        num /= 10;
    }
    return rev;
}

// Method 2: Using string
int reverseNumber_string(int num) {
    string s = to_string(num);
    reverse(s.begin(), s.end());
    return stoi(s);
}


/*******************************************************
214. PALINDROME NUMBER
*******************************************************/

// Method 1: Reverse and compare (numeric)
string isPalindrome_reverse(int num) {
    int original = num;
    int rev = 0;

    while (num > 0) {
        rev = rev * 10 + (num % 10);
        num /= 10;
    }

    return (rev == original) ? "Yes" : "No";
}

// Method 2: String compare
string isPalindrome_string(int num) {
    string s = to_string(num);
    string r = s;
    reverse(r.begin(), r.end());

    return (s == r) ? "Yes" : "No";
}

// Method 3: Two-pointer technique on string
string isPalindrome_twoPointer(int num) {
    string s = to_string(num);
    int left = 0, right = s.size() - 1;

    while (left < right) {
        if (s[left] != s[right]) return "No";
        left++, right--;
    }
    return "Yes";
}


/*******************************************************
MAIN FUNCTION (OPTIONAL TESTING)
*******************************************************/

int main() {
    // You may test here:
    cout << "Sum of digits (12345): " 
         << sumOfDigits_iterative(12345) << endl;

    cout << "Smallest digit (5892): " 
         << smallestDigit_iterative(5892) << endl;

    cout << "Check even/odd (7): " 
         << checkEvenOdd_bitwise(7) << endl;

    cout << "Reverse (12345): " 
         << reverseNumber_iterative(12345) << endl;

    cout << "Palindrome (1221): " 
         << isPalindrome_reverse(1221) << endl;

    return 0;
}



______________________________________
/*******************************************************
215. CHECK IF A NUMBER IS POWER OF 2
*******************************************************/

// Method 1: Brute force (keep dividing by 2)
string isPowerOfTwo_bruteforce(int num) {
    if (num <= 0) return "No";
    while (num % 2 == 0) num /= 2;
    return (num == 1) ? "Yes" : "No";
}

// Method 2: Bit manipulation (best)
// Power of 2 → Only one set bit → n & (n-1) == 0
string isPowerOfTwo_bit(int num) {
    if (num <= 0) return "No";
    return ((num & (num - 1)) == 0) ? "Yes" : "No";
}

// Method 3: Counting set bits (slower)
string isPowerOfTwo_countBits(int num) {
    if (num <= 0) return "No";
    int count = 0;
    while (num > 0) {
        count += (num & 1);
        num >>= 1;
    }
    return (count == 1) ? "Yes" : "No";
}


/*******************************************************
216. CHECK PRIME NUMBER
*******************************************************/

// Method 1: Brute force (check all numbers)
string isPrime_bruteforce(int num) {
    if (num <= 1) return "No";
    for (int i = 2; i < num; i++) {
        if (num % i == 0) return "No";
    }
    return "Yes";
}

// Method 2: Optimized (check up to sqrt)
string isPrime_sqrt(int num) {
    if (num <= 1) return "No";
    if (num == 2) return "Yes";
    if (num % 2 == 0) return "No";

    for (int i = 3; i * i <= num; i += 2) {
        if (num % i == 0) return "No";
    }
    return "Yes";
}

// Method 3: Advanced skip by 6k ± 1
string isPrime_6k(int num) {
    if (num <= 1) return "No";
    if (num <= 3) return "Yes";
    if (num % 2 == 0 || num % 3 == 0) return "No";

    for (int i = 5; i * i <= num; i += 6) {
        if (num % i == 0 || num % (i + 2) == 0)
            return "No";
    }
    return "Yes";
}


/*******************************************************
217. FACTORIAL OF A NUMBER (0 ≤ num ≤ 20)
*******************************************************/

// Method 1: Iterative
long long factorial_iterative(int num) {
    long long ans = 1;
    for (int i = 2; i <= num; i++)
        ans *= i;
    return ans;
}

// Method 2: Recursive
long long factorial_recursive(int num) {
    if (num <= 1) return 1;
    return num * factorial_recursive(num - 1);
}


/*******************************************************
218. 2's COMPLEMENT OF A NUMBER
*******************************************************/

// Method 1: Direct mathematical (best)
int twosComplement_direct(int num) {
    return -num;
}

// Method 2: Manual 2's complement using bit operations
int twosComplement_manual(int num) {
    return (~num) + 1;    // invert bits + 1
}


/*******************************************************
219. LCM OF TWO NUMBERS
*******************************************************/

// Helper: GCD using Euclid
int gcd_euclid(int a, int b) {
    while (b != 0) {
        int temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// Method 1: Using formula: LCM = (a*b)/GCD
long long lcm_formula(int a, int b) {
    return (1LL * a * b) / gcd_euclid(a, b);
}

// Method 2: Brute force (check multiples)
long long lcm_bruteforce(int a, int b) {
    long long m = max(a, b);
    while (true) {
        if (m % a == 0 && m % b == 0)
            return m;
        m++;
    }
}

______________________________________
/*******************************************************
220. GCD OF TWO NUMBERS
*******************************************************/

// Method 1: Brute Force (Check all numbers up to min(a,b))
int gcd_bruteforce(int a, int b) {
    int g = 1;
    for (int i = 1; i <= min(a, b); i++) {
        if (a % i == 0 && b % i == 0)
            g = i;
    }
    return g;
}

// Method 2: Euclidean Algorithm (optimized)
int gcd_euclid_fast(int a, int b) {
    while (b != 0) {
        int temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// Method 3: Recursive Euclid
int gcd_recursive(int a, int b) {
    if (b == 0) return a;
    return gcd_recursive(b, a % b);
}


/*******************************************************
222. CHECK NARCISSISTIC (ARMSTRONG) NUMBER
*******************************************************/

// Method 1: Brute Force (digit extraction)
string isNarcissistic_bruteforce(int num) {
    if (num == 0) return "Yes";

    int original = num;
    int digits = 0;

    int temp = num;
    while (temp > 0) {
        digits++;
        temp /= 10;
    }

    int sum = 0;
    temp = num;
    while (temp > 0) {
        int d = temp % 10;
        sum += pow(d, digits);
        temp /= 10;
    }

    return (sum == original) ? "Yes" : "No";
}

// Method 2: Using string for digit count
string isNarcissistic_string(int num) {
    string s = to_string(num);
    int digits = s.length();

    int sum = 0;
    for (char c : s) {
        int d = c - '0';
        sum += pow(d, digits);
    }

    return (sum == num) ? "Yes" : "No";
}


/*******************************************************
223. COUNT DIVISORS OF A NUMBER
*******************************************************/

// Method 1: Brute Force → Check all numbers up to n
int countDivisors_bruteforce(int num) {
    int count = 0;
    for (int i = 1; i <= num; i++) {
        if (num % i == 0) count++;
    }
    return count;
}

// Method 2: Optimized → Check up to sqrt(n)
int countDivisors_sqrt(int num) {
    int count = 0;
    for (int i = 1; i * i <= num; i++) {
        if (num % i == 0) {
            if (i * i == num)
                count++; // perfect square
            else
                count += 2; // i and num/i
        }
    }
    return count;
}


/*******************************************************
419. KM TO MILES
*******************************************************/

// Method 1: Direct multiplication
double kmToMiles_direct(double km) {
    return km * 0.621371;
}

// Method 2: Using constant PI (not necessary but shown)
double kmToMiles_precision(double km) {
    const double factor = 0.621371;
    return km * factor;
}


/*******************************************************
420. AREA OF CIRCLE
*******************************************************/

// Method 1: Using PI constant
double areaCircle_basic(double r) {
    const double PI = 3.141592653589793;
    return PI * r * r;
}

// Method 2: Using <cmath> M_PI (if available)
double areaCircle_mpi(double r) {
    return M_PI * r * r;    // may vary by compiler
}

______________________________________

/*******************************************************
423. CHECK IF A GIVEN NUMBER IS PRIME
*******************************************************/

// Method 1: Brute Force (Check all numbers from 2 to n-1)
bool isPrime_bruteforce_v2(long long n) {
    if (n <= 1) return false;
    for (long long i = 2; i < n; i++) {
        if (n % i == 0) return false;
    }
    return true;
}

// Method 2: Optimized (Check till sqrt(n))
bool isPrime_sqrt_v2(long long n) {
    if (n <= 1) return false;
    if (n == 2) return true;
    if (n % 2 == 0) return false;

    for (long long i = 3; i * i <= n; i += 2) {
        if (n % i == 0) return false;
    }
    return true;
}

// Method 3: 6k ± 1 optimization (fastest)
bool isPrime_6k_v2(long long n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 == 0 || n % 3 == 0) return false;

    for (long long i = 5; i * i <= n; i += 6) {
        if (n % i == 0 || n % (i + 2) == 0)
            return false;
    }
    return true;
}


/*******************************************************
426. REVERSE AN INTEGER (WITH OVERFLOW CHECK)
*******************************************************/

// Method 1: Standard reverse with overflow guard
int reverseInteger_safe(int x) {
    int rev = 0;

    while (x != 0) {
        int digit = x % 10;
        x /= 10;

        // overflow check
        if (rev > INT_MAX / 10 || (rev == INT_MAX / 10 && digit > 7))
            return 0;
        if (rev < INT_MIN / 10 || (rev == INT_MIN / 10 && digit < -8))
            return 0;

        rev = rev * 10 + digit;
    }
    return rev;
}

// Method 2: Detect possible overflow using long long (not allowed in interviews but useful)
int reverseInteger_longlong(int x) {
    long long rev = 0;

    while (x != 0) {
        rev = rev * 10 + x % 10;
        x /= 10;

        if (rev > INT_MAX || rev < INT_MIN)
            return 0;
    }

    return (int)rev;
}


/*******************************************************
427. PRINT ALL PRIME NUMBERS FROM 1 TO N
*******************************************************/

// Method 1: Brute Force check each number for prime
vector<int> primes_bruteforce(int N) {
    vector<int> primes;

    auto isPrime = [&](int n) {
        if (n <= 1) return false;
        for (int i = 2; i < n; i++)
            if (n % i == 0) return false;
        return true;
    };

    for (int i = 2; i <= N; i++)
        if (isPrime(i)) primes.push_back(i);

    return primes;
}

// Method 2: √n Prime check for each number
vector<int> primes_sqrt(int N) {
    vector<int> primes;

    auto isPrime = [&](int n) {
        if (n <= 1) return false;
        for (int i = 2; i * i <= n; i++)
            if (n % i == 0) return false;
        return true;
    };

    for (int i = 2; i <= N; i++)
        if (isPrime(i)) primes.push_back(i);

    return primes;
}

// Method 3: SIEVE OF ERATOSTHENES (BEST)
vector<int> primes_sieve(int N) {
    vector<bool> prime(N + 1, true);
    vector<int> result;

    if (N < 2) return result;

    prime[0] = prime[1] = false;

    for (int i = 2; i * i <= N; i++) {
        if (prime[i]) {
            for (int j = i * i; j <= N; j += i)
                prime[j] = false;
        }
    }

    for (int i = 2; i <= N; i++)
        if (prime[i]) result.push_back(i);

    return result;
}

______________________________________


/*******************************************************
428. SET THE K-TH BIT OF A NUMBER
*******************************************************/

// Method 1: Bitwise OR (BEST)
int setKthBit_or(int n, int k) {
    return n | (1 << k);
}

// Method 2: If k-th bit is already 1, return n (explicit check)
int setKthBit_check(int n, int k) {
    if (n & (1 << k)) return n;  // already set
    return n | (1 << k);
}

// Method 3: Using binary mask creation
int setKthBit_mask(int n, int k) {
    int mask = (1 << k);
    return n | mask;
}


/*******************************************************
429. TEMPERATURE CONVERSION (C ↔ F)
*******************************************************/

// Method 1: Celsius → Fahrenheit
double CtoF(double c) {
    return c * 9.0 / 5.0 + 32.0;
}

// Method 2: Fahrenheit → Celsius
double FtoC(double f) {
    return (f - 32.0) * 5.0 / 9.0;
}

// Method 3: Unified function
double convertTemperature(double temp, const string &type) {
    if (type == "CtoF")
        return temp * 9.0 / 5.0 + 32.0;
    return (temp - 32.0) * 5.0 / 9.0;
}


/*******************************************************
430. COUNT TOTAL SET BITS FROM 1 TO N
*******************************************************/

// Method 1: Brute Force (Count bits of each number)
int totalSetBits_bruteforce(int n) {
    int total = 0;
    for (int i = 1; i <= n; i++) {
        int x = i;
        while (x > 0) {
            total += (x & 1);
            x >>= 1;
        }
    }
    return total;
}

// Method 2: DP approach (O(n)) – BEST for n ≤ 1e6
int totalSetBits_dp(int n) {
    vector<int> dp(n + 1, 0);
    int total = 0;

    for (int i = 1; i <= n; i++) {
        dp[i] = dp[i >> 1] + (i & 1);
        total += dp[i];
    }
    return total;
}

// Method 3: Brian Kernighan method (but still O(n log n))
int totalSetBits_bk(int n) {
    int total = 0;
    for (int i = 1; i <= n; i++) {
        int x = i;
        while (x > 0) {
            x &= (x - 1); // removes lowest set bit
            total++;
        }
    }
    return total;
}


/*******************************************************
431. CREATE LARGEST NUMBER FROM DIGITS
*******************************************************/

// Method 1: Sort descending (BEST)
string createLargest_desc(vector<int> digits) {
    sort(digits.begin(), digits.end(), greater<int>());
    string res = "";
    for (int d : digits) res += to_string(d);
    return res;
}

// Method 2: Using counting frequency (O(n) when digits range is 0–9)
string createLargest_countSort(vector<int> digits) {
    int freq[10] = {0};
    for (int d : digits) freq[d]++;

    string res = "";
    for (int i = 9; i >= 0; i--) {
        while (freq[i]--) res += to_string(i);
    }
    return res;
}

// Method 3: Build as integer (only works if digits ≤ 18)
long long createLargest_asNumber(vector<int> digits) {
    sort(digits.begin(), digits.end(), greater<int>());
    long long num = 0;
    for (int d : digits) num = num * 10 + d;
    return num;
}

