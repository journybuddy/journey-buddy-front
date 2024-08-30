import { Image } from '../../types/interface/Image';

export interface Post {
    postId: number
    title: string;
    location: string;
    content: string;
    images?: Image[]; 
}