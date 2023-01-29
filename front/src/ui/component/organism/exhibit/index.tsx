import React, { useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./index.scss";
import { ImageSrc } from "./ImageSrc";

export interface SUBMIT_DATA {
    productname: string;
    description: string;
    category: string;
    price: string;
    file: null;
}

export const ExhibitItem: React.FC<any> = () => {
    const inputRef = useRef<any>(null);

    // カテゴリー一覧
    const categories = [
        "ドライバー",
        "アイアン",
        "パター",
        "ユーティリティ",
        "その他",
    ];

    // fieldの初期値
    const initialValues = {
        productname: "",
        description: "",
        category: "",
        price: "",
        file: null,
    };

    // アップロード可能なサポートされている画像フォーマットタイプ
    const SUPPORTED_FORMATS = [
        "image/jpg",
        "image/jpeg",
        "image/gif",
        "image/png",
    ];

    // アップロード画像のファイルサイズ上限
    const FILE_SIZE = 1024 * 1024;

    // バリデーション管理
    const validationSchema = Yup.object().shape({
        productname: Yup.string().required("商品名を入力してください"),
        description: Yup.string().required("商品説明をを入力してください"),
        category: Yup.string().required("カテゴリーを選んください"),
        price: Yup.string().required("金額を入力してください"),
        file: Yup.mixed()
            .required("イメージ画像をアップロードしてください")
            .test(
                "FILE_SIZE",
                "画像ファイルの容量が大きすぎます",
                (value) => !value || (value && value.size <= FILE_SIZE)
            )
            .test(
                "FILE_FORMAT",
                "サポートされていないファイルフォーマットです",
                (value) =>
                    !value || (value && SUPPORTED_FORMATS.includes(value.type))
            ),
    });

    // ファイルアップロード
    const fileUpload = () => {
        console.log(inputRef.current);
        inputRef.current.click();
    };

    // 商品登録
    const registerProduct = (data: SUBMIT_DATA) => {
        console.log(data);
    };
    return (
        <div className="base-container">
            <div className="header">商品の登録・編集</div>
            <Formik
                initialValues={initialValues}
                onSubmit={registerProduct}
                validationSchema={validationSchema}
                encType="multipart/form-data"
                method="POST"
            >
                {({ setFieldValue, values }) => {
                    return (
                        <Form>
                            <div className="content">
                                <div className="form">
                                    <div className="form-group">
                                        <ImageSrc file={values.file} />
                                        <ErrorMessage
                                            name="file"
                                            component="span"
                                            className="errors"
                                        />
                                        <div className="image-register">
                                            商品画像を登録する
                                            <span className="image-icon">
                                                <button onClick={fileUpload}>
                                                    <i className="fa-solid fa-image"></i>
                                                </button>
                                                <input
                                                    ref={inputRef}
                                                    hidden
                                                    type="file"
                                                    id="id"
                                                    name="file"
                                                    onChange={(e) => {
                                                        setFieldValue(
                                                            "file",
                                                            e.currentTarget
                                                                .files !== null
                                                                ? e
                                                                      .currentTarget
                                                                      .files[0]
                                                                : null
                                                        );
                                                    }}
                                                />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="productname">
                                            商品名*
                                        </label>
                                        <ErrorMessage
                                            name="productname"
                                            component="span"
                                            className="errors"
                                        />
                                        <Field
                                            type="text"
                                            required
                                            name="productname"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="description">
                                            商品説明*
                                        </label>
                                        <ErrorMessage
                                            name="description"
                                            component="span"
                                            className="errors"
                                        />
                                        <Field
                                            as="textarea"
                                            required
                                            name="description"
                                            id="description"
                                        ></Field>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="category">
                                            カテゴリー*
                                        </label>
                                        <ErrorMessage
                                            name="category"
                                            component="span"
                                            className="errors"
                                        />
                                        <Field
                                            as="select"
                                            required
                                            name="category"
                                        >
                                            <option
                                                value="選択してください"
                                                hidden
                                            >
                                                選択してください
                                            </option>
                                            {categories.map((item, key) => {
                                                return (
                                                    <option
                                                        key={key}
                                                        value={item}
                                                    >
                                                        {item}
                                                    </option>
                                                );
                                            })}
                                        </Field>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="price">価格*</label>
                                        <ErrorMessage
                                            name="price"
                                            component="span"
                                            className="errors"
                                        />
                                        <Field
                                            type="text"
                                            required
                                            name="price"
                                        />
                                    </div>
                                    <div className="footer">
                                        <button type="submit" className="btn">
                                            商品情報を保存
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Form>
                    );
                }}
            </Formik>
        </div>
    );
};
