import { Field, Form, Formik } from 'formik';

export const Searchbar = ({ onSubmit }) => {
  const handleSubmit = async (values, actions) => {
    await onSubmit(values.searchImages);
    actions.setSubmitting(false);
    // console.log(values);
    actions.resetForm();
  };

  return (
    <header className="Searchbar">
      <Formik initialValues={{ searchImages: '' }} onSubmit={handleSubmit}>
        {props => {
          // console.log(props);
          return (
            <Form className="SearchForm">
              <button
                type="submit"
                className="SearchForm-button"
                disabled={props.isSubmitting}
              >
                <span className="button-label">Search</span>
              </button>

              <Field
                className="SearchForm-input"
                type="text"
                name="searchImages"
                onChange={props.handleChange}
                placeholder="Search images and photos"
              />
            </Form>
          );
        }}
      </Formik>
    </header>
  );
};
