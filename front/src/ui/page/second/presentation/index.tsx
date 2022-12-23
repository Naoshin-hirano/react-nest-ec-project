export const useCreateProps = () => {
    return {
        secondTitle,
        secondMenu,
        backButton,
    };
};

type SecondTitle = {
    title: string;
};
type SecondMenu = {
    buttonLabels: {
        menu1: string;
        menu2: string;
        menu3: string;
    };
};
type BackButton = {
    buttonLabels: {
        back: string;
    };
};

const secondTitle: SecondTitle = {
    title: "セカンドタイトル",
};
const secondMenu: SecondMenu = {
    buttonLabels: {
        menu1: "セカンドメニュー1",
        menu2: "セカンドメニュー2",
        menu3: "セカンドメニュー3",
    },
};
const backButton: BackButton = {
    buttonLabels: {
        back: "閉じる",
    },
};
