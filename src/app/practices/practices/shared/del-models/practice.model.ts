export interface Practice {
    id: number;
    groupId: number;
    linkId: string;
    name: string;
    text: string;
    fullName: string;
    images?: [
        {
            imgPath: string,
            imgTitle: string,
            thumbPath: string
            thumbTitle: string
            thumbAlt: string
            bgName: string
        }
    ];
    tablePiv?: string;
}
