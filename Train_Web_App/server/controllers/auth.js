import axios from "axios";

export const auth = async (req, res) => {
  const resData = await axios.post("http://20.244.56.144/train/auth", req.body);
  console.log(resData.data);
  res.status(200).send(resData.data);
};
