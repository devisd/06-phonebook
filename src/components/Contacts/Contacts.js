import { useSelector, useDispatch } from 'react-redux';
import { remove } from 'redux/store';

const Contacts = () => {
  const dispatch = useDispatch();
  const contactsItem = useSelector(state => state.items);
  const filterItems = useSelector(state => state.filter);

  const visibleContacts = contactsItem.filter(el =>
    el.name.toLowerCase().includes(filterItems.toLowerCase())
  );

  const component = visibleContacts.map(el => {
    return (
      <li key={el.id}>
        <p>
          {el.name}: {el.number}
        </p>
        <button
          type="button"
          onClick={() => {
            dispatch(remove(el.id));
          }}
        >
          Delete
        </button>
      </li>
    );
  });

  return (
    <div>
      <ul>
        {contactsItem.length >= 1 ? (
          component
        ) : (
          <li>
            <p>Нет сохраненных контактов</p>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Contacts;
