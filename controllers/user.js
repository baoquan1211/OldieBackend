import User from "../models/User.js";

import Product from "../models/Product.js";

import Comment from "../models/Comment.js";
import Cart from "../models/Cart.js";
import Order from "../models/Order.js";
import cloudinary from "../components/uploadImage.cjs";

/** Post product */
export const postProduct = async (req, res) => {
  try {
    let _idUser = req.params.id;
    const imageUrls = [];
    const files = req.files;
    for (let i = 0; i < files.length; i++) {
      const result = await cloudinary.uploader.upload(files[i].path, {
        folder: "Oldie",
      });
      imageUrls.push(result.secure_url);
    }

    const newProduct = new Product({
      _idUser,
      TenSp: req.body.TenSp,
      LoaiSp: req.body.LoaiSp,
      HangSanXuat: req.body.HangSanXuat,
      SoLuong: req.body.SoLuong,
      TinhTrang: req.body.TinhTrang,
      MoTa: req.body.MoTa,
      Gia: req.body.Gia,
      HinhAnh: imageUrls,
      DiaChi: req.body.DiaChi,
    });

    newProduct.save();
    res.json(newProduct);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
/* Get products */
export const getProduct = async (req, res) => {
  try {
    const _idUser = req.params.id;
    const products = await Product.find({ _idUser });

    res.status(200).json(products);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

/*  Post comment */
export const cmtProduct = async (req, res) => {
  try {
    let _idUser = req.params.id;
    let _idP = req.params.idP;
    const newCmt = new Comment({
      _idUser: _idUser,
      _idSp: _idP,
      Diem: req.body.Diem,
      Cmt: req.body.Cmt,
    });
    const savedCmt = await newCmt.save();
    res.status(201).json(savedCmt);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
/** Get cart */
export const getCart = async (req, res) => {
  try {
    let _idUser = req.params.id;
    const cart = await Cart.findOne({ _idUser });
    const items = cart.cartItem;
    const productPromises = items.map((item) =>
      Product.findOne({ _id: item._idSp })
    );
    const products = await Promise.all(productPromises);
    res.status(200).json({ cart, products });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

/** update remove product */
export const removeProduct = async (req, res) => {
  try {
    let _idUser = req.params.id;
    let _idP = req.params.idP;

    const product = await Product.findOneAndRemove({ _id: _idP });
    if (product) {
      res.status(200).json({ message: "Delete Complete" });
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

/** update user */

export const updateUser = async (req, res) => {
  try {
    let _id = req.params.id;
    if (req.files.length > 0) {
      const imageUrl = await cloudinary.uploader.upload(req.files[0].path, {
        folder: "Oldie",
      });
      User.findOneAndUpdate(
        { _id: _id },
        {
          $set: {
            hoten: req.body.hoten,
            hinhanh: imageUrl.secure_url,
            SDT: req.body.SDT,
            diachi: req.body.diachi,
            email: req.body.email,
            gioitinh: req.body.gioitinh,
          },
        }
      ).then((updatedUser) => {
        if (updatedUser) {
          res.status(200).json({ message: "Updated Successfully" });
        } else {
          res.status(400).json({ message: "Invalid User" });
        }
      });
    } else {
      User.findOneAndUpdate(
        { _id: _id },
        {
          $set: {
            hoten: req.body.hoten,
            SDT: req.body.SDT,
            diachi: req.body.diachi,
            email: req.body.email,
            gioitinh: req.body.gioitinh,
          },
        }
      ).then((updatedUser) => {
        if (updatedUser) {
          res.status(200).json({ message: "Updated Successfully" });
        } else {
          res.status(400).json({ message: "Invalid User" });
        }
      });
    }
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

/*Get Order */

export const getOrder = async (req, res) => {
  try {
    let _idUser = req.params.id;
    const orders = await Order.find({ _idUser });
    res.status(200).json(orders);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

/* Get User */

export const getUser = async (req, res) => {
  try {
    let _id = req.params.id;
    let _userInf = await User.findOne({ _id });
    let _userProduct = await Product.find({ _idUser: _id });
    _userInf.username = undefined;
    _userInf.password = undefined;
    res.status(200).json({ _userInf, _userProduct });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
