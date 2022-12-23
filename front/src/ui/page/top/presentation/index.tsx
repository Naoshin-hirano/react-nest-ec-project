export const useCreateProps = () => {
    return {
        topTitle,
        topMenu,
    };
};

type TopTitle = {
    title: string;
};
type TopMenu = {
    buttonLabels: {
        menu1: string;
        menu2: string;
        menu3: string;
    };
};

const topTitle: TopTitle = {
    title: "トップタイトル",
};

const topMenu: TopMenu = {
    buttonLabels: {
        menu1: "トップメニュー1",
        menu2: "トップメニュー2",
        menu3: "トップメニュー3",
    },
};
