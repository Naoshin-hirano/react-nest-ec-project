import React from "react";
import {
    ExhibitHookItem,
    formTextDefault,
} from "ui/component/organism/exhibit/index.hook";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";

// アップロード可能なサポートされている画像フォーマットタイプ
// const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];

// アップロード画像のファイルサイズ上限
// const FILE_SIZE = 1024 * 1024;

const schema = Yup.object()
    .shape({
        title: Yup.string().required("商品名を入力してください"),
        description: Yup.string().required("商品説明をを入力してください"),
        category: Yup.string().required("カテゴリーを選んください"),
        price: Yup.string().required("金額を入力してください"),
        // file: Yup.mixed()
        //     .required("イメージ画像をアップロードしてください")
        //     .test(
        //         "FILE_SIZE",
        //         "画像ファイルの容量が大きすぎます",
        //         (value) => !value || (value && value.size <= FILE_SIZE)
        //     )
        //     .test(
        //         "FILE_FORMAT",
        //         "サポートされていないファイルフォーマットです",
        //         (value) =>
        //             !value || (value && SUPPORTED_FORMATS.includes(value.type))
        //     ),
    })
    .required();

export const Template: React.FC<any> = (props) => {
    const defaultVal: any = {
        ...formTextDefault(props),
    };

    const methods = useForm({
        resolver: yupResolver(schema),
        defaultValues: defaultVal,
        mode: "onTouched",
        reValidateMode: "onChange",
    });
    return (
        <FormProvider {...methods}>
            <ExhibitHookItem {...props} />;
        </FormProvider>
    );
};
