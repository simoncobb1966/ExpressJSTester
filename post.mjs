export const post = (req, res) => {
    res.type('json');
    const {name, age} = req.body;
res.send({
    firstName: name,
    ageAtLastBirthday: age
})
}
