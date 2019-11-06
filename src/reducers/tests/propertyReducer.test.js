import propertyReducer from "../propertyReducer";

describe("Property page reducer unit tests", () => {
    it("property page should have desired state", () => {
        const state = propertyReducer(
          { propertiesFound: false, properties: [] },
          { type: "GET_PROPERTIES", payload: [{ state: "kigali" },{ state: "kampala" }] }
        );
        expect(state).toEqual({ propertiesFound: true, properties: [{ state: "kigali" },{ state: "kampala" }]  });
      });
      it("property page by type should have desired state", () => {
        const state = propertyReducer(
          { propertiesFound: false, properties: [] },
          { type: "PROPERTY_BY_TYPE", payload: [{ state: "kigali" },{ state: "kampala" }] }
        );
        expect(state).toEqual({ propertiesFound: true, properties: [{ state: "kigali" },{ state: "kampala" }]  });
      });
});