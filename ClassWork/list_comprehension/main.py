from math import sqrt


nums = []
with open("szamok.txt", "r") as f:
    nums = [int(line) for line in f]
# print(nums)


class Main:
    def __init__(self, nums):
        self.nums = nums

    def getDivsByFive(self, nums):
        divsByFive = [num for num in self.nums if num % 5 == 0]
        return divsByFive

    def getDivsByFiveIndex(self, nums):
        divsByFive = [num for num in self.nums if num % 5 == 0]
        divsByFiveIndex = [i for i in range(len(divsByFive)) if nums[i] % 5 == 0]
        return divsByFiveIndex

    def makeDivsByFive(self, nums):
        divsByFive = [num for num in self.nums if num % 5 == 0]
        notInDivs = [i for i in range(5, 501, 5) if i not in divsByFive]
        return notInDivs

    def idk(self, nums):
        divsByFive = [num for num in self.nums if num % 5 == 0]
        newDivsByFive = [num if str(num)[-1] == "5" else 0 for num in divsByFive]
        return newDivsByFive

    def containsZero(self, nums):
        containsZero = set([num for num in self.nums if num if "0" in str(num)])
        return containsZero

    def squares(self, nums):
        squares = [num for num in self.nums if sqrt(num) == int(sqrt(num))]
        return squares

result = Main(nums)
print(
    f"{result.getDivsByFive(nums)}\n {result.getDivsByFiveIndex(nums)}\n {result.makeDivsByFive(nums)}\n {result.idk(nums)}\n {result.containsZero(nums)}\n {result.squares(nums)}\n"
)
print(result.trial(nums))