
function Load(req, res, isContent) { return new Promise((resolve, reject) => {
  let post = req.body
  res.setData('HelloWorld', 'Hello World!')
  resolve()
})}

module.exports = {
  Load,
}
