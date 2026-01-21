function getParam(name){const p=new URLSearchParams(location.search);return p.get(name)}
function fileUrl(title){return `../../../thumbnail/${encodeURIComponent(title)}.png`}
const titleEl=document.getElementById('title')
const topicTitle=titleEl?.textContent||'Arrays'
const yt=document.getElementById('ytFrame')
const v=getParam('v')
if(yt){if(v){yt.src=`https://www.youtube.com/embed/${encodeURIComponent(v)}`}} 
const dl=document.getElementById('downloadThumb')
if(dl){dl.onclick=async()=>{const url=fileUrl(topicTitle);try{const r=await fetch(url,{method:'HEAD'});if(r.ok){const a=document.createElement('a');a.href=url;a.download=`${topicTitle}.png`;document.body.appendChild(a);a.click();a.remove();}}catch(e){}}}
const cp=document.getElementById('contactPage'); if(cp){cp.value=location.pathname}
const ct=document.getElementById('contactTopic'); if(ct){ct.value=topicTitle}
const qMap={
  '210':'Sum of Digits','211':'Smallest Digit','212':'Even or Odd','213':'Reverse a Number','214':'Palindrome Number',
  '215':'Power of 2','216':'Prime Number','217':'Factorial','218':'2\'s Complement','219':'LCM','220':'GCD',
  '222':'Narcissistic Number','223':'Count Divisors','419':'KM to Miles','420':'Area of Circle','423':'Check Prime',
  '426':'Reverse Integer (LeetCode)','427':'Print All Primes 1 to N','428':'Set Kth Bit','429':'Temperature Convert','430':'Count Total Set Bits 1 to N','431':'Create Largest Number from Digits'
}
const qData={
  '210':{
    overview:'Extract digits and accumulate sum using modulo and division.',
    code:`int sumOfDigits(int num){int sum=0;while(num>0){sum+=num%10;num/=10;}return sum;}`,
    docs:'Use num%10 to get last digit, add to sum, then divide by 10 to remove it.'
  },
  '211':{
    overview:'Scan digits and track minimum digit encountered.',
    code:`int smallestDigit(int num){if(num==0)return 0;int small=9;while(num>0){small=min(small,num%10);num/=10;}return small;}`,
    docs:'Initialize to 9; compare each extracted digit, update minimum.'
  },
  '212':{
    overview:'Check parity using modulo or bitwise AND.',
    code:`const char* evenOdd(int num){return (num&1)?"Odd":"Even";}`,
    docs:'Bitwise AND with 1 is faster; 1 means odd, 0 means even.'
  },
  '213':{
    overview:'Reverse digits constructing a new number iteratively.',
    code:`int reverseNumber(int num){int rev=0;while(num>0){rev=rev*10+num%10;num/=10;}return rev;}`,
    docs:'Multiply rev by 10 and append last digit; drop last digit from num.'
  },
  '214':{
    overview:'Reverse the number and compare to original.',
    code:`bool isPalindrome(int num){int orig=num,rev=0;while(num>0){rev=rev*10+num%10;num/=10;}return rev==orig;}`,
    docs:'Numeric approach avoids string conversion and handles leading zeros naturally.'
  },
  '215':{
    overview:'Power of two numbers have exactly one set bit.',
    code:`bool isPowerOfTwo(int n){if(n<=0)return false;return (n&(n-1))==0;}`,
    docs:'n & (n-1) clears the lowest set bit; result zero implies only one bit was set.'
  },
  '216':{
    overview:'Prime check by testing divisors up to sqrt(n).',
    code:`bool isPrime(int n){if(n<=1)return false;if(n==2)return true;if(n%2==0)return false;for(int i=3;i*i<=n;i+=2){if(n%i==0)return false;}return true;}`,
    docs:'Skip even divisors; stop at i*i<=n to reduce complexity to O(sqrt(n)).'
  },
  '217':{
    overview:'Iterative factorial for small n with 64-bit accumulator.',
    code:`long long factorial(int n){long long f=1;for(int i=2;i<=n;i++)f*=i;return f;}`,
    docs:'Use long long; avoid recursion depth and overhead for simple factorial.'
  },
  '218':{
    overview:'Two’s complement yields the negative of a value.',
    code:`int twosComplement(int num){return (~num)+1;}`,
    docs:'Invert all bits and add 1; equivalent to -num in two’s complement arithmetic.'
  },
  '219':{
    overview:'Compute LCM via GCD using Euclid’s algorithm.',
    code:`int gcd(int a,int b){while(b){int t=b;b=a%b;a=t;}return a;}\nlong long lcm(int a,int b){return (1LL*a*b)/gcd(a,b);}`,
    docs:'Euclid’s algorithm is O(log min(a,b)); LCM via product divided by GCD.'
  },
  '220':{
    overview:'Greatest common divisor using Euclid’s algorithm.',
    code:`int gcd(int a,int b){while(b){int t=b;b=a%b;a=t;}return a;}`,
    docs:'Iterative Euclid avoids recursion and is efficient.'
  },
  '222':{
    overview:'Armstrong/Narcissistic: sum of each digit^digits equals the number.',
    code:`bool isNarcissistic(int num){if(num==0)return true;int orig=num;int digits=0;for(int t=num;t>0;t/=10)digits++;int sum=0;for(int t=num;t>0;t/=10){int d=t%10;sum+= (int)pow(d,digits);}return sum==orig;}`,
    docs:'Count digits, then sum digit^digits for each digit; compare to original.'
  },
  '223':{
    overview:'Count divisors by scanning up to sqrt(n).',
    code:`int countDivisors(int n){int c=0;for(int i=1;i*i<=n;i++){if(n%i==0){c+=(i*i==n?1:2);}}return c;}`,
    docs:'Pairs (i, n/i) contribute two divisors; perfect squares contribute one.'
  },
  '419':{
    overview:'Convert kilometers to miles using constant factor.',
    code:`double kmToMiles(double km){return km*0.621371;}`,
    docs:'Use standard conversion factor 0.621371.'
  },
  '420':{
    overview:'Area of a circle using radius and PI.',
    code:`double areaCircle(double r){const double PI=3.141592653589793;return PI*r*r;}`,
    docs:'Prefer a constant PI; or use M_PI if available.'
  },
  '423':{
    overview:'Optimized prime check identical to 216 but for larger type.',
    code:`bool isPrimeLL(long long n){if(n<=1)return false;if(n==2)return true;if(n%2==0)return false;for(long long i=3;i*i<=n;i+=2){if(n%i==0)return false;}return true;}`,
    docs:'Use long long for larger inputs; same sqrt optimization.'
  },
  '426':{
    overview:'Reverse 32-bit signed integer with overflow protection.',
    code:`int reverseInteger(int x){int rev=0;while(x!=0){int d=x%10;x/=10;if(rev>INT_MAX/10||(rev==INT_MAX/10&&d>7))return 0;if(rev<INT_MIN/10||(rev==INT_MIN/10&&d<-8))return 0;rev=rev*10+d;}return rev;}`,
    docs:'Check bounds before multiplying by 10; return 0 on overflow like LeetCode.'
  },
  '427':{
    overview:'Generate primes up to N using the Sieve of Eratosthenes.',
    code:`vector<int> primesSieve(int N){vector<bool> prime(N+1,true);vector<int> res; if(N<2)return res;prime[0]=prime[1]=false;for(int i=2;i*i<=N;i++){if(prime[i]){for(int j=i*i;j<=N;j+=i)prime[j]=false;}}for(int i=2;i<=N;i++)if(prime[i])res.push_back(i);return res;}`,
    docs:'Mark multiples starting at i*i; collect indices still marked prime.'
  },
  '428':{
    overview:'Set the k-th bit using bitwise OR.',
    code:`int setKthBit(int n,int k){return n | (1<<k);}`,
    docs:'Create a mask 1<<k and OR with n to set the bit.'
  },
  '429':{
    overview:'Convert between Celsius and Fahrenheit.',
    code:`double CtoF(double c){return c*9.0/5.0+32.0;}\ndouble FtoC(double f){return (f-32.0)*5.0/9.0;}`,
    docs:'Linear conversions using standard formulae.'
  },
  '430':{
    overview:'Count total set bits from 1..N using DP of popcount.',
    code:`int totalSetBitsDP(int n){vector<int> dp(n+1,0);int total=0;for(int i=1;i<=n;i++){dp[i]=dp[i>>1]+(i&1);total+=dp[i];}return total;}`,
    docs:'dp[i] equals dp[i>>1] plus lowest bit; sum across 1..N.'
  },
  '431':{
    overview:'Form largest number from digits by sorting descending.',
    code:`string createLargest(vector<int> d){sort(d.begin(),d.end(),greater<int>());string s="";for(int x:d)s+=to_string(x);return s;}`,
    docs:'Descending sort then concatenate digits to a string.'
  }
}
function renderQuestion(qId){
  const t=qMap[qId]||'Question'
  const qTitle=document.getElementById('qTitle')
  const qSubtitle=document.getElementById('qSubtitle')
  const qOverviewText=document.getElementById('qOverviewText')
  const qCodeText=document.getElementById('qCodeText')
  const qDocsText=document.getElementById('qDocsText')
  if(qTitle){qTitle.textContent=`${qId} • ${t}`}
  const data=qData[qId]
  if(qSubtitle){qSubtitle.textContent='Shopping carts, playlists'}
  if(qOverviewText){qOverviewText.textContent=data?data.overview:'Shopping carts, playlists'}
  if(qCodeText){qCodeText.textContent=data?data.code:'Add code explanation and samples here'}
  if(qDocsText){qDocsText.textContent=data?data.docs:'Add detailed documentation here'}
}
document.querySelectorAll('.q-link').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const q=btn.getAttribute('data-q')
    renderQuestion(q)
  })
})
