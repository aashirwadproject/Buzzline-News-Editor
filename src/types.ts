export interface NewsData {
  headline: string;
  details: string;
  caption?: string;
  mediaUrl: string;
  mediaType: 'image' | 'video';
  logoUrl?: string;
  logoText: string;
  date: string;
  detailsFontSize?: number;
  newsType: string;
  themeColor: string;
}

export const NewsSchema = {
  type: "object",
  properties: {
    headline: { type: "string", description: "A punchy, viral-style news headline" },
    details: { type: "string", description: "Detailed news content, summarized to fit one slide" },
    newsType: { type: "string", description: "The category of news (e.g., Breaking News, Sports News, etc.)" },
    caption: { type: "string", description: "A viral, engaging TikTok caption with emojis and 5 trending hashtags" },
  },
  required: ["headline", "details", "newsType", "caption"],
};
