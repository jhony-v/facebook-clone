export const topicOptionsData = [
    {
        name : "Account settings",
        icon : "/images/help/yourprofile.png",
        description : "Adjust settings, manage notifications, learn about name changes and more.",
    },
    {
        name : "Login and password",
        icon : "/images/help/loginandpassword.png",
        description : "Fix login issues and learn how to change or reset your password.",
    },
    {
        name : "Privacity and security",
        icon : "/images/help/yourprivacity.png",
        description : "Control who can see what you share and add extra protection to your account.",
    },
    {
        name : "Marketplace",
        icon : "/images/help/marketplace.png",
        description : "Learn how to buy and sell things on Facebook.",
    },
    {
        name : "Groups",
        icon : "/images/help/groups.png",
        description : "Learn how to create, manage and use Groups.",
    },
    {
        name : "Pages",
        icon : "/images/help/pages.png",
        description : "Learn how to create, use, follow and manage a Page.",
    }
]

export type TopicOptionsType = typeof topicOptionsData;
export type TopicOptionItemType = typeof topicOptionsData[0]