export namespace Entities {
  export interface Account {
    _id?: string;
    email?: string;
    username?: string;
    password?: string;
  }

  export interface User {
    _id?: string;
    fullName?: string;
    birthday?: string;
    description?: string;
    hobbies?: [Hobbies];
    avatar?: string;
    account?: string | Account;
  }

  export interface Hobbies {
    name?: string;
    description?: string;
  }

  export type Reaction = string;

  export interface UserAccountBasic {
    fullName?: string;
    avatar?: string;
  }

  export interface Publication {
    _id?: string;
    text?: string;
    images?: string[];
    createdAt?: string;
    reactions ?: [{
      type : Reaction,
      userId : string
    }]
  }

  export interface PublicationByUser extends Publication {
    user?: string | UserAccountBasic | User;
    userPublished?: UserAccountBasic;
    comments?: [string | Comment];
  }

  export interface CommentNewsFeedMutation {
    user: {
      _id: string;
    };
    publication: {
      _id: string;
    };
    text: string;
    userPublished: UserAccountBasic;
  }

  export interface Comment {
    _id?: string;
    text?: string;
    user?: string | UserAccountBasic;
    userPublished?: UserAccountBasic;
  }
}
