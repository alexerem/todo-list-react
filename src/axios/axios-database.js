import axios from "axios";

export default axios.create({
	baseURL: 'https://todo-list-alexerem-default-rtdb.europe-west1.firebasedatabase.app/'
})