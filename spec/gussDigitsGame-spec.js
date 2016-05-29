describe('test for isValid',function () {
    it('should return false when digits is null',function () {
        expect(isValid(null)).toEqual(false);
    });

    it('should return false when number of digits is 0',function () {
        expect(isValid('')).toEqual(false);
    });
    it('should return false when number of digits is 2',function () {
        expect(isValid('12')).toEqual(false);
    });
    it('should return true when number of digits is 4',function () {
        expect(isValid('0123')).toEqual(true);
    });

    it('should return false when digits is repeated',function () {
        expect(isValid('1231')).toEqual(false);
    });
    it('should return true when digits is non-repetition',function () {
        expect(isValid('1234')).toEqual(true);
    });
});

describe('test for compareDigits',function () {
    it('should return 0A0B when digits are 1234 and 5678',function () {
        var result = compareDigits('1234','5678');
        expect(result).toEqual('0A0B');
    });
    it('should return 0A4B when digits are 1234 and 4321',function () {
        var result = compareDigits('1234','4321');
        expect(result).toEqual('0A4B');
    });
    it('should return 2A2B when digits are 1234 and 1243',function () {
        var result = compareDigits('1234','1243');
        expect(result).toEqual('2A2B');
    });
    it('should return 4A0B when digits are 1234 and 1234',function () {
        var result = compareDigits('1234','1234');
        expect(result).toEqual('4A0B');
    });
});

describe('test for gameController',function () {
  
});