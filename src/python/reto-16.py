def remove_snow(s: str) -> str:
    stack = []
    for char in s:
        if stack and stack[-1] == char:
            stack.pop()
        else:
            stack.append(char)
    return ''.join(stack)

print(remove_snow('zxxzoz'))  # -> "oz"
print(remove_snow('abcdd'))   # -> "abc"
print(remove_snow('zzz'))     # -> "z"
print(remove_snow('a'))       # -> "a"