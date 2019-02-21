const Bill = require("../models/bill");
exports.get = async (req, res, next) => {
    // // down here is to fetch all users
    try {
        const bills = await Bill.find();
        // return res.status(200).json({
        //   bill,
        //   maxUsers: users.length,
        //   message: "Users fetched successfully"
        // });
        // return res.status(200);
        return res.status(200).json(bills);
    } catch (e) {
        return res.status(500).json({ message: e.message || "Unexpected error" });
    }
};

exports.create = async (req, res, next) => {
    const {
        title,
        date,
        description,
        time,
        address,
        image
    } = req.body;
    try {
        const manage = new Bill({
            title,
            date,
            description,
            time,
            address,
            image
        });
        const result = await manage.save();
        return res.status(201).json(result)
    } catch (e) {
        return res.status(500).json({ message: 'Unexpected Error occurred', error: e });

    }

};

