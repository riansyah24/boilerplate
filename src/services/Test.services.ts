import axios from "axios"

const api = axios.create({
  baseURL : import.meta.env.ENDPOINT
})

const test = {
  getData() {
    return api.get("/")
  }
}

export default test