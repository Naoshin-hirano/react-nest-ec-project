import React from "react";
import { history } from "../../../../route/history";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./index.scss";
import * as Usecase from "../../../../core/usecase/register";

export interface SUBMIT_USER {
    username: string;
    password: string;
}

export const Register: React.FC<any> = () => {
    const initialValues = {
        username: "",
        // email: "",
        password: "",
    };

    const validationSchema = Yup.object().shape({
        username: Yup.string()
            .min(3)
            .max(15)
            .required("ユーザー名を入力してください"),
        // email: Yup.string()
        //     .email("無効なメールアドレスです")
        //     .required("emailを入力してください"),
        password: Yup.string()
            .min(4)
            .max(20)
            .required("パスワードを入力してください"),
    });

    const registerUser = async (data: SUBMIT_USER) => {
        const result = await Usecase.registerUserAccount(data);
        console.log(result.data);
        history.push("/login");
    };
    return (
        <div className="base-container">
            <div className="header">新規アカウント登録</div>
            <a href="/login">ログイン画面へ</a>
            <Formik
                initialValues={initialValues}
                onSubmit={registerUser}
                validationSchema={validationSchema}
            >
                <Form>
                    <div className="content">
                        <div className="form">
                            <div className="form-group">
                                <label htmlFor="username">ユーザー名</label>
                                <ErrorMessage
                                    name="username"
                                    component="span"
                                />
                                <Field
                                    id="username"
                                    type="text"
                                    name="username"
                                    placeholder="username"
                                />
                            </div>
                            {/* <div className="form-group">
                                <label htmlFor="email">Eメール</label>
                                <ErrorMessage name="email" component="span" />
                                <Field
                                    id="email"
                                    type="email"
                                    name="email"
                                    placeholder="email"
                                />
                            </div> */}
                            <div className="form-group">
                                <label htmlFor="password">パスワード</label>
                                <ErrorMessage
                                    name="password"
                                    component="span"
                                />
                                <Field
                                    id="password"
                                    type="password"
                                    name="password"
                                    placeholder="password"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="footer">
                        <button type="submit" className="btn">
                            新規アカウントを登録する
                        </button>
                    </div>
                </Form>
            </Formik>
        </div>
    );
};
