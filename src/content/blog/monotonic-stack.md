---
title: 'The Monotonic Stack: A Practical Guide'
description: 'How a monotonic stack finds the next greater or smaller element in one O(n) pass, with three worked LeetCode examples.'
pubDate: 2026-10-24
draft: false
---

A monotonic stack finds, for every element, the nearest element on its left or right that is bigger or smaller, in one O(n) pass. It is a normal stack with one rule: before pushing, pop everything that would break the sorted order.

## The idea

Suppose you scan left to right and ask "which later day is warmer?" for each day. A day that has not found its answer yet is still waiting. The stack holds exactly those waiting days.

When a new element arrives, it may be the answer for several waiting elements at once. It pops them, hands each its answer, and then joins the stack itself. Because we pop only elements that just got their answer, the stack stays sorted: that is the "monotonic" part.

Two habits make the technique reliable:

- **Store indices, not values.** An index gives you the value (look it up), the distance (`i - j`) and the width of a range.
- **Decide what a pop means before you write code.** A pop means "the current element is this one's next greater (or smaller) neighbour."

## Choosing the variant

Pick the stack from two questions: are you looking for something greater or smaller, and does an equal value count? Greater problems use a decreasing stack. Smaller problems use an increasing one.

| Question | Stack type | Pop while top is | Record the answer |
| --- | --- | --- | --- |
| Next greater | non-increasing (or strictly decreasing) | `<` current | inside the while loop |
| Previous greater | strictly decreasing | `<=` current | after the while loop, from the stack top |
| Next smaller | non-decreasing (or strictly increasing) | `>` current | inside the while loop |
| Previous smaller | strictly increasing | `>=` current | after the while loop, from the stack top |

Three rules explain the table:

1. **Greater goes with decreasing, smaller with increasing.** To catch a bigger value you must pop the smaller ones, so what remains falls from bottom to top.
2. **The comparison operator sets strictness.** Popping on `<` leaves equal values on the stack. Popping on `<=` removes them too.
3. **Where you record sets the direction.** Inside the loop, the popped element's *next* answer is the current index. After the loop, the stack top is the current element's *previous* answer.

