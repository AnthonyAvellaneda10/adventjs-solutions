def min_moves_to_stables(reindeer, stables):
    reindeer.sort()
    stables.sort()
    return sum(abs(r - s) for r, s in zip(reindeer, stables))


print(min_moves_to_stables([2, 6, 9], [3, 8, 5]))

print(min_moves_to_stables([1, 1, 3], [1, 8, 4]))