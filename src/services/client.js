import axios from 'axios'

const url = import.meta.env.VITE_BACKEND_URL

const client = axios.create({
  baseURL: url,
})

export default client