 <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handlerSubmit}
        >
          <Form autoComplete="off">
            <FormLabel htmlFor="name">
              Name
              <FormInput
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                required
              />
              <FormError name="name" />
            </FormLabel>
            <FormLabel htmlFor="number">
              Number
              <FormInput
                type="text"
                id="number"
                name="number"
                placeholder="Number"
                required
              />
              <FormError name="number" />
            </FormLabel>
            <FormButton type="submit">Add contact</FormButton>
          </Form>
        </Formik>

 <>
   <h1>Movies</h1> 
   <form onSubmit={console.log('Search' {id})}> 
   <input type="text" value={id} /> 
   <button type="submit">Search</button> 
   </form> 
   <NavLink to={`/movies/${movieId}`}>Link</NavLink> 
   <MovieDetails /> 
   <Cast /> 
   <Reviews /> 
   <Outlet /> 
   </> 

 <>
            <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        // onSubmit={}
      >
        <Form autoComplete="off">
          <label htmlFor="search films">
            Search films
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              required
            />
            {/* <FormError name="name" /> */}
          </label>

          <button type="submit">Search</button>
        </Form>
      </Formik>
    </>