const path = require('path');
const fs = require('fs');

const consoles = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/consoles.json"), "utf-8"));
const accesories = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/peripheralsAccesories.json"), "utf-8"));
const smartPhones = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/smartPhones.json"), "utf-8"));
const laptopsGamers = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/laptopsGamers.json"), "utf-8"));
const hardware = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/hardware.json"), "utf-8"));


const productDetailController ={
    productDetail: (req, res) => {
        res.render("productDetail", {consoles});
    },
    productId: (req, res) => {
        let productId = consoles.find(item => item.nombre === req.params.nombre);
        return res.render("productDetail", {
            productId
        })
    }
};

module.exports = productDetailController;