import errorReducer from '../errorReducer';

describe("Error reducer unit tests", () => {
    it("should reduce an error when thrown", () => {
        const state = errorReducer(
          {},
          { type: "GET_ERRORS", payload: { } }
        );
        expect(state).toEqual({ });
      });
});