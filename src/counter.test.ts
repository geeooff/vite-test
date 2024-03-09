import { describe, it, expect } from 'vitest'
import { setupCounter } from './counter';

describe('counter moduleq', () => {
   
    it('should display "count is 0" initially', () => {
        // arrange
        const button = document.createElement('button');
    
        // act
        setupCounter(button);
    
        // assert
        expect(button.innerText).toBe('count is 0');
    });
    
    it('should display "count is 1" after first click', () => {
        // arrange
        const button = document.createElement('button');
        setupCounter(button);
    
        // act
        button.click();
    
        // assert
        expect(button.innerText).toBe('count is 1');
    });
    
});
