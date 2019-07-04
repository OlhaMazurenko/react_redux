export const NUMBER_INCREMENT = 'numbers_increment';
export const NUMBER_DECREMENT = 'numbers_decrement';

export function getIncrementAction () {
    return {
        type: NUMBER_INCREMENT
    };
}

export function getDecrementAction () {
    return {
        type: NUMBER_DECREMENT
    };
}