The LeetCode Discuss guide [A comprehensive guide and template for monotonic stack](https://leetcode.com/discuss/post/2347639/a-comprehensive-guide-and-template-for-m-irii/) lays out the same four variants.

## A template to start from

Every problem below is this loop with a different operator and a different thing recorded.

```python
def monotonic(arr):
    n = len(arr)
    stack = []                      # indices, kept monotonic
    next_ans = [None] * n           # answer to the right
    prev_ans = [None] * n           # answer to the left
    for i in range(n):
        while stack and arr[stack[-1]] < arr[i]:   # OP decides the variant
            top = stack.pop()
            next_ans[top] = i       # popped: i is its next greater
        if stack:
            prev_ans[i] = stack[-1] # what is left: previous greater-or-equal
        stack.append(i)
    return next_ans, prev_ans
```

Change `<` to `<=`, `>` or `>=` to get the other variants in the table above. Indices still on the stack after the loop never found a next answer. Some problems ask for exactly those leftovers (Buildings With an Ocean View).

## Example 1: Daily Temperatures

[LeetCode 739](https://leetcode.com/problems/daily-temperatures/) asks, for each day, how many days until a warmer one. This is next greater with a strict comparison, and the answer is a distance.

```python
def daily_temperatures(temps):
    ans = [0] * len(temps)
    stack = []                      # indices, temps non-increasing
    for i, t in enumerate(temps):
        while stack and temps[stack[-1]] < t:
            j = stack.pop()
            ans[j] = i - j          # days waited
        stack.append(i)
    return ans
```

Trace for `[73, 74, 75, 71, 69, 72, 76, 73]`. Each day that gets popped receives its answer, and the day that popped it joins the stack.

| Day i | Temp | Popped (answer) | Stack after (days) |
| --- | --- | --- | --- |
| 0 | 73 | none | 0 |
| 1 | 74 | day 0 (1) | 1 |
| 2 | 75 | day 1 (1) | 2 |
| 3 | 71 | none | 2, 3 |
| 4 | 69 | none | 2, 3, 4 |
| 5 | 72 | day 4 (1), day 3 (2) | 2, 5 |
| 6 | 76 | day 5 (1), day 2 (4) | 6 |
| 7 | 73 | none | 6, 7 |

The result is `[1, 1, 4, 2, 1, 1, 0, 0]`. Days 6 and 7 were still on the stack at the end, so they keep 0: no warmer day follows them.

## Example 2: Next Greater Element II

[LeetCode 503](https://leetcode.com/problems/next-greater-element-ii/) makes the array circular: the search for a greater value continues past the end and wraps to the start. The fix is to walk the array twice, as if it were written two times in a row.

```python
def next_greater_circular(nums):
    n = len(nums)
    ans = [-1] * n
    stack = []
    for i in range(2 * n):          # walk twice to simulate the circle
        x = nums[i % n]
        while stack and nums[stack[-1]] < x:
            ans[stack.pop()] = x    # store the value, not a distance
        if i < n:
            stack.append(i)         # push only in the first pass
    return ans
```

Two details matter here:

- **Push only in pass one.** Each index must enter the stack once. In pass two we only pop, using the values that wrap around.
- **The answer is a value.** Unlike Daily Temperatures, the popped index stores the greater value itself.

For `[1, 2, 1]` the first pass ends with stack `[1, 2]` (values 2 and 1). In pass two, the 2 at `i = 4` pops index 2, so its answer becomes 2. Index 1 holds the maximum and stays `-1`. The result is `[2, -1, 2]`.

## Example 3: Largest Rectangle in Histogram

[LeetCode 84](https://leetcode.com/problems/largest-rectangle-in-histogram/) needs both neighbours at once. The best rectangle has some bar as its shortest, so for each bar we need how far it can stretch before meeting a shorter bar on either side: its previous smaller and its next smaller.

```python
def largest_rectangle(heights):
    stack = []                       # indices, heights increasing
    best = 0
    for i, h in enumerate(heights + [0]):   # sentinel 0 flushes the stack
        while stack and heights[stack[-1]] >= h:
            height = heights[stack.pop()]
            left = stack[-1] if stack else -1
            best = max(best, height * (i - left - 1))
        stack.append(i)
    return best
```

When bar `j` is popped by index `i`, `i` is its next smaller-or-equal bar and the new stack top is its previous strictly smaller bar. The width in between is `i - left - 1`. The trailing 0 forces every remaining bar to be popped and measured.

Trace for `[2, 1, 5, 6, 2, 3]`:

| i | Height | Popped bar (height × width = area) | Stack after (bars) | Best |
| --- | --- | --- | --- | --- |
| 0 | 2 | none | 0 | 0 |
| 1 | 1 | bar 0 (2 × 1 = 2) | 1 | 2 |
| 2 | 5 | none | 1, 2 | 2 |
| 3 | 6 | none | 1, 2, 3 | 2 |
| 4 | 2 | bar 3 (6 × 1 = 6), bar 2 (5 × 2 = 10) | 1, 4 | 10 |
| 5 | 3 | none | 1, 4, 5 | 10 |
| 6 | 0 (sentinel) | bar 5 (3 × 1 = 3), bar 4 (2 × 4 = 8), bar 1 (1 × 6 = 6) | 6 | 10 |

The answer is 10: bars 2 and 3 (heights 5 and 6) share a rectangle of height 5 and width 2.

## Duplicates and pitfalls

Equal values are where most bugs hide. The operator you pop on decides whether an equal element counts as "greater" or "smaller", so choose it on purpose.

When a problem needs both a previous and a next answer (histogram, sum of subarray minimums), use a strict comparison on one side and a non-strict one on the other. In the histogram code, the right edge is the next smaller-or-equal bar and the left edge is the previous strictly smaller bar. With `[3, 3, 3]`, the first two bars are measured too narrow, and the last bar is popped with the full width of 3. Nothing is double counted and the maximum is still correct.

Pitfall checklist:

- [ ] The stack holds indices, and the code reads `arr[stack[-1]]` for values.
- [ ] The operator (`<`, `<=`, `>`, `>=`) matches the row you chose in the table.
- [ ] You check `stack` is not empty before reading `stack[-1]`.
- [ ] The answer is recorded inside the loop for "next", after it for "previous".
- [ ] Circular input: loop `2 * n` times and push only in the first pass.
- [ ] A sentinel (an extra 0 or infinity) flushes the stack when you must process everything left.
- [ ] Elements left on the stack are handled: default answer (`0`, `-1`) or the answer itself.

## Why it is O(n), and what to practice

The loop inside the loop looks quadratic, but every index is pushed exactly once and popped at most once. The total number of pops across the whole scan is at most n, so time is O(n) and the stack uses O(n) space in the worst case.

A practice ladder, from the template itself to harder twists:

| Order | Problem | Variant | Twist |
| --- | --- | --- | --- |
| 1 | [Next Greater Element I](https://leetcode.com/problems/next-greater-element-i/) | next greater | map answers by value |
| 2 | [Daily Temperatures](https://leetcode.com/problems/daily-temperatures/) | next greater | answer is a distance |
| 3 | [Online Stock Span](https://leetcode.com/problems/online-stock-span/) | previous greater-or-equal | streaming input |
| 4 | [Next Greater Element II](https://leetcode.com/problems/next-greater-element-ii/) | next greater | circular array |
| 5 | [Buildings With an Ocean View](https://leetcode.com/problems/buildings-with-an-ocean-view/) (premium) | leftovers | answer is what stays on the stack |
| 6 | [Remove K Digits](https://leetcode.com/problems/remove-k-digits/) | next smaller | greedy deletion |
| 7 | [Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/) | previous and next greater | water per popped bar |
| 8 | [Largest Rectangle in Histogram](https://leetcode.com/problems/largest-rectangle-in-histogram/) | previous and next smaller | width from both neighbours |
| 9 | [Sum of Subarray Minimums](https://leetcode.com/problems/sum-of-subarray-minimums/) | previous and next smaller | strict on one side, non-strict on the other |
| 10 | [132 Pattern](https://leetcode.com/problems/132-pattern/) | previous greater | running minimum alongside the stack |
| 11 | [Maximal Rectangle](https://leetcode.com/problems/maximal-rectangle/) | histogram per row | reduce a grid to histograms |
| 12 | [Number of Visible People in a Queue](https://leetcode.com/problems/number-of-visible-people-in-a-queue/) | next greater-or-equal plus pops | count pops and the blocker |

Step-through visualizations: [Daily Temperatures](https://claude.ai/artifact/2wBgQAFc9gGh8pPKEarST2), [Next Greater Element II](https://claude.ai/artifact/Rs6kqtHS28URusyFgniwGy) and [Largest Rectangle in Histogram](https://claude.ai/artifact/8rRwhJEHsYfUiZ86DvatAw). The stack problem set PDF has 57 problems with hints and solutions.
