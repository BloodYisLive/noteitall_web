export type Author = {
  name: string;
  profilePic: string;
};

export type Blog = {
  id: string;
  title: string;
  description?: string;
  readTime: number;
  thumbnail: string;
  tags: Array<string>;
  uploadDate: Date;
  author: Author;
};
