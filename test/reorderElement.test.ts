import reorderElement from "./reorderElement";

const operations = [
    "moveToStart",
    "moveOneTowardStart",
    "moveOneTowardEnd",
    "moveToEnd",
] as const;

type Operation = typeof operations[number];

const testCasesForOperation = (operation: Operation): [number, number[]][] => {
    switch (operation) {
        case "moveToStart":
            return [
                [0, [1, 2, 3, 4, 5]],
                [1, [2, 1, 3, 4, 5]],
                [2, [3, 1, 2, 4, 5]],
                [3, [4, 1, 2, 3, 5]],
                [4, [5, 1, 2, 3, 4]],
                [5, [1, 2, 3, 4, 5]],
            ];
        case "moveOneTowardStart":
            return [
                [0, [1, 2, 3, 4, 5]],
                [1, [2, 1, 3, 4, 5]],
                [2, [1, 3, 2, 4, 5]],
                [3, [1, 2, 4, 3, 5]],
                [4, [1, 2, 3, 5, 4]],
                [5, [1, 2, 3, 4, 5]],
            ];
        case "moveOneTowardEnd":
            return [
                [0, [2, 1, 3, 4, 5]],
                [1, [1, 3, 2, 4, 5]],
                [2, [1, 2, 4, 3, 5]],
                [3, [1, 2, 3, 5, 4]],
                [4, [1, 2, 3, 4, 5]],
                [5, [1, 2, 3, 4, 5]],
            ];
        case "moveToEnd":
            return [
                [0, [2, 3, 4, 5, 1]],
                [1, [1, 3, 4, 5, 2]],
                [2, [1, 2, 4, 5, 3]],
                [3, [1, 2, 3, 5, 4]],
                [4, [1, 2, 3, 4, 5]],
                [5, [1, 2, 3, 4, 5]],
            ];
    }
};

operations.forEach(operation => {
    describe(operation, () => {
        // Intentionally don't require the readonly type from the input function
        const input = Object.freeze([1, 2, 3, 4, 5]) as number[];
        const cases = testCasesForOperation(operation);

        cases.forEach(pair => {
            const [index, expected] = pair;
            it(`with index ${index}`, () => {
                expect(reorderElement(input as any, index, operation)).toEqual(
                    expected
                );
            });
        });
    });
});
