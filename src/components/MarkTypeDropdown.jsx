import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function MarkTypeDropdown({ value, onChange, options }) {
  return (
    <FormControl sx={{ minWidth: 180 }} size="small">
      <InputLabel id="mark-type-label">Mark Type</InputLabel>
      <Select
        labelId="mark-type-label"
        id="mark-type-select"
        value={value}
        label="Mark Type"
        onChange={onChange}
      >
        {options.map((type, idx) => (
          <MenuItem key={idx} value={type}>
            {type}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
