

export interface CommentModel {
    PostId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}

export interface PostModel {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export interface EmployeeModel {
    id?: string;
    name: string;
    position: string;
    age: number;

}

export interface UpdateModel {
    id: string
}

export interface NewsInterface {
    id?: string,
    title: string,
    description: string,
    image: string
}