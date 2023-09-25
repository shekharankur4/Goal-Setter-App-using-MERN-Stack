const asyncHandler = require('express-async-handler')

// @desc  GET Goals
// @route GET /api/goals
// @acess Private

const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({ mesaage: 'Get Goals' })
})

// @desc  POST Goals
// @route POST /api/goals
// @acess Private

const setGoal = asyncHandler(async (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }

    res.status(200).json({ message: 'Set Goal' })
})

// @desc  PUT Goals
// @route PUT  /api/goals/:id
// @acess Private

const updateGoal = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Update goal ${req.params.id}`})
})

// @desc  delete Goals
// @route DELETE /api/goals/:id
// @acess Private

const deleteGoal = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Delete goal ${req.params.id}`})
})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}