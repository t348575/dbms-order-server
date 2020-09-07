const fs = require('fs');
const path = require('path');
const csv = require('csvtojson');
const crypto = require('crypto');
const { Parser } = require('json2csv');
function randomNumbers(max) {
    function range(upTo) {
        var result = [];
        for(var i = 0; i < upTo; i++) result.push(i);
        return result;
    }
    function shuffle(o){
        for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    }
    var myArr = shuffle(range(max));
    return function() {
        return myArr.shift();
    };
}
(async() => {
    /*let randoms = randomNumbers(1000),
    rand = randoms(),
    result = [];
    while(rand != null) {
        result.push(rand);
        rand = randoms();
    }
    randoms = randomNumbers(1000),
    rand = randoms(),
    feat = [];
    while(rand != null) {
        feat.push(rand);
        rand = randoms();
    }
    const prod_all = await csv().fromFile(path.join(__dirname, '/csv/prod_all.csv'));
    const prod_dim_axis = await csv().fromFile(path.join(__dirname, '/csv/prod_dim_axis.csv'));
    const prod_dim_mass = await csv().fromFile(path.join(__dirname, '/csv/prod_dim_mass.csv'));
    const prod_feat_2 = await csv().fromFile(path.join(__dirname, '/csv/prod_feat_2.csv'));
    const prod_feat_4 = await csv().fromFile(path.join(__dirname, '/csv/prod_feat_4.csv'));
    const prod_feat_7 = await csv().fromFile(path.join(__dirname, '/csv/prod_feat_7.csv'));
    const prod_img = await csv().fromFile(path.join(__dirname, '/csv/prod_img.csv'));
    for (const [idx, v] of prod_dim_axis.entries()) {
        prod_all[result[idx]].prod_dim = {
            x: v.prod_dim.x,
            y: v.prod_dim.y,
            z: v.prod_dim.z,
            m: v.prod_dim.m,
        }
        prod_all[result[idx]].prod_type = 1;
    }
    for (const [idx, v] of prod_dim_mass.entries()) {
        prod_all[result[idx + 500]].prod_dim = {
            m: v.prod_dim,
        }
        prod_all[result[idx + 500]].prod_type = 0;
    }
    for (const [idx, v] of prod_feat_2.entries()) {
        prod_all[feat[idx]].prod_feat = v.prod_feat;
    }
    for (const [idx, v] of prod_feat_4.entries()) {
        prod_all[feat[idx + 256]].prod_feat = v.prod_feat;
    }
    for (const [idx, v] of prod_feat_7.entries()) {
        prod_all[feat[idx + 768]].prod_feat = v.prod_feat;
    }
    for (const [idx, v] of prod_img.entries()) {
        prod_all[idx].prod_img = v.prod_img;
    }
    for (const [idx, v] of prod_all.entries()) {
        prod_all[idx].prod_id = crypto.randomBytes(32).toString('hex');
    }
    const fields = ['prod_id', 'prod_name', 'prod_desc', 'prod_img', 'prod_feat', 'prod_dim', 'prod_type', 'prod_price', 'prod_stock'];
    const opts = { fields };
    const parser = new Parser(opts);
    const csv2 = parser.parse(prod_all);
    fs.writeFileSync(path.join(__dirname, '/csv/total.csv'), csv2);*/
    const flipkart = await csv().fromFile(path.join(__dirname, '/csv/flipkart_com-ecommerce_sample.csv'));
    console.log(flipkart.length);
})();
