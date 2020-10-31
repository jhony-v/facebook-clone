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
    account ?: string | Account;
  }

  export interface Hobbies {
    name?: string;
    description?: string;
  }

  export interface UserAccountBasic {
    fullName?: string;
    avatar?: string;
  }

  export interface Publication {
    _id?: string;
    text?: string;
    datetime?: string;
    image?: [string];
  }

  export interface PublicationByUser extends Publication {
    user?: string | UserAccountBasic;
    userPublished?: UserAccountBasic;
    commentsId?: [string | Comment];
  }

  export interface Comment {
    _id?: string;
    text?: string;
    datetime?: string;
    user?: UserAccountBasic;
  }
}
