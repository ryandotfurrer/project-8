import { useState } from 'react';

interface SocialPost {
  author: {
    name: string;
    handle: string;
    avatar: string;
  };
  content: string;
  date: string;
  metrics: {
    likes: number;
    replies: number;
  };
  link: string;
}

export function useSocialPosts() {
  const [posts] = useState<SocialPost[]>([
    {
      author: {
        name: "Jason Torres",
        handle: "TasonJorres",
        avatar: "https://pbs.twimg.com/profile_images/1675922067991252992/8hoQ1lxh_400x400.jpg",
      },
      content: "Excited to announce that I've joined @torcdotdev as a Developer Advocate! Looking forward to building an amazing developer community together! 🚀",
      date: "Dec 15, 2023",
      metrics: {
        likes: 156,
        replies: 24
      },
      link: "https://x.com/TasonJorres/status/1735694246559162778"
    },
    {
      author: {
        name: "Tom de Sseyn",
        handle: "tdesseyn",
        avatar: "https://pbs.twimg.com/profile_images/1455888737039572992/RQy_5aEu_400x400.jpg",
      },
      content: "Check out this awesome new platform @torcdotdev - it's revolutionizing how developers collaborate and find opportunities! 💪",
      date: "Jan 3, 2024",
      metrics: {
        likes: 89,
        replies: 12
      },
      link: "https://x.com/tdesseyn/status/1742569832847446476"
    },
    {
      author: {
        name: "Helen Anderson",
        handle: "helenismo",
        avatar: "https://pbs.twimg.com/profile_images/1671100425354846208/2mpU6KUj_400x400.jpg",
      },
      content: "Just wrapped up another great mentoring session with @torcdotdev community! Love seeing developers grow and succeed. 🌱✨",
      date: "Jan 5, 2024",
      metrics: {
        likes: 234,
        replies: 31
      },
      link: "https://x.com/helenismo/status/1743651246559162778"
    }
  ]);

  return { posts };
}