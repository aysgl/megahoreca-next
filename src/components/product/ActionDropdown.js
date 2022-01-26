import React, { useState } from 'react';
import { Dropdown, DropdownButton, ButtonGroup } from "react-bootstrap"
import { prodata } from '../../data/prodata';

export default function ActionDropdown() {
    const statuses = ['All', 'Max Price', 'Min Price'];
    const [filterStatus, setFilterStatus] = useState(0);

    const onValueChanged = ({ value }) => {
        setFilterStatus({
            filterStatus: value
        });
    }

    // const filteredData = prodata.filter((p => p.price).map(data =>
    //     data.price
    // });

    return (
        <select onValueChanged={() => onValueChanged} className='me-2 px-2' title={statuses}>
            {statuses.map(p =>
                <option value={filterStatus}>{p}</option>
            )}
        </select>
    );
}
