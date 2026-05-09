inp = input()
str = inp.strip().split("\n")
T = int(str[0])
for i in range(1, T, 1):
    y, x = map(int, str[i].split(" "))
    sol = y - x 
    print(sol)


