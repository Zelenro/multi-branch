import { Field, Form, Formik } from 'formik';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Searchbar = ({ onSubmit }) => {
  const handleSubmit = async (values, actions) => {
    if (values.searchImages.trim() === '') {
      toast('Enter search word', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      return;
    }
    await onSubmit(values.searchImages);
    actions.setSubmitting(false);
    actions.resetForm();
  };

  return (
    <header className="Searchbar">
      <Formik initialValues={{ searchImages: '' }} onSubmit={handleSubmit}>
        {props => {
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
