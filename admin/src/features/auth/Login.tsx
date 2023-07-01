import { useDispatch } from "react-redux";

//
import VpnKeyOutlinedIcon from "@mui/icons-material/VpnKeyOutlined";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, FormikProps, ErrorMessage } from "formik";
import * as Yup from "yup";
import { LineWave } from "react-loader-spinner";

//
import { setCredentials } from "./authpiSlice";
import { useLoginMutation } from "./apiSliceAuth";
//interface
interface FormValues {
  username: string;
  email: string;
  password: string;
}

interface OtherProps {
  message: string;
}
//component
const Login = () => {
  //useDispatch
  const dispatch = useDispatch();
  // useNavigate
  const navigate = useNavigate();
  //api
  const [addLogin, { isLoading,error,data,isError }] = useLoginMutation();
  //validate
  const validateSchema = Yup.object().shape({
    username: Yup.string().max(50, "کاراکتر بیش از حد مجاز").required("نمیتواند خالی باشد"),
    email: Yup.string().email("ایمیل اشتباه است").max(255).required("نمیتواند خالی باشد"),
    password: Yup.string().max(12, "کاراکتر بیش از حد مجاز").required("نمیتواند خالی باشد"),
  });
  //initialValues
  const initialValues: FormValues = {
    username: "",
    email: "",
    password: "",
  };
const erMg:any | null=error?error:null
  return (
    <div className="container__login">
      <div className="wrapper__login">
        {isError && erMg?.data?(<div className="text-sm text-meta-1 text-center py-2">{erMg.data.data?erMg.data.data.map((val:any)=>(<span>{val.msg}</span>)):erMg?.data?.message}</div>):null}
        <div className="header__form__login">
          <span>
            <VpnKeyOutlinedIcon />
          </span>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validateSchema}
          onSubmit={async (values, actions) => {
            const data = await addLogin({
              username: values.username,
              email: values.email,
              password: values.password,
            });
            dispatch(setCredentials(data));
            navigate("/");
          }}
        >
          {(props: FormikProps<FormValues>) => (
            <Form className="form__login">
              <div
                className={`items__form__login ${props.errors.username && "error__message__login"}`}
              >
                <ErrorMessage name="username" />
                <Field name="username" label="نام کاربری" type="text" />
              </div>
              <div
                className={`items__form__login ${props.errors.email && "error__message__login"}`}
              >
                <ErrorMessage name="email" />
                <Field name="email" label="ایمیل" type="email" />
              </div>
              <div
                className={`items__form__login ${props.errors.password && "error__message__login"}`}
              >
                <ErrorMessage name="password" />
                <Field name="password" label="رمز ورود" type="password" />
              </div>

              <div className="items__form__submit__login">
                {isLoading?<Spinner /> :
                <button type="submit" disabled={props.isSubmitting}>
                ورود
              </button>
                }
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

const Spinner = () => {
  return (
    <LineWave
      height="100"
      width="100"
      color="#4fa94d"
      ariaLabel="line-wave"
      wrapperStyle={{}}
      wrapperClass="spinner"
      visible={true}
      firstLineColor=""
      middleLineColor=""
      lastLineColor=""
    />
  );
};

export default Login;
