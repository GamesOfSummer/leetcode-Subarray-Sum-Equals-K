import {
    consoleBuffer,
    consoleEnd,
    consoleStart,
    validateFxn,
} from './helpers.js';

function subarraySum(nums: number[], target: number): number {
    let counter = 0;

    for (let i = 0; i < nums.length; i++) {
        let firstNumber = nums[i];
        let total = firstNumber;
        for (let j = i + 1; j < nums.length; j++) {
            let secondNumber = nums[j];
            total += secondNumber;

            if (total === target) {
                counter++;
            }
        }

        if (firstNumber === target) {
            counter++;
        }
    }

    return counter;
}

consoleStart();

validateFxn(subarraySum([1, 2, 3], 3), 2);
validateFxn(subarraySum([1, 1, 1], 2), 2);

consoleEnd();

export {};
