import databaseServices from "../../../backend/init/appwrite/service"; // Import the database services

// ... existing code ...

export async function  createAndStoreFile(title: string, slug: string, name: string, content: string) {
    try {
        const result = await databaseServices.createFile(title, slug, name, content);
        return result; // Return the result from the DBService
    } catch (error) {
        console.error("Error creating and storing file:", error);
        throw error;
    }
}

// ... existing code ...