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
  try {
    const query = { Status: "Active" };

    const totalRestaurents = await Rest.countDocuments(query);

    if (totalRestaurents === 0) {
      return res.status(404).json({ message: "No Active Restaurants found" });
    }

    return res.status(200).json({
      totalRestaurents,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server Error" });
  }
};


export const inactiveRestaurents = async (req, res) => {
  try {
    const query = { Status: "Inactive" };

    const totalRestaurents = await Rest.countDocuments(query);

    if (totalRestaurents === 0) {
      return res.status(404).json({ message: "No Inactive Restaurants found" });
    }

    return res.status(200).json({
      totalRestaurents,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server Error" });
  }
};
