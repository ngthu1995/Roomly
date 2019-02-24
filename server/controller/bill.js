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
        description,
        city,
        street,
        image,
        createdAt,
        userName
    } = req.body;
    try {
        const manage = new Bill({
            userName,
            createdAt,
            description,
            city,
            street,
            image
        });
        const result = await manage.save();
        return res.status(201).json(result)
    } catch (e) {
        return res.status(500).json({ message: 'Please fill out the required fields', error: e });

    }
}
exports.getId = (req, res) => {
    const postId = req.params.id;
    Bill.findById(postId)
        .exec((err, foundPost) => {
            if (err) {
                res.status(422).send({
                    err: [{ title: "Post Error!", detail: "Couldn't find that post" }]
                })
            }
            return res.json(foundPost)
        })
}



