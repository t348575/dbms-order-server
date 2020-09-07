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

Array.prototype.max = function(comparer) {

    if (this.length === 0) return null;
    if (this.length === 1) return this[0];

    comparer = (comparer || Math.max);

    var v = this[0];
    for (var i = 1; i < this.length; i++) {
        v = comparer(this[i], v);
    }

    return v;
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
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
    let flipkart = await csv().fromFile(path.join(__dirname, '/csv/flipkart_com-ecommerce_sample.csv'));
    let randoms = randomNumbers(5000),
        rand = randoms(),
        result = [];
    while(rand != null) {
        result.push(rand);
        rand = randoms();
    }
    const sub = 20000 - result.max();
    result = result.map(a => a + sub);
    let newFlipkart = [];
    for(const [idx, v] of flipkart.entries()) {
        delete flipkart[idx].uniq_id;
        delete flipkart[idx].crawl_timestamp;
        delete flipkart[idx].product_url;
        delete flipkart[idx].pid;
        delete flipkart[idx].discounted_price;
        delete flipkart[idx].is_FK_Advantage_product;
        delete flipkart[idx].product_category_tree;
        delete flipkart[idx].brand;
        delete flipkart[idx].overall_rating;
        try {
            flipkart[idx].product_specifications = flipkart[idx].product_specifications.replace(/=>/gi, ':');
            flipkart[idx].product_specifications = (JSON.parse(flipkart[idx].product_specifications)).product_specification;
            const newSpec = {};
            for (const v of flipkart[idx].product_specifications) {
                if (v.hasOwnProperty('key') && v.hasOwnProperty('value')) {
                    newSpec[v.key] = v.value;
                }
            }
            flipkart[idx].product_specifications = newSpec;
        } catch (e) {
            flipkart[idx].product_specifications = [];
        }
        try {
            const arr = JSON.parse(flipkart[idx].image);
            let link = arr[0];
            for (const v of arr) {
                if (v.indexOf('/g/') === -1) {
                    link = v;
                    break;
                }
            }
            flipkart[idx].image = link;
        } catch (e) {
            flipkart[idx].image = '';
        }
        newFlipkart.push({
            prod_id: crypto.randomBytes(32).toString('hex'),
            prod_name: flipkart[idx].product_name,
            prod_desc: flipkart[idx].description,
            prod_img: flipkart[idx].image,
            prod_rating: (flipkart[idx].product_rating === 'No rating available' ? -1 : flipkart[idx].product_rating),
            prod_price: parseInt(flipkart[idx].retail_price, 10),
            prod_feat: JSON.stringify(flipkart[idx].product_specifications),
            prod_dim: (result.indexOf(idx) > -1 ? getRandomInt(1, 100) : JSON.stringify({ x: getRandomInt(1, 1000), y: getRandomInt(1, 1000), z: getRandomInt(1, 1000), w: getRandomInt(1, 100) })),
            prod_type: (result.indexOf(idx) > -1 ? 1 : 0),
            prod_stock: getRandomInt(0, 1000)
        });
    }
    const fields = ['prod_id', 'prod_name', 'prod_desc', 'prod_img', 'prod_feat', 'prod_dim', 'prod_type', 'prod_price', 'prod_stock', 'prod_rating'];
    const opts = { fields };
    const parser = new Parser(opts);
    const csv2 = parser.parse(newFlipkart);
    fs.writeFileSync(path.join(__dirname, '/csv/parsed_flipkart.csv'), csv2);
})();
