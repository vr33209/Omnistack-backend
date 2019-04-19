const Box = require("../models/Box");
const aqp = require("api-query-params");

class BoxController {
  async store(req, res) {
    const box = await Box.create(req.body);

    return res.json(box);
  }
  async showAllBox(req, res) {
    const query = aqp(req.query);
    const box = await Box.find(query.filter)
      .select(query.projection)
      .sort(query.sort)
      .limit(query.limit);

    return res.json(box);
  }
  async show(req, res) {
    const box = await Box.findById(req.params.id).populate("files");
    return res.json(box);
  }

  async list(req, res) {
    const box = await Box.find();
    const boxes = box.map(item => {
      const { _id, title, files } = item;
      return { _id, title, quantityFiles: files.length };
    });
    return res.json(boxes);
  }
}
module.exports = new BoxController();
