export const postFunc = (req, res) => {
    res.type('json');
    const {name, age} = req.body;
res.send({
    firstName: name,
    ageAtLastBirthday: age
})
}
