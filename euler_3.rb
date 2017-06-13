#project euler problem 3
#find the largest prime factor


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
    binding.pry
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
    binding.pry

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


end



#improvement : you can check a number for primehood by only checking it's remainder when divided by known primes
  #so instead of looping through every # you can loop through the primes array
#check for the nextPrime via brute force (god, that's so nasty)
def nextPrime(last_prime)
    i = 2
    last_prime = last_prime + 1
    too_far = last_prime * last_prime
    #we'll continue our search for too_far times //rewrite this later
    #too_far.times do |z|
    loop do         #iterate until you find a prime
      loop do       #check last_prime for primehood
        if last_prime == i
          return last_prime
        end
        break if last_prime % i == 0
        i = i + 1
      end
      i = 2
      last_prime = last_prime + 1
    end
end

def is_prime?( n )
  (2..n - 1).each do |i|
    return false if n % i == 0
  end
  return true
end


def main
  primes = [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97 ]
  t = gets.strip.to_i
  for a0 in (0..t-1)
    largest_prime = 2
      n = gets.strip.to_i
      original_input = n
      #first check to see if input is prime itself
      if (is_prime? ( original_input) )
        puts original_input
        next
      end

      #loop through primes and find the prime factor decompisition of n one step at a time

      #use prime decompisition to break-down n,
      #do this until n = 1
      # the last prime you pulled from it is the largest prime factor
      for i in 0..n do
      #(1..n).each do |i|

        break if n == 1
        if i > primes.size - 1
          primes << nextPrime(primes.last)
        end
        if primes[i] > original_input
          largest_prime = original_input
          break
        end
        if n % primes[i] == 0
          n /= primes[i] until (n % primes[i]) != 0
          largest_prime = primes[i]
        else
        end
      end
      puts largest_prime
  end
end
def alt
  t = gets.strip.to_i
  prime_tool = Prime.new()
  #primes = [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97 ]
  primes = prime_tool(10000000) # 10 ^ 8
  for a0 in (0..t-1)
    n = gets.strip.to_i
    original_input = n
    largest_prime = 2
    if (is_prime? ( n) )
      puts n
      next
    end
    #if primes.last < n
    #  primes = prime_tool.sieve(n)
    #else
    #end

    primes.size.times do |i|
      break if n == 1
      break if original_input <= primes[i]
      if n % primes[i] == 0
        n /= primes[i] until (n % primes[i]) != 0
        largest_prime = primes[i]
      end
    end
    puts largest_prime
  end
end
#main()
alt()
