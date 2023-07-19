import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyADFjmqIRwSAbXSya6-pZ4a7LTAJXs02AA",
  authDomain: "portifolio-9eca4.firebaseapp.com",
  projectId: "portifolio-9eca4",
  storageBucket: "portifolio-9eca4.appspot.com",
  messagingSenderId: "588506351646",
  appId: "1:588506351646:web:765b4eb855cbe6ae30860f",
  measurementId: "G-XT2KHYFYQ4"
};

const initializeFire = () => {
    const app = initializeApp(firebaseConfig);
    return app
}

export { initializeFire }
