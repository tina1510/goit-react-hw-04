import { Formik, Form, Field } from 'formik'
import toast, { Toaster } from 'react-hot-toast';
import { IoSearchOutline } from "react-icons/io5";
import css from "./SearchBar.module.css"


const SearchBar = ({onSubmit}) => {
    return (
        <header>
            <Formik initialValues={{ query: "" }} onSubmit={(values, actions) => {
    actions.resetForm();
                onSubmit(values.query);
                 if (!values.query) {
            toast.error('Please enter a search query');
            return;
          }
}}>
                <Form className={css.form}>
                    <Field className={css.input} name="query" type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"></Field>
                    <button className={css.btnSearch} type="submit"><IoSearchOutline className={css.icon} />
</button>
                     <Toaster></Toaster>

                </Form>
               

            </Formik>
</header>

    )
}
export default SearchBar;