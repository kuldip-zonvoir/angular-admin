export interface Note {
    id?: string;
    note_title: string;
    note_description?: string;
    note_createdAt?: string;
    note_share_count?:number;
    note_author?: string;
    note_author_name?: string;
}