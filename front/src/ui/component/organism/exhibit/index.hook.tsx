import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import "./index.scss";
// import { ImageSrc } from "./ImageSrc";

export const formTextDefault = (props: any): any => {
    const { registerProductInfo } = props;
    return {
        title: registerProductInfo.title,
        description: registerProductInfo.description,
        category: registerProductInfo.category,
        price: registerProductInfo.price,
    };
};

export const ExhibitHookItem: React.FC<any> = (props: any) => {
    console.log("props", props);
    const {
        control,
        handleSubmit,
        // setValue,
        formState: { errors },
    } = useFormContext();

    // const [file, setFile] = useState<File | null>(null);

    // カテゴリー一覧
    const categories = [
        "ドライバー",
        "アイアン",
        "パター",
        "ユーティリティ",
        "その他",
    ];

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
                        {/* <div className="form-group">
                            <ImageSrc file={file} />
                            <div className="image-register">
                                商品画像を登録する
                                <span className="image-icon">
                                    <Controller
                                        name="file"
                                        control={control}
                                        render={(field) => (
                                            <input
                                                {...field}
                                                type="file"
                                                id="id"
                                                name="file"
                                                onChange={(e) =>
                                                    setFile(
                                                        e.currentTarget
                                                            .files !== null
                                                            ? e.currentTarget
                                                                  .files[0]
                                                            : null
                                                    )
                                                }
                                            />
                                        )}
                                    />
                                </span>
                            </div>
                        </div> */}

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
                        <div className="form-group">
                            <label htmlFor="description">商品説明*</label>
                            {errors.description && (
                                <div className="errors">
                                    入力が必須の項目です
                                </div>
                            )}
                            <Controller
                                name="description"
                                control={control}
                                render={({ field }) => (
                                    <textarea {...field}></textarea>
                                )}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="category">カテゴリー*</label>
                            {errors.category && (
                                <div className="errors">
                                    入力が必須の項目です
                                </div>
                            )}
                            <Controller
                                name="category"
                                control={control}
                                render={({ field }) => (
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
                                )}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="price">価格*</label>
                            {errors.price && (
                                <div className="errors">
                                    入力が必須の項目です
                                </div>
                            )}
                            <Controller
                                name="price"
                                control={control}
                                render={({ field }) => <input {...field} />}
                            />
                        </div>
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
