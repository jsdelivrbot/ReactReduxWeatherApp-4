import React from 'react';
import _ from 'lodash';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average(data) {
    return _.round(_.sum(data)/data.length)
}

export default function (props) {
    return (
        <div>
        <Sparklines height={props.height} width={props.width} data={props.data}>
            <SparklinesLine color={props.color} />
            <SparklinesReferenceLine type="avg" />
        </Sparklines>
        <div>Avg: {average(props.data)} {props.units}</div>
        </div>
    );
}