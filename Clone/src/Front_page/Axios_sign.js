import axios from 'axios'
const For_Register = axios.create({
    baseURL: "https://nelflix-clone-default-rtdb.firebaseio.com/"
}
);
export default For_Register;