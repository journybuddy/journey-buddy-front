export interface CommunityItem {
    postId: number;
    title: string;
    content: string;
    writerName: string;
    createdDate: number[];
    likeCount: number;
    commentCount: number;
    location: string | null;
    imageUrl: string | null;
}

export interface CommunityListResponse {
    content: CommunityItem[];
    totalPages: number;
    totalElements: number;
    size: number;
}
