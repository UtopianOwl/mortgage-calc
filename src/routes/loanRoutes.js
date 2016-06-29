var express = require("express");
var loanRouter = express.Router();
var Loan = require("../models/loan");

loanRouter.route("/")
    .get(function (req, res) {
        Loan.find({user: req.user._id}, function(err, loans) {
            if (err) res.status(500).send(err);
            else res.send(loans);
        })
    })
    .post(function (req, res) {
        var newLoan = new Loan(req.body);
        newLoan.user = req.user._id;
    
        newLoan.save(function(err, loan) {
            if (err) res.status(500).send(err);
            else res.status(201).send(loan);
        });
    });

loanRouter.route("/:loanId")
    .get(function (req, res) {
        Loan.findOne({_id: req.params.loanId, user: req.user._id}, function (err, loan) {
            if (err) res.status(500).send(err);
            else res.send(loan);
        });
    })
    .put(function (req, res) {
        Loan.findOneAndUpdate({_id: req.params.loanId, user: req.user._id}, req.body, {new:true}, function (err, loan) {
            if (err) res.status(500).send(err);
            else res.send(loan);
        });
    })
    .delete(function (req, res) {
        Loan.findOneAndRemove({_id: req.params.loanId, user: req.user._id}, function(err, loan) {
            if (err) res.status(500).send(err);
            else res.send(loan);
        });
    });

module.exports = loanRouter;