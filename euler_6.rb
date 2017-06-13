#euler_6
#Sum square difference
# find (sum of 1 to n ) ^ 2                   (A)
# find sum of 1^2,2^2, 3^2 , 4 ^2,.. n^2      (B)
# return A - B


def sum_to_n (n)
  return n * (n + 1) / 2
end

def sum_of_squares ( n )
  total = 0
  (1..n).each do |i|
    total += i ** 2
  end
  return total
end

def main
  t = gets.strip.to_i
  for a0 in (0..t-1)
    n = gets.strip.to_i
    sum_squared = sum_to_n( n ) ** 2
    squared_sum = sum_of_squares( n )
    puts sum_squared - squared_sum
  end

end

main()
