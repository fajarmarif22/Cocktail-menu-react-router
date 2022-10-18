import React from 'react'
import { useGlobalContext } from '../Context'

function SearchForm() {
  const { setSearchTerm } = useGlobalContext()
  const searchValue = React.useRef('')
  React.useEffect(() => {
    searchValue.current.focus()
  }, [])
  const SearchCocktail = () => {
    setSearchTerm(searchValue.current.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <section className='section search'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>Search Your Favorite Cocktail</label>
          <input
            type='text'
            id='name'
            ref={searchValue}
            onChange={SearchCocktail}
          />
        </div>
      </form>
    </section>
  )
}

export default SearchForm
