export const useCreateProps = () => {
    return {
        firstTitle,
        firstMenu,
        backButton,
    };
};

type FirstTitle = {
    title: string;
};
type FirstMenu = {
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

const firstTitle: FirstTitle = {
    title: "Firstタイトル",
};
const firstMenu: FirstMenu = {
    buttonLabels: {
        menu1: "Firstメニュー1",
        menu2: "Firstメニュー2",
        menu3: "Firstメニュー3",
    },
};
const backButton: BackButton = {
    buttonLabels: {
        back: "閉じる",
    },
};
