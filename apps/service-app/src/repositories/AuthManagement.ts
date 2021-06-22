import { ENCRPYT_SALT_ROUNDS } from "@root/config/environments";
import { Entities } from "@root/models/entities";
import { AccountModel } from "@root/models/schemas/AccountSchema";
import { UserModel } from "@root/models/schemas/UserSchema";
import bcrypt from "bcrypt"

export default class AuthManagement {
  
  async findUserAccount(params: Entities.Account & Entities.User) {
    const findUser = await AccountModel.findOne(params);
    return findUser;
  }
  
  async signInUser({email,password}:Entities.Account) {
    const findUser = await this.findUserAccount({email});
    if(findUser)  {
      const passwordVerify = await bcrypt.compare(password,findUser.password || "");
      return passwordVerify ? {
        email : findUser.email,
        _id : findUser._id
      } : {}
    }
    return null
  }

  async signUpUser({username,email,password}: Entities.Account) {
    const findUser = await this.findUserAccount({email});
    if(findUser) return null
    const passwordEncrypted = await bcrypt.hash(password,ENCRPYT_SALT_ROUNDS);
    const newAccount = await AccountModel.create({
        email,
        username,
        password: passwordEncrypted,
    });
    await UserModel.create({
      account : newAccount._id
    })
    return {
      email : newAccount.email,
      username : newAccount.username,
    }
  }

  async verifyUser(userId : string ) {
    try{
      return await this.findUserAccount({_id:userId}).then(e=>true).catch(e=>false);
    }
    catch{
      return false
    }
  }

}
