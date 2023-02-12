import { MagnifyingGlass } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { Content, SearchFormContainer, Wrapper } from './styles'
import * as zod from 'zod'
import axios from 'axios'
import { useEffect } from 'react'
// import { useState } from 'react'

const searchFormSchema = zod.object({
  query: zod.string(),
})

type SearchFormSchemaProps = zod.infer<typeof searchFormSchema>

export function SearchForm() {
  //   const [dataForm, setDataForm] = useState<SearchFormSchemaProps>()

  useEffect(() => {
    axios
      .get('https://api.github.com/repos/Anselmo-Dias/githubBlog/issues/1 ')
      .then((response) => {
        console.log(response.data)
      })
  }, [])

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormSchemaProps>()

  async function handleSearchTransaction(data: SearchFormSchemaProps) {
    // await fetchIssues(data.query)
  }

//   async function fetchIssues(query: string) {
//     const response = await axios.get('https://api.github.com/search/issues', {
//       params: {
//         q: query,
//       },
//     })

//     console.log(response.data)
//   }

  return (
    <SearchFormContainer>
      <Wrapper>
        <div>
          <strong>Publicações</strong>
          <span>4 publicações</span>
        </div>
        <Content onSubmit={handleSubmit(handleSearchTransaction)}>
          <input
            type="text"
            placeholder="Buscar por Issues"
            {...register('query')}
          />
          <button disabled={isSubmitting}>
            <MagnifyingGlass />
            {isSubmitting ? 'carregando...' : 'buscar'}
          </button>
        </Content>
      </Wrapper>
    </SearchFormContainer>
  )
}
