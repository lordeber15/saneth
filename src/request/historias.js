import axios from "axios";

const historia = axios.create({
  baseURL: "http://localhost:3000/",
   /*baseURL: "https://qoriapp-backend.onrender.com/",*/
});
export const getHistoria = async () => {
  const res = await historia.get("/historia");
  return res.data;
};
export const createHistoria = (historia) => {
  return historia.post("/historia", historia);
};

export const updateHistoria = (historia) => {
  const historiaCopy = { ...historia };
  delete historiaCopy.id;
  return historia.put(`/historia/${historia.id}`, historiaCopy);
};

export const deleteHistoria = (id) => {
  return historia.delete(`/historia/${id}`);
};
