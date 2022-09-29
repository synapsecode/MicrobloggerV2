"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var app = (0, express_1["default"])();
var port = 3000;
app.get('/', function (req, res) {
    res.send('MicrobloggerV2');
});
app.listen(port, function () {
    console.log("MicrobloggerV2 server running on port ".concat(port, " \u26A1\uFE0F"));
});
//# sourceMappingURL=index.js.map