import Form from './components/Form';
import Contacts from 'components/Contacts';
import Filter from 'components/Filter';

const App = () => {
  return (
    <div
      style={{
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
        padding: 50,
      }}
    >
      <h1>Phonebook</h1>
      <Form />
      <Filter />
      <h2>Contacts</h2>
      <Contacts />
    </div>
  );
};

export default App;
