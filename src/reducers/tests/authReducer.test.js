import authReducer from "../authReducer";
describe("auth page reducer unit tests", () => {
    it("auth on successful login should have desired state", () => {
        const state = authReducer(
          { isAuthenticated: false, user: {}, loading: true },
          { type: "SET_CURRENT_USER", payload: { token: "xxx-xxx-xxx" } }
        );
        expect(state).toEqual({ isAuthenticated: true, user: { token: "xxx-xxx-xxx"}, loading: false  });
      });
});