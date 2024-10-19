import conf from "../../CONFIG/conf";

import { Client, ID, Databases, Storage, Query } from "appwrite";

export class DBService {
  client = new Client();
  databses;
  buckets;

  constructor() {
    this.client.setEndpoint(conf.appwriteURL);
    this.client.setProject(conf.appwriteProjectID);
    this.databses = new Databases(this.client);
    this.buckets = new Storage(this.client);
  }
  async createFile(
    title: string,
    slug: string,
    name: string,
    content: string
  ) {
    try {
        const fileContent = new Blob([content], {type: 'text/plain'});
    
    //generate a unique file id
        const fileId = ID.unique();
    
        //convert blod to file type
        const file = new File([fileContent],`${slug}.txt`,{type: 'text/plain'});


        const uploadFile = await this.buckets.createFile(conf.appwriteBucketID,  fileId,  file);

        //store meta data in databse
        const document = await this.databses.createDocument(conf.appwriteBucketID,  conf.appwriteCollectionID,  ID.unique(),{
            title,
            slug,
            name,
            fileId: uploadFile.$id, // refernce the upload file id
            mimeType: uploadFile.mimeType,
            size: file.size,

        });

        return  {
            fileId : uploadFile.$id,
            documentId : document.$id,
           message :"file created successfully",
           document : document,

        }

            
    } catch (error) {
        console.error(error);
        throw (error);
    }
    }

  
}

const databaseServices = new DBService();

export default databaseServices;
