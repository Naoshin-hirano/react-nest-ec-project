import React, { useRef, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import "./index.scss";
import { ImageSrc } from "./ImageSrc";

export const formTextDefault = (props: any): any => {
    const { registerProductInfo } = props;
    return {
        title: registerProductInfo.title,
        description: registerProductInfo.description,
        category: registerProductInfo.category,
        price: registerProductInfo.price,
        file: registerProductInfo.file,
    };
};

export const ExhibitHookItem: React.FC<any> = (props: any) => {
    // storeに保存用
    console.log("props", props);
    const {
        control,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useFormContext();

    const [file, setFile] = useState<File | null>(null);

    // カテゴリー一覧
    const categories = [
        "ドライバー",
        "アイアン",
        "パター",
        "ユーティリティ",
        "その他",
    ];

    // todo: fileアップロードをキャンセルした時のエラー処理（下記処理では無効）
    // ファイルアップロード
    const onSubmitFile = () => {
        const inputFile = document.getElementById(
            "fileInput"
        ) as HTMLInputElement;
        if (!inputFile) {
            setValue("file", "");
            setFile(null);
            console.log("fileがnullへ");
            return;
        }
        const fileValue = inputFile?.files?.item(0) as File;
        setValue("file", fileValue);
        setFile(fileValue);
    };

    const inputRef = useRef<any>(null);

    // ボタンアイコンを押下でtype="file"のinput押下になる
    const fileUpload = () => {
        inputRef.current.click();
    };

    // 商品登録
    const onSubmit: any = (data: any) => {
        console.log("クリック", data);
    };
    return (
        <div className="base-container">
            <div className="header">商品の登録・編集</div>
            <div className="content">
                <div className="form">
                    <form
                        onSubmit={(e) => {
                            handleSubmit(onSubmit)(e);
                        }}
                    >
                        <Controller
                            name="file"
                            control={control}
                            render={({ field }) => (
                                <div className="form-group">
                                    <ImageSrc file={file} />
                                    {errors.file && (
                                        <div className="errors">
                                            入力が必須の項目です
                                        </div>
                                    )}
                                    <div className="image-register">
                                        商品画像を登録する
                                        <span className="image-icon">
                                            <button onClick={fileUpload}>
                                                <i className="fa-solid fa-image"></i>
                                            </button>
                                            <input {...field} type="hidden" />
                                            <input
                                                id="fileInput"
                                                ref={inputRef}
                                                hidden
                                                type="file"
                                                onChange={onSubmitFile}
                                            />
                                        </span>
                                    </div>
                                </div>
                            )}
                        />
                        <Controller
                            name="title"
                            control={control}
                            render={({ field }) => (
                                <div className="form-group">
                                    <label htmlFor="title">商品名*</label>
                                    {errors.title && (
                                        <div className="errors">
                                            入力が必須の項目です
                                        </div>
                                    )}
                                    <input {...field} />
                                </div>
                            )}
                        />
                        <Controller
                            name="description"
                            control={control}
                            render={({ field }) => (
                                <div className="form-group">
                                    <label htmlFor="description">
                                        商品説明*
                                    </label>
                                    {errors.description && (
                                        <div className="errors">
                                            入力が必須の項目です
                                        </div>
                                    )}
                                    <textarea {...field}></textarea>
                                </div>
                            )}
                        />
                        <Controller
                            name="category"
                            control={control}
                            render={({ field }) => (
                                <div className="form-group">
                                    <label htmlFor="category">
                                        カテゴリー*
                                    </label>
                                    {errors.category && (
                                        <div className="errors">
                                            入力が必須の項目です
                                        </div>
                                    )}
                                    <select {...field}>
                                        <option value="選択してください" hidden>
                                            選択してください
                                        </option>
                                        {categories.map((item, key) => {
                                            return (
                                                <option value={item} key={key}>
                                                    {item}
                                                </option>
                                            );
                                        })}
                                    </select>
                                </div>
                            )}
                        />
                        <Controller
                            name="price"
                            control={control}
                            render={({ field }) => (
                                <div className="form-group">
                                    <label htmlFor="price">価格*</label>
                                    {errors.price && (
                                        <div className="errors">
                                            入力が必須の項目です
                                        </div>
                                    )}
                                    <input {...field} />
                                </div>
                            )}
                        />
                        <div className="footer">
                            <button type="submit" className="btn">
                                商品情報を保存
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
