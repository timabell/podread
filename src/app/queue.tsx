import React from 'react';
import { connect } from 'react-redux';
import {QueueItem, State} from '../server/defaultState.'

export const Queue = ((queue: QueueItem[]) => (
    <div>
        <h2>Queue</h2>
        <ul>
            {queue.map(item=>(
                <li>x</li>
            ))
            }
        </ul>
    </div>
));

function mapStateToProps(state: State){
    return {
        queue: state.queue
    };
}

export const ConnectedQueue = connect(mapStateToProps) (Queue);
