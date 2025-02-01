// react-tiktok-embed.d.ts
declare module "react-tiktok-embed" {
  interface TikTokEmbedProps {
    url: string;
    width?: number;
    height?: number;
    noData?: boolean;
  }

  const TikTokEmbed: React.FC<TikTokEmbedProps>;

  export default TikTokEmbed;
}
