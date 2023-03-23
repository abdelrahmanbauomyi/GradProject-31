const multer = require('multer');
const { DATE } = require('sequelize');

const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './imgs');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '--' + file.originalname);
  },
});
const fileFilter = (req, file, cb) => {
  if (
    file.mimetype == 'image/png' ||
    file.mimetype == 'image/jpeg' ||
    file.mimetype == 'image/jpg'
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

exports.upload = multer({
  storage: fileStorageEngine,
  fileFilter: fileFilter,
});
