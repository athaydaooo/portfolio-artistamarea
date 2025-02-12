import { MediaStore, MediaUploadOptions, Media } from "tinacms";

class CloudinaryMediaStore implements MediaStore {
  accept = "image/*";

  async persist(files: MediaUploadOptions[]): Promise<Media[]> {
    const uploadedImages = await Promise.all(
      files.map(async (file) => {
        const formData = new FormData();
        formData.append("file", file.file);
        formData.append("upload_preset", "sua_upload_preset");

        const response = await fetch(
          `https://api.cloudinary.com/v1_1/seu_cloud_name/image/upload`,
          {
            method: "POST",
            body: formData,
          }
        );

        const data = await response.json();

        return {
          id: data.public_id,
          type: "file",
          filename: data.public_id,
          directory: "/",
          previewSrc: data.secure_url,
        };
      })
    );

    return uploadedImages;
  }

  async delete(media: Media): Promise<void> {
    // Implementação da exclusão de mídia, se necessário
  }

  async list(): Promise<{ items: Media[] }> {
    // Implementação da listagem de mídia, se necessário
    return { items: [] };
  }
}
