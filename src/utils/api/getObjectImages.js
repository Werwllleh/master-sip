import axios from "axios";


export const getObjectImages = async (id) => {
  return await axios.get(`/api/objects/${id}`).then(res => res.data.images)
}
