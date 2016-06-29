var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var loanSchema = new Schema({
    value: {
        type: String,
        required: true
    },
    amount: {
        type: String,
        required: true
    },
    term: {
        type: String,
        required: true
    },
    rate: {
        type: String,
        required: true
    },
    repayFreq: {
        type: String,
        required: true
    },
    repayType: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
});

module.exports = mongoose.model("Loan", loanSchema);