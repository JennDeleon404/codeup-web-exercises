// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld("string")).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});
describe("sayHello", function() {
    it('should be a defined function', function(){
        expect(typeof sayHello).toBe('function');
    })
    it('should never return undefined', function() {
        expect(typeof sayHello()).not.toBe('undefined')
    })
    it('should return a string', function() {
        expect(typeof sayHello()).toBe('string');
    })
    it('should return a greeting for the input', function(){
        expect(sayHello('Jay')).toBe('Hello Jay!');
    })
});
//10.
describe('isFive', function(){
    it('isFive should return a boolean no matter the input', function(){
        expect(typeof isFive("boolean")).toEqual('boolean');
    })
    it('should return true when passed 5', function() {
        expect(isFive(5)).toBe(true)
    })
    it('should return true when passed "5" ', function() {
        expect(isFive("5")).toBe(true)
    })
})
//11.
describe('isEven', function(){
    it('should be defined as a function', function(){
        expect(typeof isEven).toEqual("function");
    })
    it('isEven should return a boolean no matter the input', function(){
        expect(typeof isEven("boolean")).toEqual('boolean');
    })
    it('returns true when executed with isEven(2)', function(){
        expect(isEven(2)).toBe(true);
        })
    it('returns true when executed with isEven(-4)', function(){
        expect(typeof isEven).not.toBe('(isEven(-4)');
    })
    it('returns false when executed with isEven(3)', function(){
        expect(typeof isEven).not.toBe('isEven(3)');
    })
    it('returns false when called with isEven("banana")', function(){
        expect(typeof isEven).not.toBe('isEven("banana")');
    })
    it('returns true when called with isEven("8")', function(){
        expect(typeof isEven).not.toBe('isEven("8")');
    })
    it('returns false when called with isEven(Infinity)', function(){
        expect(typeof isEven).not.toBe('isEven("8")');
    })
    it('return false when called with a boolean input like isEven(true) or isEven(false)',function(){
        expect(typeof isEven).not.toBe('isEven)');
    })
    it('returns false when called without an argument like isEven()', function(){
        expect(typeof isEven).not.toBe("isEven()");
    })
})
//12.
describe("isVowel", function(){
    it('is a defined function', function(){
        expect(typeof isVowel).toBe("function");
    })
    it('always returns as a boolean', function(){
        expect(typeof isVowel()).toBe(true);
    })
    it('isVowel "a" returns true', function(){
        expect(typeof isVowel("a")).toBe(true);
    })
    it('isVowel("A")` returns true', function() {
        expect(typeof isVowel("A")).toBe(true);
    })
    it('isVowel("y")` returns false', function() {
        expect(typeof isVowel("y")).not.toBe(false);
    })
    it('isVowel("4")` returns false', function() {
        expect(typeof isVowel("4")).not.toBe(false);
    })
})