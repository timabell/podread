import React from 'react';
import {QueueItem} from '../server/defaultState.'

export const Queue = ((props: Props) => (
    <div>
        <h2>Queue</h2>
        <ul>
            {props.queue.map(item=>(
                <li>x</li>
            ))}
        </ul>
    </div>
));


// function mapStateToProps(state: State){
//     return {
//         queue: state.queue
//     };
// }
//
//export const ConnectedQueue = connect(mapStateToProps) (Queue);

// https://redux.js.org/recipes/usage-with-typescript/
// i have no idea what i am doing

import { connect, ConnectedProps } from 'react-redux'
import RootState from '../server/RootState'
const mapStateToProps = (state: RootState) => ({
    queue: state.queue
})
const connector = connect(mapStateToProps)
type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux & {
    queue: QueueItem[]
}
export const ConnectedQueue = connector(Queue)
