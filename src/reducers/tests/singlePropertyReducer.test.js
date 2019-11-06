import singlePropertyReducer from "../singlePropertyReducer";

describe("Single property page reducer unit tests", () => {
    it("single property page should have desired state", () => {
        const state = singlePropertyReducer(
          { propertyFound: false, singleProperty: {} },
          { type: "SINGLE_PROPERTY", payload: { state: "kigali" } }
        );
        expect(state).toEqual({ propertyFound: true, singleProperty: { state: "kigali" } });
      });
});