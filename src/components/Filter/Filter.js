import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, resetFilter } from 'redux/filter/filterSlice';
import { IconButton, TextField } from '@mui/material/';
import { MdClear } from 'react-icons/md';

export function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  return (
    <div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <TextField
          inputProps={{
            sx: {
              p: '5px',
              width: '250px',
            },
          }}
          inputLabelProps={{ size: 'small' }}
          color="secondary"
          id="outlined-basic"
          label="Find contact ..."
          variant="outlined"
          size="small"
          type="text"
          name="filter"
          value={filter}
          onChange={e => dispatch(changeFilter(e.currentTarget.value))}
        />
        <IconButton
          style={{
            minWidth: '24px',
          }}
          color="secondary"
          size="small"
          type="button"
          onClick={() => dispatch(resetFilter())}
        >
          {<MdClear />}
        </IconButton>
      </div>
    </div>
  );
}
