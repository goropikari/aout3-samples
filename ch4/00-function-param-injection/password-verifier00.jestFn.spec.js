const sinon = require('sinon');
const {verifyPassword2} = require("./password-verifier00");

describe('password verifier with logger', () => {
    describe('using jest.fn', () => {
        it('calls the logger with PASS', () => {
            const mockLog = { info: jest.fn() };

            verifyPassword2('anything', [], mockLog);

            expect(mockLog.info)
                .toHaveBeenCalledWith(expect.stringMatching(/PASS/));
        });
    });
});
