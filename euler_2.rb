#euler #2 in ruby
#find the sum of the even valued terms of the fibonnaci sequence that are less than N
#inputs : T (# of test cases / queries)
      #   N (see the above)

#output : blah , it's a sum

#consider making this more usable for other situations,
  #example: add functionality for finding the nth term of the fibonnaci sequence (use the even fibs to cut down on runtime)



def nextEvenFib(current, previous)
    3.times do
        temp = current
        current = current + previous
        previous = temp
    end
    result = [current, previous]
end
evenSums = [ 2, 8 ]
fibInjectors = [ 1, 5 ]
t = gets.strip.to_i
for a0 in (0..t-1)

    n = gets.strip.to_i
    total = 0
    #check to see if we've ventured that far into the fib sequence yet
    while evenSums.last < n
      temp = nextEvenFib(evenSums.last, fibInjectors.last)
      evenSums << temp[0]
      fibInjectors << temp[1]
    end
    evenSums.each do |number|
        break if number >= n
        total = total + number
    end
    puts total
end
