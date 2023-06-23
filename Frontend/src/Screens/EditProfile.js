import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./EditProfile.module.css";
import classes from "./EditProfile.module.css";
import DrSideBar from "../DoctorComponents/DrSideBar/DrSideBar";
import { useFormik } from "formik";
import * as yup from "yup";
import Input from "../components/NavigationBar/Navbar/Input";
import { updateUserProfile, getUserDetails } from "../actions/userActions";

function EditProfile() {
  const location = useLocation();
  const redirect = location.search ? location.search.split("=")[1] : "/";

  const disaptch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const { success } = userUpdateProfile;

  const history = useNavigate();

  const [showMessage, setShowMessage] = useState(false);
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [dob, setDob] = useState("");

  const regex_name = /^[a-zA-Z ]*$/;
  const formik = useFormik({
    initialValues: {
      firstName: userInfo.firstName,
      lastName: userInfo.lastName,
      email: userInfo.email,
      mobilenumber: userInfo.mobilenumber,
      gender: userInfo.gender
    },
    validationSchema: yup.object({
      firstName: yup
        .string()
        .required("First Name can't be blank")
        .matches(regex_name, "First name should only contain alphabets")
        .min(2, "First name should be at least 2 characters long")
        .max(13, "First name should not be longer than 13 characters"),
      lastName: yup
        .string()
        .required("Last Name can't be blank")
        .matches(regex_name, "Last name should only contain alphabets")
        .min(2, "Last name should be at least 2 characters long")
        .max(13, "Last name should not be longer than 13 characters"),
      email: yup
        .string()
        .email("Invalid Email")
        .required("Email can't be blank"),
      mobilenumber: yup.string().required("Mobile Number can't be blank"),
    }),
    onSubmit: (values) => {
      disaptch(
        updateUserProfile({
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          mobilenumber: values.mobilenumber,
          gender: values.gender
        })
      )
        .then(() => {
          setShowMessage(true);
        })
        .catch(() => {
          setShowMessage(false);
        });
    },
  });
  useEffect(() => {
    if (!userInfo) {
      history("/login");
      formik.setValues({
        firstName: userInfo.firstName,
        lastName: userInfo.lastName,
        email: userInfo.email,
        mobilenumber: userInfo.mobilenumber,
        gender: userInfo.gender
      });
    }
  }, [history, userInfo, user]);
  return (
    <div>
      <DrSideBar />
      <div className={classes.container}>
        <div className={classes.title}>
          <h2>Manage Profile</h2>
        </div>
        <div className={classes.form}>
          <form onSubmit={formik.handleSubmit}>
            <div className={classes[`double-row`]}>
              <Input
                label="First Name"
                input={{
                  id: "firstName",
                  type: "text",
                }}
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.errors.firstName ? (
              <div className={classes.error}>{formik.errors.firstName}</div>
            ) : null}
            <div className={classes[`double-row`]}>
              <Input
                label="Last Name"
                input={{
                  id: "lastName",
                  type: "text",
                }}
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.errors.lastName ? (
              <div className={classes.error}>{formik.errors.lastName}</div>
            ) : null}
            <div className={classes[`double-row`]}>
              <Input
                label="Email"
                input={{
                  id: "email",
                  type: "email",
                }}
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.errors.email ? (
              <div className={classes.error}>{formik.errors.email}</div>
            ) : null}
            <div className={classes[`double-row`]}>
              <Input
                label="Mobile Number"
                input={{
                  id: "mobilenumber",
                  type: "number",
                }}
                value={formik.values.mobilenumber}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.errors.mobilenumber ? (
              <div className={classes.error}>{formik.errors.mobilenumber}</div>
            ) : null}
            <div className={classes[`select-div`]}>
              <label className={classes.label}>Gender</label>
              <select
                id="gender"
                value={formik.values.gender}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <button className={classes.button} type="submit">
              Save
            </button>
            {showMessage && success && (
              <div className={classes[`success-message`]}>
                Your Changes have been saved successfully
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
export default EditProfile;
