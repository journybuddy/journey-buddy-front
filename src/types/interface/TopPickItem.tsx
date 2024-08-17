export interface TopPickItem {
    postId: number;
    title: string;
    content: string;
    writerName: string;
    createdDate: [number, number, number, number, number, number, number] | null;
    likeCount: number;
    commentCount: number;
    location: string | null;
    imageUrl: string | null;
  }
  