/*
 * A Promised NodeJS Module for connecting with the Qredit QSLP API
 */

const request = require("request");

var sslpApi = /** @class */ (function() {

    function sslpApi(apiURL) {
        if (apiURL === void 0)
            this.apiURL = 'https://sslp.delegate-nft.com/api';
        else
            this.apiURL = apiURL;

        return this;
    };

    sslpApi.prototype.getApiUrl = function() {

        return this.apiURL;

    };

    /* Status */

    sslpApi.prototype.getStatus = function() {

        return new Promise((resolve, reject) => {

            request.get(this.apiURL + '/status', { json: true }, function(error, response, body) {

                if (error) {
                    reject(error);
                    return;
                }
                resolve(body);

            });

        });

    };

    sslpApi.prototype.getPeerInfo = function() {

        return new Promise((resolve, reject) => {

            request.get(this.apiURL + '/peerinfo', { json: true }, function(error, response, body) {

                if (error) {
                    reject(error);
                    return;
                }
                resolve(body);

            });

        });

    };

    /* Tokens */

    sslpApi.prototype.listTokens = function(limit = 100, page = 1) {

        var querystring = "";

        if (page !== undefined) querystring += 'page=' + page + "&";
        if (limit !== undefined) querystring += 'limit=' + limit + "&";

        return new Promise((resolve, reject) => {

            request.get(this.apiURL + '/tokens?' + querystring, { json: true }, function(error, response, body) {

                if (error) {
                    reject(error);
                    return;
                }
                resolve(body);

            });

        });

    };

    sslpApi.prototype.getToken = function(tokenid) {

        return new Promise((resolve, reject) => {

            request.get(this.apiURL + '/token/' + tokenid, { json: true }, function(error, response, body) {

                if (error) {
                    reject(error);
                    return;
                }
                resolve(body);

            });

        });

    };


    sslpApi.prototype.getTokenWithMeta = function(tokenid) {

        return new Promise((resolve, reject) => {

            request.get(this.apiURL + '/tokenWithMeta/' + tokenid, { json: true }, function(error, response, body) {

                if (error) {
                    reject(error);
                    return;
                }
                resolve(body);

            });

        });

    };

    sslpApi.prototype.getTokenIdByTxid = function(transactionid) {

        return new Promise((resolve, reject) => {

            request.get(this.apiURL + '/transaction/' + transactionid, { json: true }, function(error, response, body) {

                if (error) {
                    reject(error);
                    return;
                }

                if (body && body[0] && body[0].transactionDetails.tokenIdHex) {

                    var tokenid = body[0].transactionDetails.tokenIdHex;
                    resolve({ tokenId: tokenid });


                } else if (body && body[0] && body[0].invalidReason) {

                    resolve({ error: body[0].invalidReason });

                } else {
                    resolve({});
                }

            });

        });

    };

    sslpApi.prototype.getTokensByOwner = function(address = '', limit = 100, page = 1) {

        var querystring = "";

        if (page !== undefined) querystring += 'page=' + page + "&";
        if (limit !== undefined) querystring += 'limit=' + limit + "&";

        return new Promise((resolve, reject) => {

            request.get(this.apiURL + '/tokensByOwner/' + address + '?' + querystring, { json: true }, function(error, response, body) {

                if (error) {
                    reject(error);
                    return;
                }
                resolve(body);

            });

        });

    };

    /* Addresses */

    sslpApi.prototype.listAddresses = function(limit = 100, page = 1) {

        var querystring = "";

        if (page !== undefined) querystring += 'page=' + page + "&";
        if (limit !== undefined) querystring += 'limit=' + limit + "&";

        return new Promise((resolve, reject) => {

            request.get(this.apiURL + '/addresses?' + querystring, { json: true }, function(error, response, body) {

                if (error) {
                    reject(error);
                    return;
                }
                resolve(body);

            });

        });

    };

    sslpApi.prototype.getAddress = function(address) {

        return new Promise((resolve, reject) => {

            request.get(this.apiURL + '/address/' + address, { json: true }, function(error, response, body) {

                if (error) {
                    reject(error);
                    return;
                }
                resolve(body);

            });

        });

    };

    sslpApi.prototype.getAddressesByTokenId = function(tokenid = '', limit = 100, page = 1) {

        var querystring = "";

        if (page !== undefined) querystring += 'page=' + page + "&";
        if (limit !== undefined) querystring += 'limit=' + limit + "&";

        return new Promise((resolve, reject) => {

            request.get(this.apiURL + '/addressesByTokenId/' + tokenid + '?' + querystring, { json: true }, function(error, response, body) {

                if (error) {
                    reject(error);
                    return;
                }
                resolve(body);

            });

        });

    };

    /* Balance */

    sslpApi.prototype.getBalance = function(tokenid = '', address = '') {

        return new Promise((resolve, reject) => {

            request.get(this.apiURL + '/balance/' + tokenid + '/' + address, { json: true }, function(error, response, body) {

                if (error) {
                    reject(error);
                    return;
                }
                resolve(body);

            });

        });

    };

    /* Transactions */

    sslpApi.prototype.listTransactions = function(limit = 100, page = 1) {

        var querystring = "";

        if (page !== undefined) querystring += 'page=' + page + "&";
        if (limit !== undefined) querystring += 'limit=' + limit + "&";

        return new Promise((resolve, reject) => {

            request.get(this.apiURL + '/transactions?' + querystring, { json: true }, function(error, response, body) {

                if (error) {
                    reject(error);
                    return;
                }
                resolve(body);

            });

        });

    };

    sslpApi.prototype.getTransaction = function(transactionid = '') {

        return new Promise((resolve, reject) => {

            request.get(this.apiURL + '/transaction/' + transactionid, { json: true }, function(error, response, body) {

                if (error) {
                    reject(error);
                    return;
                }
                resolve(body);

            });

        });

    };

    sslpApi.prototype.listTokenTransactions = function(tokenid = '', limit = 100, page = 1) {

        var querystring = "";

        if (page !== undefined) querystring += 'page=' + page + "&";
        if (limit !== undefined) querystring += 'limit=' + limit + "&";

        return new Promise((resolve, reject) => {

            request.get(this.apiURL + '/transactions/' + tokenid + '?' + querystring, { json: true }, function(error, response, body) {

                if (error) {
                    reject(error);
                    return;
                }
                resolve(body);

            });

        });

    };

    sslpApi.prototype.listTokenAddressTransactions = function(tokenid = '', address = '', limit = 100, page = 1) {

        var querystring = "";

        if (page !== undefined) querystring += 'page=' + page + "&";
        if (limit !== undefined) querystring += 'limit=' + limit + "&";

        return new Promise((resolve, reject) => {

            request.get(this.apiURL + '/transactions/' + tokenid + '/' + address + '?' + querystring, { json: true }, function(error, response, body) {

                if (error) {
                    reject(error);
                    return;
                }
                resolve(body);

            });

        });

    };

    return sslpApi;

}());

exports.default = sslpApi;