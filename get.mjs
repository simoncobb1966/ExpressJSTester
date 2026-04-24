export const get = (req, res) => {
  res.type("json");
  const { color1, color2 } = req.query;
  res.send({
    color1: color1,
    color2: color2,
  });
};

