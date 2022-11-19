import { Search, Caption } from './Filter.styled';
import { useDispatch, useSelector} from 'react-redux';
import { changeFilter, resetFilter } from 'redux/filter/filterSlice';


export function Filter() {
  
  const dispatch = useDispatch();
  const filter= useSelector((state)=>state.filter)

  return (
    <div>
      <Caption>
        Find contact by name
        <div>
          <Search
            type="text"
            name="filter"
            value={filter}
            onChange={e => dispatch(changeFilter(e.currentTarget.value))}
          />
          <button type="button" onClick={() => dispatch(resetFilter())}>
            x
          </button>
        </div>
      </Caption>
    </div>
  );
}
