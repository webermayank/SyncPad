// src/CONFIG/conf.ts
const conf = {
  appwriteURL: import.meta.env.VITE_APPWRITE_URL as string,
  appwriteProjectID: import.meta.env.VITE_PROJECT_ID as string,
  appwriteDatabaseID: import.meta.env.VITE_DATABASE_ID as string,
  appwriteCollectionID: import.meta.env.VITE_COLLECTION_ID as string,
  appwriteBucketID: import.meta.env.VITE_BUCKET_ID as string,
};

export default conf;
