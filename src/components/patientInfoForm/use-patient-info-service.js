import { addDoc, collection } from "firebase/firestore";
import { useContext, useState } from "react";
import { db } from "../../firebase/firebaseConfig.js";
import { AuthContext } from "../../context/authContext/auth.jsx";

const usePatientInfoForm = () => {
  const { authUser } = useContext(AuthContext);
  const [patientInfo, setPatientInfo] = useState({
    name: "",
    email: "",
    phone: "",
    dateOfBith: "",
  });
  const addPatientInfo = async () => {
    try {
      const docRef = await addDoc(collection(db, "patientInfos"), {
        owner: authUser,
      });
    } catch (error) {
      console.error(error);
    }
  };
  return {
    addPatientInfo,
  };
};
export default usePatientInfoForm;
