export interface Article {
  id: number;
  title: string;
  snippet: string;
  date: string;
  category: string;
  accentColor: string;
  slug: string;
}

export const blogPosts: Article[] = [
  {
    id: 1,
    title: "The Future of AI in Data Science",
    snippet: "Exploring how generative AI is transforming data analysis workflows and predictive modeling in 2024 and beyond.",
    date: "May 1, 2024",
    category: "Technology",
    accentColor: "bg-blue-500",
    slug: "future-of-ai-data-science",
  }
];

export const categories = ["All", "Technology", "Personal & Insights"];
