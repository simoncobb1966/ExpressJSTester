export const getId = async (req, res) => {
  async function getData() {
    const url = "https://sequelizedvdsnew.simoncobb.co.uk/dvds";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const result = await response.json();
      return result;
    } catch (error) {
      console.error(error.message);
    }
  }

  res.type("json");
  const { id } = req.params;
  const response = await getData();
  if (!response && !response?.rows) {
    res.status(404).send({error: 'No DVDs found'})
  }
  const dvds = response.rows;
  const selectedDvd = dvds.find((dvd) => dvd.id === parseInt(id));
  if (!selectedDvd) {
    res.status(404).send({error: 'ID not valid found'})
  }

  res.send({ ...selectedDvd });
};
