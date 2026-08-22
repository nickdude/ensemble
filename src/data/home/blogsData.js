// Content is edited via the admin panel and stored as JSON.
// This module re-exports it so existing imports keep working unchanged.
import data from "@/content/blogsData.json";

export const blogsData = data;
