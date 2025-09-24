import { Client, Databases, Storage, ID, Query, Permission,Role } from "appwrite";
import conf from "../conf/conf";

export class Services {
    client = new Client();
    databases;
    storage;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectid);
        this.databases = new Databases(this.client);
        this.storage = new Storage(this.client);
    }

    async createPost({ title, slug, content, featuredimage, status, userid }) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseid,
                conf.appwriteCollectionid,
                slug,
                {
                    title,
                    slug,
                    content,
                    featuredimage,
                    status,
                    userid
                }
            );
        } catch (error) {
            console.log("Error in Appwrite::in createPost service", error)
        }
    }


    async updatePost(slug, { title, content, featuredimage, status }) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseid,
                conf.appwriteCollectionid,
                slug, // must be the actual document ID
                {
                    title,
                    content,
                    featuredimage,
                    status
                },
            );
        } catch (error) {
            console.log("Error in Appwrite::in updatePost service", error);
        }
    }

    async deletePost(slug) {
        try {
            return await this.databases.deleteDocument(
                conf.appwriteDatabaseid,
                conf.appwriteCollectionid,
                slug,
            );
        } catch (error) {
            console.log("Error in Appwrite::in deletePost service", error);
        }
    }

async getPost(slug) {
    try {
        const response = await this.databases.getDocument(
            conf.appwriteDatabaseid,
            conf.appwriteCollectionid,
            slug
        );
        return response;  // ✅ Return the document here
    } catch (error) {
        console.log("Error in Appwrite::in getPost service", error);
        return null;  // ✅ Return null on error to avoid breaking your app
    }
}

    async getPosts() {
        try {
            const response = await this.databases.listDocuments(
                conf.appwriteDatabaseid,
                conf.appwriteCollectionid,
                [Query.equal("status", "active")]
            );
            return response;
        } catch (error) {
            console.log("Error in Appwrite::in getPosts service", error);
        }
    }


    // File Upload Services

    async uploadFile(file) {
        try {
            return await this.storage.createFile(
                conf.appwriteBucketid,
                ID.unique(),
                file,
             [
                Permission.read(Role.any())
            ]
            );

        } catch (error) {
            console.log("Error in Appwrite::in uploadFile service", error);
        }
    }

    async deleteFile(fileId) {
        try {
            return await this.storage.deleteFile(
                conf.appwriteBucketid,
                fileId
            )
            return true
        } catch (error) {
            console.log("Error in Appwrite::in deleteFile service", error);
            return false
        }
    }

   getFileView(fileId) {
    return this.storage.getFileView(
        conf.appwriteBucketid,
        fileId
    );
}

}




const services = new Services();
export default services