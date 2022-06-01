export interface Task {
    id: string;
    task_name: string;
    deadline: string;
    status: string;
    task_description?:string;
    completion?:string;
    assignto?: string;
}