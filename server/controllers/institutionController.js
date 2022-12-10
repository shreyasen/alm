import Institution from "../models/institution.js";

export const searchInstitution = async (req, res) => {
  const { institutionName } = req.query;
  try {
    const searchedInstitution = await Institution.find(
      { institution_name: { $regex: institutionName, $options: "i" } },
      { _id: 0 }
    )
    if (searchedInstitution.length) {
      res.status(200).send(searchedInstitution);
    } else {
      res.status(404).send({ message: "No institution found!" });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};
