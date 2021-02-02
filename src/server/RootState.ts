import {QueueItem} from "../server/defaultState.";

export default class RootState {
    get queue(): QueueItem[] {
        return this._queue;
    }

    set queue(value: QueueItem[]) {
        this._queue = value;
    }

    private _queue!: QueueItem[];
}
