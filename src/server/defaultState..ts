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

export class State{
    get queue(): QueueItem[] {
        return this._queue;
    }

    set queue(value: QueueItem[]) {
        this._queue = value;
    }

    private _queue: QueueItem[];

    constructor(queue: QueueItem[]) {
        this._queue = queue;
    }
}
export const defaultState =
    new State(
    [
        new QueueItem(1, "https://charity.wtf/2021/01/23/questionable-advice-how-do-i-feel-worthwhile-as-a-manager-when-my-people-are-doing-all-the-implementing/"),
    ]);

