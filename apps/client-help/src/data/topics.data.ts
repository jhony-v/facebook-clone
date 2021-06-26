export const topicOptionsData = [
    {
        name : "Account settings",
        icon : "/assets/images/help/yourprofile.png",
        description : "Adjust settings, manage notifications, learn about name changes and more.",
        id : "a17",
    },
    {
        name : "Login and password",
        icon : "/assets/images/help/loginandpassword.png",
        description : "Fix login issues and learn how to change or reset your password.",
        id : "a16",
    },
    {
        name : "Privacity and security",
        icon : "/assets/images/help/yourprivacity.png",
        description : "Control who can see what you share and add extra protection to your account.",
        id : "a21",
    },
    {
        name : "Marketplace",
        icon : "/assets/images/help/marketplace.png",
        description : "Learn how to buy and sell things on Facebook.",
        id : "a12",
    },
    {
        name : "Groups",
        icon : "/assets/images/help/groups.png",
        description : "Learn how to create, manage and use Groups.",
        id : "a9"
    },
    {
        name : "Pages",
        icon : "/assets/images/help/pages.png",
        description : "Learn how to create, use, follow and manage a Page.",
        id : "a8",
    }
]

export type TopicOptionsType = typeof topicOptionsData;
export type TopicOptionItemType = typeof topicOptionsData[0];