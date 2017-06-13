#euler_7.rb
#find the nth prime #
#constraints
  # 1 <= T <= 10^3
  # 1 <= T <= 10^4


# use a sieve to find 10^4 primes
class Prime
  #10 000 000 , 10 ^ 8 runtimes
  #brute_force : 74.860748 seconds
  #sieve : 2.376461 seconds
  #
  #100 000 000 000 , 10 ^ 12 runtimes
  #Killed: 9
  #10000000000

  # TODO: consider changing instance methods to class methods
  # TODO: check whether the size of bool arrays in Ruby (B[].size) > (C[].size) character arrays
    #
  # TODO: rewrite sieve to reuse chunks of memory
    #


  def intitialize
    #..
    #binding.pry
  end

  def brute_force (n)
    if n <= 1
      return false
    elsif n == 2
      return true
    #elsif n % 2 == 0 return false
    elsif n.even?
      return false
    else
      m = Math.sqrt(n)
      i = 3       #fuck ruby's lack of good for loops
      while i <= m
        return false if n % i == 0
        i += 2
      end
    end
    return true
  end

  def brute_find (n)
    primes = []
    n.times do |i|
      primes << i if brute_force(i)
    end
    return primes
  end

  def sieve (n)
    #create a boolean array, indexes represent the value
    sieve = Array.new(n + 1, true)
    sieve[0] = false
    sieve[1] = false
    m = Math.sqrt(n)
    #binding.pry

    #recreate a for loop : for (int i = 2; i <= m; i++)
    i = 2
    while i <= m
      if sieve[i]
        k = i * i #for loop : for(k = i * i; k <= n; k += i)
        while k <= n
          sieve[k] = false
          k += i
        end
      end
      i += 1
    end

    #convert boolean array to array of prime #'s
    primes = []
    (n+1).times do |i|
      primes << i if sieve[i]
    end
    return primes

  end

  #approximate how many primes are between 1 - n
  def approx_primes_in_range( n )

  end


end

def main
  t = gets.chomp
  #setup the sieve
  prime_tool = Prime.new()
  primes = prime_tool.sieve( n )
  t.times do




end

main()
