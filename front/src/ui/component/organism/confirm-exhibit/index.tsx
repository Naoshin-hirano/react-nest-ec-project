import React, { useCallback, useEffect, useRef } from "react";
import "./index.scss";

export const ConfirmExhibitItemInfo: React.FC<any> = () => {
    const scroll = useRef<HTMLDivElement>(null);

    // 初期画面またはDM更新時に最下部にスクロール
    const scrollToBottomOfList = useCallback(() => {
        scroll!.current!.scrollIntoView({ behavior: "auto" });
    }, [scroll]);

    useEffect(() => {
        scrollToBottomOfList();
    }, [scrollToBottomOfList]);
    return (
        <div className="base-container" ref={scroll}>
            <div className="header">以下の商品を出品しますか</div>
            <div className="content">
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="image-register">商品イメージ：</label>
                        <img
                            className="image-register"
                            src="https://image.biccamera.com/img/00000007676178_A01.jpg?sr.dw=600&sr.jqh=60&sr.dh=400&sr.mat=1"
                            alt="商品イメージ"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="title">商品名：</label>
                        <p>テーラーメイドM3</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">商品説明：</label>
                        <p className="product-description">
                            あああああああああああああああああああああああああああああああああああ
                        </p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="category">カテゴリー：</label>
                        <p>ドライバー</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="price">価格：</label>
                        <p>¥65,400</p>
                    </div>
                </div>
                <div className="footer">
                    <div className="btn-container">
                        <button type="submit" className="btn">
                            出品する
                        </button>
                    </div>
                    <div className="btn-container">
                        <button className="btn">戻る</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
