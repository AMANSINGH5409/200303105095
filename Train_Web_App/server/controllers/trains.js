import axios from "axios";

export const getAllTrain = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const AllTrains = await axios.get(
      "http://20.244.56.144/train/auth",
      config
    );

    res.send(AllTrains);
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
};
