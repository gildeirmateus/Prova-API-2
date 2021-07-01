var Bill = []
const remove = (req, res) => {
    var id = `${req.params.id}`;
    let Isvalid = false;
    for (let i = 0; i < Bill.length; i++) {
        if (id == Bill[i].id) {
            Bill.splice(i, 1);
            Isvalid = true;
        }
    }

    if (!Isvalid) res.json({ message: "not found" }, 404)
    else res.json({}, 200)
}
const  listAll = (req, res) => {
    var customer = req.query.customer
    var returnDb = [];
    for (let i = 0; i < Bill.length; i++) {
        if (customer == Bill[i].customer) {
            returnDb.push(Bill[i])
        }
    }
    if (returnDb == "") res.json({ message: "not found" }, 401)
    else res.json({result: returnDb}, 200)
}
const create = (req, res) => {
    var body = req.body;
    if (body.amount) res.status(405)
    if (body.product) res.status(405)
    if (body.paymentMethod) res.status(405)
    if (body.customer) res.status(405)
    var data = {
        'id': Math.random().toString(20).substr(2, 9),
        'amount': body.amount,
        'product': body.product,
        'paymentMethod': body.paymentMethod,
        'customer': body.customer,
    }
    Bill.push(data)
    res.json({ message: "Add with success", bill: data }, 200)
}

module.exports = {
    listAll,
    create,
    remove,
}