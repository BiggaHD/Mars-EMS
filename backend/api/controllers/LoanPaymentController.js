/**
 * LoanPaymentController
 *
 * @description :: Server-side logic for managing loanpayments
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  getByDate: (req, res) => {
    const params = req.allParams();

    LoanPayment.find().exec((err, response) => {
      if (err) {
        return res.serverError(err);
      }
      const data = response.filter(item => item.date.getMonth() == params.month && item.date.getFullYear() == params.year)
      return res.json(data);
    });
  }
};