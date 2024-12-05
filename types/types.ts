export interface Post {
    _id: string;
    title: string;
    content: string;
    image: string;
    views: number;
    createdAt: Date;
    postSlug: string;
    userEmail: string;
    catSlug: string;
    comments: Comment[];
    user: User;
}

export interface Category {
    _id: string;
    title: string;
    posts: Post[];
    catSlug: string;
}

export interface Comment {
    _id: string;
    postSlug: string;
    userEmail: string;
    content: string;
    createdAt: Date;
    user: User;
}

export interface User {
    _id: string;
    name: string;
    email: string;
    image: string;
    posts: Post[];
    comments: Comment[];
}
