import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// CONFIG DO SEU FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSyC_wyZh1PP66nacrLY-nGKo5S9cyJls8u0",
  authDomain: "bc-d-74664.firebaseapp.com",
  projectId: "bc-d-74664",
  storageBucket: "bc-d-74664.firebasestorage.app",
  messagingSenderId: "700033242104",
  appId: "1:700033242104:web:fa0dcef69da630c092bc0d"
};

// INICIALIZA
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// FORM
const form = document.getElementById("formulario");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const local = document.getElementById("local").value;

  await addDoc(collection(db, "respostas"), {
    email: email,
    local: local,
    data: new Date()
  });

  alert("Resposta enviada com sucesso!");
  form.reset();
});
