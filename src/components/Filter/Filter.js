import { Search, Caption } from './Filter.styled';
import { useDispatch, useSelector} from 'react-redux';
import { changeFiilter, resetFilter } from 'redux/actions';

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
            onChange={(e) => dispatch(changeFiilter(e.currentTarget.value))}
          />
          <button type="button" onClick={() => dispatch(resetFilter())}>
            x
          </button>
        </div>
      </Caption>
    </div>
  );
}
