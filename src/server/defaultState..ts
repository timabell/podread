import queue from "../app/queue";

export class QueueItem {
    get url(): string {
        return this._url;
    }

    set url(value: string) {
        this._url = value;
    }
    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    constructor(id: number, url: string) {
        this._id = id;
        this._url = url;
    }
    private _id: number;
    private _url: string;
}

import RootState from '../server/RootState'
export const defaultState =
    new RootState
    {
    queue: [
        new QueueItem(1,
            "https://charity.wtf/2021/01/23/questionable-advice-how-do-i-feel-worthwhile-as-a-manager-when-my-people-are-doing-all-the-implementing/"),
    ]};

