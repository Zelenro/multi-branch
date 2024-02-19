import { Field, Form, Formik } from 'formik';

export const Searchbar = ({ onSubmit, onChangeText }) => {
  const handleSubmit = (values, actions) => {
    onSubmit(values);

    actions.resetForm();
  };

  const handleChange = value => {
    // console.log(value.nativeEvent.data);
    // return value.nativeEvent.data;

    // const { name, value } = event.target; // Destructure name and value from the event target
    console.log(value);
    // onChangeText({ [name]: value }); // Notify parent component about the change
  };

  return (
    <header className="Searchbar">
      <Formik initialValues={{ searchImages: '' }} onSubmit={handleSubmit}>
        <Form className="SearchForm">
          <button type="submit" className="SearchForm-button">
            <span className="button-label">Search</span>
          </button>

          <Field
            className="SearchForm-input"
            type="text"
            name="searchImages"
            // value={value}
            //   autocomplete="off"
            //   autofocus
            // onChange={handlerInput}
            onChange={handleChange}
            placeholder="Search images and photos"
          />
        </Form>
      </Formik>
    </header>
  );
};
