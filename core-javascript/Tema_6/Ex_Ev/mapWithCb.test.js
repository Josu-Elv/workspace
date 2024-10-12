const mapWithCb = require('./mapWithCb');

let mockCallback = jest.fn(x => 2 + x)


describe('2. mapWithCb', () => {
    let mockCallback;
    beforeEach(() => {
       
        mockCallback = jest.fn(x => x + 2);
      });

    it('throws an error if first argument is not an array', () => {
        expect(() => mapWithCb("hola", mockCallback)).toThrow(Error);
        expect(() => mapWithCb(null, mockCallback)).toThrow(Error);
    });
    
    it('throws an error if second argument is not a function', () => {
        expect(() => mapWithCb([2, 6], null)).toThrow(Error);
        expect(() => mapWithCb([8, 15, 17], 123)).toThrow(Error);
    });
    
    it('calls the given function at least once', () => {
        mapWithCb([0, 1], mockCallback);
        expect(mockCallback).toHaveBeenCalled();
        mapWithCb([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89], mockCallback);
        expect(mockCallback).toHaveBeenCalled();
    });
  
    it('calls the given function a number of times equal to the length of the given array', () => {
        mapWithCb([1, 2], mockCallback);
        expect(mockCallback).toHaveBeenCalledTimes(2);
    });
  
    it('calls the given function with any one item from the given array', () => {
        mapWithCb([1, 2, 3], mockCallback);
        expect(mockCallback).toHaveBeenCalledWith(expect.any(Number));
    });
  
    it('calls the given function a second time with the second item in the given array', () => {
        mapWithCb([1, 3, 5, 7], mockCallback);
        expect(mockCallback).toHaveBeenCalledWith(3);
        mapWithCb([2, 4, 6], mockCallback);
        expect(mockCallback).toHaveBeenCalledWith(4);
    });
  
    it('calls the given function a final time with the final item in the given array', () => {
        mapWithCb([10, 20, 30, 40, 50], mockCallback);
        expect(mockCallback).toHaveBeenCalledWith(50);
        mapWithCb([1, 10, 2, 20, 3, 30, 3, 30, 2, 20, 1, 10], mockCallback);
        expect(mockCallback).toHaveBeenCalledWith(10);

    });
  })




