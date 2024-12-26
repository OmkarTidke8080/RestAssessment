import Rest from "../model/restModel.js";

export const totalRestaurentRegistered = async (req, res) => {
  const totalRestaurents = await Rest.countDocuments();

  if (totalRestaurents === 0) {
    return res.status(404).json({ message: "No Restaurents found" });
  }

  return res.status(200).json({
    totalRestaurents,
  });
};
export const activeRestaurents = async (req, res) => {
    const query = { active: true };

  const totalRestaurents = await Rest.countDocuments(query);


  if (totalRestaurents === 0) {
    return res.status(404).json({ message: "No Restaurents found" });
  }

  return res.status(200).json({
    totalRestaurents,
  });
};


export const inactiveRestaurents = async (req, res) => {
        const query = { active: false };

  const totalRestaurents = await Rest.countDocuments(query);

  if (totalRestaurents === 0) {
    return res.status(404).json({ message: "No Restaurents found" });
  }

  return res.status(200).json({
    totalRestaurents,
  });
};
