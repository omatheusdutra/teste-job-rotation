num = int(input("Digite um número inteiro: "))

fib1 = 0
fib2 = 1

while fib2 < num:
    
    prox_fib = fib1 + fib2
    fib1 = fib2
    fib2 = prox_fib

if num == fib2:
    print(f"O número {num} pertence à sequência de Fibonacci.")
else:
    print(f"O número {num} não pertence à sequência de Fibonacci.")