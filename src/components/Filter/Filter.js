import { useSelector, useDispatch } from 'react-redux';
import { filter } from 'redux/store';

const Filter = () => {
  const dispatch = useDispatch();
  const filterItems = useSelector(state => state.filter);

  const handleChange = event => {
    dispatch(filter(event.currentTarget.value));
  };

  return (
    <div>
      <label>
        Find contacts by name
        <input
          type="text"
          name="filter"
          value={filterItems}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

export default Filter;
