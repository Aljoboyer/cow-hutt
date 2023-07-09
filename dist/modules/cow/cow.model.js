"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cow = exports.CowSchema = void 0;
const mongoose_1 = __importStar(require("mongoose"));
exports.CowSchema = new mongoose_1.Schema({
    name: {
        type: String
    },
    age: {
        type: Number
    },
    price: {
        type: Number
    },
    location: {
        type: String,
        enum: [
            "Dhaka",
            "Chattogram",
            "Barishal",
            "Rajshahi",
            "Sylhet",
            "Comilla",
            "Rangpur",
            "Mymensingh"
        ]
    },
    breed: {
        type: String
    },
    weight: {
        type: Number
    },
    label: {
        type: String,
        enum: ["for sale", "sold out"],
        default: 'for sale'
    },
    category: {
        type: String,
        enum: ["Dairy", "Beef", "Dual Purpose"],
        // default: 'for sale'
    },
    seller: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
});
exports.Cow = mongoose_1.default.model("Cow", exports.CowSchema);
//# sourceMappingURL=cow.model.js.map