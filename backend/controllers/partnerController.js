import Partner from "../models/partnerSchema";

exports.createPartner = async(req, res) => {
    if(!req.body) {
        res.status(400).send({message: "Content should not be empty!"});
        return;
    }

    try{
        const partner = await Partner.create(req.body);
        res.status(200).json(partner);
      } catch (error) {
        res.status(500).json({message: error.message});
      }
}

exports.getAllPartners = async(req, res) => {
    try {
        const partners = await Partner.find({});
        res.send(partners);
      } catch (error) {
        res.status(500).send(error);
      }
}

exports.getPartner = async(req, res) => {
    try {
        const partners = await Partner.find({});
        res.send(partners);
      } catch (error) {
        res.status(500).send(error);
      }
}

exports.updatePartner = async(req, res) => {
    const {id} = req.params;
  await Partner.updateOne({_id: id}, req.body);
  const updatedPartner = await Partner.findById(id);
  return res.status(200).json(updatedPartner);
}

exports.deletePartner = async(req, res) => {
    const {id} = req.params;
    const deletedPartner = await Partner.findByIdAndDelete(id);
    return res.status(200).json(deletedPartner);
}