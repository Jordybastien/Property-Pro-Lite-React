// import Enzyme from "enzyme/build";
// import configureStore from "redux-mock-store";
// import thunk from "redux-thunk";
// import Adapter from "enzyme-adapter-react-16/build";
// import moxios from "moxios";
// import axios from "axios";
// import { registerUser, loginUser } from "../authActions";
// import { SET_CURRENT_USER, GET_ERRORS } from "../types";
// import dbCall from "../../config/dbCall";

// Enzyme.configure({ adapter: new Adapter() });

// const mockedStore = configureStore([thunk]);
// const flushPromises = () => new Promise(resolve => setImmediate(resolve));
// let store;
// const { BASE_URL } = process.env;

// describe("Signup actions actions", () => {
//   beforeEach(() => {
//     store = mockedStore({
//       token: null,
//       error: false
//     });
//     moxios.install(dbCall);
//   });

//   afterEach(() => {
//     moxios.uninstall(dbCall);
//   });
//   it("should signup a user", async () => {
//     moxios.wait(() => {
//       const request = moxios.requests.mostRecent();
//       request.respondWith({
//         status: 201,
//         response: {
//           data: {
//             status: 201,
//             message: "Account created succesfully",
//             data: {
//               token:
//                 "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzEsImVtYWlsIjoicnVndW1iaXJhQGdtYWlsLmNvbSIsImZpcnN0X25hbWUiOiJSdWd1bWJpcmEiLCJsYXN0X25hbWUiOiJKb3JkeSIsInBob25lTnVtYmVyIjoiMDc4NTYzNDc3OSIsImFkZHJlc3MiOiJLaWN1a2lybyIsImlzX2FkbWluIjpmYWxzZSwiaWF0IjoxNTczMDY0ODA3LCJleHAiOjE1NzMxNTEyMDd9.jVuM19OT10dJjFBNj4H9bJAJMONDypImsSpWbhIQDhA",
//               firstname: "Rugumbira",
//               lastname: "Jordy",
//               email: "rugumbira@gmail.com",
//               phoneNumber: "0785634779",
//               address: "Kicukiro"
//             }
//           }
//         }
//       });
//     });
//     await store.dispatch(
//       registerUser({
//         first_name: "Rugumbira",
//         last_name: "Jordy",
//         password: "123456",
//         email: "rugumbira@gmail.com",
//         phoneNumber: "0785634779",
//         address: "Kicukiro",
//         is_admin: true
//       })
//     );
//     await flushPromises();
//     const calledActions = store.getActions();
//     expect(calledActions[0].type).toEqual(SET_CURRENT_USER);
//   });
// });
