from collections import defaultdict
def mostActive(customers):
    d = defaultdict(int)
    for c in customers:
        d[c] += 1
    return sorted([c for c, cnt in d.items() if cnt / len(customers) >= 0.05])

print(mostActive(['a','b','b']))