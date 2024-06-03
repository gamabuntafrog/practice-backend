const getCurrent = async (req, res) => {
  res.status(200).json({
    status: 'success',
    code: 200,
    data: {
      user: req.currentUser
    }
  })
}

module.exports = getCurrent
