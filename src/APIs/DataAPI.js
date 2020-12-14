import Axios from "axios";

const dataAPI = () => {
    return Axios.get("http://localhost:9000/data")
}
export default dataAPI;