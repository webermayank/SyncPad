import conf from "../../CONFIG/conf.ts";
import { Client, Account,ID } from "appwrite";

export class AuthServices {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteURL)
      .setProject(conf.appwriteProjectID);
    this.account = new Account(this.client);
  }

  async createAccount(email: string, password: string, name: string) {
    try {

       const userAccount = await this.account.create(ID.unique(), email, password , name);

       if(userAccount){
        // we can directly mkae user login if account has created succesfully
        console.log("account created");
        return userAccount;
       }else{
        console.log("error creating account");
        // return userAccount;
       }
    } catch (error) {
        throw error;
    }


  }

  async login(email: string, password: string) {

    try {

     return  await this.account.createEmailPasswordSession(email, password);

        
    } catch (error) {
        throw error;
    }
  }


}

const authServices = new AuthServices();
export default authServices;
